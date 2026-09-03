export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container flex items-center justify-center py-3">
        <a href="/" className="flex items-center justify-center">
          <img
            src="/images/logo_viajandoporsp_header.png"
            alt="Viajando por SP - Destinos em São Paulo"
            width={834}
            height={238}
            loading="eager"
            decoding="async"
            className="h-24 w-auto md:h-28"
          />
        </a>
      </div>
    </header>
  );
}
