import { Link } from "wouter";
import { categoryPages } from "@/lib/categories";

interface CategoryLinksProps {
  /** Slug da categoria atual, para destacá-la. */
  activeSlug?: string;
}

// Links rastreáveis para as páginas de categoria (substitui o antigo filtro
// por botões, que não gerava URLs próprias).
export function CategoryLinks({ activeSlug }: CategoryLinksProps) {
  return (
    <nav aria-label="Categorias de destinos" id="categorias" className="scroll-mt-40">
      <p className="mb-2 text-sm font-semibold text-gray-700">Estilo de viagem</p>
      <ul className="flex flex-wrap gap-2">
        {categoryPages.map((c) => {
          const active = c.slug === activeSlug;
          return (
            <li key={c.slug}>
              <Link
                href={`/categoria/${c.slug}`}
                aria-current={active ? "page" : undefined}
                className={`inline-block rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "border-yellow-400 bg-yellow-400 text-gray-900"
                    : "border-gray-300 bg-white text-gray-900 hover:bg-gray-100"
                }`}
              >
                {c.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
