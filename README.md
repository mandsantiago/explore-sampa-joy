# Viajando por SP

Guia interativo com 50 destinos turísticos perto de São Paulo — praias, serras, cachoeiras, cidades históricas e vinícolas — com busca, filtros por categoria/distância e uma página de detalhes para cada destino.

🔗 Site: _adicione aqui a URL depois do deploy_

## Stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite 7](https://vitejs.dev)
- [Tailwind CSS 4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
- [Wouter](https://github.com/molefrog/wouter) para roteamento client-side

Site 100% estático — sem backend, sem banco de dados. Todos os dados dos destinos ficam em `client/src/lib/destinations.ts`.

## Rodando localmente

Requer Node 20+ e [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

Abre em `http://localhost:3000`.

## Build de produção

```bash
pnpm build     # gera client/dist/public (arquivos estáticos)
pnpm preview   # serve o build localmente para conferir
```

## Estrutura

```
explore-sampa-joy/
├── client/
│   ├── public/
│   │   ├── images/           # fotos dos destinos
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   ├── src/
│   │   ├── components/       # Header, Footer, DestinationCard, filtros, SEO, etc.
│   │   ├── contexts/         # ThemeContext
│   │   ├── hooks/
│   │   ├── lib/
│   │   │   └── destinations.ts   # dados dos 50 destinos
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── DestinationDetail.tsx
│   │   │   └── NotFound.tsx
│   │   └── App.tsx           # rotas
│   └── index.html
├── generate-sitemap.mjs      # regenera client/public/sitemap.xml
├── vercel.json
├── vite.config.ts
└── package.json
```

## Adicionar ou editar um destino

Edite `client/src/lib/destinations.ts` e adicione/ajuste um item do array `destinations`. Cada destino segue a interface `Destination` no topo do arquivo. As imagens ficam em `client/public/images/` e são referenciadas como `/images/nome-do-arquivo.jpg`.

Depois de alterar os destinos, regenere o sitemap:

```bash
SITE_URL=https://seu-dominio.com node generate-sitemap.mjs
```

## Deploy

Veja [`GITHUB_VERCEL_DEPLOY.md`](./GITHUB_VERCEL_DEPLOY.md) para o passo a passo completo de publicação via GitHub + Vercel.

## Licença

MIT — veja [`LICENSE`](./LICENSE).
