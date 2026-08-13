import { Destination } from "@/lib/destinations";

// TODO: depois de configurar o domínio final no Vercel, atualize esta constante
// (também precisa atualizar em client/public/robots.txt e rodar generate-sitemap.mjs de novo)
const SITE_URL = "https://explore-sampa-joy.vercel.app";

interface SEOProps {
  destination?: Destination;
  title?: string;
  description?: string;
  image?: string;
}

export function SEO({ destination, title, description, image }: SEOProps) {
  const pageTitle = destination
    ? `${destination.name} - Dicas de Turismo em SP`
    : title || "Explore Sampa Joy - 50 Destinos em São Paulo";

  // Usamos shortDescription (curta e já revisada) para as meta tags, em vez de
  // fullDescription: mecanismos de busca e redes sociais truncam por volta de
  // 155-160 caracteres, então uma descrição longa só fica cortada no meio da frase.
  const pageDescription = destination
    ? destination.shortDescription
    : description || "Descubra 50 destinos incríveis em São Paulo: praias, serras, cachoeiras, cidades históricas e vinícolas a poucas horas da capital.";

  // Open Graph e Twitter Card exigem URL absoluta de imagem — um caminho relativo
  // como "/images/foo.jpg" não é resolvido pelos crawlers do WhatsApp/Twitter/Facebook.
  const pageImage = destination
    ? `${SITE_URL}${destination.imageUrl}`
    : image || "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=75&auto=format&fit=crop";

  // Nas páginas de destino, quem descreve o local para os buscadores é o
  // DestinationSchema (TouristAttraction com a geolocalização real de cada
  // cidade). Aqui só emitimos JSON-LD na home, para não duplicar/conflitar
  // dados estruturados na mesma página.
  const schemaData = destination
    ? null
    : {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Explore Sampa Joy",
        description: "Descubra 50 destinos incríveis em São Paulo",
        url: SITE_URL,
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}?search={search_term_string}`,
          },
          query_input: "required name=search_term_string",
        },
      };

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#06b6d4" />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:type" content={destination ? "article" : "website"} />
      <meta property="og:url" content={destination ? `${SITE_URL}/destino/${destination.id}` : SITE_URL} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      {/* Additional SEO */}
      <meta name="keywords" content={destination ? `${destination.name}, turismo SP, viagem, ${destination.categories.join(", ")}` : "turismo São Paulo, destinos SP, viagem, praias, serras"} />
      <meta name="author" content="Explore Sampa Joy" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Portuguese" />

      {/* Canonical */}
      <link rel="canonical" href={destination ? `${SITE_URL}/destino/${destination.id}` : SITE_URL} />

      {/* Schema.org (só na home — páginas de destino usam o DestinationSchema) */}
      {schemaData && (
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      )}
    </>
  );
}
