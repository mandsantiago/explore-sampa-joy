# 🏨 Configurar "Onde Ficar" (hospedagens via Supabase)

Guia passo a passo para deixar a seção "Onde Ficar" de cada destino editável direto pelo navegador, sem precisar mexer em código nem no Git.

**Como funciona, resumido:** você cadastra as hospedagens numa tabela do Supabase (parecido com uma planilha). Quando edita uma linha, o Supabase avisa a Vercel, que rebuilda o site sozinha em 1-2 minutos — o novo link já aparece publicado, sem você precisar abrir o terminal.

## Passo 1: Criar o projeto no Supabase

1. Crie uma conta gratuita em [supabase.com](https://supabase.com) (dá para entrar direto com o GitHub)
2. **New Project** → escolha um nome (ex: `viajando-por-sp`) e uma senha de banco de dados (guarde essa senha em local seguro, mas você não vai precisar dela no dia a dia)
3. Aguarde ~2 minutos enquanto o projeto é criado

## Passo 2: Criar a tabela

1. No menu lateral do projeto, clique em **SQL Editor** → **New query**
2. Abra o arquivo [`supabase/schema.sql`](./supabase/schema.sql) deste projeto, copie todo o conteúdo e cole no editor
3. Clique em **Run** (ou `Ctrl+Enter`)
4. Se aparecer "Success. No rows returned", funcionou

## Passo 3: Pegar as chaves do projeto

1. No menu lateral: **Settings** (ícone de engrenagem) → **API**
2. Anote dois valores:
   - **Project URL** (ex: `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon public** key (uma chave longa, começando com `eyJ...`)

## Passo 4: Configurar as chaves na Vercel

1. No painel da Vercel, abra o projeto → **Settings** → **Environment Variables**
2. Adicione duas variáveis (marque todos os ambientes: Production, Preview, Development):
   - `SUPABASE_URL` → cole o Project URL
   - `SUPABASE_ANON_KEY` → cole a chave anon public
3. Salve

## Passo 5: Criar o Deploy Hook na Vercel

1. **Settings** → **Git** → role até **Deploy Hooks**
2. Crie um novo hook: nome `supabase-accommodations`, branch `main`
3. A Vercel vai gerar uma URL (algo como `https://api.vercel.com/v1/integrations/deploy/...`) — copie essa URL

## Passo 6: Criar o Webhook no Supabase

1. No Supabase: menu lateral → **Database** → **Webhooks** → **Create a new hook**
2. Nome: `trigger-vercel-deploy`
3. Table: `accommodations`
4. Events: marque **Insert**, **Update** e **Delete** (qualquer mudança dispara o rebuild)
5. Type: **HTTP Request**
6. Method: **POST**
7. URL: cole a URL do Deploy Hook que você copiou no Passo 5
8. Salve

## Pronto! Como usar no dia a dia

1. No Supabase: menu lateral → **Table Editor** → tabela `accommodations`
2. Clique em **Insert row** (ou edite uma linha existente clicando nela)
3. Preencha:
   - `destination_id`: o id exato do destino (confira em `client/src/lib/destinations.ts`, ex: `ubatuba`, `campos-do-jordao`)
   - `name`: nome da hospedagem
   - `type`: "Pousada", "Hotel", "Resort"... (opcional)
   - `booking_url`: o link de afiliado
   - `price_hint`: ex: "A partir de R$ 280/noite" (opcional)
   - `display_order`: `0` ou `1` se quiser controlar qual aparece primeiro
   - `is_active`: deixe marcado (`true`) para aparecer no site
4. Salve a linha
5. Aguarde 1-2 minutos — a Vercel recebe o aviso e republica o site automaticamente
6. Confira em [viajandoporsp.com.br](https://www.viajandoporsp.com.br) na página do destino correspondente

## Testando localmente (opcional)

Se quiser rodar `pnpm dev` na sua máquina já puxando dados reais do Supabase:

1. Copie `.env.example` para `.env`
2. Preencha `SUPABASE_URL` e `SUPABASE_ANON_KEY` com os mesmos valores do Passo 3
3. Rode `pnpm dev` normalmente

Sem esse arquivo `.env`, o site continua funcionando local e no deploy normalmente — só que sem nenhuma hospedagem cadastrada (a seção "Onde Ficar" simplesmente não aparece nas páginas de destino).

## Troubleshooting

**Uma hospedagem não aparece no site** — confira se `is_active` está `true` e se `destination_id` bate exatamente com o id do destino em `destinations.ts` (maiúsculas/minúsculas e acentos importam).

**Editei a tabela e o site não atualizou** — confira na Vercel (aba Deployments) se um novo build foi disparado. Se não, revise o Webhook no Supabase (Database → Webhooks → veja o histórico de execuções e possíveis erros).

**Quero desligar essa funcionalidade temporariamente** — não precisa apagar nada: basta remover as variáveis `SUPABASE_URL`/`SUPABASE_ANON_KEY` da Vercel, ou marcar todas as linhas como `is_active = false`.
