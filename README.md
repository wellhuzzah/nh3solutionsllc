# Nh3 Solutions LLC — Website

Static, single-page marketing site for **Nh3 Solutions LLC** (static control &
manufacturing consulting). Built with [Astro](https://astro.build) — static
output, plain CSS (the prototype's exact inline styles are preserved), no JS
framework.

## Stack

- **Astro** (static `output: 'static'`)
- **Fonts:** Google Fonts — Poppins (headings/UI) + Work Sans (body)
- **Form:** [Web3Forms](https://web3forms.com) AJAX submit, with a `mailto:`
  fallback that runs until a real access key is set

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built dist/ locally
```

## Project structure

```
public/
  assets/bolt.png          # nav mark, hero watermark, card/footer mark
  assets/logo-lockup.png   # OG image source (dark-green bg)
  favicon.jpg              # from Small_Logo
src/
  layouts/Layout.astro     # <head>, fonts, global styles, OG/meta
  pages/index.astro        # the whole page + nav/menu/form JS
astro.config.mjs           # site + base config
```

## Contact form — Web3Forms

The form posts to Web3Forms, which relays submissions to Dave's inbox
(`Dave@Nh3SolutionsLLC.com`).

**To go live:**

1. Go to https://web3forms.com and enter `Dave@Nh3SolutionsLLC.com` to generate
   a free **Access Key**.
2. Open `src/pages/index.astro`, find the marked block near the top of the
   `<script>`, and replace the placeholder:

   ```js
   const WEB3FORMS_ACCESS_KEY = 'PASTE-WEB3FORMS-ACCESS-KEY-HERE';
   ```

Until a real key is set, submitting the form opens the visitor's email app
(`mailto:` fallback) instead of posting via AJAX.

Form states: **idle** → **sending** (button "Sending…", disabled, 0.6 opacity) →
**success** (form replaced by a confirmation panel) or **error** (inline message,
button returns to idle). A hidden `botcheck` honeypot is included for spam
protection.

## Deployment — Cloudflare Pages

Deployed to **Cloudflare Pages**, building directly from the GitHub repo on push
to `main`:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Custom domain:** `www.nh3solutionsllc.com` — configured in the Cloudflare
  Pages dashboard (no `CNAME` file or GitHub Actions workflow is used).

`astro.config.mjs` sets `site: 'https://www.nh3solutionsllc.com'` and `base: '/'`.

## Editing content

Copy lives directly in `src/pages/index.astro`. Sections, top to bottom: Hero →
About → Services (Static Control / Process Improvement / Six Sigma & Lean, plus a
Rapid R&D footnote) → Why Choose → Contact → Footer. Section copy, the services
lists, and contact details can be edited in place. The footer year is computed at
build time.

## TODO before launch

- [ ] Paste the real Web3Forms access key (see above).
- [ ] Replace the About-section photo placeholder (`[ plant floor / line photo ]`)
      with a real machinery/facility photo.
- [ ] Optional: supply a transparent-background logo lockup and a dedicated
      1200×630 `og-image.png` for crisper social/share cards.
