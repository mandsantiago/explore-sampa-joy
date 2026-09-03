import { Destination } from "@/lib/destinations";

// Domínio oficial do site. Se um dia trocar de domínio, atualize esta constante,
// a mesma em DestinationSchema.tsx, o robots.txt, e rode o generate-sitemap.mjs de novo.
const SITE_URL = "https://www.viajandoporsp.com.br";
const SITE_NAME = "Viajando por SP";

interface SEOProps {
  destination?: Destination;
  title?: string;
  description?: string;
  image?: string;
}

export function SEO({ destination, title, description, image }: SEOProps) {
  // Padrão "Marca - Assunto", igual aparece na aba do navegador: cada cidade
  // vira "Viajando por SP - Botucatu", "Viajando por SP - Atibaia" etc.
  const pageTitle = destination
    ? `${SITE_NAME} - ${destination.name}`
    : title || `${SITE_NAME} - 50 Destinos para Viajar de Carro em São Paulo`;

  // Usamos shortDescription (curta e já revisada) para as meta tags, em vez de
  // fullDescription: mecanismos de busca e redes sociais truncam por volta de
  // 155-160 caracteres, então uma descrição longa só fica cortada no meio da frase.
  const pageDescription = destination
    ? destination.shortDescription
    : description || "Descubra 50 destinos para viajar de carro pelo estado de São Paulo: praias, serras, cachoeiras, cidades históricas e vinícolas a poucas horas da capital, com dicas de roteiro, distância e tempo de estrada.";

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
        name: SITE_NAME,
        description: "Guia de destinos para viajar de carro pelo estado de São Paulo",
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
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      {/* Additional SEO */}
      <meta name="keywords" content={destination ? `${destination.name}, viagem de carro, roteiro SP, turismo SP, ${destination.categories.join(", ")}` : "viagem de carro SP, roteiro de carro São Paulo, destinos perto de São Paulo, bate e volta SP, turismo São Paulo"} />
      <meta name="author" content={SITE_NAME} />
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
