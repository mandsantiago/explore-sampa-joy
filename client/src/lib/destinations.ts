export type Category = 
  | "História"
  | "Natureza & Aventura"
  | "Destinos Românticos"
  | "Para ir com Crianças"
  | "Para Curtir o Frio"
  | "Para Curtir o Verão"
  | "Vinho & Lazer"
  | "Bate e Volta";

export interface Destination {
  id: string;
  name: string;
  categories: Category[];
  distance: number;
  drivingHours: number;
  rating: number;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  topAttractions: string[];
  bestSeason: string;
  latitude: number;
  longitude: number;
  whatToDo?: {
    title: string;
    description: string;
    items: Array<{
      name: string;
      description: string;
    }>;
  };
  whereToDine?: {
    intro: string;
    categories: Array<{
      name: string;
      description: string;
    }>;
  };
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

export const destinations: Destination[] = [
  {
    id: "aguas-de-lindoia",
    name: "Águas de Lindóia",
    categories: ["Destinos Românticos", "Para Curtir o Frio", "Para ir com Crianças"],
    distance: 175,
    drivingHours: 2.2,
    rating: 4.6,
    shortDescription: "Estância hidromineral com águas termais, spas e pousadas charmosas.",
    fullDescription: "Águas de Lindóia é uma clássica estância hidromineral do Circuito das Águas Paulista, famosa pelas fontes de água mineral, spas e clima ameno o ano inteiro. A cidade tem parques bem cuidados, o Balneário Municipal, teleférico com vista panorâmica e o Morro do Cruzeiro. Ideal para casais em busca de descanso e para quem quer relaxar em pousadas aconchegantes com café colonial reforçado.",
    imageUrl: "/images/aguas_de_lindoia_2_cd622d3d.jpg",
    topAttractions: ["Balneário Municipal", "Teleférico", "Morro do Cruzeiro", "Praça Adhemar de Barros", "Fonte Vitória"],
    bestSeason: "Outono e inverno para aproveitar o clima seco.",
    latitude: -22.6167,
    longitude: -46.6333,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Praça Adhemar de Barros",
          description: "Ponto de partida natural do passeio. Projetada pelo paisagista Roberto Burle Marx, tem lago com aves e capivaras, área verde cuidada, quiosques e food trucks. Ótima para caminhar no fim da tarde; recebe feirinhas e eventos ao longo do ano."
        },
        {
          name: "Balneário Municipal",
          description: "Principal símbolo do turismo de bem-estar da cidade, com piscinas termais, massagens, duchas e banhos de imersão em meio a jardins históricos."
        },
        {
          name: "Morro do Cruzeiro e Mirante do Cristo",
          description: "Vista panorâmica da cidade, um dos melhores pontos para o pôr do sol."
        },
        {
          name: "Portal de Entrada",
          description: "Arquitetura em estilo alpino, um dos pontos mais fotografados da cidade, com estacionamento gratuito."
        },
        {
          name: "Parque aquático e turismo rural",
          description: "Parque com piscinas climatizadas e toboáguas, ótimo para famílias; nas propriedades rurais do entorno dá pra fazer trilhas, passeios a cavalo e provar comida caseira."
        }
      ]
    },
    whereToDine: {
      intro: "A gastronomia local tem influência italiana e mineira, já que a região fica na divisa entre os dois estados. Vale dividir o roteiro entre o centro (perto da Praça Adhemar de Barros) e opções mais tranquilas fora do corredor turístico.",
      categories: [
        {
          name: "Cantinas italianas com buffet self-service",
          description: "Tradicionais, cobradas por quilo, bom custo-benefício no almoço"
        },
        {
          name: "Restaurantes temáticos no centro",
          description: "Cafés e bistrôs decorados, cardápios variados"
        },
        {
          name: "Lanchonetes tradicionais",
          description: "Ótimas para lanche rápido ou café da tarde"
        },
        {
          name: "Café colonial",
          description: "Vale reservar uma manhã para queijos frescos e doces caseiros"
        }
      ]
    }
  },
  {
    id: "aguas-de-sao-pedro",
    name: "Águas de São Pedro",
    categories: ["Destinos Românticos", "Para ir com Crianças"],
    distance: 190,
    drivingHours: 2.4,
    rating: 4.5,
    shortDescription: "A menor estância hidromineral do Brasil, cercada por bosques.",
    fullDescription: "Águas de São Pedro é uma das menores cidades do estado, mas concentra três das águas minerais mais medicinais do país. O Parque Dr. Octávio Moura Andrade, o Balneário e as trilhas urbanas convidam a caminhadas tranquilas. Boa opção para quem busca sossego, hotéis-fazenda e gastronomia interiorana com forte influência italiana.",
    imageUrl: "/images/aguas_de_sao_pedro_722031e1.jpg",
    topAttractions: ["Balneário Municipal", "Parque Dr. Octávio Moura Andrade", "Bosque Sagrado Coração de Jesus", "Fonte Juventude", "Avenida Carlos Mauro"],
    bestSeason: "Ano inteiro; primavera é encantadora.",
    latitude: -22.7333,
    longitude: -47.8667,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Avenida Carlos Mauro",
          description: "A rua principal e ponto de partida ideal, reúne boa parte do comércio da cidade (restaurantes, cafeterias, sorveterias) e leva a outras atrações como o Boulevard e o Fontanário."
        },
        {
          name: "Spa Thermal Dr. Octávio Moura Andrade",
          description: "O principal atrativo da cidade, com banhos na água sulfurosa da Fonte Juventude, conhecida por suas propriedades terapêuticas."
        },
        {
          name: "Parque Municipal Dr. Octavio Moura Andrade",
          description: "Área verde com mais de 1 milhão de m², com trilhas, arvorismo, tirolesa, pista de kart e passeio de trenzinho — ótimo para famílias."
        },
        {
          name: "Boulevard e Escadão de Águas",
          description: "Calçadão de compras com lojinhas, bares e o \"Escadão\", ponto certo para fotos."
        },
        {
          name: "Fontanário Municipal",
          description: "Onde é possível experimentar (e levar de garrafinha) a água mineral da cidade."
        },
        {
          name: "Relógio do Sol",
          description: "Curiosidade simples, mas charmosa, decorada com pintura inspirada em Romero Britto."
        },
        {
          name: "Trenzinho da Abelha / Apiário",
          description: "Passeio educativo sobre apicultura, indicado para crianças."
        }
      ]
    },
    whereToDine: {
      intro: "A gastronomia local oferece desde opções italianas sofisticadas até churrascarias e restaurantes mexicanos, com destaque para estabelecimentos aconchegantes e de bom custo-benefício.",
      categories: [
        {
          name: "Villa Tardivelli",
          description: "Clima de vila italiana, massas artesanais e risotos, ambiente romântico com terraço — boa pedida para casais."
        },
        {
          name: "Restaurante Fazendão",
          description: "Buffet self-service por quilo, opção prática e com bom custo-benefício."
        },
        {
          name: "Mi Hermana Cantina Mexicana",
          description: "Cardápio mexicano completo (tacos, burritos, fajitas), no Shopping Villa Rodrigues."
        },
        {
          name: "Restaurante do Brilio",
          description: "Especializado em churrasco, com destaque para o costelão assado na brasa."
        },
        {
          name: "Truf's Café",
          description: "Café aconchegante, famoso pelos cannolis."
        }
      ]
    }
  },
  {
    id: "atibaia",
    name: "Atibaia",
    categories: ["Natureza & Aventura"],
    distance: 65,
    drivingHours: 0.8,
    rating: 4.6,
    shortDescription: "Cidade da Pedra Grande, das flores e do morango.",
    fullDescription: "Atibaia é cercada por serras e famosa pela Pedra Grande, um mirante gigantesco com vista de tirar o fôlego. A cidade sedia a Festa das Flores e do Morango, tem hotéis-fazenda e parques como o Edmundo Zanoni. É bate-e-volta perfeito de São Paulo, com opções de trilhas leves, gastronomia japonesa e voo livre para os aventureiros.",
    imageUrl: "/images/atibaia_650301cd.jpg",
    topAttractions: ["Pedra Grande", "Parque Edmundo Zanoni", "Festa das Flores e do Morango", "Alto da Serra do Itapetinga", "Trilhas e voo livre"],
    bestSeason: "Agosto e setembro para a Festa das Flores. Primavera para as flores; outono para o clima.",
    latitude: -23.1167,
    longitude: -46.5500,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Pedra Grande",
          description: "O cartão-postal da cidade, com 1.418 metros de altitude e vista para diversos municípios vizinhos. É também um dos points do Brasil para voo livre (asa-delta e parapente) e conta com trilha de rapel para iniciantes."
        },
        {
          name: "Parque Edmundo Zanoni",
          description: "Área verde de 38 mil m² no centro, com flores, árvores e animais exóticos — bom para uma caminhada tranquila."
        },
        {
          name: "Lago do Major",
          description: "Uma das áreas mais movimentadas da cidade, cercada de bares e restaurantes; de lá também sai o teleférico que sobe até a parte alta da cidade em um passeio de cerca de 15 minutos."
        },
        {
          name: "Fazenda Paraíso",
          description: "Antiga produtora de café com alambique de cachaça de 1910, aberta para visitação e degustação."
        },
        {
          name: "Reserva do Vuna",
          description: "30 km de trilhas em meio à Mata Atlântica, com cachoeiras, riachos e grutas, indicada para quem gosta de trilha guiada."
        },
        {
          name: "Mercado do Rosário",
          description: "Espaço histórico com produtos locais e artesanato, bom para fechar o passeio pelo centro."
        }
      ]
    },
    whereToDine: {
      intro: "A gastronomia de Atibaia oferece desde a culinária caipira tradicional até opções internacionais, com destaque para pratos rurais autênticos e ingredientes locais.",
      categories: [
        {
          name: "Fazenda Paraíso",
          description: "Café da manhã colonial completo e pratos da culinária rural, em ambiente de fazenda."
        },
        {
          name: "Restaurante Seo Dito",
          description: "Comida caipira tradicional, boa opção para quem busca sabores regionais autênticos."
        },
        {
          name: "Cantina do Tio Luiz",
          description: "No centro, conhecida pelos pães artesanais e queijos caseiros com geleias."
        },
        {
          name: "Sushi Kyowa",
          description: "Culinária japonesa com à la carte e rodízio, ambiente que também recebe famílias com crianças."
        },
        {
          name: "Oh, Pá! Restaurante Português",
          description: "Para quem busca algo diferente do circuito regional, com pratos da culinária portuguesa."
        }
      ]
    }
  },
  {
    id: "boituva",
    name: "Boituva",
    categories: ["Natureza & Aventura"],
    distance: 115,
    drivingHours: 1.4,
    rating: 4.5,
    shortDescription: "Capital nacional do paraquedismo e do balonismo.",
    fullDescription: "Boituva é mundialmente conhecida como a capital do paraquedismo e balonismo no Brasil. A cidade oferece escolas de paraquedismo de renome internacional e voos de balão com vistas panorâmicas. Ideal para aventureiros que buscam adrenalina e experiências únicas.",
    imageUrl: "/images/boituva_30e981ae.jpg",
    topAttractions: ["Voos de balão", "Museu do Balonismo", "Pista de pouso", "Restaurantes"],
    bestSeason: "Julho para o festival de balonismo",
    latitude: -23.1500,
    longitude: -48.4167,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Paraquedismo",
          description: "A principal atração da cidade, com diversas empresas especializadas oferecendo saltos duplos (com instrutor) para iniciantes."
        },
        {
          name: "Passeio de balão",
          description: "Voo com vista panorâmica da região, geralmente ao amanhecer."
        },
        {
          name: "Túnel do Vento",
          description: "Simula a sensação de queda livre para quem não quer (ou não pode) saltar de avião; também usado por atletas para treino."
        },
        {
          name: "Rotas de cicloturismo",
          description: "Quatro roteiros de bike (Artes, Cidade, Gamero e Cachaça) que somam cerca de 72 km, com saída da Praça da Matriz."
        },
        {
          name: "Museu do Tropeiro",
          description: "Acervo com mais de 700 peças sobre a história dos tropeiros da região."
        },
        {
          name: "Fazenda do Pinhal",
          description: "Fazenda histórica de mais de 200 anos, com produção de cachaça artesanal e visita ao processo de fabricação."
        },
        {
          name: "Centro da cidade",
          description: "Praça principal com a Igreja de São Roque, guarda-chuvas coloridos e barracas de comida nos finais de semana."
        },
        {
          name: "Parque Ecológico Eugênio Walter",
          description: "Zoológico com mais de 75 animais em área de 136 mil m², boa opção para famílias."
        }
      ]
    },
    whereToDine: {
      intro: "A gastronomia de Boituva oferece desde comida caseira até churrascaria completa, com destaque para pratos caipiras e opções variadas para grupos.",
      categories: [
        {
          name: "Restaurante Goiano",
          description: "Comida caseira com menu variado e bons drinks, uma das referências gastronômicas da cidade."
        },
        {
          name: "Churrascaria Grill Sul",
          description: "Churrascaria completa, com mais de 18 tipos de carne e buffet no estilo gaúcho."
        },
        {
          name: "Restaurante Micaxu",
          description: "Ambiente arborizado e aconchegante, boa opção para uma refeição mais tranquila."
        },
        {
          name: "Restaurante The One",
          description: "Cardápio variado com carnes, peixes, massas, risotos e rodízio — bom para grupos com gostos diferentes."
        },
        {
          name: "Chácara Samambaia",
          description: "Combina hospedagem com gastronomia caipira, ótimo para famílias que já estão fazendo um passeio de aventura na região."
        }
      ]
    }
  },
  {
    id: "botucatu",
    name: "Botucatu",
    categories: ["Natureza & Aventura"],
    distance: 235,
    drivingHours: 2.9,
    rating: 4.5,
    shortDescription: "Cuesta paulista, cachoeiras e o Rio Pardo cristalino.",
    fullDescription: "Botucatu está no alto da cuesta paulista, com vistas panorâmicas para o vale do Rio Pardo. Rota da Chapada Paulista concentra cachoeiras, cavernas e trilhas. A cidade também tem forte tradição universitária e produtiva, com fazendas centenárias e o famoso Morro do Peru para observar o pôr do sol.",
    imageUrl: "/images/botucatu_d4b332ce.jpg",
    topAttractions: ["Morro do Peru", "Rio Pardo", "Cachoeiras", "Trilhas", "Mirantes"],
    bestSeason: "Entre abril e setembro para trilhas.",
    latitude: -22.7667,
    longitude: -48.4500,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Pedra do Índio",
          description: "Um dos cartões-postais da cidade, com um deck amplo e vista panorâmica. O acesso é por uma trilha de cerca de 2 km (ida e volta), com grutas e mirantes pelo caminho — ótimo para ver o pôr do sol."
        },
        {
          name: "Complexo Turístico Véu da Noiva",
          description: "Trilhas que levam a quedas d'água de cerca de 6 metros de altura, a apenas 30 minutos do centro; entrada gratuita, aberto diariamente."
        },
        {
          name: "Gigante Deitado",
          description: "Formação rochosa entre os municípios de Botucatu, Pardinho e Bofete, que lembra a silhueta de um gigante deitado quando visto de longe."
        },
        {
          name: "Fazenda Lageado / Museu do Café",
          description: "Antiga fazenda cafeeira do século 19, hoje pertencente à Unesp, com parques abertos ao público, lagos e animais silvestres circulando livremente; o museu funciona na Casa Grande histórica."
        },
        {
          name: "Jardim Botânico do Instituto de Biociências",
          description: "Área verde de cerca de 10 hectares com trilhas ecológicas e boa diversidade de aves."
        },
        {
          name: "Catedral Sant'Ana",
          description: "Ponto de referência no centro da cidade, para quem quer incluir um passeio urbano no roteiro."
        }
      ]
    },
    whereToDine: {
      intro: "A gastronomia de Botucatu oferece desde comida caipira tradicional até pizzas fritas e frutos do mar, com destaque para restaurantes rurais com vista para a natureza.",
      categories: [
        {
          name: "Restaurantes rurais na região da Cuesta",
          description: "Vários espaços especializados em comida caipira, com buffet à vontade e churrasco de fogo de chão, geralmente abertos nos finais de semana."
        },
        {
          name: "Pizzarias tradicionais",
          description: "A cidade tem casas conhecidas pela pizza frita, um prato bastante procurado por quem visita Botucatu."
        },
        {
          name: "Restaurantes de peixes e frutos do mar em área rural",
          description: "Opções com deck e vista para a natureza, fugindo do circuito tradicional do centro."
        },
        {
          name: "Bairro Demétria",
          description: "Reduto com concentração de restaurantes, indicado por quem já mora ou visita a cidade com frequência."
        }
      ]
    }
  },
  {
    id: "brotas",
    name: "Brotas",
    categories: ["Natureza & Aventura"],
    distance: 250,
    drivingHours: 3.1,
    rating: 4.7,
    shortDescription: "Capital da aventura com rafting no Rio Jacaré-Pepira.",
    fullDescription: "Brotas é conhecida como a Capital da Aventura do estado de São Paulo, oferecendo atividades radicais como rafting, cachoeiras e trilhas. Fica a cerca de 250 km da capital, sendo um destino popular para fins de semana de aventura e ecoturismo.",
    imageUrl: "/images/brotas_8f2c1d5e.jpg",
    topAttractions: ["Rafting", "Cachoeiras", "Ecoparque Cassorova", "Rio Jacaré-Pepira"],
    bestSeason: "Verão para melhor volume de água nos rios",
    latitude: -22.2833,
    longitude: -48.4000,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Rafting no Rio Jacaré-Pepira",
          description: "A atividade mais famosa da cidade, praticamente obrigatória para quem visita Brotas pela primeira vez."
        },
        {
          name: "Ecoparque Cassorova",
          description: "Abriga a \"cachoeira mais bonita de Brotas\", eleita pelo Guia Quatro Rodas, com boa estrutura para turistas (restaurante, piscina, estacionamento)."
        },
        {
          name: "Parque dos Saltos",
          description: "No centro da cidade, reúne trilhas fáceis com vista para as quedas d'água do Rio Jacaré-Pepira, além de uma ponte pênsil e a antiga casa de máquinas de uma usina hidrelétrica do século 19."
        },
        {
          name: "Nascente Areia que Canta",
          description: "Piscina natural de águas transparentes a 15 km do centro, formada sobre um poço de grãos de quartzo que emitem um som peculiar ao serem friccionados."
        },
        {
          name: "Passeios de quadriciclo",
          description: "Opção para explorar trilhas e paisagens da região em diferentes circuitos."
        },
        {
          name: "Museu do Caipira (Casa da Cachaça)",
          description: "Bom programa cultural para quem quer conhecer um pouco da história local."
        },
        {
          name: "Praça Amador Simões e Igreja Matriz",
          description: "Centro histórico da cidade, com a igreja construída no início do século 20, cercado de lojinhas de artesanato e docerias."
        },
        {
          name: "Estação Ferroviária Brotense",
          description: "Construção preservada de 1982, ponto turístico voltado para quem gosta de história."
        }
      ]
    },
    whereToDine: {
      intro: "A maior parte dos restaurantes fica entre as avenidas Mário Pinotti e Rodolfo Guimarães, reunindo tanto opções tradicionais quanto casas mais diferenciadas. Muitos estabelecimentos trabalham com ingredientes frescos e produzidos na região.",
      categories: [
        {
          name: "Brotas Bar",
          description: "Ambientação temática ligada ao rafting, com mesa em formato de bote e decoração esportiva, funciona também como point de encontro."
        },
        {
          name: "Restaurantes com ingredientes locais",
          description: "Muitos estabelecimentos trabalham com ingredientes frescos e produzidos na região, o que às vezes significa um tempo de espera maior, mas compensa em qualidade."
        },
        {
          name: "Empórios com produtos locais",
          description: "No centrinho da cidade há empórios com produtos locais, como cachaças artesanais, compotas e doces caseiros — boas opções para lanches e para levar de lembrança."
        }
      ]
    }
  },
  {
    id: "campos-do-jordao",
    name: "Campos do Jordão",
    categories: ["Destinos Românticos", "Para Curtir o Frio"],
    distance: 170,
    drivingHours: 2.1,
    rating: 4.8,
    shortDescription: "A Suíça brasileira, com fondues e clima europeu.",
    fullDescription: "Campos do Jordão é a estação de inverno mais famosa do Brasil, com clima europeu, ruas charmosas e arquitetura que remete aos Alpes. A cidade oferece fondue, chocolate quente, lojas de artesanato e pousadas aconchegantes. Ideal para casais e famílias em busca de romance e aconchego.",
    imageUrl: "/images/campos_do_jordao_4e9a51f3.jpg",
    topAttractions: ["Rua Macedo", "Capella de São Pedro", "Horto Florestal", "Teleférico", "Pousadas"],
    bestSeason: "Inverno (junho a agosto) para aproveitar o frio.",
    latitude: -22.7500,
    longitude: -45.5833,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Vila Capivari",
          description: "Coração turístico da cidade, com lojas de malhas, chocolaterias, restaurantes e bares com música ao vivo. É onde a cidade mais se movimenta à noite, ótimo para caminhar e fazer compras."
        },
        {
          name: "Parque Capivari e Teleférico do Morro do Elefante",
          description: "Parque com roda-gigante, pedalinhos e um teleférico que sobe até o Morro do Elefante, com vista panorâmica da cidade. Entrada no parque é gratuita; as atrações são pagas separadamente."
        },
        {
          name: "Ducha de Prata",
          description: "Uma das cachoeiras mais conhecidas da região, com acesso seguro por plataformas de madeira que contornam as quedas d'água. Boa opção para quem quer natureza sem trilha longa."
        },
        {
          name: "Palácio Boa Vista",
          description: "Residência oficial de verão do governador do estado, aberta à visitação com acervo de arte e mobiliário histórico. Ótimo passeio para dias de chuva."
        },
        {
          name: "Horto Florestal e Pico do Itapeva",
          description: "O Horto Florestal reúne trilhas leves em meio a araucárias; o Pico do Itapeva, um pouco mais distante, é considerado um dos melhores pontos da região para ver o pôr do sol."
        }
      ]
    },
    whereToDine: {
      intro: "Campos do Jordão é sinônimo de fondue e gastronomia de montanha — a Vila Capivari concentra a maior parte dos restaurantes, muitos com lareira e música ao vivo à noite.",
      categories: [
        {
          name: "Casas de fondue",
          description: "O clássico da cidade: fondue de queijo, carne e chocolate em restaurantes aconchegantes, geralmente mediante reserva"
        },
        {
          name: "Cervejarias artesanais",
          description: "Cervejarias com tour guiado e menu próprio, boas opções para almoço ou happy hour"
        },
        {
          name: "Chocolaterias e cafés coloniais",
          description: "Fábricas de chocolate com loja própria e cafés para lanche da tarde no friozinho"
        },
        {
          name: "Restaurantes de alta gastronomia",
          description: "Opções com menu degustação e carta de vinhos para um jantar mais especial"
        }
      ]
    },
    faqs: [
      {
        question: "Qual é a melhor época para visitar Campos do Jordão?",
        answer: "O inverno (junho a agosto) é a época mais procurada, com temperaturas baixas e o tradicional Festival de Inverno de música clássica em julho. Fora dessa época a cidade também funciona normalmente e costuma ter menos turistas e preços mais baixos."
      },
      {
        question: "Quanto custa entrar no Parque Capivari?",
        answer: "A entrada no parque é gratuita, mas cada atração é paga separadamente: o teleférico custa em torno de R$ 60 por pessoa, a roda-gigante cerca de R$ 36, e o pedalinho em torno de R$ 90 para 4 pessoas. Vale conferir os valores atualizados no site oficial antes de ir."
      },
      {
        question: "Quantos dias são necessários para conhecer Campos do Jordão?",
        answer: "Para um roteiro tranquilo, com Vila Capivari, teleférico e uma cachoeira, 2 dias já cobrem o essencial. Quem quer incluir o Horto Florestal, o Palácio Boa Vista e um passeio de trem, o ideal são 3 dias."
      },
      {
        question: "Como chegar em Campos do Jordão saindo de São Paulo?",
        answer: "De carro, o trajeto mais comum é pela Rodovia Presidente Dutra até Taubaté e depois pela SP-123, totalizando cerca de 170 km e 2h15 de viagem. Também há ônibus executivo saindo direto de São Paulo para a cidade."
      }
    ]
  },
  {
    id: "cunha",
    name: "Cunha",
    categories: ["Destinos Românticos"],
    distance: 230,
    drivingHours: 2.9,
    rating: 4.7,
    shortDescription: "Cerâmica, pousadas charmosas e cânions da Serra do Mar.",
    fullDescription: "Cunha é uma cidade histórica conhecida pela tradição cerâmica e pousadas charmosas. A região oferece cânions espetaculares da Serra do Mar, trilhas e vistas panorâmicas. Ideal para casais que buscam romance, arte e contato com a natureza.",
    imageUrl: "/images/cunha_651f00c9.jpg",
    topAttractions: ["Cerâmicas", "Cânions", "Pousadas", "Trilhas", "Mirantes"],
    bestSeason: "Primavera e outono para clima agradável.",
    latitude: -23.0667,
    longitude: -45.0167,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Ateliês de cerâmica",
          description: "Cunha é considerada a capital paulista da cerâmica, com ateliês que usam fornos japoneses noborigama. A Casa do Artesão, no centro, reúne peças de mais de 60 artesãos da região."
        },
        {
          name: "Lavandário",
          description: "Campo de lavandas aberto à visitação, com loja de produtos derivados (sabonetes, óleos, sorvete de lavanda) e café no local. Funciona de sexta a domingo e feriados."
        },
        {
          name: "Núcleo Cunha (Parque Estadual da Serra do Mar)",
          description: "Trilhas fáceis e difíceis em meio à Mata Atlântica, com cachoeiras no caminho. O acesso final é por 19 km de estrada de terra até a portaria."
        },
        {
          name: "Trilha da Pedra da Macela",
          description: "Trilha de dificuldade moderada, com cerca de 50 minutos de subida, indicada para quem quer ver o nascer do sol entre as montanhas da Serra da Bocaina."
        },
        {
          name: "Observação de estrelas",
          description: "Programa noturno típico da região — várias pousadas oferecem noites de astronomia, aproveitando o céu limpo da serra, longe da poluição luminosa da capital."
        }
      ]
    },
    whereToDine: {
      intro: "O centro de Cunha concentra restaurantes de comida caipira e truta, muitos dentro de ateliês de cerâmica; ao longo da Estrada SP-171 também há cervejarias e uma vinícola com restaurante próprio.",
      categories: [
        {
          name: "Pizzarias napoletanas",
          description: "Massa de fermentação natural e ingredientes de produtores locais — uma das surpresas gastronômicas da cidade"
        },
        {
          name: "Restaurantes de comida caipira e trutas",
          description: "Pratos típicos da serra, muitos em pousadas e sítios com ambiente rústico"
        },
        {
          name: "Cervejarias e vinícola na Estrada do Vinho",
          description: "Opções com degustação, adega e restaurante próprio para almoço"
        },
        {
          name: "Cafés e docerias no centro",
          description: "Bom para parar entre um ateliê e outro, muitos com produtos derivados de lavanda"
        }
      ]
    },
    faqs: [
      {
        question: "Qual é a melhor época para visitar Cunha?",
        answer: "Cunha tem atrativos o ano todo: no inverno o clima de serra fica mais charmoso para as noites de observação de estrelas, e as lavandas florescem durante boa parte do ano. Feriados como Carnaval, Páscoa e a Independência costumam ter abertura especial dos fornos de cerâmica."
      },
      {
        question: "Quanto custa a entrada no Lavandário?",
        answer: "O ingresso do Lavandário gira em torno de R$ 20 por pessoa. Há também opções gratuitas na região, como o Contemplário, um campo de lavanda e ervas aromáticas menor e mais recente."
      },
      {
        question: "Quantos dias são necessários para conhecer Cunha?",
        answer: "Dois dias cobrem o essencial: um dia para cerâmica e lavanda, outro para cachoeiras e trilhas. Quem gosta de um ritmo mais devagar pode estender para três dias, já que Cunha também é parada comum a caminho de Paraty."
      },
      {
        question: "Como chegar em Cunha saindo de São Paulo?",
        answer: "O trajeto mais comum é pela Rodovia Presidente Dutra até Taubaté ou Guaratinguetá, seguindo por estrada de serra até Cunha — cerca de 230 km e praticamente 3 horas de viagem."
      }
    ]
  },
  {
    id: "holambra",
    name: "Holambra",
    categories: ["Destinos Românticos"],
    distance: 145,
    drivingHours: 1.8,
    rating: 4.6,
    shortDescription: "Cidade das flores com arquitetura holandesa.",
    fullDescription: "Holambra é a cidade das flores, com arquitetura holandesa encantadora e paisagens floridas o ano inteiro. A cidade oferece museus, lojas de flores, restaurantes e pousadas. Ideal para casais e famílias que apreciam beleza natural e cultura holandesa.",
    imageUrl: "/images/holambra_9dd00644.jpg",
    topAttractions: ["Campos de flores", "Arquitetura holandesa", "Museus", "Lojas de flores", "Restaurantes"],
    bestSeason: "Primavera para apreciar as flores em plena floração.",
    latitude: -22.6167,
    longitude: -47.0333,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Moinho dos Povos Unidos",
          description: "Com 38,5 metros de altura, é o maior moinho de estilo holandês da América Latina. É possível subir até o deck (mediante ingresso) para uma vista panorâmica da cidade e dos campos ao redor."
        },
        {
          name: "Boulevard Holandês",
          description: "Rua charmosa com fachadas coloridas, lojas de souvenirs, cerâmica pintada (Delft Blue), restaurantes e confeitarias — o coração turístico do centro."
        },
        {
          name: "Parque Van Gogh",
          description: "Parque com réplicas de quadros do pintor, lago com pedalinhos, tirolesa e escalada. Boa opção para famílias com crianças."
        },
        {
          name: "Campos de flores (Bloemen Park)",
          description: "Área de 40 mil m² com mais de 200 tipos de flores e plantas, incluindo mais de 30 variedades de rosas. Ideal para fotos pela manhã, quando a luz é melhor."
        },
        {
          name: "Expoflora",
          description: "A maior exposição de flores da América Latina, realizada anualmente entre agosto e setembro, com workshops de jardinagem e apresentações culturais."
        }
      ]
    },
    whereToDine: {
      intro: "A tradição holandesa aparece no cardápio da cidade — o Boulevard Holandês e a Rua Dória Vasconcelos concentram a maior parte dos restaurantes e confeitarias.",
      categories: [
        {
          name: "Restaurantes de culinária holandesa",
          description: "Pratos como pannekoek (panqueca holandesa), kroketten e erwtensoep (sopa de ervilha)"
        },
        {
          name: "Confeitarias tradicionais",
          description: "Stroopwafel e appeltaart (torta de maçã holandesa) são os doces mais pedidos"
        },
        {
          name: "Cafés coloniais",
          description: "Mesas fartas com pães, queijos e frios, boa opção para o café da manhã ou da tarde"
        }
      ]
    },
    faqs: [
      {
        question: "Qual é a melhor época para visitar Holambra?",
        answer: "A primavera é a época mais procurada, principalmente durante a Expoflora (agosto/setembro), quando a cidade fica ainda mais florida e decorada. Fora dessa janela, Holambra também tem flores o ano todo."
      },
      {
        question: "Quanto tempo devo reservar para Holambra?",
        answer: "Um dia é suficiente para conhecer o centro histórico, o Moinho dos Povos Unidos e os principais campos de flores em um bate-volta a partir de São Paulo ou Campinas."
      },
      {
        question: "Dá para conhecer Holambra sem gastar muito?",
        answer: "Sim — a maioria das praças, o Deck do Amor, a Rua da Amizade e a caminhada pelo Boulevard Holandês são gratuitos. Os ingressos pagos ficam por conta de atrações específicas, como subir no Moinho ou entrar em alguns parques de flores."
      },
      {
        question: "Como chegar em Holambra saindo de São Paulo?",
        answer: "O trajeto mais comum é pela Rodovia Bandeirantes ou Anhanguera até a região de Campinas, seguindo por estrada até Holambra — cerca de 145 km e 1h50 de viagem."
      }
    ]
  },
  {
    id: "ilhabela",
    name: "Ilhabela",
    categories: ["Para Curtir o Verão"],
    distance: 210,
    drivingHours: 2.6,
    rating: 4.8,
    shortDescription: "Ilha paradisíaca com praias desertas e Mata Atlântica.",
    fullDescription: "Ilhabela é um arquipélago paradisíaco com praias desertas, águas cristalinas e Mata Atlântica preservada. A ilha oferece trilhas, mergulho, pesca e contato com a natureza selvagem. Ideal para aventureiros e amantes de praias virgens.",
    imageUrl: "/images/ilhabela_38f1b775.jpg",
    topAttractions: ["Praias desertas", "Trilhas", "Mergulho", "Pesca", "Mata Atlântica"],
    bestSeason: "Verão para aproveitar o mar e as praias.",
    latitude: -23.7667,
    longitude: -45.3667,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Praia do Curral",
          description: "A praia mais badalada da ilha, com ampla faixa de areia, bares, restaurantes e pousadas — ponto de encontro típico no verão."
        },
        {
          name: "Praia da Feiticeira",
          description: "Opção mais tranquila, sem quiosques na areia, ideal para quem busca sossego. Fica próxima à Cachoeira dos Três Tombos, acessível por uma trilha curta e fácil."
        },
        {
          name: "Praia de Castelhanos",
          description: "Uma das praias mais preservadas de Ilhabela, com acesso por estrada de terra 4x4 através do Parque Estadual, por trilha ou de barco. Tem comunidade caiçara, restaurantes na areia e boas ondas para surf."
        },
        {
          name: "Cachoeiras e trilhas",
          description: "A ilha tem dezenas de cachoeiras, muitas com trilhas leves e infraestrutura. A Cachoeira dos Três Tombos é uma das mais fáceis de acessar."
        },
        {
          name: "Passeio de escuna ou lancha",
          description: "Roteiros pelo canal de Ilhabela com paradas para banho em praias como Jabaquara e Fome — boa forma de conhecer trechos só acessíveis por mar."
        }
      ]
    },
    whereToDine: {
      intro: "A cena gastronômica de Ilhabela mistura alta gastronomia internacional e tradição caiçara, com boas opções tanto no centro histórico quanto à beira das praias.",
      categories: [
        {
          name: "Restaurantes à beira-mar",
          description: "Opções com vista para o canal, boas para almoço com frutos do mar"
        },
        {
          name: "Cozinha caiçara",
          description: "Peixes e frutos do mar preparados à moda tradicional da região, muitas vezes em pousadas de praia"
        },
        {
          name: "Alta gastronomia no centro histórico",
          description: "Restaurantes mais sofisticados concentrados perto da Vila / centro histórico da ilha"
        }
      ]
    },
    faqs: [
      {
        question: "Qual é a melhor época para visitar Ilhabela?",
        answer: "O verão é a época mais procurada para curtir praia e mar, mas a ilha funciona o ano todo — no inverno as trilhas ficam mais confortáveis por causa do calor menos intenso."
      },
      {
        question: "Como chegar em Ilhabela?",
        answer: "O acesso é por balsa a partir de São Sebastião, com travessia rápida (cerca de 15-20 minutos). Em dias de alta temporada, a fila da balsa pode ser longa, então vale chegar com antecedência ou reservar horário quando possível."
      },
      {
        question: "Preciso de carro 4x4 para conhecer Ilhabela?",
        answer: "Não para a maior parte da ilha, mas o acesso por terra à Praia de Castelhanos exige 4x4 ou passeio guiado de jipe, já que são 22 km de estrada de terra dentro do Parque Estadual. A alternativa é ir de barco."
      },
      {
        question: "Quantos dias são necessários para conhecer Ilhabela?",
        answer: "Para praias, uma trilha e um passeio de barco, 3 a 4 dias é um bom tempo. Quem quer incluir Castelhanos com calma e mais cachoeiras pode estender para uma semana."
      }
    ]
  },
  {
    id: "itu",
    name: "Itu",
    categories: ["História"],
    distance: 100,
    drivingHours: 1.2,
    rating: 4.4,
    shortDescription: "Cidade dos exageros e do centro histórico charmoso.",
    fullDescription: "Itu é conhecida como a cidade dos exageros, com monumentos gigantes e um centro histórico charmoso. A cidade oferece igrejas coloniais, museus e gastronomia tradicional. Ideal para quem busca história, cultura e diversão.",
    imageUrl: "/images/itu_6f9c5dc7.jpg",
    topAttractions: ["Igrejas coloniais", "Museus", "Centro histórico", "Monumentos gigantes", "Restaurantes"],
    bestSeason: "Ano inteiro; primavera é especialmente bonita.",
    latitude: -23.2667,
    longitude: -47.3000,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Parque Maeda",
          description: "Complexo de turismo rural com um dos maiores jardins japoneses do Brasil, teleférico, trenzinho, parque aquático, pesca esportiva e a Árvore Gigante, com mirante a 22 metros de altura."
        },
        {
          name: "Praça dos Exageros",
          description: "Marco do humor característico de Itu, conhecida como 'cidade dos exageros' — reúne monumentos e esculturas em tamanho gigante que brincam com a fama da cidade."
        },
        {
          name: "Museu Republicano",
          description: "Instalado em um casarão histórico, conta a história do movimento republicano brasileiro, que teve papel importante em Itu."
        },
        {
          name: "Centro histórico e Praça da Matriz",
          description: "Conjunto de arquitetura colonial preservada em torno da Matriz Nossa Senhora da Candelária, boa área para caminhar e conhecer a história da cidade."
        },
        {
          name: "Fazenda do Chocolate",
          description: "Espaço temático dedicado ao chocolate, com produção própria e área para visitação — programa à parte para quem viaja com crianças."
        }
      ]
    },
    whereToDine: {
      intro: "O Parque Maeda tem um dos maiores restaurantes self-service do Brasil, com cerca de 140 pratos incluindo comida japonesa; o centro histórico também reúne boas opções tradicionais.",
      categories: [
        {
          name: "Restaurante self-service do Parque Maeda",
          description: "Buffet enorme por quilo ou incluso no passaporte day use, com opções brasileiras e japonesas"
        },
        {
          name: "Restaurantes no centro histórico",
          description: "Cozinha tradicional paulista perto das principais atrações históricas"
        },
        {
          name: "Cafés e lanchonetes",
          description: "Boas paradas rápidas entre um ponto turístico e outro no centro"
        }
      ]
    },
    faqs: [
      {
        question: "Qual é a melhor época para visitar Itu?",
        answer: "Itu pode ser visitada o ano todo. A primavera costuma deixar os jardins do Parque Maeda mais bonitos, mas o passeio funciona bem em qualquer estação."
      },
      {
        question: "Quanto custa o passaporte day use do Parque Maeda?",
        answer: "O passaporte inclui almoço, acesso ao parque aquático, jardim japonês, teleférico, trenzinho, pedalinho e quadriciclo. Os valores variam por idade e época — vale conferir o site oficial do parque antes de ir."
      },
      {
        question: "Um dia é suficiente para conhecer Itu?",
        answer: "Para o Parque Maeda sozinho, reserve o dia inteiro — a estrutura é grande. Para combinar o parque com o centro histórico, o ideal é dividir em dois dias ou fazer o centro histórico em uma manhã antes de seguir para o parque."
      },
      {
        question: "Como chegar em Itu saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia Castelo Branco, cerca de 100 km e 1h20 de viagem — uma das cidades históricas mais próximas da capital para um bate-volta."
      }
    ]
  },
  {
    id: "olimpia",
    name: "Olímpia",
    categories: ["Para ir com Crianças"],
    distance: 445,
    drivingHours: 5.6,
    rating: 4.7,
    shortDescription: "Parques aquáticos gigantes: Thermas e Hot Beach.",
    fullDescription: "Olímpia é conhecida pelos parques aquáticos gigantes Thermas dos Laranjais e Hot Beach. A cidade oferece diversão garantida para famílias com crianças, piscinas termais e atrações aquáticas variadas.",
    imageUrl: "/images/olimpia_7edcc1fd.jpg",
    topAttractions: ["Thermas dos Laranjais", "Hot Beach", "Piscinas termais", "Tobogãs", "Restaurantes"],
    bestSeason: "Verão para aproveitar os parques aquáticos.",
    latitude: -20.7333,
    longitude: -48.9167,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Thermas dos Laranjais",
          description: "Considerado o 2º parque aquático mais visitado do mundo, com águas termais e mais de 50 atrações, da piscina de ondas à primeira montanha-russa aquática do Brasil."
        },
        {
          name: "Hot Beach Olímpia",
          description: "Outro grande parque aquático de águas quentes da cidade, com resorts anexos e atrações para todas as idades."
        },
        {
          name: "Vale dos Dinossauros",
          description: "Exposição permanente com réplicas de dinossauros em tamanho real que se movimentam e emitem sons — atração à parte dos parques aquáticos, boa para famílias."
        },
        {
          name: "Museu de Cera Dreamland",
          description: "Passeio noturno com estátuas de cera de personagens famosos, opção para complementar o roteiro depois de um dia nos parques."
        },
        {
          name: "Orquidário Aguapey",
          description: "Espaço dedicado a orquídeas e plantas ornamentais, um contraponto mais tranquilo à agitação dos parques aquáticos."
        }
      ]
    },
    whereToDine: {
      intro: "A Avenida Aurora Forti Neves, principal via de acesso ao Thermas dos Laranjais, concentra a maior parte dos restaurantes, lanchonetes e pizzarias da cidade.",
      categories: [
        {
          name: "Praças de alimentação dentro dos parques",
          description: "Restaurantes, pizzarias e lanchonetes dentro do Thermas e do Hot Beach — não é permitido entrar com comida de fora"
        },
        {
          name: "Restaurantes na avenida principal",
          description: "Opções variadas de culinária brasileira para almoço e jantar fora dos parques"
        },
        {
          name: "Sorveterias e docerias",
          description: "Boas paradas no calor entre um parque e outro"
        }
      ]
    },
    faqs: [
      {
        question: "Qual é a melhor época para visitar Olímpia?",
        answer: "Como as piscinas do Thermas dos Laranjais e do Hot Beach são aquecidas, os parques funcionam bem o ano todo — mas o verão continua sendo a época de maior movimento."
      },
      {
        question: "Quantos dias são necessários para conhecer Olímpia?",
        answer: "Para visitar com calma o Thermas dos Laranjais e o Hot Beach, o ideal são 2 a 3 dias, já que cada parque sozinho já ocupa um dia inteiro."
      },
      {
        question: "Posso sair do parque aquático e voltar no mesmo dia?",
        answer: "Sim, é permitido sair e retornar no mesmo dia — mas avise a portaria ao sair, já que uma pulseira ou carimbo é usado para identificação na volta."
      },
      {
        question: "Como chegar em Olímpia saindo de São Paulo?",
        answer: "O trajeto é mais longo que a maioria dos destinos próximos à capital: cerca de 445 km pela Rodovia Anhanguera/Washington Luís, entre 5h30 e 6h de viagem de carro."
      }
    ]
  },
  {
    id: "ribeirao-preto",
    name: "Ribeirão Preto",
    categories: ["Vinho & Lazer"],
    distance: 315,
    drivingHours: 3.9,
    rating: 4.4,
    shortDescription: "Capital nacional da cerveja artesanal e do agronegócio.",
    fullDescription: "Ribeirão Preto é a capital nacional da cerveja artesanal, com cervejarias de renome e cultura gastronômica vibrante. A cidade oferece bares, restaurantes e tours em cervejarias. Ideal para apreciadores de cerveja artesanal.",
    imageUrl: "/images/ribeirao_preto_ef476dcf.jpg",
    topAttractions: ["Cervejarias artesanais", "Bares", "Restaurantes", "Tours", "Eventos"],
    bestSeason: "Ano inteiro; outono e inverno para clima agradável.",
    latitude: -21.1789,
    longitude: -47.8102,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Jardim Japonês (Bosque Municipal Fábio Barreto)",
          description: "Espaço doado pela colônia japonesa da cidade, com lagos, pontes e monumentos que remetem à cultura japonesa — um dos passeios mais queridos pelos moradores."
        },
        {
          name: "Theatro Pedro II",
          description: "Um dos teatros mais elogiados do Brasil por sua arquitetura, recebe peças, concertos e shows ao longo do ano."
        },
        {
          name: "Museu do Café Francisco Schimidt",
          description: "Instalado em prédio de arquitetura colonial de 1957, reúne acervo sobre a cultura cafeeira que marcou a história econômica da região. Entrada gratuita."
        },
        {
          name: "Parque Curupira",
          description: "Um dos maiores parques da cidade, com mais de 150 mil m², quedas d'água, lagos, trilhas e palco para apresentações — ótimo para caminhar ou pedalar."
        },
        {
          name: "Quarteirão Paulista",
          description: "Conjunto arquitetônico no centro histórico que remete à época áurea do café, perto da Catedral Metropolitana."
        }
      ]
    },
    whereToDine: {
      intro: "Ribeirão Preto tem forte tradição de bares e restaurantes — vale reservar uma noite para a badalada vida noturna da cidade, com cervejarias artesanais e bares tradicionais.",
      categories: [
        {
          name: "Choperia do Pinguim",
          description: "Bar tradicional desde 1936, famoso por servir um dos melhores chopes do Brasil, ao lado do Theatro Pedro II"
        },
        {
          name: "Novo Mercadão da Cidade",
          description: "Ponto de encontro para happy hour e almoço, com lanchonetes, bares e restaurantes variados"
        },
        {
          name: "Cervejarias artesanais",
          description: "Ribeirão Preto é polo de cerveja artesanal no interior paulista, com cervejarias e tours abertos ao público"
        }
      ]
    },
    faqs: [
      {
        question: "Qual é a melhor época para visitar Ribeirão Preto?",
        answer: "A cidade pode ser visitada o ano todo, mas outono e inverno costumam ter clima mais agradável, já que Ribeirão Preto é conhecida pelo calor intenso no verão."
      },
      {
        question: "Quantos dias são necessários para conhecer Ribeirão Preto?",
        answer: "Dois dias são suficientes para conhecer o centro histórico, o Jardim Japonês, o Museu do Café e ainda aproveitar uma noite de bares e restaurantes."
      },
      {
        question: "Por que Ribeirão Preto é chamada de 'Califórnia brasileira'?",
        answer: "O apelido vem da força do agronegócio na região — a cidade é um dos maiores polos de produção de cana-de-açúcar e tecnologia agrícola do país, com paisagem e clima que lembram o estado americano."
      },
      {
        question: "Como chegar em Ribeirão Preto saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia Anhanguera, cerca de 315 km e 3h30 de viagem de carro. Também há voos diretos partindo de São Paulo, já que a cidade tem aeroporto com boa malha aérea."
      }
    ]
  },
  {
    id: "sao-roque",
    name: "São Roque",
    categories: ["Vinho & Lazer"],
    distance: 65,
    drivingHours: 0.8,
    rating: 4.5,
    shortDescription: "Roteiro do Vinho paulista, a poucos quilômetros da capital.",
    fullDescription: "São Roque é o coração do roteiro do vinho de São Paulo, com vinícolas tradicionais e modernas. A região oferece degustações, tours e gastronomia de qualidade. Ideal para apreciadores de vinho e casais.",
    imageUrl: "/images/sao_roque_5954510d.jpg",
    topAttractions: ["Vinícolas", "Degustações", "Tours", "Restaurantes", "Lojas"],
    bestSeason: "Outono e inverno para colheita e clima agradável.",
    latitude: -23.5333,
    longitude: -47.1167,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Roteiro do Vinho",
          description: "Circuito com mais de 30 estabelecimentos entre vinícolas, adegas e restaurantes, distribuídos pela Estrada do Vinho, Estrada dos Venâncios e Rodovia Quintino de Lima."
        },
        {
          name: "Vinícola Góes",
          description: "A maior e mais visitada vinícola do roteiro, com complexo que inclui dois restaurantes, bar, cafeteria e lojas de doces e licores ao redor da casa-sede."
        },
        {
          name: "Vila Don Patto",
          description: "Um dos maiores complexos de lazer e gastronomia do roteiro, com parreirais, lago, trilhas e guarda-chuvas coloridos — bom para famílias."
        },
        {
          name: "Vinícola Canguera",
          description: "Vinícola familiar desde 1952, com museu do vinho, lago com fontes e restaurante — uma das mais tradicionais da região."
        },
        {
          name: "Outlet Santa Catarina",
          description: "Complexo de lojas de perfumes, roupas, calçados e chocolates, boa parada para fechar o roteiro antes de voltar para São Paulo."
        }
      ]
    },
    whereToDine: {
      intro: "A imigração italiana e portuguesa marcou a gastronomia da região — o Roteiro do Vinho reúne restaurantes de diferentes cozinhas, muitos dentro das próprias vinícolas.",
      categories: [
        {
          name: "Restaurantes dentro das vinícolas",
          description: "Cardápio harmonizado com os vinhos da casa, geralmente com vista para os parreirais"
        },
        {
          name: "Cantinas italianas e restaurantes portugueses",
          description: "Herança da imigração europeia na região, com pratos tradicionais"
        },
        {
          name: "Restaurantes especializados em alcachofra",
          description: "Pratos com o ingrediente típico da região, melhor época é a primavera, quando a alcachofra está em colheita"
        }
      ]
    },
    faqs: [
      {
        question: "A degustação de vinhos é gratuita em São Roque?",
        answer: "As vinícolas do Roteiro do Vinho costumam oferecer degustação gratuita dos vinhos de mesa; degustações de vinhos finos geralmente têm custo à parte. Vale confirmar em cada vinícola."
      },
      {
        question: "Qual é a melhor época para visitar São Roque?",
        answer: "A colheita da uva acontece entre janeiro e fevereiro, e a primavera é a melhor época para a florada da alcachofra, prato típico da região. Fora dessas janelas, o roteiro funciona normalmente o ano todo."
      },
      {
        question: "Dá para fazer o Roteiro do Vinho em um bate-volta?",
        answer: "Sim — como fica a menos de uma hora de São Paulo, é possível visitar 3 a 4 vinícolas em um dia. Para conhecer com mais calma, o ideal são 2 a 3 dias hospedado na região."
      },
      {
        question: "Como chegar em São Roque saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia Raposo Tavares, cerca de 65 km e menos de 1 hora de viagem — um dos destinos de vinho mais próximos da capital."
      }
    ]
  },
  {
    id: "santo-antonio-do-pinhal",
    name: "Santo Antônio do Pinhal",
    categories: ["Destinos Românticos"],
    distance: 175,
    drivingHours: 2.2,
    rating: 4.7,
    shortDescription: "Vizinha discreta e charmosa de Campos do Jordão.",
    fullDescription: "Santo Antônio do Pinhal é uma cidade serrana charmosa, vizinha de Campos do Jordão. Oferece pousadas aconchegantes, clima europeu e paisagens montanhosas. Ideal para casais em busca de romance e tranquilidade.",
    imageUrl: "/images/santo_Antonio_do_Pinhal_ca4242c8.JPG",
    topAttractions: ["Pousadas", "Trilhas", "Mirantes", "Restaurantes", "Clima europeu"],
    bestSeason: "Inverno para aproveitar o frio e o clima europeu.",
    latitude: -22.8333,
    longitude: -45.5500,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Estação Ferroviária Eugênio Lefévre",
          description: "Antiga estação de trem de 1916, hoje fechada para circulação, mas aberta à visitação. Um curto trecho pelos trilhos leva ao Mirante Nossa Senhora Auxiliadora, com vista para o Vale do Paraíba."
        },
        {
          name: "Cachoeira do Lageado",
          description: "Uma das cachoeiras mais acessíveis da cidade, com estrutura de bancos e mesas ao redor — costuma ficar bem movimentada nos fins de semana."
        },
        {
          name: "Jardim dos Pinhais Ecco Parque",
          description: "Primeiro parque de jardins temáticos do Brasil, com oito jardins e mais de 1.200 metros de passarelas. Oferece também trilha por bosque de araucárias, arvorismo e tirolesa."
        },
        {
          name: "Pico Agudo e Pedra do Baú",
          description: "Pontos mais procurados por quem busca trilha e aventura, com vistas privilegiadas da Serra da Mantiqueira — recomendados para quem tem bom preparo físico."
        },
        {
          name: "Trilhas do Matão e Zigue Zague",
          description: "A trilha do Matão é fácil e boa para famílias (cerca de 1h); a do Zigue Zague é mais desafiadora, com 7 km e cerca de 3h30, terminando na Cachoeira do Lageado."
        }
      ]
    },
    whereToDine: {
      intro: "A cidade é famosa pelos pratos à base de truta e pinhão, com restaurantes que aproveitam o clima de montanha — vários ficam dentro de sítios com cachoeira própria.",
      categories: [
        {
          name: "Restaurantes especializados em truta",
          description: "Prato típico da região, servido em restaurantes com vista para cachoeiras ou montanhas"
        },
        {
          name: "Restaurante Arco-Íris",
          description: "Restaurante tradicional com cachoeira própria de 4 metros — dá para almoçar admirando a queda d'água"
        },
        {
          name: "Comida caipira no fogão a lenha",
          description: "Opções mais rústicas, boas para os dias mais frios de inverno"
        }
      ]
    },
    faqs: [
      {
        question: "Qual é a diferença entre Santo Antônio do Pinhal e Campos do Jordão?",
        answer: "As duas cidades são vizinhas na Serra da Mantiqueira, mas Santo Antônio do Pinhal é bem mais tranquila e menos turística, com trilhas, cachoeiras e um centrinho pequeno — uma opção para quem busca sossego perto de Campos do Jordão."
      },
      {
        question: "Qual é a melhor época para visitar Santo Antônio do Pinhal?",
        answer: "O inverno é a época mais procurada por causa do clima frio de montanha, mas a cidade também é boa opção no verão para quem quer aproveitar as cachoeiras e trilhas com temperaturas mais amenas que a capital."
      },
      {
        question: "Quantos dias são necessários para conhecer a cidade?",
        answer: "Um fim de semana (2 dias) é suficiente para conhecer a estação de trem, uma cachoeira e o Jardim dos Pinhais. Quem quer incluir trilhas mais longas, como a Pedra do Baú, pode estender para 3 dias."
      },
      {
        question: "Como chegar em Santo Antônio do Pinhal saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia Presidente Dutra até Taubaté, seguindo pela SP-123 — cerca de 175 km e 2h15 de viagem, o mesmo caminho usado para chegar a Campos do Jordão."
      }
    ]
  },
  {
    id: "santos",
    name: "Santos",
    categories: ["História"],
    distance: 75,
    drivingHours: 0.9,
    rating: 4.5,
    shortDescription: "Praia urbana, jardins da orla e centro histórico revitalizado.",
    fullDescription: "Santos é uma cidade litorânea com praia urbana, jardins da orla bem cuidados e centro histórico revitalizado. Oferece museus, aquário e gastronomia. Ideal para quem busca praia, história e cultura.",
    imageUrl: "/images/santos_6e066933.jpg",
    topAttractions: ["Praia", "Jardins da orla", "Centro histórico", "Aquário", "Museus"],
    bestSeason: "Verão para aproveitar a praia.",
    latitude: -23.9608,
    longitude: -46.3339,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Jardim da Orla",
          description: "Recordista do Guinness como maior jardim de orla do mundo, com 5,3 km de canteiros floridos entre a praia e a avenida. Tem ciclovia, quiosques e é ótimo para caminhada, corrida ou pedalada."
        },
        {
          name: "Centro Histórico e bondinho turístico",
          description: "Núcleo colonial com casarões restaurados, a Bolsa Oficial do Café (hoje museu) e igrejas históricas. O passeio de bonde turístico sai da Praça Mauá e percorre os principais monumentos."
        },
        {
          name: "Museu Pelé",
          description: "Instalado em um casarão histórico no centro, reúne troféus, fotos e a trajetória do maior jogador da história do futebol, ligado à torcida do Santos FC. Ingresso pago."
        },
        {
          name: "Aquário de Santos",
          description: "Uma das atrações mais visitadas da cidade, com pinguins, tubarões, peixes tropicais e animais resgatados — passeio educativo, bom para famílias."
        },
        {
          name: "Monte Serrat",
          description: "Acessível por funicular, oferece vista panorâmica da cidade e da Baía de Santos — um dos programas clássicos para quem visita pela primeira vez."
        }
      ]
    },
    whereToDine: {
      intro: "A gastronomia de Santos é litorânea, com forte influência portuguesa — o bairro do Gonzaga e a orla concentram os restaurantes de frutos do mar, enquanto o centro histórico tem opções mais contemporâneas.",
      categories: [
        {
          name: "Peixe e frutos do mar",
          description: "Caldeirada, moqueca e o pescado do dia, com casas próximas ao mercado e ao porto para o peixe mais fresco"
        },
        {
          name: "Camarão na moranga",
          description: "Prato clássico do litoral paulista, presente na maioria dos restaurantes da orla"
        },
        {
          name: "Quiosques da orla",
          description: "Porções, água de coco e drinks com vista para o mar — ótimo para o fim de tarde"
        },
        {
          name: "Bolinho de bacalhau e petiscos",
          description: "Herança portuguesa presente nos bares tradicionais da cidade"
        }
      ]
    },
    faqs: [
      {
        question: "Qual é a melhor época para visitar Santos?",
        answer: "O verão é a época mais procurada para aproveitar a praia, mas a cidade tem boas atrações indoor (museus, centro histórico, Aquário) que funcionam bem o ano todo, inclusive em dias de chuva."
      },
      {
        question: "Quantos dias são necessários para conhecer Santos?",
        answer: "Um roteiro de 2 dias cobre bem a cidade: um dia para o Aquário e o Jardim da Orla de bike, outro para o funicular do Monte Serrat e o bonde turístico pelo centro histórico."
      },
      {
        question: "Dá para combinar Santos com outras praias próximas?",
        answer: "Sim — uma opção comum é pegar a balsa até o Guarujá no mesmo bate-volta ou fim de semana, para conhecer praias diferentes das da orla de Santos."
      },
      {
        question: "Como chegar em Santos saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia dos Imigrantes ou Anchieta, cerca de 75 km e 1 hora de viagem — uma das praias mais próximas e rápidas de se chegar a partir da capital."
      }
    ]
  },
  {
    id: "serra-negra",
    name: "Serra Negra",
    categories: ["Para Curtir o Frio"],
    distance: 150,
    drivingHours: 1.9,
    rating: 4.6,
    shortDescription: "Circuito das Águas com clima de montanha e malharias.",
    fullDescription: "Serra Negra é uma cidade serrana do Circuito das Águas com clima de montanha e tradição em malharias. Oferece pousadas, spas e contato com a natureza. Ideal para quem busca clima fresco e relaxamento.",
    imageUrl: "/images/serra_negra_11469961.jpg",
    topAttractions: ["Malharias", "Spas", "Pousadas", "Trilhas", "Clima de montanha"],
    bestSeason: "Outono e inverno para aproveitar o clima fresco.",
    latitude: -22.6333,
    longitude: -46.7333,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Fontana di Trevi",
          description: "Réplica em menor escala (cerca de 40% do tamanho original) da famosa fonte de Roma, construída como homenagem à imigração italiana na cidade. Fica ao lado da Praça João Zelante, com iluminação especial à noite."
        },
        {
          name: "Teleférico de Serra Negra",
          description: "Inaugurado em 1952, percorre 1.500 metros por cima da cidade em 50 cadeirinhas, com um trajeto de cerca de 15 minutos até o Mirante do Cristo Redentor."
        },
        {
          name: "Cristo Redentor e Mirante Alto da Serra",
          description: "No alto do Pico do Fonseca, a 1.080 m de altura, o monumento tem 18 metros e é acompanhado de lanchonete e loja de chocolates. O Alto da Serra é um dos melhores pontos da cidade para ver o pôr do sol."
        },
        {
          name: "Praça João Zelante",
          description: "Praça central que reúne restaurantes, cafés e a decoração de Natal mais famosa da cidade — ponto de encontro e início de qualquer roteiro por Serra Negra."
        },
        {
          name: "Rua Coronel Pedro Penteado",
          description: "Rua das malharias, tradição da cidade — boa parada para comprar lã, malhas e artigos de couro."
        }
      ]
    },
    whereToDine: {
      intro: "A Praça João Zelante e seu entorno concentram a maior parte dos bares e restaurantes de Serra Negra, com boas opções para almoçar entre um passeio e outro.",
      categories: [
        {
          name: "Restaurantes na Praça João Zelante",
          description: "Opções variadas em volta da Fontana di Trevi, boas para almoço com vista para a praça"
        },
        {
          name: "Cafés e chocolaterias",
          description: "Inclusive a loja de chocolates no Mirante do Cristo Redentor, no alto do teleférico"
        },
        {
          name: "Restaurantes de comida caseira e queijos da região",
          description: "Boa opção para provar produtos locais do Circuito das Águas"
        }
      ]
    },
    faqs: [
      {
        question: "A Fontana di Trevi de Serra Negra é igual à de Roma?",
        answer: "É uma réplica em escala reduzida (cerca de 40% do tamanho original), construída como homenagem à forte imigração italiana da cidade. Fica na Praça João Zelante, no centro, com acesso gratuito e iluminação especial à noite."
      },
      {
        question: "Vale a pena fazer o passeio de teleférico em Serra Negra?",
        answer: "Sim — é um dos programas mais tradicionais da cidade, com cerca de 15 minutos de percurso por cima das casas até o Mirante do Cristo Redentor, de onde se tem uma vista panorâmica da região."
      },
      {
        question: "Quantos dias são necessários para conhecer Serra Negra?",
        answer: "Um dia é suficiente para o roteiro central (Fontana di Trevi, Praça João Zelante e teleférico até o Cristo). Quem fica 2 a 3 dias consegue incluir compras nas malharias e passeios mais afastados, como a Disneylândia dos Robôs."
      },
      {
        question: "Como chegar em Serra Negra saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia Fernão Dias ou Dom Pedro I, cerca de 150 km e 1h50 de viagem, no mesmo circuito de cidades como Águas de Lindóia e Lindóia."
      }
    ]
  },
  {
    id: "socorro",
    name: "Socorro",
    categories: ["Natureza & Aventura"],
    distance: 135,
    drivingHours: 1.7,
    rating: 4.7,
    shortDescription: "Aventura acessível: rafting, tirolesa e boia-cross.",
    fullDescription: "Socorro é conhecida como a capital do rafting paulista, oferecendo atividades de aventura acessíveis como rafting, tirolesa e boia-cross. A região tem rios cristalinos e infraestrutura turística completa.",
    imageUrl: "/images/socorro_580ef3b9.jpg",
    topAttractions: ["Rafting", "Tirolesa", "Boia-cross", "Rios", "Restaurantes"],
    bestSeason: "Primavera e verão para atividades aquáticas.",
    latitude: -23.7833,
    longitude: -47.3667,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Rafting no Rio do Peixe",
          description: "Atividade símbolo da cidade, considerada referência nacional. Operadoras oferecem pacotes para iniciantes e experientes, com melhor época entre dezembro e abril, quando os rios estão mais cheios."
        },
        {
          name: "Boia-cross e quadriciclo",
          description: "Passeio pelo Caminho Turístico do Rio do Peixe, com parada em cachoeira para banho — cerca de 1h30 de duração, boa opção para famílias e iniciantes em aventura."
        },
        {
          name: "Pico do Gavião",
          description: "Um dos points de voo livre mais procurados de São Paulo, com voos duplos para iniciantes e vista panorâmica do Circuito das Águas. Para quem não quer voar, funciona como mirante."
        },
        {
          name: "Parques de aventura (Parque dos Sonhos, Nascentes)",
          description: "Reúnem tirolesa, arvorismo, cavalgada e arco e flecha em um só lugar, com estrutura de restaurante — programa de dia inteiro, com atividades também para crianças."
        },
        {
          name: "Trilhas e cachoeiras na Mata Atlântica",
          description: "A região serrana tem cachoeiras com poços para banho e mirantes, com percursos leves a moderados — boa forma de equilibrar a adrenalina dos esportes de aventura."
        }
      ]
    },
    whereToDine: {
      intro: "Depois de um dia de aventura, Socorro oferece desde comida caseira do interior até restaurantes mais elaborados, muitos dentro de pousadas e ao longo do Caminho Turístico do Rio do Peixe.",
      categories: [
        {
          name: "Restaurantes tradicionais",
          description: "Ambientes amplos, bons para grupos e famílias depois das atividades de aventura"
        },
        {
          name: "Restaurantes com pesqueiro",
          description: "Opções à beira do Rio do Peixe, com peixe fresco e ambiente ao ar livre"
        },
        {
          name: "Comida caipira e queijos locais",
          description: "Pratos caseiros do interior, boa opção para quem busca algo mais simples e em conta"
        }
      ]
    },
    faqs: [
      {
        question: "Preciso ter experiência para fazer rafting em Socorro?",
        answer: "Não — as operadoras oferecem pacotes para iniciantes e experientes, com todo o equipamento de segurança e um guia acompanhando o grupo. A melhor época para praticar é entre dezembro e abril, quando os rios estão mais cheios."
      },
      {
        question: "Dá para visitar as cachoeiras de Socorro sem contratar um pacote?",
        answer: "A maioria das cachoeiras fica em propriedades privadas, então normalmente é preciso contratar um passeio com alguma operadora local para ter acesso a elas."
      },
      {
        question: "Quantos dias são necessários para conhecer Socorro?",
        answer: "Um fim de semana (2 dias) é suficiente para combinar uma atividade de aventura, como rafting ou boia-cross, com uma trilha ou cachoeira mais tranquila."
      },
      {
        question: "Como chegar em Socorro saindo de São Paulo?",
        answer: "O trajeto mais comum é pela Rodovia Fernão Dias até Bragança Paulista, seguindo pela Rodovia Capitão Barduíno — cerca de 135 km e pouco mais de 2 horas de viagem."
      }
    ]
  },
  {
    id: "ubatuba",
    name: "Ubatuba",
    categories: ["Para Curtir o Verão"],
    distance: 230,
    drivingHours: 2.9,
    rating: 4.7,
    shortDescription: "Mais de 100 praias, do mar bravo às piscinas naturais.",
    fullDescription: "Ubatuba é um paraíso litorâneo com mais de 100 praias, variando de mar bravo para surfistas a piscinas naturais tranquilas. Oferece trilhas, mergulho e contato com a Mata Atlântica preservada.",
    imageUrl: "/images/ubatuba_92b7c9dc.jpg",
    topAttractions: ["Praias", "Piscinas naturais", "Trilhas", "Mergulho", "Mata Atlântica"],
    bestSeason: "Verão para aproveitar as praias.",
    latitude: -23.4667,
    longitude: -45.0667,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Praia Grande",
          description: "A praia mais popular da cidade, com boa estrutura de bares, restaurantes e quiosques — está sempre cheia, faça chuva ou sol, e fica perto do centro."
        },
        {
          name: "Praia do Félix e Praia do Português",
          description: "A Praia do Félix tem trechos de ondas e piscinas naturais para mergulho; ao lado, a Praia do Português é acessível por uma trilha curta a partir do canto direito do Félix."
        },
        {
          name: "Praia de Itamambuca",
          description: "Uma das mais bonitas de Ubatuba, com 2 km de extensão e o encontro do Rio Itamambuca com o mar, formando um ponto agradável para banho."
        },
        {
          name: "Ilhas (Couves, Anchieta e Prumirim)",
          description: "Passeios de escuna ou lancha levam a essas ilhas próximas à costa — a Ilha Anchieta se destaca por ter 7 praias e mar calmo, ideal para nadar."
        },
        {
          name: "Trilhas na Mata Atlântica",
          description: "Do nível fácil (como a trilha até a Praia do Cedro) ao mais desafiador (a subida ao Pico do Corcovado, com pouco mais de 5 km), Ubatuba tem opções para todos os níveis."
        }
      ]
    },
    whereToDine: {
      intro: "Com mais de 100 praias, Ubatuba tem restaurantes espalhados por toda a orla, da culinária caiçara tradicional a opções mais contemporâneas na Avenida Guarani, perto do centro.",
      categories: [
        {
          name: "Restaurantes rústicos à beira-mar",
          description: "Presentes em praias como a Almada, com peixe fresco e ambiente descontraído"
        },
        {
          name: "Culinária caiçara",
          description: "Peixes, frutos do mar e temperos tradicionais da região, herança da cultura caiçara local"
        },
        {
          name: "Bares e restaurantes da Avenida Guarani",
          description: "Concentração de opções no centro, boas para jantar ou happy hour"
        }
      ]
    },
    faqs: [
      {
        question: "Qual é a melhor época para visitar Ubatuba?",
        answer: "O verão é a época mais procurada para curtir as praias, mas a cidade também funciona bem no restante do ano, com menos movimento e preços mais baixos — boa opção para quem prioriza trilhas e passeios de barco."
      },
      {
        question: "Quantos dias são necessários para conhecer Ubatuba?",
        answer: "Com mais de 100 praias, é impossível conhecer tudo em uma única viagem. Um roteiro de 4 dias permite dividir entre praias do norte e do centro, um passeio de barco às ilhas e uma trilha."
      },
      {
        question: "Ubatuba é boa opção para dias de chuva?",
        answer: "Sim — a cidade tem atrações indoor como o Projeto Tamar, o Aquário e o centro histórico, além de bares e restaurantes na Avenida Guarani que ficam movimentados mesmo em dias chuvosos."
      },
      {
        question: "Como chegar em Ubatuba saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia dos Tamoios, cerca de 230 km e quase 3 horas de viagem — um pouco mais longe que outras praias do litoral norte, como Caraguatatuba."
      }
    ]
  },
  {
    id: "sao-luiz-do-paraitinga",
    name: "São Luiz do Paraitinga",
    categories: ["História"],
    distance: 180,
    drivingHours: 2.2,
    rating: 4.7,
    shortDescription: "Casarões coloridos, marchinhas e festas populares.",
    fullDescription: "São Luiz do Paraitinga é uma cidade histórica com casarões coloridos, tradição de festas populares e marchinhas. Oferece gastronomia tradicional, artesanato e contato com a cultura caipira.",
    imageUrl: "/images/Sao_Luis_do_Paraitinga_81de3041.JPG",
    topAttractions: ["Casarões coloridos", "Festas populares", "Gastronomia", "Artesanato", "Cultura caipira"],
    bestSeason: "Ano inteiro; festas em datas específicas.",
    latitude: -23.6167,
    longitude: -45.3000,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Centro Histórico",
          description: "Tombado pelo IPHAN, reúne casarões coloniais reconstruídos após a enchente de 2010 — a Igreja Matriz São Luiz de Toloza, a Capela das Mercês, a Igreja de Nossa Senhora do Rosário e o Mercado Municipal fazem parte do circuito de pedestres."
        },
        {
          name: "Casa Dr. Oswaldo Cruz",
          description: "Casa onde nasceu o médico sanitarista, com arquitetura colonial de 1834. Hoje reúne informações sobre sua história, sobre a enchente que atingiu a cidade e sobre a tradição do Carnaval local."
        },
        {
          name: "Carnaval de Marchinhas",
          description: "Uma das folias de rua mais originais do estado, embalada por marchinhas compostas por artistas locais — evento que atrai visitantes de toda a região."
        },
        {
          name: "Ponte de pedestres sobre o Rio Paraitinga",
          description: "Perto da praça da matriz, rende boas fotos e ajuda a entender a proximidade do centro histórico com o rio que já causou enchentes na cidade."
        },
        {
          name: "Cachoeira Grande (Lagoinha)",
          description: "A cachoeira mais conhecida da região fica na cidade vizinha de Lagoinha, com queda de 40 metros, estrutura de restaurante e opção de descida de rapel nos fins de semana."
        }
      ]
    },
    whereToDine: {
      intro: "São Luiz do Paraitinga tem tradição de bares e restaurantes com música ao vivo, muitos concentrados perto da praça central — bom lugar para provar pratos típicos da culinária caipira.",
      categories: [
        {
          name: "Pratos típicos regionais",
          description: "O afogado (à base de carne, cozido por horas) e o pastel de angu são as especialidades mais procuradas"
        },
        {
          name: "Restaurantes por quilo no centro histórico",
          description: "Casas antigas e aconchegantes, muitas com fogão a lenha e loja de artesanato"
        },
        {
          name: "Bares e cafés com música ao vivo",
          description: "Movimentados principalmente nos fins de semana, com mesas disputadas"
        }
      ]
    },
    faqs: [
      {
        question: "Qual é a melhor época para visitar São Luiz do Paraitinga?",
        answer: "Entre abril e setembro a temperatura fica mais amena, ideal para caminhar pelo centro histórico e fazer trilhas. O Carnaval de Marchinhas, um dos eventos mais tradicionais da cidade, acontece em fevereiro ou março."
      },
      {
        question: "O centro histórico foi reconstruído depois da enchente de 2010?",
        answer: "Sim — em 2010 uma cheia do Rio Paraitinga destruiu grande parte do centro histórico, incluindo a Igreja Matriz. A reconstrução foi tão cuidadosa que hoje é praticamente impossível distinguir o que é original do que foi restaurado."
      },
      {
        question: "Quantos dias são necessários para conhecer a cidade?",
        answer: "Um dia é suficiente para o centro histórico. Quem quer incluir a Cachoeira Grande ou trilhas no Parque Estadual da Serra do Mar deve reservar um fim de semana."
      },
      {
        question: "Como chegar em São Luiz do Paraitinga saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia Presidente Dutra até Taubaté, seguindo pela Rodovia Oswaldo Cruz — cerca de 180 km e 2h15 de viagem, no caminho entre Taubaté e Ubatuba."
      }
    ]
  },
  {
    id: "joanopolis",
    name: "Joanópolis",
    categories: ["Natureza & Aventura"],
    distance: 105,
    drivingHours: 1.3,
    rating: 4.5,
    shortDescription: "Represa Jaguari, cachoeiras e clima de serra.",
    fullDescription: "Joanópolis é uma cidade serrana com represa Jaguari, cachoeiras e clima agradável. Oferece trilhas, pesca e contato com a natureza. Ideal para bate-e-volta de São Paulo.",
    imageUrl: "/images/joanopolis_61186dab.jpg",
    topAttractions: ["Represa Jaguari", "Cachoeiras", "Trilhas", "Pesca", "Clima de serra"],
    bestSeason: "Outono e inverno para clima agradável.",
    latitude: -22.5833,
    longitude: -46.0667,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Cachoeira dos Pretos",
          description: "Cartão-postal da cidade e a segunda maior queda d'água do estado de São Paulo, com 154 metros de altura. Tem estacionamento, restaurantes e a opção de fazer boia-cross na base da cachoeira."
        },
        {
          name: "Represa Jaguari",
          description: "Com 50 km², é um dos símbolos do município e integra o Sistema Cantareira. Permite esportes náuticos como stand-up paddle, caiaque e passeios de lancha."
        },
        {
          name: "Trilha da Pedra do Cume",
          description: "Cerca de 6 km ida e volta, passando pela Pedra das Flores e Pedra do Marino, até um pico de 1.725 metros com vista panorâmica da Represa Jaguari. Recomenda-se contratar um guia."
        },
        {
          name: "Cachoeira Escondida",
          description: "Localizada em propriedade particular a 10 km do centro, tem quedas e piscina natural rasa — visitação mediante aviso prévio aos proprietários."
        },
        {
          name: "Centro histórico",
          description: "Pequeno e acolhedor, com ruas tranquilas — bom para uma caminhada antes ou depois das atividades na natureza."
        }
      ]
    },
    whereToDine: {
      intro: "Os restaurantes de Joanópolis ficam concentrados perto da Cachoeira dos Pretos e no centro da cidade, com destaque para pratos à base de truta e comida caipira feita no fogão a lenha.",
      categories: [
        {
          name: "Restaurantes na Cachoeira dos Pretos",
          description: "Vista para a queda d'água, boa opção para almoçar depois do banho ou do boia-cross"
        },
        {
          name: "Comida caipira e truta grelhada",
          description: "Pratos típicos da região, presentes na maioria dos restaurantes locais"
        },
        {
          name: "Pousadas com restaurante próprio",
          description: "Muitas oferecem almoço e jantar para não-hóspedes, especialmente as que ficam à beira da represa"
        }
      ]
    },
    faqs: [
      {
        question: "Qual é a melhor época para visitar Joanópolis?",
        answer: "Entre setembro e março (primavera e verão) as cachoeiras ficam mais cheias e as temperaturas mais agradáveis para banho. Já entre maio e agosto chove menos, o que facilita trilhas, mas a água fica mais fria."
      },
      {
        question: "Por que Joanópolis é chamada de 'Terra do Lobisomem'?",
        answer: "É um apelido popular da cidade, ligado a lendas folclóricas da região que já viraram tema de reportagens e documentários — parte do charme e do mistério que atrai visitantes."
      },
      {
        question: "Quantos dias são necessários para conhecer Joanópolis?",
        answer: "Um bate-volta de um dia já permite conhecer a Cachoeira dos Pretos e a Represa Jaguari. Quem quer incluir a trilha da Pedra do Cume ou aproveitar mais a represa deve reservar um fim de semana."
      },
      {
        question: "Como chegar em Joanópolis saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia Fernão Dias ou Dom Pedro I até a região de Bragança Paulista/Piracaia — cerca de 105 km e 1h20 de viagem."
      }
    ]
  },
  {
    id: "monte-alegre-do-sul",
    name: "Monte Alegre do Sul",
    categories: ["Destinos Românticos"],
    distance: 145,
    drivingHours: 1.8,
    rating: 4.6,
    shortDescription: "Cidade-jardim do Circuito das Águas.",
    fullDescription: "Monte Alegre do Sul é uma cidade-jardim do Circuito das Águas, conhecida por sua beleza natural e pousadas charmosas. Oferece trilhas, spas e contato com a natureza.",
    imageUrl: "/images/Monte_Alegre_do_Sul_ea8c56fb.jpg",
    topAttractions: ["Jardins", "Pousadas", "Spas", "Trilhas", "Natureza"],
    bestSeason: "Primavera para apreciar os jardins em flor.",
    latitude: -22.7667,
    longitude: -46.5333,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Centro histórico",
          description: "Pequena vila com ruas calçadas, lojinhas de artesanato e a herança da colonização italiana — a cidade recebe os visitantes com a bandeira da Itália no portal de entrada."
        },
        {
          name: "Balneário Municipal",
          description: "Espaço com piscinas, áreas de hidromassagem e espaço para piquenique — bom programa em família, com opções tanto para crianças quanto para adultos relaxarem."
        },
        {
          name: "Cachoeiras da região",
          description: "As mais fáceis de acessar são a Cachoeira do Andorinha e a que fica dentro da Pousada da Cachoeira, formadas pelo Rio Camanducaia, que corta as montanhas da cidade."
        },
        {
          name: "Distrito de Mostardas",
          description: "Região rural com concentração de pousadas e alambiques, cortada pelo Rio Camanducaia — boa opção para quem busca hospedagem com vista para a natureza."
        },
        {
          name: "Fazendas de café históricas",
          description: "Algumas pousadas da região funcionam em antigas fazendas de café, com visita guiada para conhecer o cultivo — programa que combina história e paisagem."
        }
      ]
    },
    whereToDine: {
      intro: "Monte Alegre do Sul tem restaurantes de porte pequeno e médio, com influência da tradição italiana da colonização e pratos típicos do interior paulista.",
      categories: [
        {
          name: "Restaurantes de culinária tradicional mineira e paulista",
          description: "Pratos como leitão à pururuca e frango com quiabo em ambiente rústico"
        },
        {
          name: "Cantinas italianas",
          description: "Massas frescas, pizzas e vinhos, herança da colonização italiana da região"
        },
        {
          name: "Cafés no centro",
          description: "Boas opções para café da manhã ou lanche da tarde, com pães e bolos caseiros"
        }
      ]
    },
    faqs: [
      {
        question: "Qual é a melhor época para visitar Monte Alegre do Sul?",
        answer: "A primavera é a mais indicada para apreciar os jardins da cidade em flor, mas Monte Alegre do Sul também é boa opção no inverno, quando o clima da serra fica mais fresco e charmoso."
      },
      {
        question: "Monte Alegre do Sul é uma boa opção para casais?",
        answer: "Sim — é considerada uma cidade-jardim voltada para casais e famílias que buscam tranquilidade, com pousadas românticas, algumas com cachoeira privativa."
      },
      {
        question: "Quantos dias são necessários para conhecer a cidade?",
        answer: "Um fim de semana (2 dias) é suficiente para conhecer o centro histórico, o Balneário Municipal e uma cachoeira da região com calma."
      },
      {
        question: "Como chegar em Monte Alegre do Sul saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia Dom Pedro I ou Fernão Dias, cerca de 145 km e 1h50 de viagem — a cidade fica no mesmo circuito de Serra Negra, Socorro, Lindóia e Águas de Lindóia."
      }
    ]
  },
  {
    id: "pedra-bela",
    name: "Pedra Bela",
    categories: ["Natureza & Aventura"],
    distance: 130,
    drivingHours: 1.6,
    rating: 4.6,
    shortDescription: "Voo livre no pico mais alto da região.",
    fullDescription: "Pedra Bela é conhecida pelo voo livre no pico mais alto da região, com vistas panorâmicas espetaculares. Oferece trilhas e contato com a natureza preservada. Ideal para aventureiros.",
    imageUrl: "/images/pedra_bela_f9c341a0.jpg",
    topAttractions: ["Voo livre", "Pico", "Trilhas", "Vistas panorâmicas", "Natureza"],
    bestSeason: "Primavera e outono para voo livre.",
    latitude: -22.6333,
    longitude: -46.1333,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Tirolesa de Pedra Bela",
          description: "Uma das maiores tirolesas da América Latina, com 2 km de extensão entre o alto da Pedra e o Portal da Cidade — o percurso dura cerca de 1min40 e chega a 120 km/h."
        },
        {
          name: "Pedra do Santuário e Pedra Maria Antônia",
          description: "Formações rochosas que dão nome à cidade, com trilhas de acesso e vistas panorâmicas da região — pontos certos para fotos e contemplação."
        },
        {
          name: "Trilha do Pico do Inferninho",
          description: "Trilha de cerca de 2 horas de subida, recompensada por vista panorâmica no topo — indicada para quem já tem algum preparo físico."
        },
        {
          name: "Trilha do Poção",
          description: "Trilha leve e curta, boa opção para famílias e iniciantes que querem conhecer a natureza da região sem esforço grande."
        },
        {
          name: "Fazenda 3 Sinos",
          description: "Propriedade conhecida pela produção de queijos artesanais de qualidade — bom programa para quem quer levar produtos locais para casa."
        }
      ]
    },
    whereToDine: {
      intro: "Pedra Bela tem restaurantes de porte pequeno, com forte presença da culinária caipira e mineira — vários ficam próximos ao portal de entrada da cidade e à base da tirolesa.",
      categories: [
        {
          name: "Restaurantes à la carte no centro",
          description: "Opções temáticas, algumas ligadas à cultura motociclista da cidade"
        },
        {
          name: "Comida caipira e mineira",
          description: "Frango caipira com quiabo, feijão tropeiro e outros pratos tradicionais do interior"
        },
        {
          name: "Queijos e produtos artesanais",
          description: "Produzidos em fazendas da região, boas lembranças para levar para casa"
        }
      ]
    },
    faqs: [
      {
        question: "Quanto custa a Tirolesa de Pedra Bela?",
        answer: "O valor gira em torno de R$ 70 por pessoa, com seguro incluso — vale confirmar o preço atualizado antes de ir, já que pode variar."
      },
      {
        question: "Pedra Bela é uma boa opção para famílias com crianças?",
        answer: "Sim, principalmente as trilhas mais leves como a do Poção. Já a tirolesa e a trilha do Pico do Inferninho são mais indicadas para adolescentes e adultos por exigirem mais preparo físico."
      },
      {
        question: "Quantos dias são necessários para conhecer Pedra Bela?",
        answer: "Um dia é suficiente para a tirolesa e uma trilha leve. Quem quer explorar mais formações rochosas e cachoeiras da região pode estender para um fim de semana."
      },
      {
        question: "Como chegar em Pedra Bela saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia Fernão Dias ou Dom Pedro I, cerca de 130 km e 1h35 de viagem — a cidade fica próxima de Bragança Paulista e Socorro."
      }
    ]
  },
  {
    id: "itapecerica-da-serra",
    name: "Itapecerica da Serra",
    categories: ["Bate e Volta"],
    distance: 35,
    drivingHours: 0.4,
    rating: 4.2,
    shortDescription: "Cachoeiras e Mata Atlântica coladas em SP.",
    fullDescription: "Itapecerica da Serra é um bate-e-volta perfeito de São Paulo, com cachoeiras e Mata Atlântica preservada. Oferece trilhas leves e contato com a natureza a poucos quilômetros da capital.",
    imageUrl: "/images/Itapecerica_da_Serra_0e4544aa.jpg",
    topAttractions: ["Cachoeiras", "Mata Atlântica", "Trilhas", "Natureza", "Bate-e-volta"],
    bestSeason: "Outono e inverno para clima agradável.",
    latitude: -23.7167,
    longitude: -46.9667,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Templo Kinkaku-Ji do Brasil",
          description: "Réplica do Templo Dourado de Kyoto, projetada na década de 1980, é a única cópia de um templo budista fora do Japão. Tem jardim oriental, lago com carpas e um cinerário — o primeiro do país."
        },
        {
          name: "Templo Enkoji",
          description: "Conhecido como Templo do Círculo Luminoso, é dedicado à tradição budista Zen, com celebrações, meditação Zazen e cursos abertos ao público. Fica na área rural da cidade."
        },
        {
          name: "Represa de Itapecerica (Represa Billings/Guarapiranga)",
          description: "Reservatório que abastece milhões de pessoas no estado, com prática de esportes náuticos como vela, windsurf e kitesurf pelos clubes de iatismo do entorno."
        },
        {
          name: "Cachoeira dos Jesuítas",
          description: "Uma das opções de passeio em meio à Mata Atlântica que cerca a cidade, boa para quem busca um contato mais tranquilo com a natureza."
        },
        {
          name: "Parque do Povo Roberto Nasraui",
          description: "Espaço público bem avaliado pelos visitantes, boa opção para caminhada e lazer ao ar livre no meio urbano da cidade."
        }
      ]
    },
    whereToDine: {
      intro: "Por ser um bate-volta rápido de São Paulo, Itapecerica da Serra tem boas opções de pesqueiros com restaurante e culinária caseira do interior, ideais para complementar o passeio aos templos.",
      categories: [
        {
          name: "Pesqueiros com restaurante",
          description: "Vários espalhados pela cidade, com peixe fresco preparado na hora e estrutura para famílias"
        },
        {
          name: "Restaurantes de comida caseira",
          description: "Opções simples e em conta, boas para um almoço rápido entre um templo e outro"
        }
      ]
    },
    faqs: [
      {
        question: "É preciso ser budista para visitar os templos de Itapecerica da Serra?",
        answer: "Não — tanto o Templo Kinkaku-Ji quanto o Templo Enkoji recebem bem visitantes de qualquer crença que busquem um lugar tranquilo para contemplação, embora o objetivo principal deles seja cerimonial e religioso."
      },
      {
        question: "Quanto tempo leva para visitar os templos?",
        answer: "Uma visita tranquila ao Templo Kinkaku-Ji, incluindo a trilha curta até o templo principal e os jardins ao redor, leva cerca de 1 a 2 horas."
      },
      {
        question: "Itapecerica da Serra é um bom bate-volta para quem tem pouco tempo?",
        answer: "Sim — por ficar a poucos minutos da capital, é possível conhecer o Templo Kinkaku-Ji e almoçar em um pesqueiro da região em meio dia, sem precisar pernoitar."
      },
      {
        question: "Como chegar em Itapecerica da Serra saindo de São Paulo?",
        answer: "O acesso é fácil pela Rodovia Régis Bittencourt, cerca de 35 km e 30-40 minutos de viagem a partir da capital, dependendo do trânsito."
      }
    ]
  },
  {
    id: "juquitiba",
    name: "Juquitiba",
    categories: ["Natureza & Aventura"],
    distance: 75,
    drivingHours: 0.9,
    rating: 4.6,
    shortDescription: "Capital paulista do rafting, a menos de 80 km de SP.",
    fullDescription: "Juquitiba é a capital do rafting de São Paulo, com rios cristalinos e infraestrutura completa para atividades aquáticas. Oferece aventura acessível a menos de 80 km da capital.",
    imageUrl: "/images/juquitiba_28aed96b.jpg",
    topAttractions: ["Rafting", "Rios", "Tirolesa", "Boia-cross", "Aventura"],
    bestSeason: "Primavera e verão para atividades aquáticas.",
    latitude: -23.8667,
    longitude: -47.2333,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Rafting no Rio Juquiá",
          description: "Atividade símbolo da cidade — o rio mantém bom nível de água o ano todo, o que garante boas descidas mesmo em época de pouca chuva. Juquitiba já sediou campeonatos importantes da modalidade."
        },
        {
          name: "Represa Cachoeira do França",
          description: "Águas tranquilas e paisagem natural, boa opção para pesca esportiva e passeios de barco em um ritmo mais calmo que o rafting."
        },
        {
          name: "Viva Ecoparque",
          description: "Espaço de lazer voltado para famílias, com trilhas, cachoeiras e áreas de imersão na Mata Atlântica — atividades pensadas tanto para crianças quanto para adultos."
        },
        {
          name: "Cachoeira do Palomar e outras cachoeiras",
          description: "A cidade tem pelo menos 3 cachoeiras visitáveis além das represas, com opções de trekking e arvorismo no entorno."
        },
        {
          name: "Trilhas no Parque Estadual da Serra do Mar",
          description: "Juquitiba engloba parte da Serra do Mar e faz divisa com o Parque Estadual de Jurupará — boas opções de trilha para quem busca contato com a natureza preservada."
        }
      ]
    },
    whereToDine: {
      intro: "Juquitiba tem restaurantes, pizzarias e lanchonetes concentrados no centro da cidade, além de hotéis e pousadas que servem refeições para não-hóspedes.",
      categories: [
        {
          name: "Restaurantes tradicionais e churrascarias",
          description: "Boas opções para reabastecer depois de um dia de rafting ou trilha"
        },
        {
          name: "Comida caipira",
          description: "Pratos como a feijoada são presença certa no cardápio local"
        },
        {
          name: "Restaurantes em hotéis e pousadas",
          description: "Muitos abertos a não-hóspedes, especialmente nos finais de semana"
        }
      ]
    },
    faqs: [
      {
        question: "Preciso ter experiência para fazer rafting em Juquitiba?",
        answer: "Não — as operadoras locais oferecem pacotes para todos os níveis, com instrutor e equipamento de segurança. O Rio Juquiá mantém bom volume de água o ano todo, o que possibilita a atividade mesmo fora da época de chuvas."
      },
      {
        question: "Qual é a melhor época para visitar Juquitiba?",
        answer: "Primavera e verão são as épocas mais procuradas para atividades aquáticas, mas o rafting funciona o ano todo graças ao bom nível constante do Rio Juquiá."
      },
      {
        question: "Juquitiba é uma boa opção para quem tem pouco tempo?",
        answer: "Sim — por ficar a menos de 80 km de São Paulo, é possível fazer um bate-volta de um dia incluindo rafting ou boia-cross e ainda ter tempo para uma cachoeira."
      },
      {
        question: "Como chegar em Juquitiba saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia Régis Bittencourt (BR-116), cerca de 75 km e 1h30 de viagem — um dos destinos de aventura mais próximos da capital."
      }
    ]
  },
  {
    id: "mogi-das-cruzes",
    name: "Mogi das Cruzes",
    categories: ["História"],
    distance: 60,
    drivingHours: 0.8,
    rating: 4.2,
    shortDescription: "Centro histórico, feiras e forte colônia japonesa.",
    fullDescription: "Mogi das Cruzes é uma cidade histórica com centro colonial bem preservado, feiras tradicionais e forte comunidade japonesa. Oferece gastronomia, artesanato e cultura.",
    imageUrl: "/images/mogi_das_cruzes_2cf7fe70.jpg",
    topAttractions: ["Centro histórico", "Feiras", "Comunidade japonesa", "Gastronomia", "Artesanato"],
    bestSeason: "Ano inteiro; feiras em datas específicas.",
    latitude: -23.5167,
    longitude: -46.1833,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Parque Centenário",
          description: "Principal ponto de encontro com a cultura oriental da cidade — Mogi tem forte comunidade japonesa, e o parque reflete essa herança em sua arquitetura e paisagismo."
        },
        {
          name: "Barragem do Rio Biritiba Mirim",
          description: "Inaugurada em 1982, tem estrutura de lazer com áreas para piquenique, pesca, trilhas ecológicas e mirantes com vista para a represa — dá para praticar caiaque e stand-up paddle."
        },
        {
          name: "Passeio de trem histórico",
          description: "Resgata a tradição das antigas viagens de trem em uma locomotiva a diesel da década de 1950, com capacidade para 174 passageiros e monitores explicando o percurso, que dura cerca de 1h30."
        },
        {
          name: "Feira de artesanato 'Mogi Feita à Mão'",
          description: "Montada na Praça Oswaldo Cruz, reúne barracas de flores, frutas, quitutes típicos e culinária japonesa, além de trabalhos de artesãos da região."
        },
        {
          name: "Circuito de hortifrutis",
          description: "Mogi das Cruzes faz parte do cinturão verde de São Paulo, com forte produção de frutas, legumes e verduras — boa oportunidade para conhecer fazendinhas e pesqueiros da região."
        }
      ]
    },
    whereToDine: {
      intro: "A gastronomia de Mogi das Cruzes reflete a mistura de tradições europeias e japonesas da cidade, com boas opções tanto no centro quanto perto da Barragem do Rio Biritiba Mirim.",
      categories: [
        {
          name: "Restaurantes de carnes",
          description: "A picanha é um prato bastante procurado nos restaurantes especializados da cidade"
        },
        {
          name: "Culinária alemã com toque brasileiro",
          description: "Reflexo da diversidade de imigração que moldou a região"
        },
        {
          name: "Restaurantes perto da barragem",
          description: "Opções com paisagem para a represa, boas para o almoço depois de um passeio de caiaque"
        }
      ]
    },
    faqs: [
      {
        question: "Qual é a melhor época para visitar Mogi das Cruzes?",
        answer: "A cidade funciona bem o ano todo. Vale ficar de olho no calendário de feiras e eventos culturais, já que muitas atrações (como o passeio de trem) têm dias e horários específicos."
      },
      {
        question: "Quantos dias são necessários para conhecer Mogi das Cruzes?",
        answer: "Um dia é suficiente para o roteiro central: Parque Centenário, feira de artesanato e um passeio pela Barragem do Rio Biritiba Mirim."
      },
      {
        question: "Mogi das Cruzes é uma boa opção para famílias?",
        answer: "Sim — a barragem tem estrutura para piquenique e esportes aquáticos leves, e o passeio de trem histórico costuma agradar tanto adultos quanto crianças."
      },
      {
        question: "Como chegar em Mogi das Cruzes saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia Ayrton Senna/Carvalho Pinto, cerca de 60 km e 50 minutos de viagem — um dos destinos mais próximos da capital, na região do Alto Tietê."
      }
    ]
  },
  {
    id: "nazare-paulista",
    name: "Nazaré Paulista",
    categories: ["Para Curtir o Verão"],
    distance: 75,
    drivingHours: 0.9,
    rating: 4.4,
    shortDescription: "Represa Atibainha e a tradicional Festa do Peão.",
    fullDescription: "Nazaré Paulista é conhecida pela Represa Atibainha e pela tradicional Festa do Peão. Oferece atividades aquáticas, trilhas e eventos culturais.",
    imageUrl: "/images/nazare_paulista_d12ffa49.jpg",
    topAttractions: ["Represa Atibainha", "Festa do Peão", "Atividades aquáticas", "Trilhas", "Eventos"],
    bestSeason: "Verão para atividades aquáticas.",
    latitude: -23.1333,
    longitude: -46.2167,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Represa de Atibainha",
          description: "Com cerca de 18-25 km² de área, integra o Sistema Cantareira e é a grande atração da cidade — passeios de barco, pesca esportiva (com devolução do peixe) e esportes aquáticos como mergulho e jet ski."
        },
        {
          name: "Igreja Matriz Nossa Senhora de Nazaré",
          description: "Construída em 1676 segundo historiadores, é a construção mais antiga da região e ponto de referência tanto religioso quanto histórico no centro da cidade."
        },
        {
          name: "Mirante do Cristo Redentor",
          description: "Um dos pontos mais altos da cidade, com vista panorâmica da represa e das montanhas ao redor."
        },
        {
          name: "Marinas na represa",
          description: "Várias marinas ao longo da Rodovia Dom Pedro I oferecem estrutura para lanchas, jet skis, áreas de churrasco e restaurante com vista para a água."
        },
        {
          name: "Romaria de barcos",
          description: "Durante a Festa da Padroeira, em novembro, acontece uma tradicional romaria de barcos pela represa — um dos eventos mais característicos da cidade."
        }
      ]
    },
    whereToDine: {
      intro: "Os restaurantes de Nazaré Paulista ficam concentrados às margens da Represa de Atibainha, muitos com buffet à vontade e vista para a água.",
      categories: [
        {
          name: "Restaurantes à beira da represa",
          description: "Buffet com costela no fogo de chão, peixe e carnes variadas, geralmente com música ao vivo aos fins de semana"
        },
        {
          name: "Afogado",
          description: "Prato típico da região, um cozido de carne com batatas — vale procurar nos restaurantes tradicionais do centro"
        },
        {
          name: "Marinas com restaurante próprio",
          description: "Combinam refeição com estrutura de lazer para passar o dia na represa"
        }
      ]
    },
    faqs: [
      {
        question: "Qual é a melhor época para visitar Nazaré Paulista?",
        answer: "O verão é a época mais procurada para aproveitar a represa e os esportes aquáticos, mas a cidade também é boa opção o resto do ano para quem busca um passeio mais tranquilo."
      },
      {
        question: "Quantos dias são necessários para conhecer Nazaré Paulista?",
        answer: "Um bate-volta de um dia é suficiente para aproveitar a represa e almoçar em um dos restaurantes à beira d'água."
      },
      {
        question: "Nazaré Paulista é boa opção para quem não tem barco próprio?",
        answer: "Sim — as marinas da região alugam lanchas e equipamentos, e muitos restaurantes à beira da represa já incluem estrutura de lazer para quem só quer aproveitar a vista e a água."
      },
      {
        question: "Como chegar em Nazaré Paulista saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia Dom Pedro I (SP-065), cerca de 75 km e menos de 1h30 de viagem — um dos destinos de represa mais próximos da capital."
      }
    ]
  },
  {
    id: "ibiuna",
    name: "Ibiúna",
    categories: ["Natureza & Aventura"],
    distance: 65,
    drivingHours: 0.8,
    rating: 4.5,
    shortDescription: "Clima ameno, turismo rural e mel artesanal.",
    fullDescription: "Ibiúna é uma cidade com clima ameno, tradição em turismo rural e produção de mel artesanal. Oferece trilhas, pesca e contato com a natureza. Ideal para bate-e-volta.",
    imageUrl: "/images/ibiuna_847ba7af.jpg",
    topAttractions: ["Mel artesanal", "Turismo rural", "Trilhas", "Pesca", "Natureza"],
    bestSeason: "Primavera e outono para clima agradável.",
    latitude: -23.7333,
    longitude: -47.2167,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Cachoeira Vargem do Salto",
          description: "A 12 km do centro, tem fácil acesso e poços rasos que a tornam boa opção para famílias com crianças. Costuma ficar movimentada em dias quentes."
        },
        {
          name: "Cachoeira da Fumaça",
          description: "Uma das mais icônicas de Ibiúna, com queda de 35 metros e poços de água cristalina. O acesso é por trilha de dificuldade moderada, a cerca de 20 km do centro."
        },
        {
          name: "Represa de Itupararanga",
          description: "Reservatório importante para a região, com opções de lazer como a 'Prainha de Ibiúna', onde dá para passear de barco, jet ski ou pescar em um ambiente menos lotado que outras represas da região."
        },
        {
          name: "Parque Estadual do Jurupará",
          description: "Com mais de 26 mil hectares, preserva ecossistemas de Mata Atlântica — bom para caminhadas guiadas e educação ambiental."
        },
        {
          name: "Parque Ecológico Itupararanga",
          description: "Área de preservação com mais de 60 mil m², voltada ao turismo sustentável, com trilhas e prática de esportes ao ar livre."
        }
      ]
    },
    whereToDine: {
      intro: "A gastronomia de Ibiúna é diversificada, do tradicional caipira a opções mais refinadas — reflexo de uma cidade que recebe tanto turismo rural quanto visitantes em busca de bem-estar.",
      categories: [
        {
          name: "Restaurantes de comida caseira",
          description: "Opção mais simples e tradicional, presente na maior parte da cidade"
        },
        {
          name: "Cozinha contemporânea",
          description: "Restaurantes com pratos refinados e toque regional, para quem busca algo mais elaborado"
        },
        {
          name: "Culinária japonesa",
          description: "Opções de sushi e sashimi frescos, refletindo a forte tradição de produção hortifrúti da região"
        }
      ]
    },
    faqs: [
      {
        question: "Qual é a melhor época para visitar Ibiúna?",
        answer: "Primavera e outono oferecem clima mais ameno para trilhas e cachoeiras, mas o verão também é procurado por quem quer aproveitar o banho de cachoeira com temperaturas mais altas."
      },
      {
        question: "A Cachoeira Vargem do Salto é boa para crianças?",
        answer: "Sim — tem poços rasos e fácil acesso a partir do centro (cerca de 12 km), o que a torna uma das opções mais indicadas para famílias com crianças pequenas."
      },
      {
        question: "Quantos dias são necessários para conhecer Ibiúna?",
        answer: "Um bate-volta de um dia é suficiente para uma cachoeira e um passeio pela represa. Quem quer explorar mais trilhas e o turismo rural da região pode reservar um fim de semana."
      },
      {
        question: "Como chegar em Ibiúna saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia Régis Bittencourt ou Raposo Tavares, cerca de 65 km e 50 minutos a 1 hora de viagem."
      }
    ]
  },
  {
    id: "lindoia",
    name: "Lindóia",
    categories: ["Destinos Românticos"],
    distance: 170,
    drivingHours: 2.1,
    rating: 4.5,
    shortDescription: "Vizinha discreta de Águas de Lindóia, com spas.",
    fullDescription: "Lindóia é uma cidade vizinha discreta de Águas de Lindóia, conhecida por spas e pousadas charmosas. Oferece relaxamento e contato com a natureza serrana.",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=75&auto=format&fit=crop",
    topAttractions: ["Spas", "Pousadas", "Natureza", "Trilhas", "Relaxamento"],
    bestSeason: "Outono e inverno para clima agradável.",
    latitude: -22.6333,
    longitude: -46.7000,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Praça das Águas",
          description: "Local central conhecido pelas fontes de água mineral, onde é possível encher garrafas diretamente nas bicas. Cercada de áreas verdes, boa para um passeio tranquilo."
        },
        {
          name: "Mirante do Cristo",
          description: "Um dos pontos mais visitados da cidade — do alto, a estátua do Cristo Redentor oferece vista panorâmica de Lindóia e das montanhas ao redor, ótimo para o pôr do sol."
        },
        {
          name: "Praça da Matriz",
          description: "Na parte alta da cidade, com vista para as redondezas, coreto detalhado e a Paróquia Nossa Senhora das Brotas, igreja da padroeira local."
        },
        {
          name: "Casa da Memória Dr. Armindo Beghini",
          description: "Espaço que reúne a história da cidade e sua relação com as águas minerais, incluindo a curiosidade de que a água de Lindóia já foi levada à Lua em uma missão espacial."
        },
        {
          name: "Roteiro pelo Circuito das Águas",
          description: "Por ficar próxima de Águas de Lindóia e Serra Negra, Lindóia é uma boa base mais tranquila e barata para explorar toda a região do Circuito das Águas Paulista."
        }
      ]
    },
    whereToDine: {
      intro: "Como recebe menos turistas que suas vizinhas mais famosas, Lindóia tem restaurantes mais simples e em conta, com destaque para as opções self-service e as pizzarias do centro.",
      categories: [
        {
          name: "Restaurantes self-service",
          description: "Opção por quilo ou preço fixo à vontade, com pratos quentes e frios variados"
        },
        {
          name: "Churrascarias",
          description: "Presença tradicional na cidade, boa opção para grupos"
        },
        {
          name: "Pizzarias e restaurantes à la carte",
          description: "Boas opções para o jantar, algumas abrindo só em dias específicos da semana"
        }
      ]
    },
    faqs: [
      {
        question: "Qual é a diferença entre Lindóia e Águas de Lindóia?",
        answer: "São cidades vizinhas e distintas: Águas de Lindóia é o destino mais turístico e hoteleiro do Circuito das Águas, enquanto Lindóia é menor, mais tranquila e com preços de hospedagem mais em conta — boa opção para quem quer visitar a região sem o movimento intenso."
      },
      {
        question: "Qual é a melhor época para visitar Lindóia?",
        answer: "Outono e inverno são os mais procurados pelo clima fresco da região, mas a cidade pode ser visitada o ano todo, já que suas atrações são majoritariamente urbanas e culturais."
      },
      {
        question: "Quanto tempo é necessário para conhecer Lindóia?",
        answer: "A cidade é pequena e tranquila — em menos de 2 horas é possível visitar a Praça da Matriz, a Praça das Águas e o Mirante do Cristo com calma."
      },
      {
        question: "Como chegar em Lindóia saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia Fernão Dias ou Dom Pedro I, cerca de 170 km e pouco mais de 2 horas de viagem — no mesmo circuito de Águas de Lindóia e Serra Negra."
      }
    ]
  },
  {
    id: "serra-do-japi",
    name: "Serra do Japi (Jundiaí)",
    categories: ["Natureza & Aventura"],
    distance: 60,
    drivingHours: 0.8,
    rating: 4.7,
    shortDescription: "Reserva da biosfera com trilhas a poucos km de SP.",
    fullDescription: "Serra do Japi é uma reserva da biosfera com trilhas bem marcadas a poucos quilômetros de São Paulo. Oferece contato com a natureza preservada e vistas panorâmicas.",
    imageUrl: "/images/Serra_do_Japi_65b2c8c1.JPG",
    topAttractions: ["Trilhas", "Reserva da biosfera", "Vistas panorâmicas", "Natureza", "Bate-e-volta"],
    bestSeason: "Primavera e outono para trilhas.",
    latitude: -23.1833,
    longitude: -46.8667,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Trilha do Paraíso",
          description: "A trilha mais conhecida da reserva, com cerca de 3 km e 1 hora de caminhada de dificuldade baixa a moderada, passando por um trecho de eucaliptos até a antiga casa do conserveiro — boa introdução à Serra do Japi para quem nunca visitou."
        },
        {
          name: "Observação de borboletas e fauna nativa",
          description: "A serra é conhecida como 'o paraíso das borboletas', com mais de 800 espécies catalogadas na região, além de mais de 350 espécies de aves. Nas trilhas também é comum avistar capivaras e, com sorte, bugios."
        },
        {
          name: "Fazenda Montanhas do Japi",
          description: "Propriedade particular aberta à visitação, com trilhas próprias, lago, passeios de bicicleta e boa concentração de fauna e flora — inclusive famílias de capivaras residentes no local."
        },
        {
          name: "Visitação monitorada com o Projeto Nossa Serra",
          description: "A Fundação Serra do Japi mantém trilhas de diferentes níveis de dificuldade, com foco em educação ambiental. O acesso às trilhas oficiais é feito mediante agendamento com monitores credenciados."
        },
        {
          name: "Mirantes da região ecotonal",
          description: "A serra fica na transição entre a Mata Atlântica litorânea e a mata de planalto, o que resulta em paisagens variadas — vários pontos altos das trilhas oferecem vista para a Serra da Cantareira, a Serra dos Cristais e o Pico do Jaraguá."
        }
      ]
    },
    whereToDine: {
      intro: "Como a maior parte da Serra do Japi é área de preservação, a oferta gastronômica fica concentrada nas fazendas e propriedades que também recebem visitantes, com refeições e lanches de trilha.",
      categories: [
        {
          name: "Refeições em fazendas particulares",
          description: "Propriedades como a Fazenda Montanhas do Japi costumam incluir alimentação na diária de visitação"
        },
        {
          name: "Lanche de trilha",
          description: "Passeios guiados com operadoras locais costumam incluir lanche antes ou depois da caminhada"
        },
        {
          name: "Restaurantes no centro de Jundiaí",
          description: "Para uma refeição completa, a maioria dos visitantes desce até o centro da cidade, a poucos minutos da serra"
        }
      ]
    },
    faqs: [
      {
        question: "Preciso de guia para fazer trilhas na Serra do Japi?",
        answer: "Sim — o acesso às trilhas oficiais da Reserva Biológica é feito com monitores credenciados do Projeto Nossa Serra, mediante agendamento prévio. Fazendas particulares da região também oferecem trilhas próprias, algumas com guia incluso."
      },
      {
        question: "Por que a Serra do Japi é chamada de reserva da biosfera?",
        answer: "A UNESCO declarou a região Reserva da Biosfera em 1992 pela riqueza de sua Mata Atlântica remanescente — é uma área ecotonal, onde se encontram a mata litorânea e a mata de planalto, o que explica a grande diversidade de fauna e flora."
      },
      {
        question: "Qual é a melhor época para visitar a Serra do Japi?",
        answer: "Primavera e verão são ideais para observar as borboletas, mais ativas nas horas quentes do dia. Outono e inverno oferecem temperaturas mais amenas para caminhadas mais longas."
      },
      {
        question: "Como chegar na Serra do Japi saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia Anhanguera ou Bandeirantes até Jundiaí, cerca de 60 km e 1 hora de viagem até a cidade — o acesso às trilhas depende do ponto de entrada escolhido na serra."
      }
    ]
  },
  {
    id: "salto",
    name: "Salto",
    categories: ["Natureza & Aventura"],
    distance: 100,
    drivingHours: 1.2,
    rating: 4.4,
    shortDescription: "O salto do Tietê, cachoeiras e parque urbano.",
    fullDescription: "Salto é conhecida pelo Salto do Tietê, cachoeiras e parque urbano bem cuidado. Oferece trilhas, contato com a natureza e gastronomia. Ideal para bate-e-volta.",
    imageUrl: "/images/salto_c872e6ad.jpg",
    topAttractions: ["Salto do Tietê", "Cachoeiras", "Parque urbano", "Trilhas", "Gastronomia"],
    bestSeason: "Outono e inverno para clima agradável.",
    latitude: -23.2000,
    longitude: -47.2833,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Complexo da Cachoeira (Salto Grande)",
          description: "A maior queda d'água do Médio Tietê, responsável pelo primeiro ciclo econômico da cidade com a instalação de tecelagens movidas a força hidráulica. Reúne a Ponte Pênsil, o Caminho das Esculturas e o Jardim das Águas."
        },
        {
          name: "Memorial do Rio Tietê",
          description: "Museu com acervo sobre a história e importância do rio para a região, ao lado da Cachoeira do Salto Grande e da Ilha dos Amores. Vale checar o horário de funcionamento antes de ir."
        },
        {
          name: "Ponte Estaiada e Mirante do Rio Tietê",
          description: "Inaugurados em 2016, o mirante tem elevador panorâmico que sobe 12 andares até um salão de vidro com vista de quase 360° da cidade — entrada gratuita."
        },
        {
          name: "Parque da Rocha Moutonnée",
          description: "Abriga uma rocha de granito com mais de 500 milhões de anos, polida pela passagem de uma geleira na Era Glacial — um verdadeiro museu geológico a céu aberto."
        },
        {
          name: "Trem Histórico entre Salto e Itu",
          description: "Passeio turístico de trem que liga as duas cidades, com paradas para almoço nas estações — boa forma de combinar os dois destinos no mesmo dia."
        }
      ]
    },
    whereToDine: {
      intro: "Salto tem restaurantes espalhados pelo centro e perto dos principais pontos turísticos, como o Complexo da Cachoeira e o Memorial do Rio Tietê, além de opções de turismo rural com café colonial.",
      categories: [
        {
          name: "Restaurantes nas estações do trem histórico",
          description: "Opção de almoço combinada com o passeio de trem entre Salto e Itu"
        },
        {
          name: "Café da manhã colonial em turismo rural",
          description: "Fazendas na região oferecem café colonial farto, algumas com atividades para crianças"
        },
        {
          name: "Restaurantes no centro histórico",
          description: "Perto da Praça Archimedes Lammoglia e do Memorial do Rio Tietê"
        }
      ]
    },
    faqs: [
      {
        question: "O Memorial do Rio Tietê está sempre aberto?",
        answer: "Nem sempre — o espaço já passou por obras de recuperação, então vale checar o funcionamento atualizado antes de planejar a visita, especialmente se ele for o foco do passeio."
      },
      {
        question: "Quanto custa subir no Mirante da Ponte Estaiada?",
        answer: "A entrada é gratuita. O acesso é por elevador panorâmico até o topo, de onde se tem uma vista de quase 360° da cidade e do Rio Tietê."
      },
      {
        question: "Quantos dias são necessários para conhecer Salto?",
        answer: "Um dia é suficiente para o Complexo da Cachoeira, o Parque da Rocha Moutonnée e o mirante da Ponte Estaiada. Quem quer incluir o passeio de trem até Itu deve reservar um pouco mais de tempo."
      },
      {
        question: "Como chegar em Salto saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia Castelo Branco ou Anhanguera, cerca de 100 km e 1h15 de viagem — próxima de Itu, no mesmo circuito de bate-voltas do interior paulista."
      }
    ]
  },
  {
    id: "sao-sebastiao",
    name: "São Sebastião",
    categories: ["Para Curtir o Verão", "Natureza & Aventura"],
    distance: 180,
    drivingHours: 2.2,
    rating: 4.7,
    shortDescription: "Litoral Norte com praias selvagens e oportunidades de surf.",
    fullDescription: "São Sebastião é um destino de litoral norte com praias selvagens, ondas perfeitas para surf e uma natureza exuberante. A cidade oferece trilhas, mergulho, pesca e contato com a Mata Atlântica preservada. Ideal para aventureiros e amantes de esportes aquáticos.",
    imageUrl: "/images/sao_sebastiao_1ce82cf4.jpg",
    topAttractions: ["Praias de surf", "Trilhas", "Mergulho", "Pesca", "Mata Atlântica"],
    bestSeason: "Verão para surf e praias.",
    latitude: -23.7667,
    longitude: -45.4167,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Centro Histórico e Rua da Praia",
          description: "Composto por igreja Matriz, Capela de São Gonçalo, Casa de Câmara e Cadeia e sete quarteirões tombados dos séculos XVII e XVIII. A Rua da Praia (Av. Dr. Altino Arantes) reúne casarões coloniais transformados em restaurantes e bares."
        },
        {
          name: "Complexo Turístico Rua da Praia (Praça da Orla)",
          description: "Espaço de lazer à beira-mar com vista para o Canal de São Sebastião e Ilhabela, com atrações como a Casa Caiçara, Espaço Vida Marinha e Fonte Musical Luminosa."
        },
        {
          name: "Praia de Maresias",
          description: "A mais badalada do litoral norte, com ótimas ondas para surf e vida noturna agitada — reúne bares, restaurantes, pousadas e uma das casas de show mais famosas do litoral paulista."
        },
        {
          name: "Praia de Calhetas",
          description: "Acessível apenas a pé, com mirante gramado cheio de coqueiros e vista para duas prainhas separadas por uma faixa de areia — uma das mais fotografadas da região."
        },
        {
          name: "Balsa para Ilhabela",
          description: "O acesso à ilha vizinha é feito por São Sebastião, com travessia rápida — programa fácil de combinar no mesmo roteiro."
        }
      ]
    },
    whereToDine: {
      intro: "A gastronomia de São Sebastião se divide entre alguns núcleos: o centro histórico, com casarões viram restaurantes; Maresias, com vibe jovem e sofisticada; e Juquehy, considerada o polo gastronômico mais refinado da cidade.",
      categories: [
        {
          name: "Frutos do mar no centro histórico",
          description: "Moqueca e casquinha de siri são as especialidades da região, servidas em restaurantes com vista para o mar na Rua da Praia"
        },
        {
          name: "Restaurantes badalados em Maresias",
          description: "Concentrados na Avenida Dr. Francisco Loup, do 'pé na areia' requintado ao fast food"
        },
        {
          name: "Alta gastronomia em Juquehy",
          description: "Restaurantes com padrão mais elevado, considerados o polo gastronômico 'de luxo' da cidade"
        }
      ]
    },
    faqs: [
      {
        question: "Qual é a melhor época para visitar São Sebastião?",
        answer: "O verão é a época mais procurada para praia e surf, mas o centro histórico e os restaurantes funcionam bem o ano todo, inclusive fora de temporada, quando a cidade fica mais tranquila."
      },
      {
        question: "Dá para visitar Ilhabela no mesmo roteiro de São Sebastião?",
        answer: "Sim — a balsa que liga as duas cidades sai de São Sebastião e a travessia é rápida, o que torna fácil combinar os dois destinos em uma mesma viagem."
      },
      {
        question: "Quantos dias são necessários para conhecer São Sebastião?",
        answer: "Um roteiro de 3 a 5 dias permite conhecer bem o centro histórico e algumas praias diferentes, já que a cidade tem um litoral extenso com praias de perfis bem distintos."
      },
      {
        question: "Como chegar em São Sebastião saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia dos Tamoios, cerca de 180 km e pouco mais de 2 horas de viagem."
      }
    ]
  },
  {
    id: "caraguatatuba",
    name: "Caraguatatuba",
    categories: ["Para Curtir o Verão", "Para ir com Crianças"],
    distance: 165,
    drivingHours: 2.1,
    rating: 4.6,
    shortDescription: "Litoral Norte com praias para família e infraestrutura completa.",
    fullDescription: "Caraguatatuba é um destino de litoral norte com praias tranquilas ideais para famílias. A cidade oferece infraestrutura turística completa, parques, museus e gastronomia. Perfeita para quem busca praia e diversão em família.",
    imageUrl: "/images/Caraguatatuba_76ea0b63.jpg",
    topAttractions: ["Praias", "Parques", "Museus", "Gastronomia", "Infraestrutura"],
    bestSeason: "Verão para aproveitar as praias.",
    latitude: -23.6167,
    longitude: -45.4167,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Praia da Cocanha",
          description: "Uma das mais completas da cidade, com boa infraestrutura de quiosques e restaurantes, mar calmo para famílias e a Ilha da Cocanha em frente, acessível em poucos minutos de barco."
        },
        {
          name: "Praia Martim de Sá",
          description: "Uma das mais movimentadas e urbanizadas, com ampla oferta de bares e restaurantes que funcionam de dia e à noite — o lado esquerdo costuma ser mais tranquilo para famílias."
        },
        {
          name: "Ilha da Cocanha",
          description: "Fácil acesso a partir da praia de mesmo nome, preserva vegetação nativa da Mata Atlântica e tem restaurante especializado em frutos do mar, além de trilhas curtas e um casarão histórico."
        },
        {
          name: "Trilhas e cachoeiras (Camaroeiro, Corcovado)",
          description: "A cidade tem cachoeiras e trilhas na Serra do Mar, boas para complementar o roteiro de praia com um dia de contato mais próximo com a natureza."
        },
        {
          name: "Centro histórico e Praça Cândido Mota",
          description: "Reúne o Obelisco e a Igreja Matriz de Santo Antônio, fundada em 1840 — bom programa para o fim de tarde, caminhando pelo centrinho charmoso da cidade."
        }
      ]
    },
    whereToDine: {
      intro: "Os bares e restaurantes mais conhecidos de Caraguatatuba ficam concentrados na área central, na Praia Martim de Sá e na Praia do Massaguaçu, onde a maioria dos visitantes se hospeda.",
      categories: [
        {
          name: "Restaurantes de praia",
          description: "Concentrados na Martim de Sá e na Cocanha, com boa estrutura de quiosques"
        },
        {
          name: "Steakhouses e grelhados",
          description: "Opções de carnes na área central, boas para jantar"
        },
        {
          name: "Culinária caiçara",
          description: "Frutos do mar e pratos regionais, presentes em restaurantes ao longo de toda a orla"
        }
      ]
    },
    faqs: [
      {
        question: "Caraguatatuba é uma boa opção para famílias com crianças?",
        answer: "Sim — a cidade é conhecida por praias de mar calmo, como a Cocanha, e tem boa infraestrutura de hotéis, pousadas e restaurantes voltados para o público familiar."
      },
      {
        question: "Dá para combinar Caraguatatuba com Ubatuba na mesma viagem?",
        answer: "Sim — as duas cidades ficam a cerca de 48 km de distância uma da outra, e é comum fazer uma dobradinha entre elas, aproveitando as praias mais urbanas de Caraguá e as mais preservadas de Ubatuba."
      },
      {
        question: "Qual é a melhor época para visitar Caraguatatuba?",
        answer: "O verão é a época mais procurada para praia, mas a cidade também funciona bem fora de temporada para quem prioriza trilhas, cachoeiras e o centro histórico."
      },
      {
        question: "Como chegar em Caraguatatuba saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia dos Tamoios, cerca de 165 km e pouco mais de 2 horas de viagem — considerada a 'capital do litoral norte' pela proximidade com Ubatuba e São Sebastião."
      }
    ]
  },
  {
    id: "bertioga",
    name: "Bertioga",
    categories: ["Para Curtir o Verão", "Natureza & Aventura"],
    distance: 145,
    drivingHours: 1.8,
    rating: 4.5,
    shortDescription: "Litoral Central com praias e oportunidades de ecoturismo.",
    fullDescription: "Bertioga é um destino de litoral central com praias preservadas e excelentes oportunidades de ecoturismo. A cidade oferece trilhas na Mata Atlântica, mergulho e contato com a natureza selvagem.",
    imageUrl: "/images/bertioga_17fbf37d.jpg",
    topAttractions: ["Praias", "Trilhas", "Ecoturismo", "Mergulho", "Mata Atlântica"],
    bestSeason: "Verão para praias e ecoturismo.",
    latitude: -23.8667,
    longitude: -46.1667,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Forte São João",
          description: "Considerada a fortificação mais antiga do Brasil, está na lista indicativa de Patrimônio Cultural Mundial da Unesco. Fica na Praia da Enseada, no centro da cidade, e é um dos programas históricos mais importantes de Bertioga."
        },
        {
          name: "Canal de Bertioga",
          description: "Trecho de mar com cerca de 30 km de extensão, ótimo para pesca e passeios de barco ou escuna. Dá para ver o Forte São João, píeres, marinas e manguezais ao longo do percurso."
        },
        {
          name: "Praia da Enseada",
          description: "Com 12 km de extensão, tem mar calmo, vista para as montanhas e boa infraestrutura (calçadão, quiosques, quadras, banheiros e parquinho) — ótima para famílias e stand up paddle."
        },
        {
          name: "Riviera de São Lourenço",
          description: "Condomínio de alto padrão com infraestrutura completa de restaurantes, hotéis e até shopping. A praia é acessível a qualquer visitante, mesmo sem se hospedar no condomínio."
        },
        {
          name: "Trilhas e passeios de canoagem",
          description: "Com mais de 90% do território em preservação permanente, Bertioga tem trilhas na Mata Atlântica e rios como o Itapanhaú, Itaguaré e Guaratuba, ótimos para canoagem e contato com a cultura caiçara."
        }
      ]
    },
    whereToDine: {
      intro: "Os restaurantes de Bertioga se concentram na área central e ao longo da Praia da Enseada e Maitinga, com opções que costumam ser mais em conta do que em outros destinos praianos de São Paulo.",
      categories: [
        {
          name: "Restaurantes na orla",
          description: "Concentrados entre o centro, a Praia da Enseada e a Praia de Maitinga"
        },
        {
          name: "Restaurantes às margens do canal",
          description: "Boa vista para os barcos e o Forte São João, com opção de sorveterias e cafeterias no entorno"
        },
        {
          name: "Cervejarias artesanais",
          description: "Opções mais recentes na cidade, boas para o fim de tarde"
        }
      ]
    },
    faqs: [
      {
        question: "O Forte São João é aberto para visitação?",
        answer: "Sim — é um dos principais pontos históricos de Bertioga, localizado na Praia da Enseada, e está na lista indicativa de Patrimônio Cultural Mundial da Unesco junto com outras fortificações brasileiras."
      },
      {
        question: "Qual é a melhor época para visitar Bertioga?",
        answer: "O verão é a época mais procurada para praia e ecoturismo, mas a cidade também funciona bem fora de temporada para quem quer aproveitar trilhas e o canal com mais tranquilidade."
      },
      {
        question: "Dá para ir de Bertioga ao Guarujá sem carro?",
        answer: "Sim — existe uma balsa entre as duas cidades onde pedestres não pagam nada, e do lado do Guarujá é possível seguir por uma trilha leve de 30-40 minutos."
      },
      {
        question: "Como chegar em Bertioga saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia dos Imigrantes/Mogi-Bertioga, cerca de 145 km e quase 2 horas de viagem."
      }
    ]
  },
  {
    id: "cananeia",
    name: "Cananéia",
    categories: ["História", "Natureza & Aventura"],
    distance: 260,
    drivingHours: 3.2,
    rating: 4.6,
    shortDescription: "Litoral Sul histórico com ecoturismo e avistamento de golfinhos.",
    fullDescription: "Cananéia é uma cidade histórica do litoral sul com grande importância ecológica. A região oferece ecoturismo, avistamento de golfinhos, trilhas na Mata Atlântica e contato com a história colonial. Ideal para quem busca natureza e história.",
    imageUrl: "/images/cananeia_20c059b5.jpg",
    topAttractions: ["Avistamento de golfinhos", "Trilhas", "Ecoturismo", "Centro histórico", "Mata Atlântica"],
    bestSeason: "Primavera e verão para avistamento de golfinhos.",
    latitude: -25.0167,
    longitude: -47.9333,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Passeio de barco para avistamento de golfinhos",
          description: "O canal de Cananéia é conhecido pela presença constante de golfinhos, que costumam acompanhar os barcos que levam às piscinas naturais da Ilha Comprida ou aos cenários intocados da Ilha do Cardoso."
        },
        {
          name: "Ilha do Cardoso",
          description: "Um dos passeios mais procurados a partir de Cananéia, com praias como a do Pereirinha, onde os golfinhos costumam nadar perto dos banhistas, e a Ilha do Bom Abrigo, mais isolada, com farol histórico e boa para mergulho."
        },
        {
          name: "Centro histórico",
          description: "Cananéia é considerada uma das cidades mais antigas do Brasil, com casarões coloniais preservados e a Igreja de São João Batista — vale uma caminhada antes ou depois dos passeios de barco."
        },
        {
          name: "Ilha Comprida",
          description: "Acessível por balsa a partir de Cananéia, tem mais de 70 km de praias preservadas, dunas e trilhas — como a Trilha da Trincheira, com falésias e vista para o canal."
        },
        {
          name: "Polo Ecoturístico de Lagamar",
          description: "Cananéia e as ilhas vizinhas fazem parte dessa área de cerca de 200 km, considerada um santuário ambiental com manguezais, restingas e Mata Atlântica preservada."
        }
      ]
    },
    whereToDine: {
      intro: "A gastronomia de Cananéia é baseada em frutos do mar fresquíssimos, com restaurantes simples à beira-mar tanto no centro histórico quanto nas ilhas vizinhas.",
      categories: [
        {
          name: "Restaurantes de frutos do mar",
          description: "Opções simples e em conta, com peixe fresco do dia, em vilas de pescadores como Pedrinhas"
        },
        {
          name: "Restaurantes na Ilha do Cardoso",
          description: "Estrutura mais básica, mas com boa comida caseira para quem faz o bate-volta"
        },
        {
          name: "Restaurantes do centro histórico",
          description: "Boas opções para experimentar a culinária caiçara em um ambiente com casarões coloniais"
        }
      ]
    },
    faqs: [
      {
        question: "Qual é a melhor época para ver golfinhos em Cananéia?",
        answer: "Primavera e verão costumam ter mais avistamentos, mas os golfinhos são vistos com frequência no canal durante boa parte do ano — vale conversar com os barqueiros locais sobre as condições do dia."
      },
      {
        question: "Preciso reservar o passeio de barco com antecedência?",
        answer: "Em alta temporada, sim — vale reservar antes, especialmente para a Ilha do Cardoso e a Ilha do Bom Abrigo, que são mais procuradas nos fins de semana e feriados."
      },
      {
        question: "Quantos dias são necessários para conhecer Cananéia?",
        answer: "Um bate-volta de um dia permite conhecer o centro histórico e fazer um passeio de barco. Quem quer incluir a Ilha Comprida e explorar com mais calma deve reservar 2 a 3 dias."
      },
      {
        question: "Como chegar em Cananéia saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia Régis Bittencourt até a região de Registro, seguindo até o litoral sul — cerca de 260 km e mais de 3 horas de viagem, um dos destinos mais distantes da capital nesta lista."
      }
    ]
  },
  {
    id: "iporanga",
    name: "Iporanga",
    categories: ["Natureza & Aventura"],
    distance: 220,
    drivingHours: 2.8,
    rating: 4.7,
    shortDescription: "PETAR - Cavernas, espeleologia e aventura subterrânea.",
    fullDescription: "Iporanga é a porta de entrada do PETAR (Parque Estadual Turístico do Alto Ribeira), famoso por suas cavernas e oportunidades de espeleologia. A região oferece trilhas, rapel em cavernas e contato com formações geológicas impressionantes.",
    imageUrl: "/images/iporanga_b8a9b4c9.jpg",
    topAttractions: ["Cavernas", "Espeleologia", "Trilhas", "Rapel", "PETAR"],
    bestSeason: "Outono e inverno para exploração de cavernas.",
    latitude: -24.5833,
    longitude: -48.7667,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Caverna de Santana (Núcleo Santana)",
          description: "A caverna mais visitada do PETAR, com 8 km de extensão dividida em salões como São Jorge, das Flores e São Paulo. É a mais ornamentada e a primeira a ser aberta ao turismo no parque."
        },
        {
          name: "PETAR - Parque Estadual Turístico do Alto Ribeira",
          description: "Com mais de 350 cavernas catalogadas, é dividido em núcleos: Santana (o mais popular), Ouro Grosso (com trechos de escalada e rapel) e Caboclos (mais tranquilo, menos movimentado)."
        },
        {
          name: "Cachoeiras do Couto e do Sem Fim",
          description: "Localizadas no Núcleo Santana, complementam a visita às cavernas com banho e contato com a Mata Atlântica preservada."
        },
        {
          name: "Esportes de aventura nos rios Iporanga e Betari",
          description: "Rapel, mountain bike, boia-cross e cascading são atividades disponíveis na região, sempre recomendadas com acompanhamento de guia."
        },
        {
          name: "Bairro da Serra",
          description: "Principal porta de entrada do PETAR, a 13 km da cidade, com boa estrutura de pousadas, campings e restaurantes — melhor base para evitar longos deslocamentos até as cavernas."
        }
      ]
    },
    whereToDine: {
      intro: "Iporanga tem restaurantes tanto no Bairro da Serra (mais prático para quem visita o PETAR) quanto no centro da cidade, com destaque para pratos regionais como o palmito pupunha.",
      categories: [
        {
          name: "Restaurantes no Bairro da Serra",
          description: "Práticos para quem está explorando os núcleos Santana e Ouro Grosso do PETAR"
        },
        {
          name: "Palmito pupunha e pratos regionais",
          description: "Especialidade local, vale pedir o palmito na brasa quando disponível"
        },
        {
          name: "Restaurantes no centro histórico",
          description: "Alguns em prédios históricos, com experiência gastronômica mais diferenciada"
        }
      ]
    },
    faqs: [
      {
        question: "Preciso de guia para visitar as cavernas do PETAR?",
        answer: "Sim — é obrigatório estar acompanhado de um guia credenciado para visitar qualquer caverna do parque, além de usar calçado fechado confortável e lanterna."
      },
      {
        question: "Qual é a melhor época para visitar Iporanga?",
        answer: "A temporada seca (maio a setembro) é a mais indicada para explorar cavernas e trilhas, já que as estradas e trilhas ficam em melhores condições. Na temporada de chuvas (outubro a abril) as cachoeiras ficam mais cheias, mas o acesso pode ser mais difícil."
      },
      {
        question: "Quantos dias são necessários para conhecer o PETAR?",
        answer: "Para conhecer mais de uma caverna com calma, o recomendado é ficar pelo menos 3 dias, já que os deslocamentos entre núcleos podem ser longos."
      },
      {
        question: "Como chegar em Iporanga saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia Régis Bittencourt até a região de Apiaí/Iporanga — cerca de 220 km e quase 3 horas de viagem."
      }
    ]
  },
  {
    id: "eldorado",
    name: "Eldorado",
    categories: ["Natureza & Aventura"],
    distance: 240,
    drivingHours: 3.0,
    rating: 4.5,
    shortDescription: "Caverna do Diabo e cachoeiras na região do Vale do Ribeira.",
    fullDescription: "Eldorado é conhecida pela famosa Caverna do Diabo, uma das maiores cavernas do Brasil. A região oferece trilhas, cachoeiras e contato com a Mata Atlântica preservada. Ideal para aventureiros e amantes de espeleologia.",
    imageUrl: "/images/eldorado_e16e770d.jpg",
    topAttractions: ["Caverna do Diabo", "Cachoeiras", "Trilhas", "Mata Atlântica", "Aventura"],
    bestSeason: "Outono e inverno para exploração.",
    latitude: -24.4333,
    longitude: -48.9667,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Caverna do Diabo",
          description: "A maior caverna turística do estado de São Paulo, com cerca de 9 km de galerias mapeadas, salões gigantescos e formações que levaram milhões de anos para se formar. O passeio básico é acessível a famílias, com trajeto pavimentado e iluminado."
        },
        {
          name: "Roteiros de aventura na caverna",
          description: "Para quem busca mais adrenalina, há opções como a Garganta do Diabo, o Salão Erectus e o rapel interno — experiências que exigem mais preparo físico que o passeio tradicional."
        },
        {
          name: "Trilha do Araçá e Mirante do Governador",
          description: "Dois percursos autoguiados dentro do parque: a Trilha do Araçá (815m ida e volta, com três quedas d'água) e a trilha até o Mirante do Governador (800m de subida, com vista panorâmica do Vale do Ribeira)."
        },
        {
          name: "Vale das Ostras e Cachoeira Queda do Meu Deus",
          description: "Trilha de 1 a 5 horas de duração, dependendo do trajeto escolhido, levando a piscinas naturais e paisagens preservadas da Mata Atlântica."
        },
        {
          name: "Quilombo de Ivaporunduva",
          description: "Comunidade histórica com igreja do século XVII e forte presença cultural — um dos programas mais interessantes para quem quer conhecer a história do Vale do Ribeira além das cavernas."
        }
      ]
    },
    whereToDine: {
      intro: "O restaurante do Centro de Recepção da Caverna do Diabo é a opção mais prática para quem passa o dia no parque; no centro de Eldorado há mais variedade de lanchonetes, restaurantes e pizzarias.",
      categories: [
        {
          name: "Restaurante do Centro de Recepção",
          description: "Comida caseira, prato de peixe, carne ou frango com acompanhamentos — fica a poucos metros da entrada da caverna"
        },
        {
          name: "Restaurantes no centro de Eldorado",
          description: "Concentrados perto da pracinha da igreja, com opções de lanchonetes e pizzarias"
        },
        {
          name: "Pousadas com restaurante próprio",
          description: "As que ficam fora do centro costumam servir refeições também para não-hóspedes"
        }
      ]
    },
    faqs: [
      {
        question: "Preciso agendar a visita à Caverna do Diabo com antecedência?",
        answer: "Não é necessário agendamento prévio para o roteiro tradicional guiado, mas o parque tem limite de 1.100 pessoas por dia, então em feriados e alta temporada vale chegar cedo."
      },
      {
        question: "A Caverna do Diabo é acessível para pessoas com mobilidade reduzida?",
        answer: "O parque já recebeu visitantes com mobilidade reduzida usando equipamento especial de transporte com apoio dos monitores, mas vale consultar a administração do parque antes da visita para confirmar a viabilidade conforme o caso."
      },
      {
        question: "Quantos dias são necessários para conhecer Eldorado?",
        answer: "Um dia é suficiente para o passeio básico na Caverna do Diabo e uma das trilhas do parque. Quem quer incluir o Vale das Ostras e o Quilombo de Ivaporunduva deve reservar 2 dias."
      },
      {
        question: "Como chegar em Eldorado saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia Régis Bittencourt até Jacupiranga, seguindo por estrada secundária — cerca de 240-250 km e 3 horas de viagem."
      }
    ]
  },
  {
    id: "amparo",
    name: "Amparo",
    categories: ["Destinos Românticos", "Vinho & Lazer"],
    distance: 110,
    drivingHours: 1.4,
    rating: 4.5,
    shortDescription: "Fazendas históricas, gastronomia e clima de montanha.",
    fullDescription: "Amparo é uma cidade serrana com fazendas históricas preservadas, gastronomia de qualidade e clima agradável. A região oferece tours em fazendas, degustações e contato com a história cafeeira de São Paulo.",
    imageUrl: "/images/amparo_ec05c34e.jpg",
    topAttractions: ["Fazendas históricas", "Gastronomia", "Tours rurais", "Clima de montanha", "Café"],
    bestSeason: "Outono e inverno para clima agradável.",
    latitude: -22.7000,
    longitude: -46.7667,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Centro histórico e Rua 15 de Novembro",
          description: "Amparo preserva cerca de 400 edificações dos períodos colonial e republicano — a Rua 15 de Novembro reúne casarões que hoje funcionam como restaurantes, pizzarias e bares, boa para um passeio à noite."
        },
        {
          name: "Fazendas históricas do Ciclo do Café",
          description: "Fazendas centenárias como a Benedetti e a Atalaia, que tiveram apogeu durante o ciclo do café, hoje abrem as porteiras para contar essa história — algumas produzem leite e queijo."
        },
        {
          name: "Vinícola Terrassos",
          description: "Oferece passeios guiados com direito a degustação, para quem quer conhecer o lado mais recente do enoturismo da região."
        },
        {
          name: "Museu Bernardino de Campos",
          description: "Reúne acervo que conta a história da cidade desde a época do ciclo do café, instalado em construção histórica no centro."
        },
        {
          name: "Trilhas e cachoeiras",
          description: "A Trilha do Ribeirão Grande oferece contato direto com a Mata Atlântica, e a Cachoeira da Bocaina é ponto de encontro para moradores e turistas nos dias quentes."
        }
      ]
    },
    whereToDine: {
      intro: "A gastronomia de Amparo mistura tradições caipiras com toques contemporâneos, com boas opções concentradas na Rua 15 de Novembro, entre os casarões históricos.",
      categories: [
        {
          name: "Comida caipira e mineira",
          description: "Leitão à pururuca, carne de porco com tutu de feijão e frango com polenta são pratos típicos da região"
        },
        {
          name: "Restaurantes em casarões históricos",
          description: "Na Rua 15 de Novembro, boa opção para jantar com clima colonial"
        },
        {
          name: "Restaurantes em fazendas",
          description: "Algumas fazendas históricas oferecem refeições no roteiro de visita, combinando história e gastronomia"
        }
      ]
    },
    faqs: [
      {
        question: "Por que Amparo é chamada de 'Capital Histórica do Circuito das Águas'?",
        answer: "Porque preserva um dos maiores conjuntos arquitetônicos do Ciclo do Café da região, com cerca de 400 edificações dos períodos colonial e republicano — um diferencial em relação às outras 8 cidades do Circuito das Águas Paulista."
      },
      {
        question: "Qual é a melhor época para visitar Amparo?",
        answer: "A estação seca costuma ter clima mais ameno e menos chance de chuva, ideal para as atividades ao ar livre e trilhas. A cidade também pode ser visitada o ano todo pelo seu forte apelo histórico e gastronômico."
      },
      {
        question: "Quantos dias são necessários para conhecer Amparo?",
        answer: "Um dia é suficiente para o roteiro central: centro histórico, Rua 15 de Novembro e uma fazenda histórica. Quem quer incluir trilhas e a vinícola pode reservar um fim de semana."
      },
      {
        question: "Como chegar em Amparo saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia dos Bandeirantes ou Fernão Dias, cerca de 110-140 km e 1h30 a 2 horas de viagem, dependendo da rota escolhida."
      }
    ]
  },
  {
    id: "pedreira",
    name: "Pedreira",
    categories: ["Bate e Volta"],
    distance: 125,
    drivingHours: 1.6,
    rating: 4.3,
    shortDescription: "Compras de louças, decoração e artesanato de qualidade.",
    fullDescription: "Pedreira é conhecida como polo de louças e decoração, com lojas de fábrica oferecendo produtos de qualidade a preços competitivos. Ideal para quem busca compras e bate-e-volta de São Paulo.",
    imageUrl: "/images/pedreira_d58345fb.jpg",
    topAttractions: ["Lojas de louças", "Decoração", "Artesanato", "Compras", "Fábricas"],
    bestSeason: "Ano inteiro.",
    latitude: -22.6833,
    longitude: -47.4333,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Estação Ferroviária de Pedreira",
          description: "Construída em 1875 pela Companhia Mogiana, hoje é área de visitação turística com lojas de artesanato, bares e restaurantes — também serve como terminal da Linha 7-Rubi da CPTM."
        },
        {
          name: "Morro do Cristo e Teleférico",
          description: "Um dos principais pontos turísticos do Circuito das Águas Paulista, carrega parte da história da Revolução Constitucionalista de 1932 — o Cristo é acessível de carro ou a pé, aberto ao público sempre."
        },
        {
          name: "Museu Histórico e da Porcelana",
          description: "Conta a história da tradição de Pedreira na produção de porcelana e cerâmica, mostrando como as peças são criadas, pintadas e queimadas — a cidade é conhecida como a 'Capital das Porcelanas'."
        },
        {
          name: "Praça Coronel João Pedro",
          description: "Pequena mas charmosa, é a principal área de visitação do centro, homenageando o patriarca da família fundadora da cidade."
        },
        {
          name: "Zoo Bosque de Pedreira",
          description: "Opção de lazer para famílias com crianças, complementando o roteiro histórico e cultural da cidade."
        }
      ]
    },
    whereToDine: {
      intro: "Os restaurantes de Pedreira revezam entre pratos típicos, comida mineira, japonesa, massas e pizzarias, com boas opções tanto na Estação Ferroviária quanto no centro.",
      categories: [
        {
          name: "Restaurantes na Estação Ferroviária",
          description: "Combinam refeição com o ambiente histórico do centro turístico da cidade"
        },
        {
          name: "Comida mineira",
          description: "Feijão tropeiro e frango com quiabo são pratos frequentes no cardápio local"
        },
        {
          name: "Cafés coloniais",
          description: "Boa opção para experimentar produtos regionais em ambiente acolhedor"
        }
      ]
    },
    faqs: [
      {
        question: "Por que Pedreira é conhecida como 'Capital das Porcelanas'?",
        answer: "A cidade tem tradição histórica na produção de porcelana e cerâmica, refletida no Museu Histórico e da Porcelana e em diversos ateliês e lojas de artesanato espalhados pelo centro."
      },
      {
        question: "Quantos dias são necessários para conhecer Pedreira?",
        answer: "Um dia é suficiente para os principais pontos turísticos. Quem quer explorar com mais calma as lojas de artesanato e trilhas da região pode reservar 2 a 3 dias."
      },
      {
        question: "Vale a pena subir no teleférico do Morro do Cristo?",
        answer: "Sim — é considerado um dos principais pontos turísticos do Circuito das Águas Paulista, com vista panorâmica e valor histórico ligado à Revolução Constitucionalista de 1932."
      },
      {
        question: "Como chegar em Pedreira saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia dos Bandeirantes ou Anhanguera, cerca de 125 km e 1h35 de viagem — próxima de Campinas e Holambra, o que permite combinar destinos."
      }
    ]
  },
  {
    id: "porto-ferreira",
    name: "Porto Ferreira",
    categories: ["Bate e Volta"],
    distance: 150,
    drivingHours: 1.9,
    rating: 4.3,
    shortDescription: "Capital da cerâmica e decoração com lojas de fábrica.",
    fullDescription: "Porto Ferreira é a capital da cerâmica e decoração de São Paulo, com lojas de fábrica oferecendo produtos de qualidade. Ideal para quem busca compras e contato com a tradição cerâmica.",
    imageUrl: "/images/porto_ferreira_0d407272.jpg",
    topAttractions: ["Lojas de cerâmica", "Decoração", "Fábricas", "Compras", "Artesanato"],
    bestSeason: "Ano inteiro.",
    latitude: -22.2333,
    longitude: -47.4667,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Circuito da Capital Nacional da Cerâmica Artística e da Decoração",
          description: "Reúne fábricas, ateliês e lojas ao longo da Rodovia Anhanguera, com mais de 300 lojas — é possível observar o processo de fabricação e comprar peças exclusivas direto da produção."
        },
        {
          name: "Avenida Gastronômica",
          description: "Coração da vida noturna da cidade, reúne restaurantes, bares e lanchonetes — ponto de encontro mais movimentado à noite."
        },
        {
          name: "Represa de Porto Ferreira",
          description: "Boa opção para pesca, passeios de barco e caminhadas, cercada por paisagem agradável — ideal para relaxar, fazer piquenique ou apreciar o pôr do sol à beira da água."
        },
        {
          name: "Trilha das Árvores Gigantes",
          description: "Percurso com árvores centenárias de tamanho impressionante, boa opção para caminhadas relaxantes e contemplação da biodiversidade local."
        },
        {
          name: "Santuário Diocesano de São Sebastião",
          description: "Um dos principais pontos de devoção da cidade, com arquitetura imponente e vitrais que atraem tanto fiéis quanto apreciadores de arte sacra."
        }
      ]
    },
    whereToDine: {
      intro: "A Avenida Gastronômica concentra a maior parte dos restaurantes, bares e lanchonetes de Porto Ferreira — algumas casas oferecem até jantares temáticos em ateliês de cerâmica.",
      categories: [
        {
          name: "Restaurantes na Avenida Gastronômica",
          description: "Boa variedade de opções para almoço e jantar no coração da cidade"
        },
        {
          name: "Comida caipira e pratos com peixe",
          description: "Presença forte na região, refletindo a tradição do interior paulista"
        },
        {
          name: "Doçaria artesanal",
          description: "Goiabada cascão e doce de leite feitos com receitas tradicionais são boas lembranças para levar"
        }
      ]
    },
    faqs: [
      {
        question: "Por que Porto Ferreira é conhecida como 'Capital da Cerâmica Artística'?",
        answer: "A cidade tem forte tradição na fabricação de louça e cerâmica desde suas origens, com dezenas de fábricas e ateliês concentrados ao longo da Rodovia Anhanguera — hoje o circuito também inclui decoração e móveis."
      },
      {
        question: "Quantos dias são necessários para conhecer Porto Ferreira?",
        answer: "Um dia é suficiente para o circuito de compras de cerâmica e um passeio pela represa. Quem quer explorar mais trilhas da região pode reservar um pouco mais de tempo."
      },
      {
        question: "Dá para comprar direto de fábrica em Porto Ferreira?",
        answer: "Sim — várias fábricas e ateliês ao longo do circuito vendem direto ao público, com preços geralmente mais competitivos do que em lojas de outras cidades."
      },
      {
        question: "Como chegar em Porto Ferreira saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia Anhanguera, cerca de 150 km e quase 2 horas de viagem."
      }
    ]
  },
  {
    id: "piracicaba",
    name: "Piracicaba",
    categories: ["Vinho & Lazer"],
    distance: 160,
    drivingHours: 2.0,
    rating: 4.4,
    shortDescription: "Gastronomia, Rio Piracicaba e Engenho Central histórico.",
    fullDescription: "Piracicaba é uma cidade com forte tradição gastronômica, famosa por seus restaurantes de qualidade. A região oferece passeios pelo Rio Piracicaba, visitas ao Engenho Central e contato com a história do açúcar.",
    imageUrl: "/images/piracicaba_5571b1a7.jpg",
    topAttractions: ["Gastronomia", "Rio Piracicaba", "Engenho Central", "Restaurantes", "História"],
    bestSeason: "Ano inteiro.",
    latitude: -22.7167,
    longitude: -47.6500,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Parque do Engenho Central",
          description: "Antigo engenho de açúcar de 1881, construído pelo Barão de Rezende, hoje é um complexo cultural tombado com teatro, pinacoteca e áreas verdes às margens do Rio Piracicaba. Entrada gratuita."
        },
        {
          name: "Rua do Porto",
          description: "Calçadão à beira-rio, principal polo gastronômico da cidade, famoso pelo peixe assado no tambor. Recebe feira de artesanato e apresentações culturais aos fins de semana."
        },
        {
          name: "Salto do Rio Piracicaba",
          description: "A corredeira que corta o centro da cidade e define boa parte da paisagem urbana — um dos cartões-postais mais conhecidos de Piracicaba."
        },
        {
          name: "Passarela Pênsil",
          description: "Ponte de 103 metros inaugurada em 1992, exclusiva para pedestres, liga o Engenho Central à Rua do Porto — um dos pontos preferidos para fotos com o rio ao fundo."
        },
        {
          name: "Museu da Água",
          description: "Funciona na antiga estação de captação e tratamento de água da cidade, construída em 1887, com arquitetura original preservada. Entrada gratuita, funciona de terça a domingo."
        }
      ]
    },
    whereToDine: {
      intro: "A Rua do Porto é o centro gastronômico da cidade, famosa pelo peixe no tambor, mas Piracicaba também tem cervejarias artesanais e uma cena de bares descolados na Rua Luiz de Queiroz.",
      categories: [
        {
          name: "Peixe no tambor na Rua do Porto",
          description: "Prato símbolo da cidade, servido com arroz branco, farofa e mandioca frita, em restaurantes à beira-rio"
        },
        {
          name: "Bares na Rua Luiz de Queiroz",
          description: "Sob a copa de seringueiras centenárias na Praça da Boyes, boa opção para happy hour e chopp gelado"
        },
        {
          name: "Restaurantes no Engenho Central",
          description: "Boa opção para almoço combinando gastronomia com o cenário histórico do complexo"
        }
      ]
    },
    faqs: [
      {
        question: "O que é o peixe no tambor, prato típico de Piracicaba?",
        answer: "É um prato de peixe assado dentro de um tambor de metal, servido tradicionalmente nos restaurantes da Rua do Porto — uma das experiências gastronômicas mais associadas à cidade."
      },
      {
        question: "Quantos dias são necessários para conhecer Piracicaba?",
        answer: "Um dia é suficiente para o roteiro central: Parque do Engenho Central, Passarela Pênsil, Museu da Água e a Rua do Porto para o almoço."
      },
      {
        question: "O Parque do Engenho Central tem entrada paga?",
        answer: "Não — a entrada é gratuita, funciona diariamente das 6h às 20h, e recebe eventos culturais como o Salão Internacional de Humor e a Festa das Nações."
      },
      {
        question: "Como chegar em Piracicaba saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia dos Bandeirantes ou Anhanguera, cerca de 160 km e 2 horas de viagem."
      }
    ]
  },
  {
    id: "guaruja",
    name: "Guarujá",
    categories: ["Para Curtir o Verão"],
    distance: 100,
    drivingHours: 1.2,
    rating: 4.6,
    shortDescription: "Praias urbanas com alta infraestrutura hoteleira.",
    fullDescription: "Guarujá é um destino de praia urbana com excelente infraestrutura hoteleira, restaurantes de qualidade e vida noturna vibrante. Perfeito para quem busca praia com comodidade.",
    imageUrl: "/images/guaruja_7063d7f1.jpg",
    topAttractions: ["Praias urbanas", "Hotéis", "Restaurantes", "Vida noturna", "Infraestrutura"],
    bestSeason: "Verão para aproveitar as praias.",
    latitude: -23.9833,
    longitude: -46.2667,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Praia da Enseada",
          description: "A mais famosa e extensa de Guarujá, com 5,6 km de faixa de areia, cercada por hotéis, pousadas, restaurantes e comércio — ideal para quem quer estar perto de tudo."
        },
        {
          name: "Praia de Pitangueiras",
          description: "Visual urbano e bastante movimentado, rodeada por prédios e quiosques, com boa infraestrutura para passar o dia à beira-mar — concentra o comércio central da cidade."
        },
        {
          name: "Acqua Mundo",
          description: "O maior aquário de água salgada da América do Sul, com tubarões, arraias, pinguins e tartarugas — atração imperdível para quem viaja em família."
        },
        {
          name: "Fortaleza de Santo Amaro",
          description: "Com mais de 440 anos, é um dos patrimônios históricos mais antigos do litoral paulista, com vista para o porto de Santos — um dos quatro fortes espalhados pela cidade."
        },
        {
          name: "Praia do Éden",
          description: "Acessível por trilha, tem visual paradisíaco em meio à natureza mais selvagem, um contraponto às praias urbanas mais movimentadas da cidade."
        }
      ]
    },
    whereToDine: {
      intro: "Guarujá tem uma cena gastronômica variada, do frescor dos frutos do mar em Tortugas às docerias do Boulevard Caminho do Mar, com boas opções concentradas na Enseada e Pitangueiras.",
      categories: [
        {
          name: "Restaurantes de frutos do mar em Tortugas",
          description: "No fim da Praia da Enseada, receitas mais sofisticadas com peixe e frutos do mar frescos"
        },
        {
          name: "Restaurantes na Praia do Perequê",
          description: "Ambiente rústico, com barcos ancorados na areia e peixes fresquíssimos"
        },
        {
          name: "Boulevard Caminho do Mar",
          description: "Destaque para doces e sobremesas, boa parada no fim de tarde"
        }
      ]
    },
    faqs: [
      {
        question: "Qual é a melhor época para visitar Guarujá?",
        answer: "O verão é a época mais procurada para praia, mas as praias lotam e a hospedagem fica mais cara. Fora de temporada, a cidade é mais tranquila e os preços costumam ser melhores."
      },
      {
        question: "Quantos dias são necessários para conhecer Guarujá?",
        answer: "Em média, 3 a 4 dias são suficientes para conhecer bem as principais praias e pontos turísticos com calma, já que a cidade tem 27 praias diferentes."
      },
      {
        question: "O Acqua Mundo vale a visita mesmo sem crianças?",
        answer: "Sim — é o maior aquário de água salgada da América do Sul, com boa variedade de espécies marinhas, o que atrai visitantes de todas as idades, não só famílias."
      },
      {
        question: "Como chegar em Guarujá saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia dos Imigrantes/Anchieta, cerca de 100 km e 1h15 de viagem — uma das praias mais próximas e populares perto da capital."
      }
    ]
  },
  {
    id: "santana-de-parnaiba",
    name: "Santana de Parnaíba",
    categories: ["História"],
    distance: 40,
    drivingHours: 0.5,
    rating: 4.5,
    shortDescription: "Centro histórico preservado e bate-e-volta de São Paulo.",
    fullDescription: "Santana de Parnaíba é um bate-e-volta perfeito com centro histórico bem preservado, oferecendo gastronomia, artesanato e contato com a história colonial.",
    imageUrl: "/images/santana_de_parnaiba_35051b97.jpg",
    topAttractions: ["Centro histórico", "Gastronomia", "Artesanato", "Museus", "Arquitetura"],
    bestSeason: "Ano inteiro.",
    latitude: -23.4167,
    longitude: -46.8667,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Centro Histórico",
          description: "Considerado o maior conjunto arquitetônico em taipa de pilão do estado de São Paulo, com mais de 200 construções tombadas dos séculos XVII, XVIII e XIX — apelidado de 'Ouro Preto paulista'. Ruas de paralelepípedo, ideal para caminhar com sapato confortável."
        },
        {
          name: "Igreja Matriz de Sant'Ana",
          description: "Construção mais importante da cidade, erguida no mesmo local da primeira capela de 1610. A edificação atual, em estilo eclético, data de 1882 e foi tombada pelo CONDEPHAAT."
        },
        {
          name: "Praça 14 de Novembro",
          description: "Praça principal ao lado da Igreja Matriz, com coreto charmoso, jardim bem cuidado e cercada de bares e restaurantes — ponto certo para sentar e ver o tempo passar."
        },
        {
          name: "Praça dos Bandeirantes",
          description: "Na entrada do centro histórico, reúne 23 esculturas de bronze retratando os bandeirantes e figuras importantes da fundação da cidade, como Suzana Dias e André Fernandes."
        },
        {
          name: "Seresta mensal",
          description: "No segundo sábado do mês, músicos locais se reúnem para uma tradicional seresta pelas ruas do centro histórico — um programa gratuito e autêntico da cidade."
        }
      ]
    },
    whereToDine: {
      intro: "Os restaurantes de Santana de Parnaíba funcionam majoritariamente em casarões coloniais tombados no centro histórico, com forte presença da culinária mineira e portuguesa.",
      categories: [
        {
          name: "Restaurante em casarão do século XVIII",
          description: "Culinária mineira tradicional, com destaque para leitão à pururuca e torresminho servidos em panela de pedra"
        },
        {
          name: "Restaurantes portugueses",
          description: "Especialidades como bacalhau, servidos em ambiente rústico junto às árvores"
        },
        {
          name: "Restaurantes na Praça 14 de Novembro",
          description: "Boas opções com mesas ao ar livre para almoço ou fim de tarde"
        }
      ]
    },
    faqs: [
      {
        question: "Por que Santana de Parnaíba é chamada de 'Ouro Preto paulista'?",
        answer: "Pelo tamanho e preservação do seu centro histórico: são mais de 200 construções tombadas em taipa de pilão, o maior conjunto arquitetônico colonial do estado de São Paulo."
      },
      {
        question: "Quantas horas são necessárias para visitar Santana de Parnaíba?",
        answer: "O centro histórico pode ser percorrido a pé em algumas horas, o que torna a cidade um ótimo bate-volta de meio período saindo de São Paulo."
      },
      {
        question: "É preciso reservar nos restaurantes do centro histórico?",
        answer: "Em fins de semana e feriados, alguns restaurantes mais tradicionais (como os de sistema self-service) costumam ficar cheios — vale chegar cedo ou confirmar o funcionamento antes de ir."
      },
      {
        question: "Como chegar em Santana de Parnaíba saindo de São Paulo?",
        answer: "O trajeto é entre as rodovias Castelo Branco e Anhanguera, cerca de 40 km e 30-40 minutos de viagem — um dos bate-voltas mais rápidos da região metropolitana."
      }
    ]
  },
  {
    id: "bananal",
    name: "Bananal",
    categories: ["Destinos Românticos", "História"],
    distance: 200,
    drivingHours: 2.5,
    rating: 4.6,
    shortDescription: "Fazendas do café do século XIX na Serra da Bocaina.",
    fullDescription: "Bananal é uma cidade histórica com fazendas de café do século XIX preservadas. A região oferece tours em fazendas, gastronomia rural e contato com a história do café.",
    imageUrl: "/images/bananal_b470531b.jpg",
    topAttractions: ["Fazendas de café", "Tours rurais", "Gastronomia", "História", "Natureza"],
    bestSeason: "Outono e inverno para clima agradável.",
    latitude: -23.1500,
    longitude: -44.2167,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Fazenda Resgate",
          description: "Uma das maiores produtoras de café do século XIX, com afrescos pintados pelo espanhol José Maria Villaronga nas paredes do casarão — um dos exemplos mais ricos da arquitetura do ciclo do café."
        },
        {
          name: "Fazenda Loanda",
          description: "De 1791, com fachada de 50 janelas e móveis de luxo que retratam a riqueza dos barões de café. Oferece tour guiado de 1h, com visitação aos fins de semana e dias de semana mediante agendamento."
        },
        {
          name: "Fazenda dos Coqueiros",
          description: "De 1855, preserva a estrutura original e conta a história do ciclo do café e do trabalho escravo na região, incluindo uma senzala autêntica — a única com banheiro da época colonial no Vale Histórico."
        },
        {
          name: "Centro histórico e Estação Ferroviária",
          description: "O centro tem menos de 10 mil habitantes e pode ser explorado a pé, com casarões tombados. A estação ferroviária inglesa de 1888, em ferro pré-fabricado de Liverpool, é uma das únicas do tipo no Brasil."
        },
        {
          name: "Estação Ecológica de Bananal e Serra da Bocaina",
          description: "Área de Mata Atlântica preservada com passeios de jipe, trilhas, cachoeiras para banho e observação da criação de trutas."
        }
      ]
    },
    whereToDine: {
      intro: "Bananal tem restaurantes de comida caseira no centro e opções dentro das próprias fazendas históricas, muitas com produtos rurais como doces e cachaças produzidos na região.",
      categories: [
        {
          name: "Buffet de comida caseira no centro",
          description: "Perto da Igreja Matriz, cobrado por quilo, com ingredientes de qualidade"
        },
        {
          name: "Restaurantes em fazendas históricas",
          description: "Algumas fazendas combinam a visita guiada com almoço, boa forma de unir história e gastronomia"
        },
        {
          name: "Doces e cachaças artesanais",
          description: "Produção local vendida no centro, boas lembranças para levar da viagem"
        }
      ]
    },
    faqs: [
      {
        question: "Preciso agendar a visita às fazendas históricas de Bananal?",
        answer: "Depende da fazenda — algumas, como a Loanda, abrem aos fins de semana sem agendamento e em dias de semana somente mediante marcação prévia. Vale confirmar horários e valores diretamente com cada propriedade antes de ir."
      },
      {
        question: "Quantos dias são necessários para conhecer Bananal?",
        answer: "As fazendas históricas, o centro tombado e a Serra da Bocaina rendem facilmente de 3 a 5 dias de roteiro entre cultura e natureza, segundo guias locais."
      },
      {
        question: "Qual é a melhor época para visitar Bananal?",
        answer: "Outono e inverno oferecem clima mais agradável para caminhar pelo centro histórico e visitar as fazendas, mas a região também tem atrativos de natureza (cachoeiras, trilhas) que funcionam bem o ano todo."
      },
      {
        question: "Como chegar em Bananal saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia Presidente Dutra até a região de Queluz, seguindo pela Rodovia dos Tropeiros (SP-068) — cerca de 200-240 km e mais de 3 horas de viagem."
      }
    ]
  },
  {
    id: "sao-jose-dos-campos",
    name: "São José dos Campos",
    categories: ["Vinho & Lazer"],
    distance: 95,
    drivingHours: 1.2,
    rating: 4.3,
    shortDescription: "Turismo tecnológico e distrito romântico de Francisco Xavier.",
    fullDescription: "São José dos Campos é uma cidade com forte presença tecnológica e infraestrutura moderna. Próxima ao distrito romântico de Francisco Xavier, oferece opções de lazer e contato com a natureza.",
    imageUrl: "/images/sao_jose_dos_campos_b5a3c56d.jpg",
    topAttractions: ["Turismo tecnológico", "Francisco Xavier", "Gastronomia", "Infraestrutura", "Natureza"],
    bestSeason: "Ano inteiro.",
    latitude: -23.1833,
    longitude: -45.8833,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Mirante do Banhado",
          description: "Área de preservação ambiental ao longo da Avenida Anchieta, com vista panorâmica para a represa do Rio Paraíba do Sul — famoso tanto pelo nascer quanto pelo pôr do sol, quando bares e restaurantes da região ficam movimentados."
        },
        {
          name: "Parque Vicentina Aranha",
          description: "Espaço onde funcionava o antigo sanatório Vicentina Aranha, um dos principais centros de tratamento de tuberculose da América Latina. Hoje reúne área verde, casarões históricos e programação cultural."
        },
        {
          name: "Parque Roberto Burle Marx (Parque da Cidade)",
          description: "Uma das maiores áreas verdes da cidade, com gramados, lago, jardins e o Museu do Folclore — a cerca de 15 minutos a pé do centro."
        },
        {
          name: "Thermas do Vale",
          description: "Parque aquático com 13 piscinas, incluindo o Free Fall, tobogã com queda livre de 23 metros, e opções mais tranquilas para crianças pequenas."
        },
        {
          name: "Distrito de Francisco Xavier",
          description: "A cerca de 60 km do centro, oferece paisagens preservadas, trilhas e cachoeiras — um complemento perfeito ao roteiro urbano de São José dos Campos."
        }
      ]
    },
    whereToDine: {
      intro: "A região do Banhado concentra boa parte dos bares e restaurantes mais procurados da cidade, com opções que vão da culinária brasileira contemporânea a cozinha internacional.",
      categories: [
        {
          name: "Restaurantes na região do Banhado",
          description: "Boa opção para jantar com vista para o pôr do sol na represa"
        },
        {
          name: "Restaurantes de peixes e camarão na brasa",
          description: "Presentes em casas tradicionais da cidade, com ambiente descontraído"
        },
        {
          name: "Cozinha contemporânea e internacional",
          description: "Opções como culinária italiana e japonesa refletem a diversidade gastronômica da cidade"
        }
      ]
    },
    faqs: [
      {
        question: "São José dos Campos é uma boa base para visitar outros destinos?",
        answer: "Sim — a cidade fica estrategicamente perto de São Paulo, do litoral norte (Ubatuba, Caraguatatuba), de Campos do Jordão e de Aparecida, o que a torna um bom ponto de partida para bate-voltas regionais."
      },
      {
        question: "Quantos dias são necessários para conhecer São José dos Campos?",
        answer: "Um dia é suficiente para os principais parques e o Mirante do Banhado. Quem quer incluir o Thermas do Vale ou uma visita a Francisco Xavier deve reservar mais tempo."
      },
      {
        question: "Os parques da cidade são gratuitos?",
        answer: "Sim — o Parque Vicentina Aranha, o Parque Santos Dumont e o Parque Roberto Burle Marx têm entrada gratuita, sendo boas opções de passeio sem custo."
      },
      {
        question: "Como chegar em São José dos Campos saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia Presidente Dutra, cerca de 95 km e pouco mais de 1 hora de viagem."
      }
    ]
  },
  {
    id: "francisco-xavier",
    name: "Francisco Xavier",
    categories: ["Destinos Românticos"],
    distance: 110,
    drivingHours: 1.4,
    rating: 4.7,
    shortDescription: "Distrito romântico nas montanhas com pousadas charmosas.",
    fullDescription: "Francisco Xavier é um distrito romântico nas montanhas, conhecido por pousadas charmosas, gastronomia de qualidade e clima europeu. Ideal para casais em busca de romance e tranquilidade.",
    imageUrl: "/images/francisco_xavier_c503488f.jpg",
    topAttractions: ["Pousadas", "Gastronomia", "Montanhas", "Clima europeu", "Romance"],
    bestSeason: "Inverno para clima fresco.",
    latitude: -23.3167,
    longitude: -45.8500,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Trilha da Pedra da Onça",
          description: "Uma das trilhas mais conhecidas do distrito, leva a um mirante com vista da Serra da Mantiqueira — trecho de mata preservada recompensa o esforço da subida."
        },
        {
          name: "Cachoeira Santa Bárbara",
          description: "Com cerca de 80 metros de altura, é uma das mais impressionantes da região, dentro de propriedade particular com trilhas para mirantes e outras cachoeiras."
        },
        {
          name: "Trilha de cachoeiras acessível",
          description: "Trilha de cerca de 2 km e 1h30 de caminhada fácil, ideal para quem quer ver quedas d'água sem muito esforço físico — boa opção para famílias."
        },
        {
          name: "Mirante do Cruzeiro",
          description: "A 2.000 metros de altitude, é o principal mirante da região, acessado por trilha — recompensa com vista ampla da Serra da Mantiqueira."
        },
        {
          name: "Esportes de aventura",
          description: "A região oferece cascading em cachoeiras, tirolesa, cavalgada, voo livre/parapente e trilhas de diferentes níveis, incluindo travessias mais longas até Monte Verde (MG)."
        }
      ]
    },
    whereToDine: {
      intro: "O centrinho de São Francisco Xavier (carinhosamente chamado 'São Chico') reúne restaurantes e cafés charmosos ao redor da praça principal, com pratos que valorizam ingredientes frescos e regionais.",
      categories: [
        {
          name: "Restaurantes no centrinho",
          description: "Ao redor da praça central, com ambiente aconchegante típico de cidade pequena de interior"
        },
        {
          name: "Restaurantes em propriedades com cachoeira",
          description: "Muitos espaços de trilha e cachoeira já incluem restaurante próprio, para almoçar sem precisar sair do passeio"
        },
        {
          name: "Padarias e cafés locais",
          description: "Bons para café da manhã ou lanche da tarde, com pães caseiros e quitutes regionais"
        }
      ]
    },
    faqs: [
      {
        question: "Preciso de guia para fazer as trilhas em Francisco Xavier?",
        answer: "Para as trilhas mais fáceis e bem sinalizadas dentro de propriedades particulares, geralmente não. Já para trilhas mais longas ou de montanhismo, é recomendável contratar um guia local para evitar acidentes ou se perder."
      },
      {
        question: "Qual é a melhor época para visitar Francisco Xavier?",
        answer: "No verão as cachoeiras e corredeiras estão mais cheias, ideais para banho; no inverno o distrito é ótimo para caminhadas por estradas e trilhas com clima fresco de montanha."
      },
      {
        question: "Quantos dias são necessários para conhecer Francisco Xavier?",
        answer: "Um fim de semana (2 dias) permite conhecer o centrinho, uma trilha de cachoeiras e aproveitar a gastronomia local com calma."
      },
      {
        question: "Como chegar em Francisco Xavier saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia Presidente Dutra até São José dos Campos, seguindo pela SP-50 — cerca de 150 km e 2h30 de viagem."
      }
    ]
  },
  {
    id: "parque-cantareira",
    name: "Cabuçu / Guarulhos (Parque Estadual da Cantareira)",
    categories: ["Natureza & Aventura", "Bate e Volta"],
    distance: 30,
    drivingHours: 0.4,
    rating: 4.5,
    shortDescription: "Ecoturismo colado na capital com trilhas e natureza preservada.",
    fullDescription: "O Parque Estadual da Cantareira é um bate-e-volta perfeito com trilhas bem marcadas, natureza preservada e vistas panorâmicas. Ideal para quem busca ecoturismo a poucos quilômetros de São Paulo.",
    imageUrl: "/images/parque_estadudal_da_cantareira_dd452ea4.jpg",
    topAttractions: ["Trilhas", "Natureza", "Vistas panorâmicas", "Ecoturismo", "Bate-e-volta"],
    bestSeason: "Primavera e outono para trilhas.",
    latitude: -23.3667,
    longitude: -46.5500,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Núcleo Cabuçu",
          description: "O mais novo e maior núcleo do parque, inaugurado em 2008, com a centenária Barragem do Cabuçu, o Recanto do Bugio e trilhas fáceis — Jaguatirica (1.000m), Tapiti (250m), Sagui (730m) e a mais longa, da Cachoeira (5.220m, cerca de 3h)."
        },
        {
          name: "Núcleo Pedra Grande",
          description: "A Trilha da Pedra Grande sobe 3,3 km por estrada pavimentada até 1.010 metros de altura, com vista panorâmica de São Paulo — cerca de 40 minutos de subida, autoguiada e bem sinalizada."
        },
        {
          name: "Lago das Carpas",
          description: "Acessível a partir da Pedra Grande (mais 2 km), é um espaço tranquilo para relaxar ao lado de um lago cercado por Mata Atlântica."
        },
        {
          name: "Núcleo Engordador",
          description: "Oferece trilhas até as cachoeiras do Tomba e do Engordador, boa opção para reconectar com a natureza em família, com estrutura de banheiros e bebedouros."
        },
        {
          name: "Parque Estadual do Jaraguá",
          description: "A poucos quilômetros da Cantareira, tem o pico mais alto de São Paulo (1.135 m), com mirante que revela a selva de pedras da cidade ao fundo da Mata Atlântica preservada."
        }
      ]
    },
    whereToDine: {
      intro: "A região da Serra da Cantareira tem uma cena gastronômica surpreendente para quem espera só trilha — de gelato artesanal a pizza napolitana, com boa concentração perto dos núcleos de visitação.",
      categories: [
        {
          name: "Pizzarias e gelaterias artesanais",
          description: "Opções conhecidas na região, boas para o fim do passeio"
        },
        {
          name: "Restaurantes com vista para o pôr do sol",
          description: "Alguns com pratos de carnes na parrilla argentina"
        },
        {
          name: "Restaurantes em casarões com música ao vivo",
          description: "Opção mais concorrida da região, aberta nos fins de semana"
        }
      ]
    },
    faqs: [
      {
        question: "É preciso pagar ingresso para entrar no Parque Estadual da Cantareira?",
        answer: "Sim, a maioria dos núcleos cobra entrada — os valores variam por núcleo, então vale confirmar no site oficial ou por telefone antes de ir."
      },
      {
        question: "Qual núcleo é melhor para famílias com crianças?",
        answer: "O Núcleo Cabuçu tem só trilhas fáceis (Jaguatirica, Tapiti e Sagui), o que o torna uma boa escolha para quem viaja com crianças ou busca um passeio mais tranquilo."
      },
      {
        question: "Quanto tempo leva para fazer as trilhas do parque?",
        answer: "Varia bastante: as trilhas fáceis do Cabuçu levam entre 15 e 40 minutos, enquanto a Trilha da Cachoeira leva cerca de 3 horas e a subida à Pedra Grande, cerca de 40 minutos só de ida."
      },
      {
        question: "Como chegar no Parque Estadual da Cantareira saindo de São Paulo?",
        answer: "O acesso varia por núcleo — o Cabuçu fica na divisa com Guarulhos, cerca de 30 km do centro de São Paulo, e é possível chegar de transporte público combinando metrô e ônibus."
      }
    ]
  },
  {
    id: "jundiai-rota-vinho",
    name: "Jundiaí (Rota do Vinho)",
    categories: ["Vinho & Lazer"],
    distance: 60,
    drivingHours: 0.8,
    rating: 4.5,
    shortDescription: "Rota do Vinho, turismo rural e Serra do Japi.",
    fullDescription: "Jundiaí oferece a Rota do Vinho com vinícolas de qualidade, turismo rural e acesso à Serra do Japi. Ideal para apreciadores de vinho e amantes de natureza.",
    imageUrl: "/images/jundiai_afbe40fa.jpg",
    topAttractions: ["Vinícolas", "Rota do Vinho", "Serra do Japi", "Turismo rural", "Degustações"],
    bestSeason: "Outono e inverno para colheita.",
    latitude: -23.1833,
    longitude: -46.8833,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Adegas da Rota do Vinho",
          description: "Jundiaí é conhecida como a 'Terra da Uva' — adegas como Beraldo di Cale, Maziero e Brunholi oferecem degustações guiadas de vinhos, licores e produtos típicos de fazenda, muitas em áreas rurais com vista para os parreirais."
        },
        {
          name: "Museu do Vinho (Espaço Cultural)",
          description: "Conta a história da produção vinícola da região desde a chegada dos imigrantes italianos, com acervo de itens artesanais usados na vinificação ao longo do século passado."
        },
        {
          name: "Centro Histórico e Complexo Cultural Cia. Paulista",
          description: "Testemunho vivo da história ferroviária da cidade, hoje abriga o Museu da Companhia Paulista e espaços para exposições — bom complemento cultural ao roteiro de vinícolas."
        },
        {
          name: "Circuito das Frutas",
          description: "Jundiaí integra essa rota regional com outras 9 cidades produtoras (Louveira, Vinhedo, Itupeva, entre outras), com festas típicas de colheita e passeios de 'colha e pague' em sítios da região."
        },
        {
          name: "Festa da Uva",
          description: "Evento tradicional que celebra a colheita, com a famosa Pisa da Uva e produtos frescos direto do produtor — um dos pontos altos do calendário turístico da cidade."
        }
      ]
    },
    whereToDine: {
      intro: "A gastronomia da Rota do Vinho de Jundiaí é fortemente marcada pela imigração italiana, com restaurantes nas próprias adegas e opções de turismo rural que combinam refeição completa com o passeio.",
      categories: [
        {
          name: "Restaurantes nas adegas",
          description: "Refeições harmonizadas com os vinhos produzidos na própria propriedade, muitas com vista para os vinhedos"
        },
        {
          name: "Café colonial em fazendas",
          description: "Pães, bolos, queijos e geleias típicos, servidos em fazendas de turismo rural da região"
        },
        {
          name: "Restaurantes de culinária italiana no centro",
          description: "Massas e pratos tradicionais, refletindo a forte herança da imigração italiana na cidade"
        }
      ]
    },
    faqs: [
      {
        question: "Quantas adegas dá para visitar em um dia na Rota do Vinho de Jundiaí?",
        answer: "Em um bate-volta é possível visitar de forma tranquila 2 a 3 adegas, já que cada degustação guiada costuma levar entre 40 minutos e 1 hora."
      },
      {
        question: "Preciso agendar a visita às adegas de Jundiaí?",
        answer: "Recomendado, principalmente aos fins de semana — várias adegas trabalham com grupos e horários definidos para as degustações guiadas."
      },
      {
        question: "Qual é a melhor época para a Rota do Vinho de Jundiaí?",
        answer: "A época da colheita, geralmente entre janeiro e fevereiro, coincide com a tradicional Festa da Uva e costuma ser a mais movimentada. Fora dessa janela, as adegas seguem abertas para degustação o ano todo."
      },
      {
        question: "Como chegar em Jundiaí saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia Anhanguera ou Bandeirantes, cerca de 60 km e 1 hora de viagem."
      }
    ]
  },
  {
    id: "vinhedo",
    name: "Vinhedo",
    categories: ["Para ir com Crianças", "Para Curtir o Verão"],
    distance: 80,
    drivingHours: 1.0,
    rating: 4.7,
    shortDescription: "Lar do Hopi Hari, o maior parque temático do Brasil.",
    fullDescription: "Vinhedo é famosa por abrigar o Hopi Hari, o maior parque temático do Brasil com mais de 40 atrações, incluindo montanhas-russas radicais, shows e áreas temáticas. A cidade também oferece vinícolas, restaurantes e hospedagens. Perfeito para famílias e grupos que buscam diversão e adrenalina.",
    imageUrl: "/images/vinhedo_dae8595e.jpg",
    topAttractions: ["Hopi Hari", "Vinícolas", "Restaurantes", "Parques", "Lojas de artesanato"],
    bestSeason: "Ano inteiro; verão para aproveitar melhor o parque.",
    latitude: -23.0167,
    longitude: -46.9500,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Hopi Hari",
          description: "Um dos maiores parques temáticos da América Latina, dividido em 5 áreas temáticas, com a Montezum (maior montanha-russa de madeira da América do Sul) como destaque. Funciona de quinta a segunda, das 11h às 19h — vale checar o calendário antes de ir."
        },
        {
          name: "Vinícolas e adegas familiares",
          description: "Vinhedo vive e respira vinho — passeios pelas propriedades locais incluem degustação de vinhos premiados e explicação sobre o processo de vinificação, com forte influência da imigração italiana."
        },
        {
          name: "Cachoeira da Mariquinha",
          description: "A poucos quilômetros do centro, é uma boa opção para quem quer apreciar a Mata Atlântica com mais tranquilidade, longe da agitação do parque temático."
        },
        {
          name: "Wet'n Wild",
          description: "Parque aquático próximo ao Hopi Hari, com mais de 25 atrações, incluindo tobogãs e piscinas de grande porte — muitas vezes combinado no mesmo roteiro."
        },
        {
          name: "Festa da Uva e do Vinho",
          description: "Evento tradicional da cidade com degustação dos produtos locais, apresentações culturais e gastronomia — parte do Circuito das Frutas."
        }
      ]
    },
    whereToDine: {
      intro: "A gastronomia de Vinhedo mistura tradição da imigração italiana com opções mais contemporâneas, com boa concentração de restaurantes tanto no centro quanto perto do Hopi Hari.",
      categories: [
        {
          name: "Restaurantes nas vinícolas",
          description: "Refeições harmonizadas com os vinhos da casa, em meio aos parreirais"
        },
        {
          name: "Restaurantes no centro de Vinhedo",
          description: "Opções variadas, de culinária brasileira contemporânea a sushi e hambúrguer"
        },
        {
          name: "Restaurantes dentro do Hopi Hari",
          description: "Estrutura completa de lanchonetes e sorveterias para pausas durante o dia no parque"
        }
      ]
    },
    faqs: [
      {
        question: "O Hopi Hari fica exatamente em Vinhedo?",
        answer: "O parque fica em uma área muito próxima de Vinhedo, na Rodovia dos Bandeirantes, e costuma fazer parte dos roteiros turísticos da cidade, mesmo sendo tecnicamente mais associado à vizinha Itupeva."
      },
      {
        question: "Qual é a melhor época para visitar Vinhedo?",
        answer: "A cidade pode ser visitada o ano todo, mas primavera e outono oferecem temperaturas mais amenas para passeios ao ar livre e visitas às vinícolas."
      },
      {
        question: "Quantos dias são necessários para conhecer Vinhedo?",
        answer: "Um dia inteiro é recomendado só para o Hopi Hari. Quem quer combinar com vinícolas e a Cachoeira da Mariquinha deve reservar 2 a 3 dias."
      },
      {
        question: "Como chegar em Vinhedo saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia dos Bandeirantes, cerca de 80 km e 1 hora de viagem."
      }
    ]
  },
  {
    id: "louveira",
    name: "Louveira",
    categories: ["Para ir com Crianças", "Bate e Volta"],
    distance: 85,
    drivingHours: 1.1,
    rating: 4.5,
    shortDescription: "Outlet e compras, além de parques e lazer.",
    fullDescription: "Louveira é conhecida pelo Outlet Premium, com marcas internacionais e descontos. Além de compras, a cidade oferece parques, restaurantes e opções de lazer. Ideal para quem quer combinar shopping com diversão em família.",
    imageUrl: "/images/louveira_daf84d01.jpg",
    topAttractions: ["Outlet Premium", "Parques", "Restaurantes", "Lojas", "Lazer"],
    bestSeason: "Ano inteiro.",
    latitude: -23.1000,
    longitude: -46.9333,
    whatToDo: {
      title: "O que fazer",
      description: "",
      items: [
        {
          name: "Outlet Premium São Paulo",
          description: "Um dos principais atrativos da cidade, com marcas nacionais e internacionais e preços de fábrica — boa parada para quem quer combinar compras com o roteiro rural."
        },
        {
          name: "Sítio Santa Rita (Vinhos Micheletto)",
          description: "Vinícola conhecida por cultivar uvas europeias como Syrah, Cabernet Franc e Pinot Noir. O passeio inclui explicação sobre o processo de vinificação e duas opções de degustação."
        },
        {
          name: "Parque das Uvas",
          description: "Espaço verde amplo que sedia a tradicional Festa das Uvas, com degustação e venda de frutas frescas e produtos derivados — boa opção para caminhar e apreciar a paisagem mesmo fora do evento."
        },
        {
          name: "Sítios de turismo rural com colheita",
          description: "Propriedades como a Fazenda Luiz Gonzaga permitem colher as próprias uvas (modalidade 'colha e pague'), com restaurante rural completando o passeio."
        },
        {
          name: "Museu Municipal de Louveira",
          description: "Conta a trajetória da cidade e preserva parte de sua memória, boa opção para quem quer entender a história da imigração italiana e da tradição vinícola local."
        }
      ]
    },
    whereToDine: {
      intro: "Louveira tem restaurantes de turismo rural que combinam refeição com a visita às propriedades produtoras, além de opções de culinária italiana no centro da cidade.",
      categories: [
        {
          name: "Restaurantes rurais em sítios e fazendas",
          description: "Buffet com fogão a lenha, muitas vezes incluído no roteiro de visita às vinícolas"
        },
        {
          name: "Cantinas de culinária italiana",
          description: "Massas artesanais, risotos e carnes em ambiente mais caseiro"
        },
        {
          name: "Restaurantes no Outlet Premium",
          description: "Praça de alimentação para quem está no roteiro de compras"
        }
      ]
    },
    faqs: [
      {
        question: "O Outlet Premium de Louveira e o turismo rural ficam próximos?",
        answer: "Sim — a cidade é pequena e é possível combinar uma manhã de compras no outlet com uma tarde visitando vinícolas e sítios de turismo rural, já que as distâncias internas são curtas."
      },
      {
        question: "Preciso agendar a visita às vinícolas de Louveira?",
        answer: "Sim, a maioria das visitas guiadas às vinícolas e sítios precisa de agendamento prévio por telefone ou WhatsApp — vale entrar em contato com antecedência."
      },
      {
        question: "Qual é a melhor época para visitar Louveira?",
        answer: "A época da colheita das uvas, geralmente no verão, é ideal para quem quer participar da modalidade 'colha e pague'. Fora dessa janela, o outlet e as vinícolas funcionam o ano todo."
      },
      {
        question: "Como chegar em Louveira saindo de São Paulo?",
        answer: "O trajeto é pela Rodovia dos Bandeirantes, cerca de 70-85 km e pouco mais de 1 hora de viagem."
      }
    ]
  },
];

export const categories: Category[] = [
  "História",
  "Natureza & Aventura",
  "Destinos Românticos",
  "Para ir com Crianças",
  "Para Curtir o Frio",
  "Para Curtir o Verão",
  "Vinho & Lazer",
  "Bate e Volta",
];

export const categoryColors: Record<Category, string> = {
  "História": "bg-orange-500",
  "Natureza & Aventura": "bg-green-500",
  "Destinos Românticos": "bg-pink-500",
  "Para ir com Crianças": "bg-purple-500",
  "Para Curtir o Frio": "bg-blue-500",
  "Para Curtir o Verão": "bg-teal-500",
  "Vinho & Lazer": "bg-violet-500",
  "Bate e Volta": "bg-gray-500",
};

export const categoryColorsBorder: Record<Category, string> = {
  "História": "border-orange-500",
  "Natureza & Aventura": "border-green-500",
  "Destinos Românticos": "border-pink-500",
  "Para ir com Crianças": "border-purple-500",
  "Para Curtir o Frio": "border-blue-500",
  "Para Curtir o Verão": "border-teal-500",
  "Vinho & Lazer": "border-violet-500",
  "Bate e Volta": "border-gray-500",
};
