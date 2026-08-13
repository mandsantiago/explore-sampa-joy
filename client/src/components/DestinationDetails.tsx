import { Destination, categoryColors } from "@/lib/destinations";
import { Button } from "@/components/ui/button";
import { X, MapPin, Star } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface DestinationDetailsProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
}

export function DestinationDetails({
  destination,
  isOpen,
  onClose,
}: DestinationDetailsProps) {
  if (!destination) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">{destination.name}</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-4 top-4"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <div className="space-y-6">
          <div className="relative h-64 overflow-hidden rounded-lg">
            <img
              src={destination.imageUrl}
              alt={destination.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${categoryColors[destination.categories[0]]}`}>
                {destination.categories[0]}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-600">
                <MapPin className="h-4 w-4" />
                {destination.distance} km
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-600">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                {destination.rating.toFixed(1)}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">{destination.name}</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {destination.fullDescription}
          </p>
          <div>
            <h3 className="mb-3 text-lg font-bold text-gray-900 uppercase tracking-wide">
              Top Atrações
            </h3>
            <ul className="space-y-2">
              {destination.topAttractions.map((attraction, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="text-cyan-500 font-bold">•</span>
                  {attraction}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-bold text-gray-900 uppercase tracking-wide">
              Melhor Época
            </h3>
            <p className="text-gray-700">{destination.bestSeason}</p>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-bold text-gray-900 uppercase tracking-wide">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {destination.categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
          <Button
            onClick={onClose}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold"
          >
            Voltar ao topo
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
