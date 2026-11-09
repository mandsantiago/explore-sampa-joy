// Fonte única do <head> de cada página.
// - No build, o prerender.mjs chama getHead() e renderHeadHtml() para escrever
//   o <head> do HTML estático de cada rota.
// - No navegador, o HeadManager chama getHead() a cada navegação e atualiza o
//   <head> existente (sem duplicar tags).
import { destinations, Destination, formatDrivingTime } from "./destinations";
import { getExtras } from "./destinationExtras";
import {
  categoryPages,
  getCategoryBySlug,
  getCategoryByName,
  categoryPath,
  destinationsInCategory,
} from "./categories";
import { SITE_NAME, SITE_URL, absoluteUrl } from "./site";

export const HOME_IMAGE =
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=75&auto=format&fit=crop";

export interface HeadData {
  title: string;
  description: string;
  /** null = página sem canonical (ex.: 404). */
  canonical: string | null;
  image: string;
  ogType: "website" | "article";
  robots: string;
  jsonLd: object[];
}

const withBrand = (t: string) => `${t} | ${SITE_NAME}`;

function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function destinationPath(d: Destination) {
  return `/destino/${d.id}`;
}

export function destinationDescription(d: Destination): string {
  // shortDescription é curta (40–70 caracteres); completamos com o que a página
  // oferece e a distância real, para a descrição ficar única e informativa.
  const base = d.shortDescription.trim().replace(/\.?$/, ".");
  return `${base} O que fazer, onde comer e como chegar de carro: ${d.distance} km (cerca de ${formatDrivingTime(d.drivingHours)}) da capital.`;
}

// Nomes muito longos ganham um título mais curto, para não ser cortado na busca.
const SHORT_TITLE_NAME: Record<string, string> = {
  "parque-cantareira": "Parque da Cantareira (Núcleo Cabuçu)",
};

function destinationHead(d: Destination): HeadData {
  const path = destinationPath(d);
  const titleName = SHORT_TITLE_NAME[d.id] ?? d.name;
  const mainCategory = getCategoryByName(d.categories[0]);
  return {
    title: withBrand(`${titleName}: o que fazer, onde comer e como chegar`),
    description: destinationDescription(d),
    canonical: absoluteUrl(path),
    image: absoluteUrl(d.imageUrl),
    ogType: "article",
    robots: "index, follow",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        name: d.name,
        description: d.fullDescription,
        url: absoluteUrl(path),
        image: absoluteUrl(d.imageUrl),
        geo: {
          "@type": "GeoCoordinates",
          latitude: d.latitude,
          longitude: d.longitude,
        },
        address: {
          "@type": "PostalAddress",
          addressRegion: "SP",
          addressCountry: "BR",
        },
      },
      breadcrumbJsonLd([
        { name: "Início", path: "/" },
        { name: mainCategory.name, path: categoryPath(mainCategory.name) },
        { name: d.name, path },
      ]),
    ],
  };
}

export const NOT_FOUND_HEAD: HeadData = {
  title: withBrand("Página não encontrada"),
  description: "Esta página não existe no Viajando por SP.",
  canonical: null,
  image: HOME_IMAGE,
  ogType: "website",
  robots: "noindex, follow",
  jsonLd: [],
};

