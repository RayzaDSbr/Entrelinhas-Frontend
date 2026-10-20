# Entrelinhas

## Sobre o produto

**Entrelinhas** é uma papelaria conceitual (fictícia) que vende **planners 2027 personalizáveis**. A proposta da marca está no slogan *"Sua rotina, do seu jeito."*

Na landing page, a pessoa monta o próprio planner: escolhe o nome que vai na capa, a cor (verde-sálvia, rosé ou creme) e os refis que quer incluir (planejamento semanal, metas, controle financeiro, rastreador de hábitos e anotações livres). A prévia da capa muda em tempo real e o planner pode ser adicionado à sacola.

**Público:** estudantes, profissionais criativos e qualquer pessoa que goste de organizar a rotina com um caderno que tenha a sua personalidade.

**O que a página apresenta**

| Requisito da atividade | Onde está |
|---|---|
| Identidade visual | Paleta em verde-floresta, sálvia, rosé, creme e petróleo, com as fontes Cormorant Garamond e DM Sans (`app/styles/variables.css`) |
| Nome e proposta | `widgets/Header` e `widgets/Hero` |
| Hero section | `widgets/Hero` |
| Benefícios e diferenciais | `widgets/Essence` |
| Imagens do produto | `widgets/Collection`, com as imagens em `shared/assets/images` |
| Como funciona | `widgets/Steps` |
| Prova social | `widgets/Reviews` (relatos fictícios) |
| Oferta e preço | `widgets/Kits` (preços fictícios) |
| FAQ | `widgets/FAQ` (acordeão) |
| CTA funcional | Personalizador do planner, com o botão "Adicionar ao carrinho" (`widgets/Customize`), que atualiza o contador da sacola no cabeçalho. Há também botões que rolam suavemente até as seções e um CTA final |

A aplicação é 100% client-side: não há backend, banco de dados ou API, e todos os dados são mockados.

## Arquitetura: FSD (Feature-Sliced Design)

Entre as duas arquiteturas apresentadas em aula (MVVM e FSD), escolhi o **FSD**.

```
src/
  app/              # inicialização: main.tsx, App.tsx e estilos globais
  pages/
    Home/           # compõe os widgets e guarda o estado compartilhado
  widgets/          # uma pasta por seção da landing page
    Header/ Hero/ Essence/ Collection/ Customize/
    Steps/ Kits/ Reviews/ FAQ/ FinalCTA/ Footer/
      ui/           # componente .tsx + .module.css
      model/        # dados específicos do widget (quando existem)
      index.ts      # API pública do widget
  features/
    customize-kit/  # lógica de personalizar o planner (hook useCustomizeKit)
  entities/         # dados mockados do domínio
    product/ kit/ review/ faq/
  shared/
    ui/             # Button, Logo, Eyebrow, SectionHead
    lib/            # scrollToSection, classNames
    assets/         # imagens
```

**Regra de importação:** cada camada só importa das camadas abaixo dela (`app → pages → widgets → features → entities → shared`). Por isso, um widget nunca importa outro widget. O estado do planner é usado pelo `Header` (contador da sacola), pelo `Customize` (edição) e pelo `Kits` (reinício). Como esses widgets não podem se importar, o estado fica na página `Home`, que repassa os dados por props.

**Por que FSD e não MVVM?** A landing page é formada por seções visuais independentes, com pouca regra de negócio, e o FSD organiza isso de forma natural: uma seção é um widget. O MVVM só faria sentido no personalizador, e mesmo ali o hook `useCustomizeKit` já faz o papel de ViewModel dentro da camada `features`.

**Estilos:** cada componente tem seu CSS Module (`*.module.css`). As cores e fontes ficam como variáveis CSS em `app/styles/variables.css`.

## Como rodar

```bash
npm install
npm run dev
```

## Jornada de construção

### Ideia inicial

A ideia surgiu de uma necessidade pessoal: eu estava pesquisando cadernos para organizar o ano seguinte e decidi transformar isso no tema do projeto, criando uma papelaria em que a própria pessoa monta o seu planner.

### Ferramentas utilizadas

- React com TypeScript
- Vite
- CSS Modules
- ESLint
- VS Code
- Git e GitHub
- Figma Make (protótipo e primeira versão do código)
- Gemini e ChatGPT (geração das imagens do produto)
- ChatGPT (também usado para complementar ideias)
- Claude (arquitetura e refatoração do projeto)

### Uso de IA

#### Figma Make

