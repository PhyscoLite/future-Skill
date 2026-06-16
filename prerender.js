// Static Site Generation (SSG) prerender step.
//
// Runs after `vite build` (client → dist) and `vite build --ssr` (server →
// a temporary bundle). For each marketing route it renders static HTML +
// document head with react-helmet-async and writes a standalone index.html.
// The temporary server bundle is deleted at the end, so the only build output
// is `dist`. The result is a fully static, SEO-friendly site that still
// hydrates into the SPA on load.
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const toAbs = (p) => path.join(__dirname, p);

const SITE_URL = (process.env.VITE_SITE_URL || 'https://futureskill.example').replace(/\/$/, '');

// Routes to prerender into static HTML. /admin is intentionally excluded — it
// is a client-only, no-index dashboard served as a plain SPA shell.
const PRERENDER_ROUTES = ['/', '/about', '/contact'];
// Client-only routes that still need an entry HTML file (empty #root → the
// client mounts fresh instead of hydrating).
const SPA_ROUTES = ['/admin'];

const SSR_TMP = 'node_modules/.ssg-tmp';
const template = fs.readFileSync(toAbs('dist/index.html'), 'utf-8');
const { render } = await import(toAbs(`${SSR_TMP}/entry-server.js`));

function outFileFor(route) {
  if (route === '/') return toAbs('dist/index.html');
  return toAbs(`dist${route}/index.html`);
}

function write(file, html) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html, 'utf-8');
}

// Prerendered routes.
for (const route of PRERENDER_ROUTES) {
  const { html, head } = render(route);
  const page = template
    .replace('<!--app-head-->', head || '')
    .replace('<!--app-html-->', html || '');
  const file = outFileFor(route);
  write(file, page);
  console.log(`prerendered ${route} -> ${path.relative(__dirname, file)}`);
}

// Client-only shells (empty root, no prerendered markup).
for (const route of SPA_ROUTES) {
  const page = template
    .replace('<!--app-head-->', '<title>Admin | Future Skill</title>\n    <meta name="robots" content="noindex, nofollow" />')
    .replace('<!--app-html-->', '');
  const file = outFileFor(route);
  write(file, page);
  console.log(`spa shell  ${route} -> ${path.relative(__dirname, file)}`);
}

// robots.txt
write(
  toAbs('dist/robots.txt'),
  `User-agent: *\nAllow: /\nDisallow: /admin\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
);

// sitemap.xml (marketing routes only)
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  PRERENDER_ROUTES.map((r) => `  <url><loc>${SITE_URL}${r === '/' ? '' : r}/</loc></url>`).join('\n') +
  `\n</urlset>\n`;
write(toAbs('dist/sitemap.xml'), sitemap);

// Remove the temporary server bundle — `dist` is the only build output.
fs.rmSync(toAbs(SSR_TMP), { recursive: true, force: true });

console.log('SSG complete: robots.txt + sitemap.xml written. Output: dist/');
