import { Destination } from "@/lib/destinations";

// Mesmo domínio usado em SEO.tsx — atualize os dois juntos se o domínio mudar.
const SITE_URL = "https://www.viajandoporsp.com.br";

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
