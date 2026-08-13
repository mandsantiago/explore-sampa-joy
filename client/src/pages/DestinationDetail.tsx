import { useParams, useLocation } from "wouter";
import { destinations } from "@/lib/destinations";
import { getImageDimensions } from "@/lib/imageDimensions";
import { Header } from "@/components/Header";
import { DestinationSection } from "@/components/DestinationSection";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { AlertCircle, MapPin } from "lucide-react";
import { DestinationFAQ } from "@/components/DestinationFAQ";
import { DestinationSchema } from "@/components/DestinationSchema";
import { Footer } from "@/components/Footer";
import { ChevronRight } from "lucide-react";

const generateFAQs = (destinationName: string) => [
  {
    question: `Qual é a melhor época para visitar ${destinationName}?`,
    answer: `A melhor época depende do que você busca. Geralmente, os meses de abril a setembro oferecem clima mais agradável. Consulte a seção "Melhor Época" acima para informações específicas sobre ${destinationName}.`,
  },
  {
    question: `Quanto tempo devo ficar em ${destinationName}?`,
    answer: `Para aproveitar bem ${destinationName}, recomendamos pelo menos 2 dias. Se for um bate e volta, 1 dia é suficiente para conhecer as principais atrações.`,
  },
  {
    question: `Como chegar em ${destinationName} saindo de São Paulo?`,
    answer: `A forma mais prática é de carro pela Rodovia Anhanguera ou Fernão Dias. O trajeto leva aproximadamente 2-3 horas. Também há opções de ônibus saindo do Terminal Rodoviário do Tietê.`,
  },
  {
    question: `${destinationName} é seguro para turistas?`,
    answer: `Sim, ${destinationName} é um destino turístico seguro. Recomendamos seguir as dicas de segurança básicas: não deixar objetos de valor visíveis, caminhar em grupos à noite e estar atento ao seu entorno.`,
  },
];

export default function DestinationDetail() {
  const params = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  
  const destination = destinations.find((d) => d.id === params.id);

  if (!destination) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <div className="flex-1">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Destino não encontrado</h1>
            <p className="text-gray-600 mb-8">Desculpe, este destino não existe.</p>
            <Link href="/">
              <a className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-white font-semibold hover:bg-cyan-600 transition-colors">
                Voltar para Home
              </a>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO 
        title={destination.name}
        description={destination.shortDescription}
        image={destination.imageUrl}
      />
      <DestinationSchema destination={destination} />
      <Header />
      
      <div className="flex-1">
        {/* Breadcrumbs */}
        <div className="border-b border-gray-200 bg-gray-50">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/">
                <a className="text-gray-600 hover:text-gray-900 transition-colors">
                  Destinos
                </a>
              </Link>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="text-gray-900 font-medium">{destination.name}</span>
            </div>
          </div>
        </div>

        {/* Destination Detail */}
        <DestinationSection destination={destination} />

        {/* How to Get There */}
        <section className="border-t border-gray-200 bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Como Chegar</h2>
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-700 mb-4">
                <strong>De carro:</strong> A forma mais prática é dirigir pela Rodovia Anhanguera (BR-381) ou Rodovia Fernão Dias (BR-381). O trajeto leva aproximadamente {destination.drivingHours.toFixed(1)} horas desde São Paulo. Estacionar geralmente é fácil e gratuito.
              </p>
              <p className="text-gray-700">
                <strong>De ônibus:</strong> Há linhas de ônibus saindo do Terminal Rodoviário do Tietê. Verifique horários com a empresa de transporte.
              </p>
            </div>
          </div>
        </section>

        {/* Where to Stay */}
        <section className="border-t border-gray-200 bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Onde Ficar</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Pousadas Charmosas</h3>
                <p className="text-sm text-gray-600">Ambiente acolhedor, café colonial, ideal para casais.</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Hotéis Familiares</h3>
                <p className="text-sm text-gray-600">Estrutura para crianças, piscina, atividades.</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Resorts</h3>
                <p className="text-sm text-gray-600">Serviços completos, spa, gastronomia.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What to Do */}
        <section className="border-t border-gray-200 bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">O Que Fazer</h2>
            <div className="space-y-8">
              <div>
                {destination.whatToDo ? (
                  <div className="space-y-6">
                    {destination.whatToDo.description && (
                      <p className="text-gray-700 leading-relaxed">{destination.whatToDo.description}</p>
                    )}
                    <div className="space-y-4">
                      {destination.whatToDo.items.map((item, idx) => (
                        <div key={idx} className="border-l-4 border-cyan-500 pl-6 py-2">
                          <h4 className="font-semibold text-gray-900 mb-2">{item.name}</h4>
                          <p className="text-gray-700 leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Principais Atrações</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      {destination.topAttractions.map((attraction, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                          <div className="p-2 bg-cyan-100 rounded text-cyan-600 mt-1">
                            <MapPin className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{attraction}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Where to Eat */}
        <section className="border-t border-gray-200 bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">Onde Comer</h2>
            {destination.whereToDine ? (
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">{destination.whereToDine.intro}</p>
                <div className="grid gap-6 md:grid-cols-2">
                  {destination.whereToDine.categories.map((category, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                      <p className="text-sm text-gray-600">{category.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Gastronomia Local</h3>
                  <p className="text-sm text-gray-600">Pratos típicos da região com ingredientes locais.</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Café Colonial</h3>
                  <p className="text-sm text-gray-600">Experiência tradicional com doces, bolos e bebidas.</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Restaurantes Variados</h3>
                  <p className="text-sm text-gray-600">Opções de culinária brasileira e internacional.</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Safety Tips */}
        <section className="border-t border-gray-200 bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-start gap-4 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Dicas de Segurança</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Evite deixar objetos de valor visíveis no carro</li>
                  <li>• Caminhe em grupos durante a noite</li>
                  <li>• Leve protetor solar e repelente</li>
                  <li>• Consulte a previsão do tempo antes de sair</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Destinations */}
        <section className="border-t border-gray-200 bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">Outros destinos na mesma categoria</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {destinations
                .filter(
                  (d) =>
                    d.categories.some((cat) =>
                      destination.categories.includes(cat)
                    ) && d.id !== destination.id
                )
                .slice(0, 6)
                .map((dest) => (
                  <Link key={dest.id} href={`/destino/${dest.id}`}>
                    <a className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={dest.imageUrl}
                          alt={dest.name}
                          width={getImageDimensions(dest.imageUrl).width}
                          height={getImageDimensions(dest.imageUrl).height}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                          {dest.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">{dest.shortDescription}</p>
                        <p className="text-xs text-gray-500 mt-2">{dest.distance} km da capital</p>
                      </div>
                    </a>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <DestinationFAQ destinationName={destination.name} faqs={destination.faqs ?? generateFAQs(destination.name)} />
      </div>

      <Footer />
    </div>
  );
}
