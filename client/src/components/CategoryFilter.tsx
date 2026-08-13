import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Category, categories } from "@/lib/destinations";
import { ChevronDown } from "lucide-react";

interface CategoryFilterProps {
  selectedCategory: Category | null;
  onCategoryChange: (category: Category | null) => void;
}

export function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  const displayLabel = selectedCategory || "Todos os estilos";

  return (
    <div className="w-full">
      {/* Mobile: Dropdown */}
      <div className="md:hidden">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 font-medium hover:bg-gray-50 transition-colors"
          >
            <span className="truncate">{displayLabel}</span>
            <ChevronDown
              className={`h-5 w-5 text-gray-600 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
              <div className="max-h-64 overflow-y-auto">
                <button
                  onClick={() => {
                    onCategoryChange(null);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors ${
                    selectedCategory === null
                      ? "bg-yellow-100 text-yellow-900 font-semibold"
                      : "text-gray-900"
                  }`}
                >
                  Todos os estilos
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      onCategoryChange(category);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors ${
                      selectedCategory === category
                        ? "bg-yellow-100 text-yellow-900 font-semibold"
                        : "text-gray-900"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop: Horizontal buttons */}
      <div className="hidden md:flex gap-2 flex-wrap">
        <Button
          onClick={() => onCategoryChange(null)}
          variant={selectedCategory === null ? "default" : "outline"}
          className={selectedCategory === null ? "bg-yellow-400 text-gray-900 hover:bg-yellow-500" : ""}
        >
          Todos
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => onCategoryChange(category)}
            variant={selectedCategory === category ? "default" : "outline"}
            className={
              selectedCategory === category
                ? "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
                : ""
            }
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}