export function getHead(rawPath: string): HeadData {
  const path = rawPath.split(/[?#]/)[0].replace(/\/+$/, "") || "/";

  if (path === "/") {
    return {
      title: withBrand("Viagens de carro em São Paulo: 50 destinos perto da capital"),
      description:
        "50 destinos para viajar de carro pelo estado de São Paulo: praias, serras, cachoeiras, cidades históricas e vinícolas, com distância e tempo de estrada.",
      canonical: SITE_URL,
      image: HOME_IMAGE,
      ogType: "website",
      robots: "index, follow",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
          inLanguage: "pt-BR",
          description: "Guia de destinos para viajar de carro pelo estado de São Paulo.",
        },
      ],
    };
  }

  if (path === "/sobre") {
    return {
      title: withBrand("Sobre a Amanda Santiago e o Viajando por SP"),
      description:
        "Quem faz o Viajando por SP: Amanda Santiago, que escreve sobre viagens desde 2015. Como os destinos são escolhidos e como o site se mantém.",
      canonical: absoluteUrl("/sobre"),
      image: HOME_IMAGE,
      ogType: "website",
      robots: "index, follow",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Sobre o Viajando por SP",
          url: absoluteUrl("/sobre"),
          mainEntity: {
            "@type": "Person",
            name: "Amanda Santiago",
          },
        },
        breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: "Sobre", path: "/sobre" },
        ]),
      ],
    };
  }

  const destMatch = path.match(/^\/destino\/([^/]+)$/);
  if (destMatch) {
    const d = destinations.find((x) => x.id === destMatch[1]);
    return d ? destinationHead(d) : NOT_FOUND_HEAD;
  }

  const catMatch = path.match(/^\/categoria\/([^/]+)$/);
  if (catMatch) {
    const c = getCategoryBySlug(catMatch[1]);
    if (!c) return NOT_FOUND_HEAD;
    const list = destinationsInCategory(c.name);
    const catUrl = absoluteUrl(`/categoria/${c.slug}`);
    return {
      title: withBrand(c.title),
      description: c.description,
      canonical: catUrl,
      image: list[0] ? absoluteUrl(list[0].imageUrl) : HOME_IMAGE,
      ogType: "website",
      robots: "index, follow",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: c.name,
          url: catUrl,
          description: c.description,
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: list.length,
            itemListElement: list.map((d, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: absoluteUrl(destinationPath(d)),
              name: d.name,
            })),
          },
        },
        breadcrumbJsonLd([
          { name: "Início", path: "/" },
          { name: c.name, path: `/categoria/${c.slug}` },
        ]),
      ],
    };
  }

  return NOT_FOUND_HEAD;
}

// ---------------------------------------------------------------------------
// Rotas indexáveis (usadas pelo prerender e pelo sitemap)

export interface SiteRoute {
  path: string;
  lastmod?: string;
}

export function getAllRoutes(): SiteRoute[] {
  const latest = destinations
    .map((d) => getExtras(d.id).updatedAt)
    .sort()
    .at(-1);
  return [
    { path: "/", lastmod: latest },
    ...destinations.map((d) => ({ path: destinationPath(d), lastmod: getExtras(d.id).updatedAt })),
    ...categoryPages.map((c) => ({ path: `/categoria/${c.slug}`, lastmod: latest })),
    { path: "/sobre", lastmod: latest },
  ];
}

// ---------------------------------------------------------------------------
// Renderização em string (usada só no build)

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// JSON dentro de <script>: impede que "</script>" no texto feche a tag.
const safeJson = (o: object) => JSON.stringify(o).replace(/</g, "\\u003c");

export function renderHeadHtml(h: HeadData): string {
  const tags = [
    `<title>${esc(h.title)}</title>`,
    `<meta name="description" content="${esc(h.description)}" />`,
    `<meta name="robots" content="${esc(h.robots)}" />`,
    h.canonical ? `<link rel="canonical" href="${esc(h.canonical)}" />` : "",
    `<meta property="og:title" content="${esc(h.title)}" />`,
    `<meta property="og:description" content="${esc(h.description)}" />`,
    `<meta property="og:image" content="${esc(h.image)}" />`,
    `<meta property="og:type" content="${h.ogType}" />`,
    h.canonical ? `<meta property="og:url" content="${esc(h.canonical)}" />` : "",
    `<meta property="og:site_name" content="${esc(SITE_NAME)}" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(h.title)}" />`,
    `<meta name="twitter:description" content="${esc(h.description)}" />`,
    `<meta name="twitter:image" content="${esc(h.image)}" />`,
    ...h.jsonLd.map((o) => `<script type="application/ld+json" data-seo>${safeJson(o)}</script>`),
  ];
  return tags.filter(Boolean).join("\n    ");
}
