# Explore Sampa Joy — Design Direction

## Referência Original
Este projeto é uma **reprodução fiel** do site explore-sampa-joy.lovable.app, um guia interativo de 50 destinos turísticos em São Paulo. A fidelidade ao design original é o objetivo principal.

## Design Escolhido: Exploração Moderna + Warmth

**Design Movement:** Modern Minimalism com toques de Warmth e Acessibilidade

**Conceito:** Um guia de viagem que combina clareza informacional com uma sensação acolhedora e convidativa. O design prioriza a descoberta intuitiva de destinos através de uma interface limpa mas com personalidade.

### Core Principles
1. **Clareza Hierárquica** — Informações organizadas em ordem de importância (destino → categoria → distância → rating → descrição)
2. **Warmth Visual** — Cores quentes (amarelo, coral, verde) que remetem à natureza e viagens
3. **Acessibilidade** — Contraste adequado, tipografia legível, navegação intuitiva
4. **Descoberta Progressiva** — Grid de cartões que convida ao scroll e exploração

### Color Philosophy
- **Fundo Principal:** Branco/Cinza muito claro (arejado, convidativo)
- **Texto:** Cinza escuro/Preto (legibilidade máxima)
- **Destaque Primário:** Amarelo vibrante (#FFD700 ou similar) — representa energia, viagens, aventura
- **Botões/CTAs:** Azul ciano (#00BCD4) — confiança, ação
- **Categorias com cores específicas:**
  - Destinos Românticos: Rosa/Coral (#FF6B9D)
  - Natureza & Aventura: Verde (#2ECC71)
  - História: Laranja/Marrom (#E67E22)
  - Para ir com Crianças: Roxo (#9B59B6)
  - Para Curtir o Frio: Azul (#3498DB)
  - Para Curtir o Verão: Verde claro (#1ABC9C)
  - Vinho & Lazer: Roxo claro (#AF7AC5)
  - Bate e Volta: Cinza (#95A5A6)

### Layout Paradigm
- **Hero Section:** Imagem de fundo com overlay de gradiente, texto sobreposto com hierarquia clara
- **Filtros:** Barra horizontal sticky com scroll, fácil acesso a categorias
- **Grid de Cartões:** 3 colunas em desktop, 2 em tablet, 1 em mobile — cada cartão é um "portal" para o destino
- **Mapa Interativo:** Integrado com Leaflet/OpenStreetMap, marcadores clicáveis
- **Detalhes:** Expandidos em seção dedicada com imagem grande, descrição completa, atrações e tags

### Signature Elements
1. **Cartões com Imagem + Badge de Categoria** — Identifica visualmente o tipo de destino
2. **Rating com Estrelas** — Confiança e recomendação
3. **Distância em km** — Contexto prático para planejamento
4. **Botão "Ver dicas"** — CTA claro e acionável

### Interaction Philosophy
- **Busca em Tempo Real:** Filtra destinos conforme digita
- **Filtros por Categoria:** Clique para filtrar, visual feedback imediato
- **Cartões Hover:** Sutil elevação/sombra para indicar interatividade
- **Mapa Interativo:** Clique em marcador navega para destino
- **Scroll Suave:** Navegação fluida entre seções

### Animation
- **Entrada de Cartões:** Fade-in suave com stagger (30-50ms entre cartões)
- **Hover em Cartões:** Elevação sutil (transform: translateY(-4px)) com sombra aumentada
- **Botões:** Scale(0.97) no click para feedback tátil
- **Transições de Filtro:** Fade entre estados (200ms)
- **Scroll Suave:** Comportamento natural sem animações excessivas

### Typography System
- **Display/Títulos:** Fonte com peso bold (700+), tamanho 2.5-3.5rem para hero
- **Subtítulos:** Peso 600, tamanho 1.5-2rem
- **Corpo:** Peso 400, tamanho 1rem, line-height 1.6
- **Labels/Tags:** Peso 500, tamanho 0.875rem
- **Font Stack:** Preferência por sans-serif moderna (Inter, Poppins, ou similar)

### Brand Essence
**Posicionamento:** Seu guia confiável para descobrir os melhores destinos de São Paulo, a poucos cliques de distância.

**Personalidade:** Inspirador, Acessível, Confiável

### Brand Voice
**Tom:** Amigável, entusiasmado mas informativo. Convida à exploração sem ser excessivamente casual.

**Exemplos:**
- "Para onde vai a sua próxima viagem?" (convite, não imposição)
- "50 lugares para você se apaixonar" (emocional, aspiracional)

### Wordmark & Logo
- **Conceito:** Símbolo de mapa/pin estilizado em cores quentes (amarelo + azul)
- **Estilo:** Geométrico, moderno, reconhecível em tamanho pequeno
- **Uso:** Header, favicon, elementos de branding

### Signature Brand Color
**Amarelo Vibrante (#FFD700)** — Representa energia, viagens, otimismo. Usado em destaques, acentos e elementos de chamada.

## Implementação
- Fidelidade ao design original é prioridade
- Componentes reutilizáveis (DestinationCard, CategoryFilter, etc.)
- Responsividade mobile-first
- Performance otimizada (lazy loading de imagens, virtualization se necessário)
- Integração com Leaflet para mapa interativo
- Dados estruturados (JSON) para fácil manutenção
