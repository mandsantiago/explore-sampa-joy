# 🚀 Publicar no GitHub + Vercel

Guia passo a passo para publicar o **Explore Sampa Joy** no GitHub e Vercel.

Este é um site 100% estático (React + Vite, sem backend). O build gera arquivos HTML/CSS/JS em `dist/public`, e o `vercel.json` já está configurado com o comando de build, a pasta de saída correta e o redirecionamento necessário para as rotas internas (`/destino/:id`) funcionarem ao acessar/recarregar a página diretamente.

## Pré-requisitos

- Conta no [GitHub](https://github.com)
- Conta no [Vercel](https://vercel.com) (pode entrar direto com a conta do GitHub)
- [Node.js 20+](https://nodejs.org) e [pnpm](https://pnpm.io) instalados localmente

## Passo 1: Subir o projeto para o GitHub

```bash
cd explore-sampa-joy

# Se ainda não for um repositório git
git init
git add .
git commit -m "Initial commit: Explore Sampa Joy"

# Crie o repositório em https://github.com/new (não inicialize com README/gitignore/license,
# já existem localmente) e depois:
git remote add origin https://github.com/SEU_USUARIO/explore-sampa-joy.git
git branch -M main
git push -u origin main
```

## Passo 2: Importar no Vercel

1. Acesse [vercel.com](https://vercel.com) → **Add New...** → **Project**
2. Selecione o repositório `explore-sampa-joy`
3. O Vercel detecta automaticamente o `vercel.json` — não é preciso mexer em Build Command nem Output Directory, já estão definidos no arquivo
4. Não há variáveis de ambiente obrigatórias
5. Clique em **Deploy**

Em ~1-2 minutos você recebe uma URL como `https://explore-sampa-joy.vercel.app`.

## Passo 3: Atualizar URLs de SEO com o domínio real

Antes (ou depois) do primeiro deploy, troque `https://explore-sampa-joy.vercel.app` pelo seu domínio final nestes arquivos:

- `client/src/components/SEO.tsx` (meta tags Open Graph, canonical, Schema.org)
- `client/public/robots.txt`
- Regenere o sitemap: `SITE_URL=https://seu-dominio.com node generate-sitemap.mjs`

Depois faça commit e push — o Vercel republica automaticamente.

## Passo 4: Domínio próprio (opcional)

1. No projeto no Vercel: **Settings → Domains → Add**
2. Digite seu domínio
3. Configure no seu provedor de DNS o registro (CNAME ou A) que o Vercel indicar
4. Aguarde a propagação (pode levar até 48h)

## Deploy automático

Todo `git push` na branch `main` gera um novo deploy automaticamente. Para atualizar o site:

```bash
git add .
git commit -m "Descrição da alteração"
git push origin main
```

## Adicionando as imagens que faltam

As fotos dos destinos ficam em `client/public/images/`, referenciadas em `client/src/lib/destinations.ts` como `/images/nome-do-arquivo.jpg`. Para adicionar uma imagem nova, salve o arquivo em `client/public/images/` e aponte o campo `imageUrl` do destino correspondente para ele.

## Troubleshooting

**Página 404 ao acessar `/destino/algum-id` direto ou recarregar** — confirme que `vercel.json` foi commitado; ele contém o rewrite que redireciona todas as rotas para `index.html` (necessário em SPAs com roteamento client-side).

**Imagem de um destino não aparece** — verifique se o arquivo existe em `client/public/images/` com o nome exato usado em `imageUrl` no `destinations.ts` (maiúsculas/minúsculas importam).

**Build falha no Vercel** — rode `pnpm build` localmente para reproduzir o erro; confira os logs de build no painel do Vercel.
