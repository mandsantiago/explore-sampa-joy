export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container flex items-center justify-center py-4">
        <a href="/" className="flex items-center justify-center">
          <img
            src="/images/logo_viajandoporsp.png"
            alt="Viajando por SP - Destinos em São Paulo"
            width={900}
            height={450}
            loading="eager"
            decoding="async"
            className="h-20 w-auto"
          />
        </a>
      </div>
    </header>
  );
}
