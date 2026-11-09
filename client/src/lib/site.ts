// Constantes do site usadas em SEO, sitemap e dados estruturados.
// Se um dia trocar de domínio, mude só aqui (e no robots.txt).
export const SITE_URL = "https://www.viajandoporsp.com.br";
export const SITE_NAME = "Viajando por SP";

/** Converte um caminho do site ("/destino/x") ou uma URL externa em URL absoluta. */
export function absoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl;
  if (pathOrUrl === "/") return SITE_URL;
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}
