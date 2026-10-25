# Estado depois — contraste de texto

- Página: `http://localhost:5173/`
- Viewport: `1440 × 1000` CSS px
- Medição após as alterações: Playwright MCP `browser_evaluate` e `getComputedStyle`.
- Razões calculadas com a fórmula de luminância relativa WCAG, considerando o fundo sólido mais próximo.
- Elementos com o mesmo par de cores e tamanho foram agrupados; os textos listados compartilham a medição indicada.
- Limites: texto normal `4,5:1`; texto grande (`24px+` ou `18,66px+` em negrito) `3:1`.
- Na comparação, “antes” reproduz as cores e razões de [antes-contraste.md](./antes-contraste.md); “depois” vem da medição após as alterações. Os pares originais reprovados foram corrigidos; a tabela também registra os pares já aprovados para comparação.

| Elementos e textos | Antes — texto / fundo | Antes | Depois — texto / fundo | Depois | Mínimo | Resultado |
|---|---|---:|---|---:|---:|---|
| Botões 13px: Sacola, Ver detalhes | `rgb(10, 51, 35)` / `rgb(247, 244, 213)` | 12,48:1 | `rgb(10, 51, 35)` / `rgb(247, 244, 213)` | 12,48:1 | 4,5:1 | Passou |
| Botão “Monte seu planner”; botões de kit no cartão rosé; “Criar meu planner” | `rgb(10, 51, 35)` / `rgb(211, 150, 140)` | 5,63:1 | `rgb(10, 51, 35)` / `rgb(211, 150, 140)` | 5,63:1 | 4,5:1 | Passou |
| Botão “Conheça a coleção” | `rgb(0, 0, 0)` / `rgb(247, 244, 213)` | 18,86:1 | `rgb(0, 0, 0)` / `rgb(247, 244, 213)` | 18,86:1 | 4,5:1 | Passou |
| Botões de cores e refis | `rgb(247, 244, 213)` / `rgb(16, 86, 102)` | 7,41:1 | `rgb(247, 244, 213)` / `rgb(16, 86, 102)` | 7,41:1 | 4,5:1 | Passou |
| Botão “Adicionar ao carrinho” | `rgb(247, 244, 213)` / `rgb(10, 51, 35)` | 12,48:1 | `rgb(247, 244, 213)` / `rgb(10, 51, 35)` | 12,48:1 | 4,5:1 | Passou |
| Botão “Escolher este kit” em cartão creme | `rgb(10, 51, 35)` / `rgb(247, 244, 213)` | 12,48:1 | `rgb(10, 51, 35)` / `rgb(247, 244, 213)` | 12,48:1 | 4,5:1 | Passou |
| Perguntas do FAQ | `rgb(10, 51, 35)` / `rgb(211, 150, 140)` | 5,63:1 | `rgb(10, 51, 35)` / `rgb(211, 150, 140)` | 5,63:1 | 3:1 | Passou |
| Numeração 01–06 das perguntas do FAQ | `rgb(16, 86, 102)` / `rgb(211, 150, 140)` | 3,34:1 | `rgb(10, 51, 35)` / `rgb(211, 150, 140)` | 5,63:1 | 4,5:1 | **Passou — corrigido** |
| Links da navegação principal | `rgb(10, 51, 35)` / `rgb(247, 244, 213)` | 12,48:1 | `rgb(10, 51, 35)` / `rgb(247, 244, 213)` | 12,48:1 | 4,5:1 | Passou |
| Links do rodapé | `rgb(247, 244, 213)` / `rgb(10, 51, 35)` | 12,48:1 | `rgb(247, 244, 213)` / `rgb(10, 51, 35)` | 12,48:1 | 4,5:1 | Passou |
| h1 “Sua rotina, do seu jeito.” | `rgb(10, 51, 35)` / `rgb(247, 244, 213)` | 12,48:1 | `rgb(10, 51, 35)` / `rgb(247, 244, 213)` | 12,48:1 | 3:1 | Passou |
| h2 “Mais do que organizar...” | `rgb(10, 51, 35)` / `rgb(211, 150, 140)` | 5,63:1 | `rgb(10, 51, 35)` / `rgb(211, 150, 140)` | 5,63:1 | 3:1 | Passou |
| Trecho “encontrar o seu jeito.” no h2 | `rgb(16, 86, 102)` / `rgb(211, 150, 140)` | 3,34:1 | `rgb(16, 86, 102)` / `rgb(211, 150, 140)` | 3,34:1 | 3:1 | Passou |
| h3 “Feito para você” | `rgb(247, 244, 213)` / `rgb(131, 153, 88)` | 2,83:1 | `rgb(247, 244, 213)` / `rgb(95, 115, 60)` | 4,71:1 | 3:1 | **Passou — corrigido** |
| h3 “Do seu jeito” | `rgb(131, 153, 88)` / `rgb(247, 244, 213)` | 2,83:1 | `rgb(95, 115, 60)` / `rgb(247, 244, 213)` | 4,71:1 | 3:1 | **Passou — corrigido** |
| h3 “Para cada novo plano” | `rgb(211, 150, 140)` / `rgb(16, 86, 102)` | 3,34:1 | `rgb(211, 150, 140)` / `rgb(16, 86, 102)` | 3,34:1 | 3:1 | Passou |
| h2 “Encontre o seu próximo capítulo.” | `rgb(247, 244, 213)` / `rgb(10, 51, 35)` | 12,48:1 | `rgb(247, 244, 213)` / `rgb(10, 51, 35)` | 12,48:1 | 3:1 | Passou |
| h3 dos quatro produtos da coleção | `rgb(10, 51, 35)` / `rgb(247, 244, 213)` | 12,48:1 | `rgb(10, 51, 35)` / `rgb(247, 244, 213)` | 12,48:1 | 3:1 | Passou |
| h2 “Um planner que tem a sua cara.” | `rgb(247, 244, 213)` / `rgb(211, 150, 140)` | 2,22:1 | `rgb(10, 51, 35)` / `rgb(211, 150, 140)` | 5,63:1 | 3:1 | **Passou — corrigido** |
| h2 “Criar o seu é simples.” | `rgb(247, 244, 213)` / `rgb(131, 153, 88)` | 2,83:1 | `rgb(247, 244, 213)` / `rgb(95, 115, 60)` | 4,71:1 | 3:1 | **Passou — corrigido** |
| h3 “Escolha sua capa”, “Monte suas páginas”, “Prepare-se para um novo ano” | `rgb(247, 244, 213)` / `rgb(131, 153, 88)` | 2,83:1 | `rgb(247, 244, 213)` / `rgb(95, 115, 60)` | 4,71:1 | 3:1 | **Passou — corrigido** |
| h2 “Seu jeito de planejar começa aqui.” | `rgb(247, 244, 213)` / `rgb(16, 86, 102)` | 7,41:1 | `rgb(247, 244, 213)` / `rgb(16, 86, 102)` | 7,41:1 | 3:1 | Passou |
| h3 dos kits Essencial e Completo | `rgb(10, 51, 35)` / `rgb(247, 244, 213)` | 12,48:1 | `rgb(10, 51, 35)` / `rgb(247, 244, 213)` | 12,48:1 | 3:1 | Passou |
| h3 “Personalizado” | `rgb(247, 244, 213)` / `rgb(10, 51, 35)` | 12,48:1 | `rgb(247, 244, 213)` / `rgb(10, 51, 35)` | 12,48:1 | 3:1 | Passou |
| h2 “Pequenos detalhes, novos começos.” | `rgb(10, 51, 35)` / `rgb(247, 244, 213)` | 12,48:1 | `rgb(10, 51, 35)` / `rgb(247, 244, 213)` | 12,48:1 | 3:1 | Passou |
| h2 “Ficou com alguma dúvida?” | `rgb(10, 51, 35)` / `rgb(211, 150, 140)` | 5,63:1 | `rgb(10, 51, 35)` / `rgb(211, 150, 140)` | 5,63:1 | 3:1 | Passou |
| h2 “Um novo ano. Mil possibilidades.” | `rgb(247, 244, 213)` / `rgb(10, 51, 35)` | 12,48:1 | `rgb(247, 244, 213)` / `rgb(10, 51, 35)` | 12,48:1 | 3:1 | Passou |
| Parágrafo principal da abertura | `rgb(16, 86, 102)` / `rgb(247, 244, 213)` | 7,41:1 | `rgb(16, 86, 102)` / `rgb(247, 244, 213)` | 7,41:1 | 4,5:1 | Passou |
| Parágrafo da seção Nossa essência | `rgb(10, 51, 35)` / `rgb(211, 150, 140)` | 5,63:1 | `rgb(10, 51, 35)` / `rgb(211, 150, 140)` | 5,63:1 | 4,5:1 | Passou |
| “Personalize a capa e escolha cada detalhe.” | `rgb(10, 51, 35)` / `rgb(131, 153, 88)` | 4,41:1 | `rgb(247, 244, 213)` / `rgb(95, 115, 60)` | 4,71:1 | 4,5:1 | **Passou — corrigido** |
| “Selecione as folhas de acordo com suas necessidades.”; “Criado por você, pensado para a sua rotina.” | `rgb(10, 51, 35)` / `rgb(247, 244, 213)` | 12,48:1 | `rgb(10, 51, 35)` / `rgb(247, 244, 213)` | 12,48:1 | 4,5:1 | Passou |
| “Organize estudos, trabalho, projetos e vida pessoal.” | `rgb(247, 244, 213)` / `rgb(16, 86, 102)` | 7,41:1 | `rgb(247, 244, 213)` / `rgb(16, 86, 102)` | 7,41:1 | 4,5:1 | Passou |
| Parágrafo introdutório da coleção | `rgb(247, 244, 213)` / `rgb(10, 51, 35)` | 12,48:1 | `rgb(247, 244, 213)` / `rgb(10, 51, 35)` | 12,48:1 | 4,5:1 | Passou |
| Descrições dos quatro produtos | `rgb(16, 86, 102)` / `rgb(247, 244, 213)` | 7,41:1 | `rgb(16, 86, 102)` / `rgb(247, 244, 213)` | 7,41:1 | 4,5:1 | Passou |
| “Você escolhe os detalhes. A gente imagina as possibilidades.” | `rgb(247, 244, 213)` / `rgb(211, 150, 140)` | 2,22:1 | `rgb(10, 51, 35)` / `rgb(211, 150, 140)` | 5,63:1 | 4,5:1 | **Passou — corrigido** |
| Instruções “Escolha a cor da capa” e “Escolha seus refis” | `rgb(247, 244, 213)` / `rgb(16, 86, 102)` | 7,41:1 | `rgb(247, 244, 213)` / `rgb(16, 86, 102)` | 7,41:1 | 4,5:1 | Passou |
| Descrições dos três passos | `rgb(247, 244, 213)` / `rgb(131, 153, 88)` | 2,83:1 | `rgb(247, 244, 213)` / `rgb(95, 115, 60)` | 4,71:1 | 4,5:1 | **Passou — corrigido** |
| Nota de preços fictícios | `rgb(247, 244, 213)` / `rgb(16, 86, 102)` | 7,41:1 | `rgb(247, 244, 213)` / `rgb(16, 86, 102)` | 7,41:1 | 4,5:1 | Passou |
| Introdução das impressões | `rgb(16, 86, 102)` / `rgb(247, 244, 213)` | 7,41:1 | `rgb(16, 86, 102)` / `rgb(247, 244, 213)` | 7,41:1 | 4,5:1 | Passou |
| Três relatos demonstrativos | `rgb(10, 51, 35)` / `rgb(247, 244, 213)` | 12,48:1 | `rgb(10, 51, 35)` / `rgb(247, 244, 213)` | 12,48:1 | 3:1 | Passou |
| Introdução e resposta aberta do FAQ | `rgb(16, 86, 102)` / `rgb(211, 150, 140)` | 3,34:1 | `rgb(10, 51, 35)` / `rgb(211, 150, 140)` | 5,63:1 | 4,5:1 | **Passou — corrigido** |
| Parágrafo da chamada final e frase do rodapé | `rgb(247, 244, 213)` / `rgb(10, 51, 35)` | 12,48:1 | `rgb(247, 244, 213)` / `rgb(10, 51, 35)` | 12,48:1 | 4,5:1 | Passou |
| Texto base do rodapé | `rgb(247, 244, 213)` / `rgb(10, 51, 35)` | 12,48:1 | `rgb(247, 244, 213)` / `rgb(10, 51, 35)` | 12,48:1 | 4,5:1 | Passou |

