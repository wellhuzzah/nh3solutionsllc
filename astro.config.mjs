// @ts-check
import { defineConfig } from 'astro/config';

// Static-only build (no SSR). Deployed to Cloudflare Pages:
//   build command:    npm run build
//   output directory: dist
// The custom domain (www.nh3solutionsllc.com) is configured in the
// Cloudflare Pages dashboard — no CNAME file or GitHub Actions workflow needed.
export default defineConfig({
  site: 'https://www.nh3solutionsllc.com',
  base: '/',
  output: 'static',
});
