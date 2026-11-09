// Informações por destino acrescentadas na revisão de SEO (nov/2026).
// - howToGetThere: um parágrafo por item, exibido em "Como chegar".
// - imageAlt: texto alternativo da foto principal (descreve o que a foto mostra).
// - updatedAt: data da última revisão do conteúdo da página (vai para o sitemap).
// O build (prerender.mjs) falha se algum destino estiver sem estes campos.

export interface DestinationExtras {
  howToGetThere: string[];
  imageAlt: string;
  updatedAt: string;
}

export const destinationExtras: Record<string, DestinationExtras> = {
  "aguas-de-lindoia": {
    howToGetThere: [
      "De carro, o caminho mais usado é pela Rodovia dos Bandeirantes (SP-348) ou Anhanguera (SP-330) até Campinas, seguindo por Jaguariúna e Amparo pelas estradas do Circuito das Águas. Outra opção é a Rodovia Fernão Dias (BR-381) até Atibaia, a Rodovia D. Pedro I (SP-065) até Itatiba e, de lá, Morungaba, Amparo e Serra Negra.",
      "De ônibus, há saídas diretas do Terminal Rodoviário Tietê, com as empresas Bragança e Rápido Fênix; a viagem leva cerca de 3h30.",
    ],
    imageAlt: "Portal de entrada de Águas de Lindóia, com duas torres em estilo enxaimel sobre a estrada",
    updatedAt: "2026-11-09",
  },
  "aguas-de-sao-pedro": {
    howToGetThere: [
      "De carro, siga pela Rodovia dos Bandeirantes (SP-348) até a região de Americana e pegue a Rodovia Luiz de Queiroz (SP-304) até Piracicaba. De lá, continue pela SP-304 em direção a São Pedro; Águas de São Pedro fica colada ao município vizinho.",
      "De ônibus, a viagem é feita pela Viação Piracicabana e pela VB Transportes.",
    ],
    imageAlt: "Lago cercado de vegetação tropical em um dos bosques de Águas de São Pedro",
    updatedAt: "2026-11-09",
  },
  "atibaia": {
    howToGetThere: [
      "De carro, é só seguir pela Rodovia Fernão Dias (BR-381) por cerca de 65 km a partir da capital. Para subir à Pedra Grande, a estrada final é íngreme: vá com calma e evite o horário de pico de fim de semana.",
      "De ônibus, há saídas frequentes do Terminal Rodoviário Tietê.",
    ],
    imageAlt: "Lago do Major com ponte em arco e torre de pedra em Atibaia",
    updatedAt: "2026-11-09",
  },
  "boituva": {
    howToGetThere: [
      "De carro, siga pela Rodovia Castello Branco (SP-280) por cerca de 115 km até o acesso a Boituva; o Centro Nacional de Paraquedismo fica perto da rodovia.",
      "De ônibus, há saídas do Terminal Rodoviário da Barra Funda, com várias partidas por dia.",
    ],
    imageAlt: "Caminho de terra ao lado de um canal arborizado em um parque de Boituva",
    updatedAt: "2026-11-09",
  },
  "botucatu": {
    howToGetThere: [
      "De carro, siga pela Rodovia Castello Branco (SP-280) até o acesso a Botucatu, a cerca de 230 km da capital. As cachoeiras ficam em estradas rurais da cuesta, algumas de terra: confira as condições depois de chuva.",
      "De ônibus, há saídas do Terminal Rodoviário da Barra Funda.",
    ],
    imageAlt: "Cachoeira larga em degraus caindo em um lago em Botucatu",
    updatedAt: "2026-11-09",
  },
  "brotas": {
    howToGetThere: [
      "De carro, siga pela Rodovia dos Bandeirantes (SP-348) e depois pela Rodovia Washington Luís (SP-310) até Itirapina, de onde a SP-225 leva a Brotas.",
      "De ônibus, há saídas do Terminal Rodoviário da Barra Funda com a Expresso de Prata.",
    ],
    imageAlt: "Cachoeira alta caindo de um paredão de pedra cercado de mata em Brotas",
    updatedAt: "2026-11-09",
  },
  "campos-do-jordao": {
    howToGetThere: [
      "De carro, siga pela Rodovia Ayrton Senna e Carvalho Pinto (SP-070) até a região de Taubaté, pegue um trecho curto da Via Dutra e suba a serra pela Rodovia Floriano Rodrigues Pinheiro (SP-123). Em feriados de julho a subida costuma ter fila: saia cedo.",
      "De ônibus, há saídas do Terminal Rodoviário Tietê com a Pássaro Marron.",
    ],
    imageAlt: "Vista do alto de Vila Capivari, em Campos do Jordão, com árvores de outono e casas na encosta",
    updatedAt: "2026-11-09",
  },
  "cunha": {
    howToGetThere: [
      "De carro, siga pela Via Dutra (BR-116) até Guaratinguetá e pegue a Rodovia Paulo Virgínio (SP-171), que sobe a serra até Cunha. Para os mirantes e a Pedra da Macela, parte do caminho é de estrada rural.",
    ],
    imageAlt: "Pôr do sol sobre camadas de montanhas da Serra do Mar vistas de Cunha",
    updatedAt: "2026-11-09",
  },
  "holambra": {
    howToGetThere: [
      "De carro, siga pela Rodovia dos Bandeirantes (SP-348) ou Anhanguera (SP-330) até Campinas e continue pela Rodovia Campinas–Mogi Mirim (SP-340) até o acesso a Holambra, perto de Jaguariúna.",
      "De ônibus, desde janeiro de 2026 há uma linha direta do Terminal Rodoviário Tietê para o centro de Holambra; outra opção é ir até Campinas e pegar o ônibus metropolitano.",
    ],
    imageAlt: "Fachadas coloridas em estilo holandês no Boulevard Holambra",
    updatedAt: "2026-11-09",
  },
  "ilhabela": {
    howToGetThere: [
      "De carro, siga pela Rodovia Ayrton Senna e Carvalho Pinto (SP-070) até São José dos Campos, desça a serra pela Rodovia dos Tamoios (SP-099) até Caraguatatuba e siga pela Rio-Santos até a balsa de São Sebastião. A travessia é feita pelo Governo do Estado; dá para agendar horário pelo sistema Hora Marcada e evitar a fila, que em feriados pode passar de horas.",
      "De ônibus, a Pássaro Marron sai do Terminal Rodoviário Tietê para São Sebastião; de lá, a balsa também leva pedestres.",
    ],
    imageAlt: "Baía de águas verdes cercada de mata atlântica e montanhas em Ilhabela",
    updatedAt: "2026-11-09",
  },
  "itu": {
    howToGetThere: [
      "De carro, siga pela Rodovia Castello Branco (SP-280) até o acesso a Itu, ou pela Rodovia dos Bandeirantes e a Rodovia Santos Dumont (SP-075), que passa por Itu e Salto.",
      "De ônibus, a viagem é feita pela Viação Vale do Tietê, com várias partidas por dia.",
    ],
    imageAlt: "Casarão colonial amarelo com jardim gramado em Itu",
    updatedAt: "2026-11-09",
  },
  "olimpia": {
    howToGetThere: [
      "De carro, siga pela Rodovia dos Bandeirantes (SP-348) e continue pela Rodovia Washington Luís (SP-310), sinalizada nesse trecho como BR-364 e BR-456, até a saída 395, em Catiguá. De lá, as rodovias Jeronymo Ignácio da Costa e Natal Brêda levam a Olímpia. São cerca de 450 km, entre 5h e 5h30 de viagem: programe paradas.",
      "De ônibus, a Danúbio Azul tem saídas diretas do Terminal Rodoviário Tietê.",
    ],
    imageAlt: "Piscina com ondas e toboáguas em parque aquático de Olímpia",
    updatedAt: "2026-11-09",
  },
  "ribeirao-preto": {
    howToGetThere: [
      "De carro, siga pela Rodovia dos Bandeirantes (SP-348) até o fim e continue pela Rodovia Anhanguera (SP-330) até Ribeirão Preto, cerca de 315 km de rodovias duplicadas.",
      "De ônibus, há várias partidas diárias do Terminal Rodoviário Tietê.",
    ],
    imageAlt: "Pôr do sol refletido em um lago cercado de mata em Ribeirão Preto",
    updatedAt: "2026-11-09",
  },
  "sao-roque": {
    howToGetThere: [
      "De carro, siga pela Rodovia Castello Branco (SP-280) até o acesso a São Roque, ou pela Rodovia Raposo Tavares (SP-270). O Roteiro do Vinho fica na Estrada do Vinho, a poucos quilômetros do centro.",
      "De ônibus, há saídas do Terminal Rodoviário da Barra Funda.",
    ],
    imageAlt: "Pistas de esqui e tobogã em parque de lazer de São Roque",
    updatedAt: "2026-11-09",
  },
  "santo-antonio-do-pinhal": {
    howToGetThere: [
      "De carro, siga pela Rodovia Ayrton Senna e Carvalho Pinto (SP-070) até a região de Taubaté, pegue um trecho da Via Dutra e suba a serra pela Rodovia Floriano Rodrigues Pinheiro (SP-123). O acesso a Santo Antônio do Pinhal fica no caminho de Campos do Jordão e é sinalizado.",
    ],
    imageAlt: "Trem da Estrada de Ferro Campos do Jordão parado na estação de Santo Antônio do Pinhal",
    updatedAt: "2026-11-09",
  },
  "santos": {
    howToGetThere: [
      "De carro, desça a serra pela Rodovia dos Imigrantes (SP-160) ou pela Anchieta (SP-150); são cerca de 75 km. Em feriados, a descida pode operar em sistema especial: confira a operação da Ecovias antes de sair.",
      "De ônibus, as saídas são do Terminal Rodoviário Jabaquara, ao lado da estação Jabaquara do metrô, com partidas frequentes ao longo do dia.",
    ],
    imageAlt: "Praia de Santos com faixa de areia e prédios da orla ao fundo",
    updatedAt: "2026-11-09",
  },
  "serra-negra": {
    howToGetThere: [
      "De carro, siga pela Rodovia Fernão Dias (BR-381) até Atibaia, a Rodovia D. Pedro I (SP-065) até Itatiba e, de lá, Morungaba e Amparo até Serra Negra. Outra opção é ir por Campinas e Jaguariúna.",
      "De ônibus, a viagem é feita pela Rápido Fênix.",
    ],
    imageAlt: "Réplica da Fontana di Trevi iluminada à noite em Serra Negra",
    updatedAt: "2026-11-09",
  },
  "socorro": {
    howToGetThere: [
      "De carro, siga pela Rodovia Fernão Dias (BR-381) até Bragança Paulista e continue pela rodovia que segue para Socorro. Quem vem pelo Circuito das Águas também chega por Amparo e Serra Negra.",
      "De ônibus, a viagem é feita pela Viação Bragança.",
    ],
    imageAlt: "Gruta do Anjo, com lago de água verde e paredes de rocha, em Socorro",
    updatedAt: "2026-11-09",
  },
  "ubatuba": {
    howToGetThere: [
      "De carro, siga pela Rodovia Ayrton Senna e Carvalho Pinto (SP-070) até Taubaté e desça a serra pela Rodovia Oswaldo Cruz (SP-125), que chega ao centro de Ubatuba. Outra opção é a Rodovia dos Tamoios (SP-099) até Caraguatatuba e a Rio-Santos para o norte.",
      "De ônibus, a Pássaro Marron tem saídas do Terminal Rodoviário Tietê.",
    ],
    imageAlt: "Praia de areia clara e água transparente com ilha coberta de mata em Ubatuba",
    updatedAt: "2026-11-09",
  },
  "sao-luiz-do-paraitinga": {
    howToGetThere: [
      "De carro, siga pela Rodovia Ayrton Senna e Carvalho Pinto (SP-070) até Taubaté e pegue a Rodovia Oswaldo Cruz (SP-125), sentido Ubatuba; São Luiz do Paraitinga fica no caminho, cerca de 45 km depois de Taubaté.",
    ],
    imageAlt: "Praça central de São Luiz do Paraitinga com coreto e a Igreja Matriz ao fundo",
    updatedAt: "2026-11-09",
  },
  "joanopolis": {
    howToGetThere: [
      "De carro, siga pela Rodovia Fernão Dias (BR-381) até Atibaia e continue pela estrada que passa por Piracaia até Joanópolis. Para as cachoeiras, os acessos finais são de estrada rural.",
      "De ônibus, a viagem é feita pela Viação Atibaia.",
    ],
    imageAlt: "Cachoeira entre pedras e mata em Joanópolis",
    updatedAt: "2026-11-09",
  },
  "monte-alegre-do-sul": {
    howToGetThere: [
      "De carro, siga pela Rodovia Fernão Dias (BR-381) até Atibaia, a Rodovia D. Pedro I (SP-065) até Itatiba e, de lá, Morungaba e Amparo. Monte Alegre do Sul fica entre Amparo e Serra Negra.",
    ],
    imageAlt: "Pequena queda d'água em rio cercado de árvores em Monte Alegre do Sul",
    updatedAt: "2026-11-09",
  },
  "pedra-bela": {
    howToGetThere: [
      "De carro, siga pela Rodovia Fernão Dias (BR-381) até Bragança Paulista e continue pela estrada que passa por Pinhalzinho até Pedra Bela. As rampas de voo livre ficam no alto da serra, com trechos de terra.",
    ],
    imageAlt: "Estátua do Cristo em mirante com vista para os morros de Pedra Bela",
    updatedAt: "2026-11-09",
  },
  "itapecerica-da-serra": {
    howToGetThere: [
      "De carro, saia pela zona sul da capital e siga pela Rodovia Régis Bittencourt (BR-116) ou pela Estrada de Itapecerica; são cerca de 35 km, mas o trânsito na saída da cidade pesa mais que a distância.",
      "De ônibus, as linhas metropolitanas 032 (Itapecerica da Serra – Metrô Vila Sônia) e 001 (Itapecerica da Serra – Metrô Capão Redondo) saem de estações do metrô e vão até o Parque Paraíso, em Itapecerica.",
    ],
    imageAlt: "Templo Kinkaku-ji do Brasil, pavilhão em estilo japonês à beira de um lago em Itapecerica da Serra",
    updatedAt: "2026-11-09",
  },
  "juquitiba": {
    howToGetThere: [
      "De carro, siga pela Rodovia Régis Bittencourt (BR-116) por cerca de 75 km; as bases de rafting ficam em estradas rurais próximas à rodovia.",
      "De ônibus, há linha direta do Terminal Rodoviário da Barra Funda para Juquitiba, operada pela Viação Valle Sul.",
    ],
    imageAlt: "Rio calmo refletindo a mata ao entardecer em Juquitiba",
    updatedAt: "2026-11-09",
  },
  "mogi-das-cruzes": {
    howToGetThere: [
      "De carro, siga pela Rodovia Ayrton Senna (SP-070) até o acesso a Mogi das Cruzes, a cerca de 60 km do centro de São Paulo.",
      "De trem, a Linha 11-Coral da CPTM vai até a estação Estudantes, em Mogi das Cruzes.",
    ],
    imageAlt: "Pôr do sol refletido em lago com prédios ao fundo em Mogi das Cruzes",
    updatedAt: "2026-11-09",
  },
  "nazare-paulista": {
    howToGetThere: [
      "De carro, siga pela Rodovia Fernão Dias (BR-381) até Atibaia e pegue a Rodovia D. Pedro I (SP-065), sentido Jacareí; Nazaré Paulista fica às margens da rodovia.",
      "De ônibus, a viagem é feita pela Viação Atibaia.",
    ],
    imageAlt: "Estrada de terra entre colinas verdes com a represa ao fundo em Nazaré Paulista",
    updatedAt: "2026-11-09",
  },
  "ibiuna": {
    howToGetThere: [
      "De carro, saia pela Rodovia Raposo Tavares (SP-270) e siga pela Rodovia Bunjiro Nakao (SP-250) até Ibiúna.",
      "De ônibus, a viagem é feita pela Viação Danúbio Azul.",
    ],
    imageAlt: "Pessoas descendo um tobogã natural de pedra em cachoeira de Ibiúna",
    updatedAt: "2026-11-09",
  },
  "lindoia": {
    howToGetThere: [
      "De carro, faça o mesmo caminho do Circuito das Águas: Rodovia dos Bandeirantes (SP-348) ou Anhanguera (SP-330) até Campinas, depois Jaguariúna, Amparo e Serra Negra. Lindóia fica ao lado de Águas de Lindóia.",
      "De ônibus, há saídas do Terminal Rodoviário Tietê para Lindóia.",
    ],
    imageAlt: "Foto ilustrativa de paisagem do interior paulista",
    updatedAt: "2026-11-09",
  },
  "serra-do-japi": {
    howToGetThere: [
      "De carro, siga pela Rodovia dos Bandeirantes (SP-348) ou Anhanguera (SP-330) até Jundiaí, a cerca de 60 km. A Base Ecológica da Serra do Japi fica a partir do bairro Malota.",
      "De trem, a Linha 7-Rubi da CPTM vai até a estação Jundiaí; de lá, é preciso táxi ou aplicativo até a serra.",
    ],
    imageAlt: "Pequena cachoeira caindo em poço de água cercado de mata na Serra do Japi",
    updatedAt: "2026-11-09",
  },
  "salto": {
    howToGetThere: [
      "De carro, siga pela Rodovia dos Bandeirantes (SP-348) e pela Rodovia Santos Dumont (SP-075), ou pela Rodovia Castello Branco até Itu e de lá até Salto, cidade vizinha.",
      "De ônibus, a viagem é feita pela Viação Vale do Tietê, com várias partidas por dia.",
    ],
    imageAlt: "Corredeiras do Rio Tietê entre pedras no centro de Salto",
    updatedAt: "2026-11-09",
  },
  "sao-sebastiao": {
    howToGetThere: [
      "De carro, há dois caminhos. Para o centro e as praias do norte, siga pela Rodovia Ayrton Senna e Carvalho Pinto (SP-070), desça pela Rodovia dos Tamoios (SP-099) até Caraguatatuba e continue pela Rio-Santos. Para as praias da Costa Sul, como Maresias e Juquehy, costuma ser mais rápido ir pela Mogi-Bertioga (SP-098) e seguir a Rio-Santos para o norte.",
      "De ônibus, a Pássaro Marron tem saídas do Terminal Rodoviário Tietê.",
    ],
    imageAlt: "Mar azul do canal de São Sebastião com Ilhabela ao fundo",
    updatedAt: "2026-11-09",
  },
  "caraguatatuba": {
    howToGetThere: [
      "De carro, siga pela Rodovia Ayrton Senna e Carvalho Pinto (SP-070) até São José dos Campos e desça a serra pela Rodovia dos Tamoios (SP-099), que chega direto a Caraguatatuba.",
      "De ônibus, a Pássaro Marron tem saídas do Terminal Rodoviário Tietê; a viagem leva cerca de 3 horas.",
    ],
    imageAlt: "Praia de Caraguatatuba com areia molhada e montanhas ao fundo",
    updatedAt: "2026-11-09",
  },
  "bertioga": {
    howToGetThere: [
      "De carro, o caminho mais direto é pela Rodovia Ayrton Senna (SP-070) até Mogi das Cruzes e a descida pela Rodovia Mogi-Bertioga (SP-098). Outra opção é descer pela Imigrantes (SP-160) e seguir pelo Guarujá até Bertioga.",
      "De ônibus, a viagem é feita pela Viação Ultra e pela Pássaro Marron.",
    ],
    imageAlt: "Guarita do Forte São João em frente à praia de Bertioga",
    updatedAt: "2026-11-09",
  },
  "cananeia": {
    howToGetThere: [
      "De carro, siga pela Rodovia Régis Bittencourt (BR-116) até Pariquera-Açu e continue pela estrada que leva a Cananéia.",
      "De ônibus, há saída direta do Terminal Rodoviário da Barra Funda, com viagem de cerca de 5 horas.",
    ],
    imageAlt: "Ilha com casarões à beira d'água no estuário de Cananéia",
    updatedAt: "2026-11-09",
  },
  "iporanga": {
    howToGetThere: [
      "De carro, siga pela Rodovia Régis Bittencourt (BR-116) até o acesso de Jacupiranga e continue pela SP-193 até Eldorado e pela SP-165 até Iporanga. São cerca de 340 km a partir de São Paulo, ou 5 horas de viagem; os acessos aos núcleos do PETAR têm trechos de terra.",
      "De ônibus, vá do Terminal Rodoviário da Barra Funda até Apiaí e, de lá, pegue a linha local para Iporanga. Como os núcleos do parque ficam distantes entre si, quem vai de ônibus normalmente contrata traslado com a pousada ou a agência.",
    ],
    imageAlt: "Boca de caverna com rio passando por baixo da rocha no PETAR, em Iporanga",
    updatedAt: "2026-11-09",
  },
  "eldorado": {
    howToGetThere: [
      "De carro, siga pela Rodovia Régis Bittencourt (BR-116) até Jacupiranga e pegue a SP-193 até Eldorado. A Caverna do Diabo fica na SP-165, entre Eldorado e Iporanga.",
      "De ônibus, há linhas do Terminal Rodoviário da Barra Funda para Eldorado.",
    ],
    imageAlt: "Salão iluminado com estalactites e estalagmites na Caverna do Diabo, em Eldorado",
    updatedAt: "2026-11-09",
  },
  "amparo": {
    howToGetThere: [
      "De carro, siga pela Rodovia Fernão Dias (BR-381) até Atibaia, a Rodovia D. Pedro I (SP-065) até Itatiba e, de lá, a estrada via Morungaba até Amparo. Outra opção é ir por Campinas e Jaguariúna.",
      "De ônibus, a viagem é feita pela Rápido Fênix e pela Piracicabana.",
    ],
    imageAlt: "Casarões históricos coloridos no centro de Amparo",
    updatedAt: "2026-11-09",
  },
  "pedreira": {
    howToGetThere: [
      "De carro, siga pela Rodovia dos Bandeirantes (SP-348) ou Anhanguera (SP-330) até Campinas, pegue a Rodovia Campinas–Mogi Mirim (SP-340) até Jaguariúna e siga até Pedreira. As lojas de louças ficam concentradas no centro e nas avenidas de entrada.",
      "De ônibus, a viagem é feita pela Rápido Fênix e pela Piracicabana.",
    ],
    imageAlt: "Prédio histórico rosa visto da ponte no centro de Pedreira",
    updatedAt: "2026-11-09",
  },
  "porto-ferreira": {
    howToGetThere: [
      "De carro, siga pela Rodovia dos Bandeirantes (SP-348) e depois pela Rodovia Anhanguera (SP-330), que passa por Porto Ferreira; são cerca de 240 km. As lojas de cerâmica ficam ao longo da própria rodovia e no centro.",
    ],
    imageAlt: "Pilhas de tigelas de cerâmica pintadas em vermelho e amarelo em loja de Porto Ferreira",
    updatedAt: "2026-11-09",
  },
  "piracicaba": {
    howToGetThere: [
      "De carro, siga pela Rodovia dos Bandeirantes (SP-348) até a região de Americana e pegue a Rodovia Luiz de Queiroz (SP-304) até Piracicaba.",
      "De ônibus, a Viação Piracicabana tem saídas do Terminal Rodoviário Tietê.",
    ],
    imageAlt: "Engenho Central às margens do Rio Piracicaba",
    updatedAt: "2026-11-09",
  },
  "guaruja": {
    howToGetThere: [
      "De carro, desça pela Rodovia dos Imigrantes (SP-160) ou Anchieta (SP-150) e siga pela Rodovia Cônego Domênico Rangoni até o Guarujá. Outra opção é a balsa Santos–Guarujá, operada pelo Governo do Estado.",
      "De ônibus, as saídas são do Terminal Rodoviário Jabaquara.",
    ],
    imageAlt: "Praia urbana do Guarujá com mar verde e prédios na orla",
    updatedAt: "2026-11-09",
  },
  "santana-de-parnaiba": {
    howToGetThere: [
      "De carro, siga pela Rodovia Castello Branco (SP-280) até a saída para Santana de Parnaíba, a cerca de 40 km do centro de São Paulo. Estacione e conheça o centro histórico a pé.",
      "De ônibus, as linhas metropolitanas 467 (Terminal Municipal de Santana de Parnaíba – Lapa) e 085 (Parque Santana – Lapa) da EMTU ligam a cidade à zona oeste de São Paulo.",
      "De trem, pegue a Linha 8-Diamante (embarque em Palmeiras-Barra Funda ou Júlio Prestes) até a estação Barueri e, de lá, um ônibus para Santana de Parnaíba, como as linhas 246EX1 e 824EX1; o trecho de ônibus leva cerca de 30 minutos.",
    ],
    imageAlt: "Rua do centro histórico de Santana de Parnaíba com casarões coloridos e cortejo com tambores",
    updatedAt: "2026-11-09",
  },
  "bananal": {
    howToGetThere: [
      "De carro, o caminho mais rápido é pela Rodovia Ayrton Senna e Carvalho Pinto (SP-070) e depois pela Via Dutra (BR-116) até Barra Mansa, já no estado do Rio de Janeiro. De lá, são cerca de 25 km pela Rodovia Eng. Alexandre Drable (SP-064) até Bananal, no pé da Serra da Bocaina. São cerca de 340 km e 4h30 de viagem; vale dormir na cidade.",
      "De ônibus, não há linha direta da capital: é preciso trocar de ônibus em Guaratinguetá.",
    ],
    imageAlt: "Vale verde entre montanhas da Serra da Bocaina, em Bananal",
    updatedAt: "2026-11-09",
  },
  "sao-jose-dos-campos": {
    howToGetThere: [
      "De carro, siga pela Via Dutra (BR-116) ou pela Rodovia Ayrton Senna e Carvalho Pinto (SP-070); são cerca de 95 km.",
      "De ônibus, a Pássaro Marron tem saídas frequentes do Terminal Rodoviário Tietê.",
    ],
    imageAlt: "Lago e edifício modernista em parque arborizado de São José dos Campos",
    updatedAt: "2026-11-09",
  },
  "francisco-xavier": {
    howToGetThere: [
      "De carro, vá até São José dos Campos pela Via Dutra (BR-116) ou pela Rodovia Carvalho Pinto (SP-070) e siga para o norte pela estrada de serra que leva ao distrito de São Francisco Xavier. É o trecho mais lento da viagem, com muitas curvas.",
    ],
    imageAlt: "Chalé de madeira na encosta com montanhas ao fundo em São Francisco Xavier",
    updatedAt: "2026-11-09",
  },
  "parque-cantareira": {
    howToGetThere: [
      "De carro, siga até Guarulhos e use o GPS com o endereço do Núcleo Cabuçu do Parque Estadual da Cantareira; o acesso final é pelo bairro Cabuçu. O parque cobra ingresso e tem horário de funcionamento: confira no site da Fundação Florestal antes de ir.",
    ],
    imageAlt: "Cachoeira em degraus entre pedras e mata atlântica no Parque Estadual da Cantareira",
    updatedAt: "2026-11-09",
  },
  "jundiai-rota-vinho": {
    howToGetThere: [
      "De carro, siga pela Rodovia dos Bandeirantes (SP-348) ou Anhanguera (SP-330) até Jundiaí, a cerca de 60 km. As adegas da Rota do Vinho ficam nos bairros rurais Caxambu e Roseira.",
      "De trem, a Linha 7-Rubi da CPTM vai até a estação Jundiaí; de lá, é preciso táxi ou aplicativo até as adegas.",
    ],
    imageAlt: "Parreiras de uva em vinhedo da Rota do Vinho de Jundiaí",
    updatedAt: "2026-11-09",
  },
  "vinhedo": {
    howToGetThere: [
      "De carro, siga pela Rodovia Anhanguera (SP-330) até Vinhedo, a cerca de 80 km; o Hopi Hari fica às margens da própria Anhanguera. Pela Rodovia dos Bandeirantes (SP-348) também há acesso.",
      "De ônibus, a LiraBus tem saídas do Terminal Rodoviário Tietê.",
    ],
    imageAlt: "Montanha-russa de madeira e castelo colorido no parque Hopi Hari, em Vinhedo",
    updatedAt: "2026-11-09",
  },
  "louveira": {
    howToGetThere: [
      "De carro, siga pela Rodovia Anhanguera (SP-330) ou pela Rodovia dos Bandeirantes (SP-348) até Louveira, cerca de 85 km; a cidade fica entre Jundiaí e Vinhedo.",
    ],
    imageAlt: "Pessoa segurando sacolas de compras em frente a vitrine de loja",
    updatedAt: "2026-11-09",
  },
};

export function getExtras(id: string): DestinationExtras {
  const e = destinationExtras[id];
  if (!e) throw new Error(`destinationExtras sem entrada para "${id}"`);
  return e;
}