## Revalidação Playwright — 25/10/2026

O contraste foi medido novamente após as demais melhorias, em viewport `1440 × 1000`, usando `browser_evaluate` e `getComputedStyle`. A avaliação percorreu 84 textos visíveis em títulos `h1–h6`, parágrafos, botões e links; calculou luminância relativa pela fórmula WCAG e selecionou o fundo sólido mais próximo. **Resultado: 0 reprovações.**

| Pares computados (grupos representativos) | Texto | Fundo sólido mais próximo | Razão | Mínimo | Resultado |
|---|---|---|---:|---:|---|
| Texto creme em fundo verde-floresta | `rgb(247, 244, 213)` | `rgb(10, 51, 35)` | 12,48:1 | 4,5:1 | Passou |
| Texto verde-floresta em fundo creme | `rgb(10, 51, 35)` | `rgb(247, 244, 213)` | 12,48:1 | 4,5:1 | Passou |
| Texto petróleo em fundo creme | `rgb(16, 86, 102)` | `rgb(247, 244, 213)` | 7,41:1 | 4,5:1 | Passou |
| Texto verde-floresta em fundo rosé | `rgb(10, 51, 35)` | `rgb(211, 150, 140)` | 5,63:1 | 4,5:1 | Passou |
| Texto preto em fundo creme | `rgb(0, 0, 0)` | `rgb(247, 244, 213)` | 18,86:1 | 4,5:1 | Passou |
| Texto creme em sálvia escuro (texto grande) | `rgb(247, 244, 213)` | `rgb(95, 115, 60)` | 4,71:1 | 3:1 | Passou |
| Texto creme em sálvia escuro (texto normal) | `rgb(247, 244, 213)` | `rgb(95, 115, 60)` | 4,71:1 | 4,5:1 | Passou |
| Texto sálvia escuro em fundo creme (texto grande) | `rgb(95, 115, 60)` | `rgb(247, 244, 213)` | 4,71:1 | 3:1 | Passou |
| Texto rosé em fundo petróleo (texto grande) | `rgb(211, 150, 140)` | `rgb(16, 86, 102)` | 3,34:1 | 3:1 | Passou |
| Texto creme em fundo petróleo | `rgb(247, 244, 213)` | `rgb(16, 86, 102)` | 7,41:1 | 4,5:1 | Passou |
| Texto creme em fundo petróleo (texto grande) | `rgb(247, 244, 213)` | `rgb(16, 86, 102)` | 7,41:1 | 3:1 | Passou |

O cálculo foi repetido diretamente no DOM atual; os exemplos, valores e falhas históricas estão registrados acima e na tabela antes/depois. A medição atual não encontrou pares abaixo de `4,5:1` para texto normal nem de `3:1` para texto grande.

## Resultado

A medição `browser_evaluate` após a implementação não encontrou nenhum par abaixo do limite aplicável entre os botões, links, títulos, parágrafos, numerais do FAQ e rodapé cobertos nesta tabela.

## Tokens e ajustes

- Adicionado `--sage-deep: #5f733c` como tom de superfície sálvia para cards e seção de passos com texto creme; o token original `--sage` permanece para preservar outros usos da identidade.
- Adicionados tokens funcionais `--text-on-sage`, `--text-sage-on-cream` e `--text-on-rose`.
- O texto das seções rosé afetadas passou a usar verde-floresta; numerais do FAQ também usam verde-floresta.
- As escolhas de cor e refis continuam com nomes e estados `aria-pressed`; a informação de seleção não depende apenas de cor.
