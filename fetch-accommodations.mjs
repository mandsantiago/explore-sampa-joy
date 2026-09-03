// Busca a tabela "accommodations" do Supabase e gera um arquivo TypeScript
// estático com os dados, que é importado pelo app normalmente — igual ao
// destinations.ts. Isso roda ANTES do "vite build" (veja os scripts em
// package.json), então o Supabase nunca é consultado pelo navegador de quem
// visita o site: tudo já vem pronto no HTML/JS publicado.
//
// Variáveis de ambiente necessárias (configure na Vercel em
// Settings → Environment Variables, e localmente em um arquivo .env — veja
// .env.example):
//   SUPABASE_URL       ex: https://xxxxxxxx.supabase.co
//   SUPABASE_ANON_KEY   a chave pública "anon" do projeto
//
// Se essas variáveis não estiverem configuradas (ex: primeira vez rodando o
// projeto, ou antes de criar a tabela no Supabase), o script não quebra o
// build — só gera um arquivo vazio e avisa no terminal.

import { writeFileSync } from "fs";

const OUTPUT_PATH = "client/src/lib/accommodations.generated.ts";

const FILE_HEADER = `// ⚠️ ARQUIVO GERADO AUTOMATICAMENTE — não edite à mão.
// Gerado por fetch-accommodations.mjs a partir da tabela "accommodations" do
// Supabase, toda vez que o site é buildado (pnpm dev / pnpm build).
// Para mudar uma hospedagem, edite a tabela no painel do Supabase — não este
// arquivo.

export interface Accommodation {
  name: string;
  type: string | null;
  bookingUrl: string;
  priceHint: string | null;
}

`;

function writeEmptyFile(reason) {
  const content =
    FILE_HEADER +
    `// ${reason}\nexport const accommodationsByDestination: Record<string, Accommodation[]> = {};\n`;
  writeFileSync(OUTPUT_PATH, content);
  console.warn(`⚠️  accommodations.generated.ts gerado VAZIO: ${reason}`);
}

async function main() {
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    writeEmptyFile(
      "variáveis SUPABASE_URL / SUPABASE_ANON_KEY não configuradas"
    );
    return;
  }

  const endpoint =
    `${SUPABASE_URL}/rest/v1/accommodations` +
    `?select=destination_id,name,type,booking_url,price_hint,display_order` +
    `&is_active=eq.true&order=display_order.asc`;

  let rows;
  try {
    const res = await fetch(endpoint, {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });
    if (!res.ok) {
      throw new Error(`Supabase respondeu ${res.status}: ${await res.text()}`);
    }
    rows = await res.json();
  } catch (err) {
    // Nunca derruba o build por causa disso — o site simplesmente fica sem
    // a seção de hospedagem até o próximo build funcionar.
    writeEmptyFile(`falha ao buscar do Supabase (${err.message})`);
    return;
  }

  const grouped = {};
  for (const row of rows) {
    if (!grouped[row.destination_id]) grouped[row.destination_id] = [];
    grouped[row.destination_id].push({
      name: row.name,
      type: row.type,
      bookingUrl: row.booking_url,
      priceHint: row.price_hint,
    });
  }

  const content =
    FILE_HEADER +
    `export const accommodationsByDestination: Record<string, Accommodation[]> = ${JSON.stringify(
      grouped,
      null,
      2
    )};\n`;

  writeFileSync(OUTPUT_PATH, content);
  console.log(
    `✅ accommodations.generated.ts gerado com ${rows.length} hospedagem(ns) em ${Object.keys(grouped).length} destino(s)`
  );
}

main();
