-- Cole este SQL inteiro no Supabase: menu "SQL Editor" → "New query" → colar → "Run".
-- Cria a tabela de hospedagens e configura a segurança (RLS) para que:
--   - qualquer pessoa (inclusive o site publicado) consiga LER as hospedagens ativas
--   - ninguém além de você (logada no painel do Supabase) consiga criar/editar/apagar linhas
--
-- destination_id precisa ser exatamente o mesmo "id" usado em
-- client/src/lib/destinations.ts (ex: "ubatuba", "campos-do-jordao").

create table accommodations (
  id uuid primary key default gen_random_uuid(),
  destination_id text not null,
  name text not null,
  type text,                -- ex: "Pousada", "Hotel", "Resort" (opcional)
  booking_url text not null, -- o link de afiliado (Booking, Airbnb, etc.)
  price_hint text,          -- ex: "A partir de R$ 250/noite" (opcional)
  display_order int not null default 0, -- controla a ordem quando há mais de 1 por cidade
  is_active boolean not null default true, -- desmarque para "esconder" sem apagar
  created_at timestamptz not null default now()
);

-- Acelera a busca "todas as hospedagens de uma cidade" (é assim que o site consulta)
create index idx_accommodations_destination_id on accommodations(destination_id);

-- Liga a segurança por linha (RLS) — sem isso, a chave pública poderia
-- teoricamente alterar dados, não só ler.
alter table accommodations enable row level security;

-- Permite leitura pública (a chave "anon" que o build do site usa) somente
-- das linhas marcadas como ativas.
create policy "Leitura pública de hospedagens ativas"
  on accommodations for select
  using (is_active = true);

-- Exemplo de como inserir uma hospedagem (pode rodar isso também, ou usar a
-- interface visual em "Table Editor" depois de criar a tabela):
--
-- insert into accommodations (destination_id, name, type, booking_url, price_hint, display_order)
-- values (
--   'ubatuba',
--   'Pousada Exemplo',
--   'Pousada',
--   'https://www.booking.com/seu-link-de-afiliado',
--   'A partir de R$ 280/noite',
--   1
-- );
