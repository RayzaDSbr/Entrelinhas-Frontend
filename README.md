# ✏️ Entrelinhas — Papelaria Personalizável

<p align="left">
  <strong>Sua rotina, do seu jeito.</strong>
  <br />
  Uma landing page para planners 2027 personalizáveis, desenvolvida com React e TypeScript.
</p>

---

## ✿ Sobre o projeto

A **Entrelinhas** é uma papelaria conceitual e fictícia que vende **planners 2027 personalizáveis**, permitindo que cada pessoa crie um planner de acordo com seu estilo e suas necessidades.

Na landing page, o usuário pode:

- ✏️ Personalizar o nome que aparece na capa.
- ✏️ Escolher entre três cores: verde-sálvia, rosé e creme.
- ✏️ Selecionar os refis que deseja incluir no planner.
- ✏️ Visualizar a prévia da capa em tempo real.
- ✏️ Adicionar o planner à sacola e acompanhar o contador no cabeçalho.

Os refis disponíveis incluem planejamento semanal, metas, controle financeiro, rastreador de hábitos e anotações livres.

**Público-alvo:** estudantes, profissionais criativos e pessoas que gostam de organizar a rotina com produtos que reflitam sua personalidade.

> ✿ Projeto acadêmico desenvolvido para a atividade de Landing Page de Produto.

## ✿ Requisitos da atividade

| Requisito | Implementação |
| :--- | :--- |
| Identidade visual | Paleta em verde-floresta, sálvia, rosé, creme e petróleo, com Cormorant Garamond e DM Sans. |
| Nome e proposta | `widgets/Header` e `widgets/Hero` |
| Hero section | `widgets/Hero` |
| Benefícios e diferenciais | `widgets/Essence` |
| Imagens do produto | `widgets/Collection` e `shared/assets/images` |
| Como funciona | `widgets/Steps` |
| Prova social | `widgets/Reviews` — relatos fictícios |
| Oferta e preço | `widgets/Kits` — preços fictícios |
| FAQ | `widgets/FAQ` — acordeão interativo |
| CTA funcional | `widgets/Customize`, com personalização e atualização do contador da sacola |

Além disso, a página possui botões de navegação com rolagem suave entre as seções e uma chamada para ação final.

**Importante:** a aplicação é 100% client-side. Não utiliza backend, banco de dados ou API, e os dados apresentados são mockados.

---

## ✿ Arquitetura do projeto

### Por que escolhi FSD?

Entre as arquiteturas apresentadas em aula, **MVVM e FSD (Feature-Sliced Design)**, escolhi o FSD por se adequar melhor à estrutura da landing page.

Como o projeto é composto por seções visuais independentes, o FSD permite organizar cada seção em um widget, mantendo os componentes, os estilos e as responsabilidades mais bem separados.

### Estrutura de pastas

```text
src/
├── app/                  # Inicialização e estilos globais
│   └── styles/           # Variáveis CSS
├── pages/
│   └── Home/             # Página principal e estado compartilhado
├── widgets/              # Seções da landing page
│   ├── Header/
│   ├── Hero/
│   ├── Essence/
│   ├── Collection/
│   ├── Customize/
│   ├── Steps/
│   ├── Kits/
│   ├── Reviews/
│   ├── FAQ/
│   ├── FinalCTA/
│   └── Footer/
│       ├── ui/
│       ├── model/
│       └── index.ts
├── features/
│   └── customize-kit/    # Lógica de personalização do planner
├── entities/             # Dados mockados do domínio
│   ├── product/
│   ├── kit/
│   ├── review/
│   └── faq/
└── shared/
    ├── ui/               # Componentes reutilizáveis
    ├── lib/              # Funções utilitárias
    └── assets/
        └── images/
```

Cada widget possui sua própria estrutura de interface (`ui/`), com componentes `.tsx` e arquivos CSS Module. Quando necessário, também possui `model/` para seus dados específicos e `index.ts` como API pública.

### ✏️ Regra de importação

As dependências seguem esta direção:

`app → pages → widgets → features → entities → shared`

Cada camada pode utilizar as camadas inferiores, evitando dependências entre widgets.

