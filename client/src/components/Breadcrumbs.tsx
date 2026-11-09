import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  name: string;
  /** Sem href = item atual (último). */
  href?: string;
}

// Navegação estrutural visível. Os dados estruturados (BreadcrumbList)
// correspondentes são gerados em lib/seo.ts.
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Você está em" className="border-b border-gray-200 bg-gray-50">
      <ol className="container mx-auto flex flex-wrap items-center gap-2 px-4 py-3 text-sm">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <ChevronRight className="h-4 w-4 text-gray-400" aria-hidden="true" />}
            {item.href ? (
              <Link href={item.href} className="text-gray-600 transition-colors hover:text-gray-900">
                {item.name}
              </Link>
            ) : (
              <span className="font-medium text-gray-900" aria-current="page">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
