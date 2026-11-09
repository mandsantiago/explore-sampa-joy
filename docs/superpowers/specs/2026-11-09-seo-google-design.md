# Spec — Adequação do Viajando por SP ao Guia de SEO do Google

- **Data:** 2026-11-09
- **Projeto:** explore-sampa-joy (https://www.viajandoporsp.com.br)
- **Base:** Guia de SEO para iniciantes do Google (versão de 18/12/2025)
- **Status:** aprovado em conversa; aguardando revisão final da spec

## 1. Objetivo

Fazer com que cada página do site seja encontrada, entendida e apresentada corretamente pelo Google (e por WhatsApp/Facebook ao compartilhar), e corrigir conteúdo genérico ou incorreto. Nenhuma mudança promete ranking; o efeito deve ser avaliado após algumas semanas no Search Console.

## 2. Problemas que motivam a mudança

| # | Problema | Gravidade |
|---|---|---|
| P1 | Cards da home navegam por `onClick`; não há `<a href>` para os destinos | Crítico |
| P2 | "Como Chegar" idêntico nas 50 páginas e incorreto (Anhanguera/Fernão Dias para todas; Anhanguera rotulada BR-381) | Crítico |
| P3 | Páginas de destino sem H1 (nome da cidade em `<h2>`) | Crítico |
| P4 | Rewrite catch-all no `vercel.json`: toda URL responde 200; destino inexistente sem `noindex` (soft 404) | Crítico |
| P5 | SPA: HTML inicial idêntico para todas as URLs; compartilhamentos mostram título da home | Crítico |
| P6 | Títulos pouco descritivos ("Viajando por SP - Botucatu") | Importante |
| P7 | `<title>`/description duplicados (index.html + React) | Importante |
| P8 | Rodapé linka `/?category=...`, parâmetro ignorado (URLs duplicadas da home) | Importante |
| P9 | `alt` = só o nome da cidade | Importante |
| P10 | Breadcrumb sem `BreadcrumbList` | Importante |
| P11 | "Dicas de Segurança" genéricas repetidas | Importante |
| P12 | "Ranking 4.6/5.0" editorial parece avaliação de usuários | Importante |
| P13 | `generate-sitemap.mjs` com domínio padrão errado e `lastmod` artificial | Importante |
| P14 | Meta keywords, `SearchAction`, `Crawl-delay`, `maximum-scale=1` | Melhoria |
| P15 | Ausência de página "Sobre" | Melhoria |

## 3. Decisões tomadas

1. **Pré-renderização no build** (mantém React + Vite + Vercel + Supabase).
2. **"Como Chegar" pesquisado e escrito por cidade**, revisado pela Amanda.
3. **8 páginas de categoria reais** em `/categoria/<slug>`.
4. **Remover a nota "Ranking"**; substituir por "Ideal para" (categorias).
5. **Criar `/sobre`**.

## 4. Arquitetura

### 4.1 Build
`vercel.json` → `buildCommand`:
```
node fetch-accommodations.mjs && vite build && vite build --ssr src/entry-server.tsx --outDir dist/server && node prerender.mjs
```
O mesmo comando vai para o script `build` do `package.json`.

### 4.2 Unidades novas
| Arquivo | Responsabilidade |
|---|---|
| `client/src/lib/routes.ts` | Lista única de rotas indexáveis: `/`, `/destino/<id>` (50), `/categoria/<slug>` (8), `/sobre`. Usada pelo prerender e pelo sitemap. |
| `client/src/lib/categories.ts` | Slug, nome, título, descrição e introdução de cada categoria. |
| `client/src/lib/seo.ts` | `getHead(path)` → `{ title, description, canonical, image, ogType, robots, jsonLd[] }`. Fonte única do `<head>`. |
| `client/src/components/HeadManager.tsx` | No navegador, aplica `getHead(location)` ao `document.head` via efeito (atualiza tags existentes; não duplica). Substitui o `SEO.tsx` e o `DestinationSchema.tsx`. |
| `client/src/entry-server.tsx` | `render(path)` → HTML do app com `Router ssrPath` (wouter). |
| `prerender.mjs` | Para cada rota: renderiza, injeta `<head>` gerado por `getHead` e o corpo em `<div id="root">`, grava `dist/public/<rota>.html` (home em `index.html`). Gera `404.html` (com `noindex`) e `sitemap.xml`. Falha o build se alguma rota não renderizar. |
| `client/src/pages/Category.tsx` | Página de categoria. |
| `client/src/pages/About.tsx` | Página Sobre. |

### 4.3 Navegador
- `main.tsx` usa `hydrateRoot` quando `#root` já tem conteúdo; `createRoot` caso contrário (dev).
- `index.html` perde `<title>`, `description` e `maximum-scale=1`; ganha marcador `<!--app-head-->` para o prerender.

### 4.4 Vercel
```json
{
  "buildCommand": "...",
  "outputDirectory": "dist/public",
  "cleanUrls": true,
  "trailingSlash": false
}
```
Sem rewrite catch-all. URLs inexistentes recebem `404.html` com status 404.
Ação manual da Amanda: confirmar no painel de domínios que `viajandoporsp.com.br` redireciona (301/308) para `www.viajandoporsp.com.br`.

### 4.5 Restrições
- Supabase continua só em build-time; webhook de redeploy intocado.
- Componentes não podem acessar `window`/`document` durante a renderização (só em efeitos).
- `pnpm-lock.yaml` deve continuar em sincronia (nenhuma dependência nova prevista).

## 5. Páginas e conteúdo

### 5.1 Títulos e descrições
| Página | `<title>` | H1 |
|---|---|---|
| Home | Viagens de carro em São Paulo: 50 destinos perto da capital \| Viajando por SP | Para onde ir de carro pelo interior de São Paulo (atual) |
| Destino | {Cidade}: o que fazer, onde comer e como chegar \| Viajando por SP | {Cidade} |
| Categoria | {Categoria}: destinos de carro em SP \| Viajando por SP | {Categoria} |
| Sobre | Sobre a Amanda Santiago e o Viajando por SP \| Viajando por SP | Sobre o Viajando por SP |
| 404 | Página não encontrada \| Viajando por SP (`noindex`) | Página não encontrada |

Descrição do destino = `shortDescription` (revisar as < 70 caracteres). Descrições de categoria e Sobre escritas uma a uma.

### 5.2 Página de destino
- Nome da cidade em `<h1>`.
- Caixa "Ranking" → "Ideal para" (categorias). Estrela removida também do card da home.
- "Como Chegar" lê `destination.howToGetThere` (campo novo, obrigatório).
- Caixa "Dicas de Segurança" removida.
- Breadcrumb: Início › {Categoria principal (link)} › {Cidade}, com `BreadcrumbList`.
- Imagens usam `destination.imageAlt` (campo novo, obrigatório) na página e nos cards.
- `/destino/<id inexistente>` → 404 real (não pré-renderizado; no navegador renderiza NotFound com `noindex`).
- JSON-LD: `TouristAttraction` (+ `url`) e `BreadcrumbList`.

### 5.3 Home
- Card inteiro como `<a href="/destino/<id>">` (visual inalterado).
- Botões de categoria → links para `/categoria/<slug>`. Busca e filtro de distância continuam client-side.
- JSON-LD: `WebSite` sem `SearchAction`.

### 5.4 Novas páginas
- **Categoria:** H1, introdução de 2–3 parágrafos, grade de destinos (links), `ItemList` + `BreadcrumbList`.
- **Sobre:** primeira pessoa; trajetória (Quanto Custa Viajar desde 2015, matérias na Exame, O Globo e Estadão com links); como os destinos são escolhidos/pesquisados; transparência sobre afiliados.
- **Header:** links "Destinos", "Categorias", "Sobre". **Footer:** categorias → `/categoria/<slug>`; link para `/sobre`.

### 5.5 Limpeza
Remover meta keywords, `SearchAction`, `Crawl-delay` do robots.txt, `maximum-scale=1`, `generate-sitemap.mjs` (substituído pelo prerender), `DestinationDetails.tsx` (modal não usado), `generateFAQs` (todos os destinos têm FAQ própria).
Sitemap: `lastmod` vem do campo opcional `updatedAt` de cada destino; na ausência, a data do build só para a home.

## 6. Produção de textos
- 50 × "Como Chegar" (2–4 frases): rodovias com numeração, referência no caminho quando útil, rodoviária de saída e empresa de ônibus quando confirmada, balsa para Ilhabela. Sem valores de pedágio, horários ou preços.
- 50 × `imageAlt`: escrito após ver cada foto.
- 8 × introdução de categoria; 1 × rascunho do Sobre.
- Fontes: prefeituras, DER-SP, ARTESP, empresas de ônibus. O que não for confirmado fica só com o trecho de carro e é marcado para conferência.
- Revisão: planilha com uma linha por cidade (Como Chegar, alt, pendências) + textos de categoria e Sobre.

## 7. Verificação
- `pnpm build` local sem erros; 60 páginas HTML indexáveis + `404.html` (61 arquivos) + `sitemap.xml` com as 60 URLs indexáveis.
- Amostra de HTML gerado (home, 3 destinos, 1 categoria, Sobre, 404): `<title>` único, uma `description`, canonical absoluto, um H1, links `<a href>` para destinos, JSON-LD válido.
- `tsc --noEmit` sem erros.
- Após deploy (Amanda): Teste de pesquisa aprimorada em uma página de destino; envio do sitemap e Inspeção de URL no Search Console.

## 8. Fora do escopo
Troca da foto da home (recomendada), novas fotos, mudanças visuais, monetização, migração de framework, commit/push (só a pedido da Amanda).
