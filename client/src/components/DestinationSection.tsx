import { Link } from "wouter";
import { Destination, categoryColors, formatDrivingTime } from "@/lib/destinations";
import { getExtras } from "@/lib/destinationExtras";
import { categoryPath } from "@/lib/categories";
import { getImageDimensions } from "@/lib/imageDimensions";
import { MapPin, Clock, Zap, Heart } from "lucide-react";

interface DestinationSectionProps {
  destination: Destination;
}

export function DestinationSection({ destination }: DestinationSectionProps) {
  const { width, height } = getImageDimensions(destination.imageUrl);

  return (
    <section
      id={destination.id}
      className="scroll-mt-20 border-t border-gray-200 py-16"
    >
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Image — é a imagem principal da página (LCP), então carrega eager/prioritária, sem lazy loading */}
          <div className="flex items-center">
            <img
              src={destination.imageUrl}
              alt={getExtras(destination.id).imageAlt}
              width={width}
              height={height}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-96 w-full rounded-lg object-cover shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                {destination.categories.map((category) => (
                  <Link
                    key={category}
                    href={categoryPath(category)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold text-white hover:opacity-90 ${categoryColors[category]}`}
                  >
                    {category}
                  </Link>
                ))}
              </div>
              <h1 className="text-4xl font-bold text-gray-900">
                {destination.name}
              </h1>
              
              {/* Info Boxes */}
              <div className="grid grid-cols-3 gap-3">
                {/* Distance Box */}
                <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-blue-50 to-blue-100 p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    Distância
                  </div>
                  <p className="mt-2 text-lg font-bold text-gray-900">
                    {destination.distance} km
                  </p>
                </div>
                
                {/* Driving Hours Box */}
                <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-orange-50 to-orange-100 p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    <Clock className="h-4 w-4 text-orange-600" />
                    De Carro
                  </div>
                  <p className="mt-2 text-lg font-bold text-gray-900">
                    {formatDrivingTime(destination.drivingHours)}
                  </p>
                </div>
                
                {/* Ideal para (substitui a antiga nota "Ranking", que parecia avaliação de usuários) */}
                <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-pink-50 to-pink-100 p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    <Heart className="h-4 w-4 text-pink-600" aria-hidden="true" />
                    Ideal para
                  </div>
                  <p className="mt-2 text-sm font-bold leading-snug text-gray-900">
                    {destination.categories.join(", ")}
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg leading-relaxed text-gray-700">
              {destination.fullDescription}
            </p>

            {/* Top Attractions Box */}
            <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-cyan-50 to-cyan-100 p-6">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900 uppercase tracking-wide">
                <Zap className="h-5 w-5 text-cyan-600" />
                Principais atrações
              </h2>
              <ul className="space-y-2">
                {destination.topAttractions.map((attraction, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500 flex-shrink-0" />
                    {attraction}
                  </li>
                ))}
              </ul>
            </div>

            {/* Best Season Box */}
            <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-green-50 to-green-100 p-6">
              <h2 className="mb-3 text-lg font-bold text-gray-900 uppercase tracking-wide">
                Melhor época
              </h2>
              <p className="text-gray-700">{destination.bestSeason}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
