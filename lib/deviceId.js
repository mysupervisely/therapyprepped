const DEVICE_STORAGE_KEY = 'tp_device_id';

// Returns a persistent random ID for this browser, creating one on first use.
// Shared by every page that checks access, so the same device is recognized
// consistently across the whole site (module pages, flashcards, practice
// exam, and the dashboard) instead of each page tracking its own copy.
export function getOrCreateDeviceId() {
  if (typeof window === 'undefined') return null;
  let id = window.localStorage.getItem(DEVICE_STORAGE_KEY);
  if (!id) {
    id = (window.crypto && window.crypto.randomUUID)
      ? window.crypto.randomUUID()
      : 'dev-' + Math.random().toString(36).slice(2) + Date.now().toString(36);
    window.localStorage.setItem(DEVICE_STORAGE_KEY, id);
  }
  return id;
}