Como o `Header`, o `Customize` e o `Kits` precisam acessar ou alterar informações relacionadas ao planner, o estado compartilhado fica na página `Home`, que distribui os dados e as funções por meio de props.

### ✏️ FSD ou MVVM?

O FSD foi escolhido porque representa melhor a organização visual da landing page. O MVVM poderia ser aplicado ao personalizador, mas a lógica dessa funcionalidade já está concentrada no hook `useCustomizeKit`, localizado em `features/customize-kit`.

### ✏️ Organização dos estilos

- Cada componente possui seu próprio arquivo `*.module.css`.
- As cores e as fontes globais ficam em `app/styles/variables.css`.
- Os componentes reutilizáveis ficam em `shared/ui`, evitando a repetição de estilos.

---

## ✿ Tecnologias e ferramentas

### Desenvolvimento

- ✏️ React
- ✏️ TypeScript
- ✏️ Vite
- ✏️ CSS Modules
- ✏️ ESLint
- ✏️ Visual Studio Code
- ✏️ Git e GitHub

### Design e inteligência artificial

- ✏️ Figma Make — protótipo e primeira versão do código.
- ✏️ Gemini — geração de imagens e experimentação com código.
- ✏️ ChatGPT — geração de imagens e apoio na elaboração de ideias e documentação.
- ✏️ Claude — apoio na arquitetura, organização dos arquivos e refatoração do projeto.

---

## ✿ Como executar o projeto

### Pré-requisitos

- Node.js instalado.
- npm disponível no terminal.

### Instalação

Clone o repositório e entre na pasta do projeto:

```bash
git clone <URL_DO_REPOSITORIO>
cd Entrelinhas-Frontend
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, acesse o endereço local apresentado no terminal pelo Vite.

---

## ✿ Jornada de construção

### 1. Ideia inicial

A ideia surgiu de uma necessidade pessoal: enquanto pesquisava cadernos para organizar o ano seguinte, percebi que poderia transformar essa experiência em um projeto acadêmico.

Assim nasceu a Entrelinhas, uma papelaria fictícia em que o próprio cliente pode montar seu planner e personalizá-lo de acordo com suas preferências.

### 2. Uso de inteligência artificial

As ferramentas de IA foram utilizadas em diferentes etapas do desenvolvimento, desde a criação do protótipo até a reorganização do código.

#### ✏️ Figma Make

**Como utilizei:** criei o protótipo navegável da landing page e gerei a primeira versão do código.

**Resultado:** o código inicial estava concentrado em um único `App.tsx`, acompanhado de um `index.css` global. Essa versão serviu como ponto de partida para a evolução do projeto.

**Por que escolhi:** a ferramenta facilitou a criação do protótipo, e eu tinha acesso à assinatura premium para estudantes.

#### ✏️ Gemini

**Como utilizei:** experimentei a geração de código e utilizei a ferramenta para criar imagens dos produtos.

**Dificuldades encontradas:** o código gerado não atendeu às necessidades do projeto. Além disso, algumas imagens apresentaram textos indesejados nos cadernos, exigindo novas tentativas de geração.

**Decisão:** continuei utilizando as imagens após ajustes, mas optei por outra ferramenta para a refatoração do código.

#### ✏️ ChatGPT

**Como utilizei:** gerei imagens dos produtos e complementei ideias para o desenvolvimento da página.

#### ✏️ Claude

**Como utilizei:**

- Revisei a estrutura de pastas que havia montado com FSD.
- Comparei as arquiteturas FSD e MVVM para apoiar a decisão arquitetural.
- GereI um script `fix-structure.cjs` para reorganizar os diretórios automaticamente.
- Converti o código inicial do Figma Make para a arquitetura FSD.
- Separei os estilos globais em CSS Modules por componente.
- Apoiei a documentação do projeto com este README.

**Por que escolhi:** após experimentar o Gemini para gerar o código, percebi que precisava de uma solução mais adequada à estrutura que pretendia implementar. Por isso, passei a utilizar o Claude nessa etapa.

### 3. Sugestões de IA que foram mantidas

- ✏️ Manter a arquitetura FSD em vez de migrar para MVVM.
- ✏️ Criar um `index.ts` em cada widget como API pública.
- ✏️ Separar as seções em widgets, com `ui/` e CSS Modules.
- ✏️ Criar `shared/ui` com `Button`, `Logo`, `Eyebrow` e `SectionHead`.
- ✏️ Organizar os dados mockados em `entities/`.
- ✏️ Concentrar a lógica de personalização no hook `useCustomizeKit`.
- ✏️ Manter o estado compartilhado na página `Home`.
- ✏️ Remover os arquivos de estilo que sobraram do template do Vite e renomear `main.jsx` para `main.tsx`.

### 4. Sugestões de IA que foram alteradas

- ✏️ Mantive o diretório `pages/Home` com inicial maiúscula, seguindo o padrão de nomenclatura adotado no projeto.
- ✏️ Utilizei imports relativos em vez do alias `@/`, evitando alterações adicionais no `vite.config` e no `tsconfig`.
- ✏️ Substituí as imagens iniciais do protótipo por imagens geradas com IA.
- ✏️ Modifiquei as cores sugeridas pelo Figma Make para adequá-las à identidade visual da marca.

### 5. Sugestões de IA que foram descartadas

- ✏️ A arquitetura MVVM como arquitetura principal.
- ✏️ A feature `join-waitlist`, pois a proposta do projeto é a personalização do planner, e não a inscrição em uma lista de espera.
- ✏️ O alias `@/` nos imports.
- ✏️ A imagem `covers-showcase.png`, por conter texto embutido e não se adequar ao layout.
- ✏️ O código gerado pelo Gemini, substituído pela versão refatorada com auxílio do Claude.

---

## ✿ Evolução da solução

A primeira versão era um protótipo com todas as seções concentradas em um único arquivo. Durante o desenvolvimento, reorganizei a estrutura e refinei a identidade visual.

| Aspecto | Versão inicial | Versão final |
| :--- | :--- | :--- |
| Estrutura | Um único `App.tsx` | Widgets, página e camadas do FSD |
| Estilos | `index.css` global | CSS Modules e variáveis globais |
| Estado | `useState` concentrado no `App` | Hook `useCustomizeKit` e estado compartilhado em `Home` |
| Componentes | Elementos definidos nas próprias seções | Componentes reutilizáveis em `shared/ui` |
| Dados | Informações diretamente no JSX | Dados mockados organizados em `entities/` |
| Identidade visual | Cores e fontes do protótipo | Paleta, imagens e fontes ajustadas |

### ✏️ Acessibilidade e organização

- Os botões de escolha de cores e refis utilizam `aria-pressed`.
- O FAQ utiliza `aria-expanded`.
- O campo de nome da capa possui um `label` associado.
- Os estilos foram separados por componente para facilitar a manutenção.
- Elementos desnecessários que já estavam ocultos pelo CSS original, como números e ícones dos cards de benefícios, foram removidos.

---

## ✿ Resultado final

O resultado foi satisfatório, principalmente pela identidade visual e pelo layout desenvolvido a partir do protótipo do Figma Make.

Durante o processo, enfrentei dificuldades com a geração inicial do código, mas a reorganização da arquitetura e a separação dos componentes tornaram o projeto mais estruturado e facilitaram a manutenção.

Mais do que desenvolver uma landing page, o projeto foi uma oportunidade de experimentar diferentes ferramentas de IA, avaliar sugestões, tomar decisões técnicas e compreender melhor a organização de uma aplicação React.

### ✏️ O que eu faria diferente com mais tempo?

- Criaria um menu de navegação para dispositivos móveis. Atualmente, a navegação desaparece em telas menores que 900 px e não há um botão de menu.
- Substituiria as imagens da seção "Passo a passo" por imagens próprias.
- Otimizaria as imagens utilizadas no projeto.
- Implementaria uma finalização de pedido simulada, com modal ou página após o clique em "Adicionar ao carrinho".
- Testaria a responsividade em dispositivos reais.

---

<p align="center">
  ✏️ <strong>Entrelinhas — Sua rotina, do seu jeito.</strong>
  <br />
  <sub>Projeto acadêmico • React • TypeScript • Feature-Sliced Design</sub>
</p>