- **Para que usei:** criar o protótipo navegável da landing page e a primeira versão do código, que saiu em um único `App.tsx` com um `index.css` global.
- **Por que escolhi:** o recurso de gerar protótipos é muito bom e eu tinha acesso à assinatura premium de estudante.

#### Gemini

- **Para que usei:** gerar imagens do produto e, no começo, também tentei usá-lo para gerar o código.
- **Onde não foi satisfatório:** o código gerado não ficou bom, e por isso troquei o Gemini pelo Claude nessa parte. Nas imagens, a foto do caderno saiu com textos que eu não queria, então precisei pedir para refazer.

#### ChatGPT

- **Para que usei:** gerar imagens do produto e complementar as ideias do projeto.

#### Claude

- **Para que usei:**
  - Revisar a estrutura de pastas que eu já tinha montado em FSD.
  - Comparar FSD e MVVM e me ajudar a decidir.
  - Gerar um script (`fix-structure.cjs`) para reorganizar as pastas automaticamente.
  - Converter o código do Figma Make (um arquivo único com CSS global) para a arquitetura FSD com CSS Modules.
  - Ajudar a escrever este README.
- **Por que escolhi:** troquei o Gemini pelo Claude depois que o código gerado pelo Gemini não atendeu o que eu precisava.

#### Sugestões da IA que foram mantidas

- Continuar com FSD em vez de migrar para MVVM.
- Criar um `index.ts` em cada widget como API pública.
- Separar cada seção em um widget com `ui/` e `.module.css`.
- Criar `shared/ui` com `Button`, `Logo`, `Eyebrow` e `SectionHead` para não repetir CSS.
- Colocar os dados mockados em `entities/`.
- Concentrar a lógica do personalizador no hook `useCustomizeKit`, em `features/customize-kit`.
- Mover o estado compartilhado para a página `Home`, já que widgets não podem importar outros widgets.
- Remover `App.css` e `index.css` (sobras do template do Vite) e renomear `main.jsx` para `main.tsx`.

#### Sugestões da IA que foram alteradas

- O script gerou `pages/home` em minúsculas, mas a pasta do projeto já era `pages/Home`. Mantive `Home`, que segue o padrão dos nomes dos widgets.
- Os imports ficaram relativos (`../../../shared/ui`) em vez de usar o alias `@/`, para não precisar alterar o `vite.config` e o `tsconfig`.
- As imagens iniciais do protótipo foram trocadas pelas que gerei com IA.
- As cores sugeridas pelo Figma Make foram alteradas.

#### Sugestões da IA que foram descartadas

- MVVM como arquitetura.
- A feature `join-waitlist` (lista de espera), porque o CTA do projeto é o personalizador, não um formulário.
- O alias `@/` nos imports.
- A imagem `covers-showcase.png`, que tem texto embutido e não se encaixou no layout.
- O código gerado pelo Gemini, substituído pelo do Claude.

### Evolução da solução

Entre a primeira versão do protótipo e a versão final, mudei as cores, as imagens, as fontes e o design geral da página.

**Do código do Figma Make para o projeto final**

- **Estrutura:** um único `App.tsx` com todas as seções virou 11 widgets, uma página (`Home`) e as camadas `features`, `entities` e `shared`.
- **Estilos:** o `index.css` global, com classes em kebab-case e importação do Tailwind, foi dividido em um CSS Module por componente, com as cores e fontes em `variables.css`.
- **Estado:** os `useState` que ficavam todos no `App` foram para o hook `useCustomizeKit` e, de lá, para a página `Home`.
- **Componentes repetidos:** botões, logo e cabeçalho de seção viraram componentes compartilhados.
- **Dados:** produtos, kits, avaliações e perguntas do FAQ saíram do JSX e foram para `entities/`.
- **Acessibilidade:** os botões de cor e de refis usam `aria-pressed`, o FAQ usa `aria-expanded` e o campo de nome da capa tem `label` associado.
- **Limpeza:** removi elementos que o CSS original já escondia (números e ícones dos cards de benefícios).


### Resultado final
O resultado final foi satisfatório e gostei bastante dele, principalmente do layout que o Figma Make montou. Tive dificuldades ao usar o Gemini para gerar o código, mas, depois que passei para o Claude, o desenvolvimento ficou bem mais rápido.

**O que eu faria diferente com mais tempo**

- Criar um menu para celular. Hoje a navegação some em telas menores que 900px e não há botão de menu.
- Substituir as fotos da seção "Passo a passo", por imagens próprias, e otimizar as imagens do projeto.
- Fazer uma finalização de pedido simulada (modal ou página) depois do "Adicionar ao carrinho".
- Testar a responsividade em dispositivos reais e adicionar testes automatizados.