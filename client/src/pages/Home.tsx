import { useState, useMemo, useEffect } from "react";
import { destinations, Destination, Category } from "@/lib/destinations";
  import { DestinationCard } from "@/components/DestinationCard";
  import { CategoryFilter } from "@/components/CategoryFilter";
  import { SearchBar } from "@/components/SearchBar";
  import { DistanceFilter } from "@/components/DistanceFilter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDistance, setSelectedDistance] = useState<number | null>(null);

  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      const matchesCategory = !selectedCategory || dest.categories.includes(selectedCategory);
      const matchesSearch =
        searchQuery === "" ||
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.categories.some((cat) =>
          cat.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesDistance = !selectedDistance || dest.distance <= selectedDistance;
      return matchesCategory && matchesSearch && matchesDistance;
    });
  }, [selectedCategory, searchQuery, selectedDistance]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1">
        {/* Hero Section */}
      <section className="relative h-96 overflow-hidden bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=75&auto=format&fit=crop"
          alt="Praias e natureza do litoral de São Paulo"
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
            <p className="mb-2 text-sm font-semibold text-yellow-400 uppercase tracking-wide">
              50 destinos · Estado de São Paulo
            </p>
            <h1 className="mb-4 text-4xl md:text-5xl font-bold text-white leading-tight">
              Para onde ir de carro pelo interior de <span className="text-yellow-400">São Paulo</span>
            </h1>
            <p className="text-lg text-gray-200">
              Praias, serras, cachoeiras, cidades históricas e vinícolas a poucas horas de estrada da capital — com distância, tempo de viagem e dicas de roteiro para cada destino.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Filters Section */}
        <div className="mb-8 space-y-4 sticky top-0 z-10 bg-white py-4">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onSearch={() => {}}
          />
          <DistanceFilter
            selectedDistance={selectedDistance}
            onDistanceChange={setSelectedDistance}
          />
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Destinations Grid */}
        <div className="mb-12">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">Destinos para viajar de carro em São Paulo</h2>
          <p className="mb-8 text-gray-600">
            {filteredDestinations.length} destinos para você se apaixonar, com distância e tempo de estrada a partir da capital.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-gray-600">Nenhum destino encontrado.</p>
            </div>
          )}
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
