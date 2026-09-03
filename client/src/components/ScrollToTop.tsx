import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Wouter (como a maioria dos roteadores client-side) não reseta o scroll ao
 * navegar entre páginas — diferente de um site tradicional, onde toda nova
 * página carrega do topo. Sem isso, ao clicar em um destino a partir do meio
 * da lista da Home, a página de detalhe abre exatamente na mesma posição de
 * scroll em que você estava, o que parece um bug de carregamento.
 *
 * Este componente não renderiza nada — só observa a rota atual e força a
 * janela para o topo sempre que ela muda.
 */
export function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
