import { Destination } from "@/lib/destinations";

// TODO: mesmo domínio usado em SEO.tsx — atualize os dois juntos quando o
// domínio final for configurado no Vercel.
const SITE_URL = "https://explore-sampa-joy.vercel.app";

interface DestinationSchemaProps {
  destination: Destination;
}

export function DestinationSchema({ destination }: DestinationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: destination.name,
    description: destination.fullDescription,
    image: `${SITE_URL}${destination.imageUrl}`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: destination.latitude,
      longitude: destination.longitude,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: destination.name,
      addressRegion: "SP",
      addressCountry: "BR",
    },
    // Nota: não emitimos "aggregateRating" aqui de propósito. O campo
    // `rating` em destinations.ts é uma nota editorial nossa, não uma média
    // de avaliações reais de usuários — usar isso como aggregateRating no
    // schema.org viola as diretrizes do Google para dados estruturados
    // (que exigem que aggregateRating reflita avaliações reais) e pode
    // resultar em rich snippets rejeitados.
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
