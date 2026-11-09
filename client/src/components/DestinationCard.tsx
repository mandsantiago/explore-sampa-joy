import { MapPin, Car } from "lucide-react";
import { Link } from "wouter";
import { Destination, categoryColors, formatDrivingTime } from "@/lib/destinations";
import { getExtras } from "@/lib/destinationExtras";
import { getImageDimensions } from "@/lib/imageDimensions";

interface DestinationCardProps {
  destination: Destination;
}

// O card inteiro é um link <a href> rastreável para a página do destino.
export function DestinationCard({ destination }: DestinationCardProps) {
  const primaryCategory = destination.categories[0];
  const bgColor = categoryColors[primaryCategory];
  const { width, height } = getImageDimensions(destination.imageUrl);

  return (
    <Link
      href={`/destino/${destination.id}`}
      className="group block transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <article className="relative overflow-hidden rounded-xl bg-white shadow-md">
        <div className="relative h-48 overflow-hidden bg-gray-200">
          <img
            src={destination.imageUrl}
            alt={getExtras(destination.id).imageAlt}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white ${bgColor}`}>
            {primaryCategory}
          </div>
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-center gap-3 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {destination.distance} km
            </span>
            <span className="flex items-center gap-1">
              <Car className="h-4 w-4" aria-hidden="true" />
              {formatDrivingTime(destination.drivingHours)}
            </span>
          </div>
          <h3 className="mb-2 text-lg font-bold text-gray-900">{destination.name}</h3>
          <p className="mb-4 line-clamp-2 text-sm text-gray-600">{destination.shortDescription}</p>
          <span className="flex w-full items-center justify-center rounded-md bg-cyan-500 px-4 py-2 text-sm font-semibold text-white transition-colors group-hover:bg-cyan-600">
            Ver dicas de {destination.name}
          </span>
        </div>
      </article>
    </Link>
  );
}
