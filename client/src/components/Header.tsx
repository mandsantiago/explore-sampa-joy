import { Link } from "wouter";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container flex flex-col items-center gap-1 py-2 md:flex-row md:justify-between md:py-3">
        <Link href="/" className="flex items-center justify-center" aria-label="Viajando por SP — página inicial">
          <img
            src="/images/logo_viajandoporsp_header.png"
            alt="Viajando por SP"
            width={834}
            height={238}
            loading="eager"
            decoding="async"
            className="h-20 w-auto md:h-24"
          />
        </Link>
        <nav aria-label="Principal">
          <ul className="flex items-center gap-5 text-sm font-semibold text-gray-700">
            <li>
              <Link href="/" className="transition-colors hover:text-cyan-600">
                Destinos
              </Link>
            </li>
            <li>
              <a href="/#categorias" className="transition-colors hover:text-cyan-600">
                Categorias
              </a>
            </li>
            <li>
              <Link href="/sobre" className="transition-colors hover:text-cyan-600">
                Sobre
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
