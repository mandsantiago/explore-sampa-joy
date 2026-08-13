import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export function SearchBar({ value, onChange, onSearch }: SearchBarProps) {
  return (
    <div className="flex gap-2">
      <Input
        type="text"
        placeholder="Buscar destino, categoria…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && onSearch()}
        className="flex-1"
      />
      <Button
        onClick={onSearch}
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6"
      >
        <Search className="h-4 w-4 mr-2" />
        Buscar
      </Button>
    </div>
  );
}
