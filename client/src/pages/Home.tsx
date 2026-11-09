import { useState, useMemo } from "react";
import { destinations } from "@/lib/destinations";
import { HOME_IMAGE } from "@/lib/seo";
import { DestinationCard } from "@/components/DestinationCard";
import { CategoryLinks } from "@/components/CategoryFilter";
import { SearchBar } from "@/components/SearchBar";
import { DistanceFilter } from "@/components/DistanceFilter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDistance, setSelectedDistance] = useState<number | null>(null);

  // Busca e filtro de distância continuam no navegador; as categorias agora
  // são páginas próprias (/categoria/...), com links rastreáveis.
  const filteredDestinations = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return destinations.filter((dest) => {
      const matchesSearch =
        q === "" ||
        dest.name.toLowerCase().includes(q) ||
        dest.shortDescription.toLowerCase().includes(q) ||
        dest.categories.some((cat) => cat.toLowerCase().includes(q));
      const matchesDistance = !selectedDistance || dest.distance <= selectedDistance;
      return matchesSearch && matchesDistance;
    });
  }, [searchQuery, selectedDistance]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-96 overflow-hidden bg-gray-900">
          <img
            src={HOME_IMAGE}
            alt="Praia com mar azul e vegetação no litoral paulista"
            width={1200}
            height={800}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
          <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-12">
            <div className="max-w-2xl">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-yellow-400">
                50 destinos · Estado de São Paulo
              </p>
              <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl">
                Para onde ir de carro pelo interior e litoral de <span className="text-yellow-400">São Paulo</span>
              </h1>
              <p className="text-lg text-gray-200">
                Praias, serras, cachoeiras, cidades históricas e vinícolas a poucas horas de estrada da capital — com distância, tempo de viagem e dicas de roteiro para cada destino.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Filtros */}
          <div className="mb-8 space-y-4 bg-white py-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} onSearch={() => {}} />
            <DistanceFilter selectedDistance={selectedDistance} onDistanceChange={setSelectedDistance} />
            <CategoryLinks />
          </div>

          {/* Destinos */}
          <section className="mb-12">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">Destinos para viajar de carro em São Paulo</h2>
            <p className="mb-8 text-gray-600">
              {filteredDestinations.length} destinos, com distância e tempo de estrada a partir da capital.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredDestinations.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>

            {filteredDestinations.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-gray-600">Nenhum destino encontrado.</p>
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
