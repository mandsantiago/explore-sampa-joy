import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface DestinationFAQProps {
  destinationName: string;
  faqs: FAQItem[];
}

// Usa <details>/<summary>: as respostas ficam no HTML (visíveis para o Google
// e para leitores de tela) mesmo com o item fechado.
export function DestinationFAQ({ destinationName, faqs }: DestinationFAQProps) {
  if (!faqs.length) return null;
  return (
    <section className="border-t border-gray-200 bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">
          Perguntas frequentes sobre {destinationName}
        </h2>

        <div className="max-w-3xl space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group overflow-hidden rounded-lg border border-gray-200 transition-colors hover:border-gray-300"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between bg-gray-50 px-6 py-4 text-left transition-colors hover:bg-gray-100 [&::-webkit-details-marker]:hidden">
                <h3 className="text-sm font-semibold text-gray-900">{faq.question}</h3>
                <ChevronDown
                  className="h-5 w-5 flex-shrink-0 text-gray-600 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="border-t border-gray-200 bg-white px-6 py-4">
                <p className="leading-relaxed text-gray-700">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
