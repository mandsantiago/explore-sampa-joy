import { Link } from "wouter";
import { categoryPages } from "@/lib/categories";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-3 mb-12">
          {/* Column 1: Logo and Description */}
          <div>
            <div className="mb-4">
              <p className="text-xl font-bold text-white">Viajando por SP</p>
              <p className="text-sm text-gray-400 mt-2">
                Guia prático de lugares para viajar no estado de São Paulo.
              </p>
            </div>
          </div>

          {/* Column 2: Categories */}
          <div>
            <p className="font-semibold text-white mb-4">Categorias</p>
            <ul className="space-y-2">
              {categoryPages.map((c) => (
                <li key={c.slug}>
                  <Link href={`/categoria/${c.slug}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: About */}
          <div>
            <p className="font-semibold text-white mb-4">Sobre</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Feito por{" "}
              <Link href="/sobre" className="text-white font-medium hover:text-cyan-300 transition-colors">
                Amanda Santiago
              </Link> - faço e{" "}
              <a
                href="https://www1.folha.uol.com.br/turismo/2018/09/juri-elege-50-destinos-campeoes-no-brasil-e-no-mundo.shtml"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                escrevo sobre viagens
              </a>{" "}
              desde 2015.{" "}
              <Link href="/sobre" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Conheça o projeto
              </Link>
            </p>

            <p className="font-semibold text-white mt-6 mb-3">Na mídia</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://exame.com/invest/minhas-financas/quanto-custa-viajar-para-a-copa-do-mundo-2018-na-russia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-300 transition-colors"
                >
                  Exame — Quanto custa viajar para a Copa do Mundo de 2018 na Rússia
                </a>
              </li>
              <li>
                <a
                  href="https://oglobo.globo.com/economia/noticia/2024/12/30/com-dolar-e-euro-nas-alturas-veja-destinos-de-viagem-com-cambio-mais-favoravel.ghtml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-300 transition-colors"
                >
                  O Globo — Com dólar e euro nas alturas, veja destinos de viagem com câmbio mais favorável
                </a>
              </li>
              <li>
                <a
                  href="https://infograficos.estadao.com.br/focas/planeje-sua-vida/como-economizar-para-realizar-o-seu-sonho-de-viagem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-300 transition-colors"
                >
                  Estadão — Como economizar para realizar o seu sonho de viagem
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          {/* Affiliate Disclaimer */}
          <p className="text-xs text-gray-500 mb-6">
            Este site pode conter links de afiliados. Ao clicar e realizar uma compra ou reserva, podemos receber uma comissão, sem custo adicional para você.
          </p>

          {/* Copyright */}
          <p className="text-xs text-gray-500">
            © {currentYear} Viajando por SP. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
