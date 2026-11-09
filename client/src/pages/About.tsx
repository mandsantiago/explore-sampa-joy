import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

// RASCUNHO para a Amanda revisar: texto em primeira pessoa.
const press = [
  {
    outlet: "Exame",
    title: "Quanto custa viajar para a Copa do Mundo de 2018 na Rússia",
    url: "https://exame.com/invest/minhas-financas/quanto-custa-viajar-para-a-copa-do-mundo-2018-na-russia/",
  },
  {
    outlet: "O Globo",
    title: "Com dólar e euro nas alturas, veja destinos de viagem com câmbio mais favorável",
    url: "https://oglobo.globo.com/economia/noticia/2024/12/30/com-dolar-e-euro-nas-alturas-veja-destinos-de-viagem-com-cambio-mais-favoravel.ghtml",
  },
  {
    outlet: "Estadão",
    title: "Como economizar para realizar o seu sonho de viagem",
    url: "https://infograficos.estadao.com.br/focas/planeje-sua-vida/como-economizar-para-realizar-o-seu-sonho-de-viagem",
  },
];

export default function About() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: "Início", href: "/" }, { name: "Sobre" }]} />

        <article className="container mx-auto max-w-3xl px-4 py-12">
          <h1 className="mb-8 text-4xl font-bold text-gray-900">Sobre o Viajando por SP</h1>

          <div className="space-y-5 text-lg leading-relaxed text-gray-700">
            <p>
              Oi, eu sou a Amanda Santiago. Escrevo sobre viagens desde 2015, quando cofundei o Quanto Custa Viajar, um
              site sobre o custo real de viajar pelo Brasil e pelo mundo. Lá, trabalhei por anos como editora sendo
              responsável pelo conteúdo. Já viajei por mais de 10 países e diversos destinos no Brasil tanto de avião quanto de carro.
            </p>
            <p>
              O Viajando por SP nasceu de uma pergunta que muitas pessoas me faziam todo feriado: para onde dá para ir de carro
              saindo de São Paulo, sem passar o fim de semana inteiro na estrada? O estado tem praia, serra, cachoeira,
              caverna, cidade histórica e vinícola a poucas horas da capital, mas a informação costuma estar espalhada.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">Como os destinos são escolhidos</h2>
            <p>
              Selecionei 50 destinos do estado que funcionam bem para quem viaja de carro a partir da capital, do bate e
              volta de 30 km aos roteiros de fim de semana mais longos. Cada página traz a distância e o tempo de estrada,
              o que fazer, onde comer, como chegar e as perguntas mais comuns sobre a cidade.
            </p>
            <p>
              As informações são pesquisadas em fontes oficiais, como prefeituras e órgãos de turismo, e revisadas
              periodicamente. Preços, horários e regras de funcionamento mudam, então confirme com o próprio
              estabelecimento antes de sair de casa.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">Na mídia</h2>
            <p>O trabalho que fiz no Quanto Custa Viajar já foi citado em veículos como:</p>
            <ul className="list-disc space-y-2 pl-6">
              {press.map((p) => (
                <li key={p.url}>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-cyan-700 underline hover:text-cyan-900">
                    {p.outlet}: {p.title}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="pt-4 text-2xl font-bold text-gray-900">Como o site se mantém</h2>
            <p>
              O Viajando por SP é independente e gratuito. Algumas páginas têm links de afiliado para reserva de
              hospedagem: se você reservar por eles, recebo uma pequena comissão, sem nenhum custo a mais para você. Esses
              links aparecem sempre identificados e não influenciam quais destinos entram no site.
            </p>
          </div>

          <p className="mt-10">
            <Link href="/" className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-cyan-600">
              Ver os 50 destinos
            </Link>
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
