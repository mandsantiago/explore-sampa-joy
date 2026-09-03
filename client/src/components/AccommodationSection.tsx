import { BedDouble, ExternalLink } from "lucide-react";
import { Accommodation } from "@/lib/accommodations.generated";

interface AccommodationSectionProps {
  accommodations: Accommodation[];
}

export function AccommodationSection({ accommodations }: AccommodationSectionProps) {
  // Se ainda não há hospedagem cadastrada para este destino, a seção inteira
  // não aparece — melhor omitir do que mostrar um espaço vazio.
  if (!accommodations || accommodations.length === 0) return null;

  return (
    <section className="border-t border-gray-200 bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-3xl font-bold text-gray-900">Onde Ficar</h2>
        <p className="mb-8 text-sm text-gray-500">
          Contém link de afiliado — ao reservar por aqui, você não paga nada a mais e ajuda a manter o site no ar.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {accommodations.map((acc, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-lg border border-gray-200 bg-gray-50 p-6"
            >
              <div className="mb-4 flex items-start gap-3">
                <BedDouble className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">{acc.name}</h3>
                  {acc.type && (
                    <p className="text-sm text-gray-500">{acc.type}</p>
                  )}
                  {acc.priceHint && (
                    <p className="mt-1 text-sm font-medium text-gray-700">{acc.priceHint}</p>
                  )}
                </div>
              </div>
              <a
                href={acc.bookingUrl}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cyan-600"
              >
                Ver disponibilidade
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
