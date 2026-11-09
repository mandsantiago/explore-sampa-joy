import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root")!;

// Em produção o HTML já vem pré-renderizado (prerender.mjs): o React só
// "hidrata" o que está lá. No modo dev (pnpm dev) a div vem vazia.
if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
