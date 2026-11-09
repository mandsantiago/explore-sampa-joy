import { useParams, Link } from "wouter";
import { destinations } from "@/lib/destinations";
import { getExtras } from "@/lib/destinationExtras";
import { getCategoryByName, categoryPath } from "@/lib/categories";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DestinationSection } from "@/components/DestinationSection";
import { DestinationFAQ } from "@/components/DestinationFAQ";
import { DestinationCard } from "@/components/DestinationCard";
import { AccommodationSection } from "@/components/AccommodationSection";
import { accommodationsByDestination } from "@/lib/accommodations.generated";
import { MapPin } from "lucide-react";
import NotFound from "./NotFound";

export default function DestinationDetail() {
  const params = useParams<{ id: string }>();
  const destination = destinations.find((d) => d.id === params.id);

  // Destino inexistente: mesma página do 404 (com noindex via lib/seo.ts).
  // Em produção essas URLs nem chegam aqui — a Vercel responde 404.html.
  if (!destination) return <NotFound />;

  const extras = getExtras(destination.id);
  const mainCategory = getCategoryByName(destination.categories[0]);
  const related = destinations
    .filter(
      (d) => d.id !== destination.id && d.categories.some((cat) => destination.categories.includes(cat))
    )
    .slice(0, 6);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        <Breadcrumbs
          items={[
            { name: "Início", href: "/" },
            { name: mainCategory.name, href: categoryPath(mainCategory.name) },
            { name: destination.name },
          ]}
        />

        <DestinationSection destination={destination} />

        {/* Como chegar */}
        <section className="border-t border-gray-200 bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Como chegar em {destination.name}</h2>
            <div className="max-w-3xl space-y-4">
              {extras.howToGetThere.map((p, i) => (
                <p key={i} className="leading-relaxed text-gray-700">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        <AccommodationSection accommodations={accommodationsByDestination[destination.id] ?? []} />

        {/* O que fazer */}
        <section className="border-t border-gray-200 bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">O que fazer em {destination.name}</h2>
            {destination.whatToDo ? (
              <div className="space-y-6">
                {destination.whatToDo.description && (
                  <p className="leading-relaxed text-gray-700">{destination.whatToDo.description}</p>
                )}
                <div className="space-y-4">
                  {destination.whatToDo.items.map((item, idx) => (
                    <div key={idx} className="border-l-4 border-cyan-500 py-2 pl-6">
                      <h3 className="mb-2 font-semibold text-gray-900">{item.name}</h3>
                      <p className="leading-relaxed text-gray-700">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <ul className="grid gap-4 md:grid-cols-2">
                {destination.topAttractions.map((attraction, idx) => (
                  <li key={idx} className="flex items-start gap-3 rounded-lg bg-gray-50 p-4">
                    <MapPin className="mt-1 h-4 w-4 text-cyan-600" aria-hidden="true" />
                    <span className="font-medium text-gray-900">{attraction}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* Onde comer */}
        {destination.whereToDine && (
          <section className="border-t border-gray-200 bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">Onde comer em {destination.name}</h2>
              <div className="space-y-6">
                <p className="leading-relaxed text-gray-700">{destination.whereToDine.intro}</p>
                <div className="grid gap-6 md:grid-cols-2">
                  {destination.whereToDine.categories.map((category, idx) => (
                    <div key={idx} className="rounded-lg border border-gray-200 bg-white p-6">
                      <h3 className="mb-2 font-semibold text-gray-900">{category.name}</h3>
                      <p className="text-sm text-gray-600">{category.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <DestinationFAQ destinationName={destination.name} faqs={destination.faqs ?? []} />

        {/* Destinos relacionados */}
        {related.length > 0 && (
          <section className="border-t border-gray-200 bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">Outros destinos parecidos</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {related.map((dest) => (
                  <DestinationCard key={dest.id} destination={dest} />
                ))}
              </div>
              <p className="mt-8 text-gray-700">
                Veja todos os destinos de{" "}
                <Link href={categoryPath(mainCategory.name)} className="font-semibold text-cyan-700 underline hover:text-cyan-900">
                  {mainCategory.name}
                </Link>
                .
              </p>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
