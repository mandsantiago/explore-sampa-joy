import { Link } from "wouter";
import { MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// O <title> e o noindex desta página vêm de lib/seo.ts (NOT_FOUND_HEAD).
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="max-w-lg text-center">
          <MapPin className="mx-auto mb-6 h-14 w-14 text-cyan-500" aria-hidden="true" />
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">Erro 404</p>
          <h1 className="mb-4 text-3xl font-bold text-gray-900">Página não encontrada</h1>
          <p className="mb-8 leading-relaxed text-gray-600">
            Esse destino não existe (pelo menos ainda não por aqui). A página pode ter sido movida ou o endereço está incorreto.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-cyan-600"
          >
            Ver os 50 destinos
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
