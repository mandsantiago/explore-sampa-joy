import { Button } from "@/components/ui/button";

interface DistanceFilterProps {
  selectedDistance: number | null;
  onDistanceChange: (distance: number | null) => void;
}

export function DistanceFilter({
  selectedDistance,
  onDistanceChange,
}: DistanceFilterProps) {
  const distanceOptions = [
    { label: "Até 100 km", value: 100 },
    { label: "Até 200 km", value: 200 },
    { label: "Sem limite", value: null },
  ];

  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-700">Distância da Capital</label>
      <div className="flex gap-2">
        {distanceOptions.map((option) => (
          <Button
            key={option.label}
            onClick={() => onDistanceChange(option.value)}
            variant={selectedDistance === option.value ? "default" : "outline"}
            className={
              selectedDistance === option.value
                ? "bg-cyan-500 text-white hover:bg-cyan-600"
                : ""
            }
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
