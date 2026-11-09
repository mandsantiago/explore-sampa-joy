import { useEffect } from "react";
import { useLocation } from "wouter";
import { getHead, HeadData } from "@/lib/seo";

// Atualiza o <head> a cada navegação no navegador. O HTML pré-renderizado já
// chega com o <head> certo; aqui só mantemos as tags em dia quando a pessoa
// navega entre páginas sem recarregar. Tags existentes são atualizadas, nunca
// duplicadas.

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function removeEl(selector: string) {
  document.head.querySelectorAll(selector).forEach((el) => el.remove());
}

export function applyHead(h: HeadData) {
  document.title = h.title;
  upsertMeta("name", "description", h.description);
  upsertMeta("name", "robots", h.robots);
  upsertMeta("property", "og:title", h.title);
  upsertMeta("property", "og:description", h.description);
  upsertMeta("property", "og:image", h.image);
  upsertMeta("property", "og:type", h.ogType);
  upsertMeta("name", "twitter:title", h.title);
  upsertMeta("name", "twitter:description", h.description);
  upsertMeta("name", "twitter:image", h.image);

  if (h.canonical) {
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = h.canonical;
    upsertMeta("property", "og:url", h.canonical);
  } else {
    removeEl('link[rel="canonical"]');
    removeEl('meta[property="og:url"]');
  }

  removeEl("script[data-seo]");
  for (const obj of h.jsonLd) {
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.setAttribute("data-seo", "");
    s.textContent = JSON.stringify(obj);
    document.head.appendChild(s);
  }
}

export function HeadManager() {
  const [location] = useLocation();
  useEffect(() => {
    applyHead(getHead(location));
  }, [location]);
  return null;
}
