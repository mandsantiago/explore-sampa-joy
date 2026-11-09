import { Category, destinations } from "./destinations";

export interface CategoryPage {
  slug: string;
  name: Category;
  /** Texto usado no <title> antes do " | Viajando por SP". */
  title: string;
  /** Meta description (até ~155 caracteres). */
  description: string;
  /** Introdução exibida no topo da página da categoria, um parágrafo por item. */
  intro: string[];
}

export const categoryPages: CategoryPage[] = [
  {
    slug: "historia",
    name: "História",
    title: "Cidades históricas de SP para conhecer de carro",
    description:
      "Cidades históricas perto de São Paulo: centros coloniais, fazendas do café e museus, com distância e tempo de estrada a partir da capital.",
    intro: [
      "O estado de São Paulo guarda muita história a poucas horas da capital. Tem vila bandeirante preservada em Santana de Parnaíba, a 40 km do centro, e centro histórico de Itu, onde foi organizada a convenção republicana de 1873.",
      "Mais longe, o Vale do Paraíba conserva os casarões e as fazendas do ciclo do café em Bananal e o casario colorido de São Luiz do Paraitinga. No litoral, Santos tem o centro revitalizado e o Museu do Café, e Cananéia é uma das ocupações mais antigas do Brasil.",
      "Os roteiros desta lista funcionam bem a pé: estacione o carro, caminhe pelo centro, entre nas igrejas e museus e reserve tempo para a comida local.",
    ],
  },
  {
    slug: "natureza-e-aventura",
    name: "Natureza & Aventura",
    title: "Natureza e aventura perto de SP: rafting, trilhas e cavernas",
    description:
      "Destinos de natureza e aventura em SP: rafting em Brotas e Juquitiba, cavernas do PETAR, paraquedismo em Boituva e trilhas perto da capital.",
    intro: [
      "Esta é a categoria com mais opções do site, e a variedade é grande. Tem rafting em Brotas, Socorro e Juquitiba, salto de paraquedas e balão em Boituva, voo livre em Pedra Bela e cachoeiras na cuesta de Botucatu.",
      "No Vale do Ribeira, o PETAR (Iporanga) e a Caverna do Diabo (Eldorado) reúnem algumas das cavernas mais visitadas do país. Para quem tem só uma manhã, a Serra do Japi, a Pedra Grande de Atibaia e o Parque da Cantareira ficam a menos de uma hora da capital.",
      "Atividades de aventura dependem de operadora credenciada e de clima: reserve com antecedência, confira a previsão e leve roupa que possa molhar.",
    ],
  },
  {
    slug: "destinos-romanticos",
    name: "Destinos Românticos",
    title: "Destinos românticos em SP para viajar a dois de carro",
    description:
      "Viagens a dois perto de São Paulo: Campos do Jordão, Cunha, Holambra, estâncias do Circuito das Águas e pousadas na serra, com tempo de estrada.",
    intro: [
      "Para uma escapada a dois, o estado tem dois grandes caminhos. O primeiro é a serra: Campos do Jordão, Santo Antônio do Pinhal, Cunha e o distrito de Francisco Xavier, com noites frias, lareira e pousadas pequenas.",
      "O segundo é o Circuito das Águas: Águas de Lindóia, Lindóia, Monte Alegre do Sul e Amparo, com spas, praças arborizadas e cafés coloniais. Completam a lista Holambra, com os campos de flores, Águas de São Pedro e as fazendas históricas de Bananal.",
      "Em feriados e no inverno as pousadas lotam cedo. Vale reservar com antecedência e, se possível, viajar durante a semana.",
    ],
  },
  {
    slug: "para-ir-com-criancas",
    name: "Para ir com Crianças",
    title: "Viagens de carro com crianças em SP: parques e praias",
    description:
      "Destinos em SP para ir com crianças: parques aquáticos em Olímpia, Hopi Hari em Vinhedo, praias calmas em Caraguatatuba e estâncias com estrutura.",
    intro: [
      "Viajar com crianças pede estrada curta, estrutura e atividade garantida. Os destinos desta lista foram escolhidos por isso.",
      "Olímpia concentra os grandes parques aquáticos do interior. Vinhedo tem o Hopi Hari, e Louveira, ao lado, soma parques e outlet. No litoral, Caraguatatuba tem praias de mar calmo e boa infraestrutura. Águas de Lindóia e Águas de São Pedro são cidades pequenas, seguras e fáceis de percorrer com carrinho.",
      "Para quem vai com crianças pequenas, considere o tempo de estrada indicado em cada destino e planeje paradas a cada uma ou duas horas.",
    ],
  },
  {
    slug: "para-curtir-o-frio",
    name: "Para Curtir o Frio",
    title: "Destinos de inverno em SP: serra, fondue e clima frio",
    description:
      "Onde curtir o frio em SP: Campos do Jordão, Serra Negra e Águas de Lindóia, com fondue, malharias e clima de montanha a poucas horas da capital.",
    intro: [
      "Entre junho e agosto, as cidades de serra do estado registram as temperaturas mais baixas e viram destino de quem gosta de casaco, fondue e chocolate quente.",
      "Campos do Jordão é o clássico, com o Festival de Inverno em julho. Serra Negra e Águas de Lindóia, no Circuito das Águas, têm clima ameno, malharias e uma programação mais tranquila e em conta.",
      "No inverno, os fins de semana de julho são os mais disputados. Para fugir das filas e dos preços altos, prefira junho ou agosto.",
    ],
  },
  {
    slug: "para-curtir-o-verao",
    name: "Para Curtir o Verão",
    title: "Praias e destinos de verão em SP para ir de carro",
    description:
      "Destinos de verão em SP: praias de Ubatuba, Ilhabela, São Sebastião, Caraguatatuba, Bertioga e Guarujá, além de represas e parques perto da capital.",
    intro: [
      "Verão em São Paulo é sinônimo de litoral. No Litoral Norte estão Ubatuba, com mais de cem praias, Ilhabela, Caraguatatuba e São Sebastião, cada um com um perfil diferente: mais estrutura, mais natureza ou mais surf.",
      "Mais perto da capital, Guarujá e Bertioga resolvem um fim de semana sem pegar a serra inteira. Para quem prefere água doce, a Represa Atibainha em Nazaré Paulista e os parques de Vinhedo são alternativas a menos de uma hora e meia.",
      "Na alta temporada, saia cedo, evite os horários de pico na descida da serra e confira a balneabilidade das praias no site da Cetesb antes de entrar no mar.",
    ],
  },
  {
    slug: "vinho-e-lazer",
    name: "Vinho & Lazer",
    title: "Rotas do vinho e gastronomia em SP para ir de carro",
    description:
      "Vinícolas, cervejarias e gastronomia perto de SP: Roteiro do Vinho em São Roque, Rota do Vinho de Jundiaí, Piracicaba, Amparo e Ribeirão Preto.",
    intro: [
      "Para quem viaja para comer e beber bem, a lista começa perto: o Roteiro do Vinho de São Roque e a Rota do Vinho de Jundiaí ficam a cerca de uma hora da capital, com adegas, restaurantes rurais e venda direta do produtor.",
      "Mais longe, Piracicaba tem a pamonha, a rua do Porto e o Engenho Central, Amparo combina fazendas e gastronomia de montanha e Ribeirão Preto é conhecida pelos chopes e cervejarias. São José dos Campos completa a lista com turismo tecnológico e acesso ao distrito de Francisco Xavier.",
      "Se o roteiro inclui degustação, combine quem vai dirigir ou reserve hospedagem na cidade.",
    ],
  },
  {
    slug: "bate-e-volta",
    name: "Bate e Volta",
    title: "Bate e volta saindo de SP: passeios de um dia de carro",
    description:
      "Passeios de bate e volta saindo de São Paulo: Cantareira, Itapecerica da Serra, compras em Pedreira, Porto Ferreira e Louveira, com tempo de estrada.",
    intro: [
      "Nem toda viagem precisa de pousada. Os destinos desta lista funcionam bem em um dia: dá para sair de manhã, aproveitar e voltar para dormir em casa.",
      "Para natureza, o Parque Estadual da Cantareira e as cachoeiras de Itapecerica da Serra ficam a menos de 40 km do centro. Para compras, Pedreira (louças e decoração), Porto Ferreira (cerâmica) e Louveira (outlet) são os roteiros clássicos.",
      "Muitos destinos de outras categorias também funcionam como bate e volta. Use o filtro \"Até 100 km\" na página inicial para ver todos os que ficam mais perto da capital.",
    ],
  },
];

export function getCategoryBySlug(slug: string): CategoryPage | undefined {
  return categoryPages.find((c) => c.slug === slug);
}

export function getCategoryByName(name: Category): CategoryPage {
  const page = categoryPages.find((c) => c.name === name);
  if (!page) throw new Error(`Categoria sem página: ${name}`);
  return page;
}

export function categoryPath(name: Category): string {
  return `/categoria/${getCategoryByName(name).slug}`;
}

export function destinationsInCategory(name: Category) {
  return destinations.filter((d) => d.categories.includes(name));
}
