import { Star, MapPin, Car } from "lucide-react";
  import { Destination, categoryColors, formatDrivingTime } from "@/lib/destinations";
  import { getImageDimensions } from "@/lib/imageDimensions";
  import { Button } from "@/components/ui/button";
  import { useLocation } from "wouter";

  interface DestinationCardProps {
    destination: Destination;
    onViewDetails?: (destination: Destination) => void;
  }

  export function DestinationCard({
    destination,
    onViewDetails,
  }: DestinationCardProps) {
    const [, navigate] = useLocation();
    const primaryCategory = destination.categories[0];
    const bgColor = categoryColors[primaryCategory];
    const { width, height } = getImageDimensions(destination.imageUrl);

    const handleClick = () => {
      navigate(`/destino/${destination.id}`);
    };

    return (
      <div className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative overflow-hidden rounded-xl bg-white shadow-md">
          <div className="relative h-48 overflow-hidden bg-gray-200">
            <img
              src={destination.imageUrl}
              alt={destination.name}
              width={width}
              height={height}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white ${bgColor}`}>
              {primaryCategory}
            </div>
            <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 text-xs font-semibold text-white">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              {destination.rating.toFixed(1)}
            </div>
          </div>
          <div className="p-4">
            <div className="mb-2 flex items-center gap-3 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {destination.distance} km
              </span>
              <span className="flex items-center gap-1">
                <Car className="h-4 w-4" />
                {formatDrivingTime(destination.drivingHours)}
              </span>
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-900">
              {destination.name}
            </h3>
            <p className="mb-4 line-clamp-2 text-sm text-gray-600">
              {destination.shortDescription}
            </p>
            <Button
              onClick={handleClick}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold"
            >
              Ver dicas
            </Button>
          </div>
        </div>
      </div>
    );
  }
