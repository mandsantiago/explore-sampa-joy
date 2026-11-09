// Pré-renderização: roda depois do "vite build" e do build SSR (veja o script
// "build" no package.json). Para cada página indexável, renderiza o React no
// Node e grava um HTML estático já com <head> completo (título, descrição,
// canonical, Open Graph, JSON-LD) e o conteúdo da página. Também gera o
// 404.html e o sitemap.xml a partir da mesma lista de rotas.
//
// Assim o Google, o WhatsApp e o Facebook leem cada página sem depender de
// JavaScript. No navegador, o React "hidrata" esse HTML e segue funcionando
// como antes.

import { readFileSync, writeFileSync, mkdirSync, rmSync } from "fs";
import path from "path";
import { pathToFileURL } from "url";

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "dist/public");
const SERVER_ENTRY = path.join(ROOT, "dist/server/entry-server.js");
const SITE_URL = "https://www.viajandoporsp.com.br";

const { render, getHead, getAllRoutes, renderHeadHtml, NOT_FOUND_HEAD, destinations, destinationExtras } =
  await import(pathToFileURL(SERVER_ENTRY).href);

// 1) Validação: todo destino precisa de "Como chegar" e alt de imagem reais.
const problems = [];
for (const d of destinations) {
  const e = destinationExtras[d.id];
  if (!e) problems.push(`${d.id}: sem entrada em destinationExtras.ts`);
  else {
    if (!e.imageAlt || e.imageAlt.includes("TODO")) problems.push(`${d.id}: imageAlt pendente`);
    if (!e.howToGetThere?.length || e.howToGetThere.some((p) => !p || p.includes("TODO")))
      problems.push(`${d.id}: howToGetThere pendente`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(e.updatedAt ?? "")) problems.push(`${d.id}: updatedAt inválido`);
  }
}
if (problems.length) {
  console.error("❌ Pré-renderização interrompida — conteúdo pendente:\n  " + problems.join("\n  "));
  process.exit(1);
}

// 2) Template gerado pelo vite build.
const template = readFileSync(path.join(PUBLIC_DIR, "index.html"), "utf8");
if (!template.includes("<!--app-head-->") || !template.includes('<div id="root"></div>')) {
  console.error("❌ index.html sem os marcadores <!--app-head--> e/ou <div id=\"root\"></div>.");
  process.exit(1);
}

function buildPage(urlPath, head) {
  const body = render(urlPath);
  return template
    .replace("<!--app-head-->", renderHeadHtml(head))
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

function outFile(urlPath) {
  if (urlPath === "/") return path.join(PUBLIC_DIR, "index.html");
  // "/destino/botucatu" -> destino/botucatu.html (a Vercel serve sem o .html via cleanUrls)
  return path.join(PUBLIC_DIR, `${urlPath.slice(1)}.html`);
}

// 3) Páginas indexáveis.
const routes = getAllRoutes();
for (const { path: urlPath } of routes) {
  const head = getHead(urlPath);
  if (head.robots.includes("noindex")) {
    console.error(`❌ Rota ${urlPath} resolveu para página não encontrada.`);
    process.exit(1);
  }
  const file = outFile(urlPath);
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, buildPage(urlPath, head));
}

// 4) 404 (a Vercel serve este arquivo com status 404 para URLs inexistentes).
writeFileSync(path.join(PUBLIC_DIR, "404.html"), buildPage("/404", NOT_FOUND_HEAD));

// 5) Sitemap a partir da mesma lista de rotas.
const urlFor = (p) => (p === "/" ? SITE_URL : `${SITE_URL}${p}`);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${urlFor(r.path)}</loc>${r.lastmod ? `\n    <lastmod>${r.lastmod}</lastmod>` : ""}
  </url>`
  )
  .join("\n")}
</urlset>
`;
writeFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), sitemap);

// O bundle SSR só serve para o build; não vai para a Vercel.
rmSync(path.join(ROOT, "dist/server"), { recursive: true, force: true });

console.log(`✅ Pré-renderização: ${routes.length} páginas + 404.html; sitemap com ${routes.length} URLs.`);
