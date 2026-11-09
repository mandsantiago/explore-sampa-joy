// Ponto de entrada usado só no build (pré-renderização). Não vai para o navegador.
import { renderToString } from "react-dom/server";
import App from "./App";

export { getHead, getAllRoutes, renderHeadHtml, NOT_FOUND_HEAD } from "./lib/seo";
export { destinationExtras } from "./lib/destinationExtras";
export { destinations } from "./lib/destinations";

export function render(path: string): string {
  return renderToString(<App ssrPath={path} />);
}
