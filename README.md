# TherapyPrepped

Case-based NCMHCE exam prep, built with Next.js + Supabase + Stripe. Study four exam
domains as an interactive curriculum (lesson pages + case-vignette practice questions with
instant feedback), gated behind time-boxed access passes.

## What's included

- **Pages**: home, pricing, terms, disclaimer, case dashboard, module study/quiz pages,
  checkout success/cancel
- **Stripe Checkout** for time-boxed access passes: 3-day ($9), 7-day ($19), 14-day ($29),
  30-day ($49)
- **Mandatory consent checkbox** (Terms + Disclaimer) required before checkout
- **Supabase backend**: email-based access-window checking (no full auth system), a
  multi-track schema (LMHC/NCMHCE live; LMFT and LMSW as "coming soon" + waitlist)
- **Curriculum**: 4 modules seeded from your source lessons (`data/modules.js`), each with
  multiple lesson pages and a case-vignette quiz with instant right/wrong feedback and
  rationale
- **Progress tracking**: lesson completions and quiz attempts logged per email
- **32 seed practice questions** (8 per module) in `data/questions/*.json`, ready to expand
  toward 700+

## 1. Local setup

```bash
npm install
cp .env.example .env.local
# fill in .env.local with real values (see sections below)
npm run dev
```

Visit `http://localhost:3000`.

## 2. Supabase setup

1. Create a project at [supabase.com](https://supabase.com).
2. Go to **Project Settings → API** and copy:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY` (keep this secret — server-side only)
3. Open the **SQL Editor** and run the contents of `supabase/schema.sql`. This creates:
   - `tracks` (ncmhce/lmft/lmsw)
   - `access_passes` (time-boxed access, email-based)
   - `modules`, `lessons`, `questions` (the curriculum content)
   - `lesson_progress`, `question_attempts` (per-email progress)
   - `waitlist` (for the coming-soon tracks)
   - Row Level Security policies (public read on content tables; everything
     user-specific is locked down to the service role only)
4. Seed the lesson content and starter questions:
   ```bash
   # requires NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your shell
   node scripts/seed-lessons.js
   ```
   This is optional at first — the module pages fall back to the local
   `data/modules.js` and `data/questions/*.json` files if the tables are empty,
   so the site works even before you seed. Seed it once you're ready to manage
   content from Supabase directly (e.g. as you add more question batches).

### Growing the question bank past the 32 seed questions

Add new questions as JSON files in `data/questions/` following the existing shape:

```json
{
  "id": "unique-id",
  "module_id": "assessment-diagnosis",
  "batch": "batch-4",
  "stem": "...",
  "choices": [{ "id": "a", "text": "..." }, ...],
  "correct_choice_id": "b",
  "rationale": "..."
}
```

Validate the JSON before importing (this is what caused the escaping issue in earlier
batches — nested quotes inside `stem`/`rationale`/`choices` text must be proper JSON escapes,
i.e. `\"` not a raw `"`):

```bash
python3 -c "import json; json.load(open('data/questions/your-file.json'))"
```

Then re-run `node scripts/seed-lessons.js` to push new questions into Supabase (existing
questions are upserted by `id`, so re-running is safe).

## 3. Stripe setup

1. Create/use a Stripe account and switch to **Test mode** while developing.
2. Go to **Developers → API keys**:
   - `Secret key` → `STRIPE_SECRET_KEY`
   - `Publishable key` → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (not currently required by the
     checkout flow, since Checkout redirects server-side, but included for future use)
3. Set up the webhook that grants access after payment:
   - **Local dev**: `stripe listen --forward-to localhost:3000/api/stripe-webhook`
     (requires the [Stripe CLI](https://stripe.com/docs/stripe-cli)) — it will print a
     webhook signing secret, put that in `STRIPE_WEBHOOK_SECRET`.
   - **Production**: Developers → Webhooks → Add endpoint → URL:
     `https://yourdomain.com/api/stripe-webhook` → listen for `checkout.session.completed`.
     Copy the signing secret into your deploy environment's `STRIPE_WEBHOOK_SECRET`.
4. When you're ready to accept real payments, switch to Live mode keys and repeat step 3
   with a live-mode webhook endpoint.

**How the flow works**: `/pricing` → `/api/create-checkout-session` creates a Stripe Checkout
Session with the plan + email in `metadata` → Stripe redirects to `/checkout/success` →
Stripe also calls `/api/stripe-webhook` in the background, which is what actually inserts the
`access_passes` row (this way, access is granted from a verified payment event, not just a
redirect the browser could fake).

## 4. Deploy to Netlify

1. Push this project to a GitHub repo (see below) or drag-and-drop the folder into Netlify.
2. In Netlify: **Add new site → Import from Git** (or deploy the zip directly).
3. Build settings are already defined in `netlify.toml` (uses the official
   `@netlify/plugin-nextjs`), so you shouldn't need to change anything.
4. Add all the variables from `.env.example` under **Site configuration → Environment
   variables**, using your real Supabase and Stripe values, plus:
   - `NEXT_PUBLIC_SITE_URL` → your real deployed URL (needed for Stripe redirect URLs)
5. Trigger a deploy.
6. Add your production Stripe webhook endpoint (step 3 above) pointing at the deployed URL.

## 5. Connect your Porkbun domain

1. In Netlify: **Domain management → Add a domain** → enter `therapyprepped.com`.
2. Netlify will give you either nameservers or an A/CNAME record to add.
3. In Porkbun: **Domain Management → therapyprepped.com → DNS Records** (or "Nameservers" if
   using Netlify DNS) and add the records Netlify gave you.
4. DNS propagation can take anywhere from a few minutes to ~24 hours.
5. Once it resolves, enable HTTPS in Netlify (usually automatic via Let's Encrypt).

## 6. Push to GitHub

```bash
cd therapyprepped
git init
git add .
git commit -m "Initial commit: TherapyPrepped rebuild"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/therapyprepped.git
git push -u origin main
```

If you'd rather connect an existing empty GitHub repo through Netlify instead, you can also
link it from **Site configuration → Build & deploy → Link repository** after the fact.

## Migrating off Thinkific

- **Student list/emails**: Thinkific dashboard → Students → Export CSV.
- **Payment history**: lives in your own Stripe account regardless of Thinkific access — no
  export needed, it's already yours.
- **Course content** (text, PDFs, videos): no bulk export in Thinkific — pull it manually
  from the course builder/content library. The 4 lesson PDFs already used to build
  `data/modules.js` cover the core content; check Thinkific for anything beyond those.

## Project structure

```
pages/
  index.js              home
  pricing.js             plans + Stripe checkout + waitlist
  terms.js / disclaimer.js
  dashboard.js            email-gated curriculum hub
  modules/[slug].js       lesson pages + quiz per module
  checkout/success.js, cancel.js
  api/                    server routes (checkout, webhook, access checks, progress)
components/               Nav, Footer, QuizCard
data/
  modules.js              lesson content for all 4 modules (source of truth)
  questions/*.json         seed practice questions per module
lib/                       Supabase + Stripe helpers
supabase/schema.sql        full DB schema + RLS policies
scripts/seed-lessons.js    pushes data/ content into Supabase
```

## Known open items

- Terms and Disclaimer pages are plain-language starting points — have them reviewed by a
  lawyer before relying on them, especially given the 2 existing subscribers who signed up
  before any disclosure terms existed.
- Only 32 seed questions are included (8 per module). Expand toward 700+ using the process
  described above.
- LMFT and LMSW tracks are waitlist-only; no content has been built for them yet.
