import { supabaseAdmin } from '../../lib/supabase';

const MAX_DEVICES = 2;

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { email, device_id } = req.body || {};
  if (!email) return res.status(400).json({ error: 'Email is required' });
  if (!device_id) return res.status(400).json({ error: 'Device ID is required' });

  const normalizedEmail = email.trim().toLowerCase();

  try {
    const supabase = supabaseAdmin();

    // 1. Does this email have an active access pass?
    const { data: pass, error: passError } = await supabase
      .from('access_passes')
      .select('plan, track_id, expires_at')
      .ilike('email', normalizedEmail)
      .gt('expires_at', new Date().toISOString())
      .order('expires_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (passError) {
      console.error(passError);
      // TEMPORARY: exposing the real error message to debug — remove
      // passError.message from the response once fixed.
      return res.status(500).json({ error: 'Could not check access', debug: passError.message });
    }

    if (!pass) return res.status(200).json({ valid: false });

    // 2. Is this device already known, or is there room to register it?
    const { data: devices, error: devicesError } = await supabase
      .from('access_devices')
      .select('device_id, last_seen_at')
      .eq('email', normalizedEmail)
      .order('last_seen_at', { ascending: true });

    if (devicesError) {
      console.error(devicesError);
      return res.status(500).json({ error: 'Could not check access', debug: devicesError.message });
    }

    const knownDevice = (devices || []).find((d) => d.device_id === device_id);

    if (knownDevice) {
      // Recognized device — just refresh last_seen_at
      await supabase
        .from('access_devices')
        .update({ last_seen_at: new Date().toISOString() })
        .eq('email', normalizedEmail)
        .eq('device_id', device_id);
    } else if ((devices || []).length < MAX_DEVICES) {
      // New device, still under the cap — register it
      const { error: insertError } = await supabase
        .from('access_devices')
        .insert({ email: normalizedEmail, device_id });

      if (insertError) {
        console.error(insertError);
        return res.status(500).json({ error: 'Could not check access', debug: insertError.message });
      }
    } else {
      // New device, cap already reached — deny
      return res.status(200).json({ valid: false, deviceLimitReached: true });
    }

    return res.status(200).json({
      valid: true,
      plan: pass.plan,
      track_id: pass.track_id,
      expires_at: pass.expires_at,
    });
  } catch (err) {
    console.error('check-access crashed:', err);
    // TEMPORARY: exposing the real error message to debug.
    return res.status(500).json({ error: 'Could not check access', debug: err.message });
  }
}
