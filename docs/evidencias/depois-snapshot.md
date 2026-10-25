# Estado depois — snapshot de acessibilidade

- Página: `http://localhost:5173/`
- Viewport: `1440 × 1000` CSS px
- Ferramentas Playwright MCP: `browser_resize`, `browser_snapshot`, `browser_evaluate`

## Landmarks

| Landmark | Elemento / nome acessível |
|---|---|
| `banner` | Cabeçalho (`header`) |
| `navigation` | Navegação “Principal” (`nav`) |
| `main` | Conteúdo principal (`main#main-content`) |
| `contentinfo` | Rodapé (`footer`) |

O link “Pular para o conteúdo” aparece antes dos landmarks e aponta para `#main-content`.

## Hierarquia de títulos

- **h1**
  - Sua rotina, do seu jeito.
- **h2**
  - Mais do que organizar, é sobre encontrar o seu jeito.
  - Encontre o seu próximo capítulo.
  - Um planner que tem a sua cara.
  - Criar o seu é simples.
  - Seu jeito de planejar começa aqui.
  - Pequenos detalhes, novos começos.
  - Ficou com alguma dúvida?
  - Um novo ano. Mil possibilidades.
- **h3**
  - Feito para você
  - Do seu jeito
  - Para cada novo plano
  - Planner 2027 Personalizado
  - Refis Personalizados
  - Kit de Acessórios
  - Kit Completo 2027
  - Escolha sua capa
  - Monte suas páginas
  - Prepare-se para um novo ano
  - Essencial
  - Personalizado
  - Completo
- **h4, h5, h6:** nenhum encontrado.

## Texto alternativo exato de cada imagem

| Arquivo / conteúdo | `alt` |
|---|---|
| `hero-planner.png` | `Planner semanal aberto em tons pastel com flores e café` |
| `planner-covers.jpeg` | `Capas de planner em verde-sálvia, rosé e bege sobre fundo claro.` |
| `refills.png` | `Páginas de planejamento semanal, metas, finanças e anotações dispostas ao lado de um café.` |
| `accessories.jpeg` | `Canetas rosadas, bloco espiral, adesivos de corações, mini calendário e marcador de página sobre mesa de madeira clara.` |
| `complete-kit.jpeg` | `Planner aberto, refis, canetas, adesivos e caixa de presente organizados sobre uma mesa.` |
| Imagem de depoimento 1 (`photo-1568945721263-81d7cdbd91b6`) | vazio (`alt=""`) |
| Imagem de depoimento 2 (`photo-1557677514-666eb39d6d23`) | vazio (`alt=""`) |
| Imagem de depoimento 3 (`photo-1634042090297-004a969c02a3`) | vazio (`alt=""`) |

As três imagens de depoimento estão marcadas como decorativas. No estado anterior, o relatório de snapshot listava cinco imagens: o texto alternativo do hero permanece igual e os quatro alts que repetiam títulos de produtos foram substituídos por descrições. As três imagens decorativas não estavam discriminadas naquele relatório anterior; a avaliação do DOM atual confirmou os atributos vazios.
