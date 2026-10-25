# Estado antes — contraste de texto

- Página: `http://localhost:5173/`
- Viewport: `1440 × 1000` CSS px
- Fonte dos estilos: `browser_evaluate` / `getComputedStyle`
- Metodologia: contraste WCAG calculado com as cores RGB computadas e o fundo sólido mais próximo encontrado na árvore de ancestrais. Elementos que compartilham o mesmo par de cores, tamanho e peso estão agrupados na mesma linha; os textos listados foram verificados com esse par.
- Limites aplicados: texto normal `4,5:1`; texto grande (`24px+` ou `18,66px+` em negrito) `3:1`.
- “Passou/falhou” indica se a razão atingiu o limite aplicável.

| Elemento | Cor do texto | Cor do fundo | Razão | Mínimo exigido | Passou/falhou |
|---|---|---|---:|---:|---|
| Botões 13px — Sacola, Ver detalhes | `rgb(10, 51, 35)` | `rgb(247, 244, 213)` | 12,48:1 | 4,5:1 | Passou |
| Botão “Monte seu planner” | `rgb(10, 51, 35)` | `rgb(211, 150, 140)` | 5,63:1 | 4,5:1 | Passou |
| Botão “Conheça a coleção” | `rgb(0, 0, 0)` | `rgb(247, 244, 213)` | 18,86:1 | 4,5:1 | Passou |
| Botões de cor — Verde-sálvia, Rosé, Creme | `rgb(247, 244, 213)` | `rgb(16, 86, 102)` | 7,41:1 | 4,5:1 | Passou |
| Botões de refil — Planejamento semanal, Metas e objetivos, Controle financeiro, Rastreador de hábitos, Anotações livres | `rgb(247, 244, 213)` | `rgb(16, 86, 102)` | 7,41:1 | 4,5:1 | Passou |
| Botão “Adicionar ao carrinho” | `rgb(247, 244, 213)` | `rgb(10, 51, 35)` | 12,48:1 | 4,5:1 | Passou |
| Botão “Escolher este kit” — cartões claro | `rgb(10, 51, 35)` | `rgb(247, 244, 213)` | 12,48:1 | 4,5:1 | Passou |
| Botão “Escolher este kit” — cartão rosé | `rgb(10, 51, 35)` | `rgb(211, 150, 140)` | 5,63:1 | 4,5:1 | Passou |
| Botões das perguntas do FAQ | `rgb(10, 51, 35)` | `rgb(211, 150, 140)` | 5,63:1 | 3:1 | Passou |
| Numeração 01–06 nos botões do FAQ | `rgb(16, 86, 102)` | `rgb(211, 150, 140)` | 3,34:1 | 4,5:1 | **Falhou** |
| Botão “Criar meu planner” | `rgb(10, 51, 35)` | `rgb(211, 150, 140)` | 5,63:1 | 4,5:1 | Passou |
| Links da navegação principal — Início, Coleção 2027, Personalize o seu, Acessórios, FAQ | `rgb(10, 51, 35)` | `rgb(247, 244, 213)` | 12,48:1 | 4,5:1 | Passou |
| Links do rodapé — Coleção 2027, Personalize, Kits, FAQ | `rgb(247, 244, 213)` | `rgb(10, 51, 35)` | 12,48:1 | 4,5:1 | Passou |
| h1 “Sua rotina, do seu jeito.” | `rgb(10, 51, 35)` | `rgb(247, 244, 213)` | 12,48:1 | 3:1 | Passou |
| h2 “Mais do que organizar, é sobre encontrar o seu jeito.” | `rgb(10, 51, 35)` | `rgb(211, 150, 140)` | 5,63:1 | 3:1 | Passou |
| Trecho “encontrar o seu jeito.” no h2 | `rgb(16, 86, 102)` | `rgb(211, 150, 140)` | 3,34:1 | 3:1 | Passou |
| h3 “Feito para você” | `rgb(247, 244, 213)` | `rgb(131, 153, 88)` | 2,83:1 | 3:1 | **Falhou** |
| h3 “Do seu jeito” | `rgb(131, 153, 88)` | `rgb(247, 244, 213)` | 2,83:1 | 3:1 | **Falhou** |
| h3 “Para cada novo plano” | `rgb(211, 150, 140)` | `rgb(16, 86, 102)` | 3,34:1 | 3:1 | Passou |
| h2 “Encontre o seu próximo capítulo.” | `rgb(247, 244, 213)` | `rgb(10, 51, 35)` | 12,48:1 | 3:1 | Passou |
| h3 dos quatro produtos da coleção | `rgb(10, 51, 35)` | `rgb(247, 244, 213)` | 12,48:1 | 3:1 | Passou |
| h2 “Um planner que tem a sua cara.” | `rgb(247, 244, 213)` | `rgb(211, 150, 140)` | 2,22:1 | 3:1 | **Falhou** |
| h2 “Criar o seu é simples.” | `rgb(247, 244, 213)` | `rgb(131, 153, 88)` | 2,83:1 | 3:1 | **Falhou** |
| h3 “Escolha sua capa”, “Monte suas páginas”, “Prepare-se para um novo ano” | `rgb(247, 244, 213)` | `rgb(131, 153, 88)` | 2,83:1 | 3:1 | **Falhou** |
| h2 “Seu jeito de planejar começa aqui.” | `rgb(247, 244, 213)` | `rgb(16, 86, 102)` | 7,41:1 | 3:1 | Passou |
| h3 Essencial e Completo | `rgb(10, 51, 35)` | `rgb(247, 244, 213)` | 12,48:1 | 3:1 | Passou |
| h3 Personalizado | `rgb(247, 244, 213)` | `rgb(10, 51, 35)` | 12,48:1 | 3:1 | Passou |
| h2 “Pequenos detalhes, novos começos.” | `rgb(10, 51, 35)` | `rgb(247, 244, 213)` | 12,48:1 | 3:1 | Passou |
| h2 “Ficou com alguma dúvida?” | `rgb(10, 51, 35)` | `rgb(211, 150, 140)` | 5,63:1 | 3:1 | Passou |
| h2 “Um novo ano. Mil possibilidades.” | `rgb(247, 244, 213)` | `rgb(10, 51, 35)` | 12,48:1 | 3:1 | Passou |
| Parágrafo principal da abertura | `rgb(16, 86, 102)` | `rgb(247, 244, 213)` | 7,41:1 | 4,5:1 | Passou |
| Parágrafo da seção “Nossa essência” | `rgb(10, 51, 35)` | `rgb(211, 150, 140)` | 5,63:1 | 4,5:1 | Passou |
| “Personalize a capa e escolha cada detalhe.” | `rgb(10, 51, 35)` | `rgb(131, 153, 88)` | 4,41:1 | 4,5:1 | **Falhou** |
| “Selecione as folhas de acordo com suas necessidades.”; “Criado por você, pensado para a sua rotina.” | `rgb(10, 51, 35)` | `rgb(247, 244, 213)` | 12,48:1 | 4,5:1 | Passou |
| “Organize estudos, trabalho, projetos e vida pessoal.” | `rgb(247, 244, 213)` | `rgb(16, 86, 102)` | 7,41:1 | 4,5:1 | Passou |
| Parágrafo introdutório da coleção | `rgb(247, 244, 213)` | `rgb(10, 51, 35)` | 12,48:1 | 4,5:1 | Passou |
| Descrições dos quatro produtos | `rgb(16, 86, 102)` | `rgb(247, 244, 213)` | 7,41:1 | 4,5:1 | Passou |
| “Você escolhe os detalhes. A gente imagina as possibilidades.” | `rgb(247, 244, 213)` | `rgb(211, 150, 140)` | 2,22:1 | 4,5:1 | **Falhou** |
| Instruções “02 Escolha a cor da capa” e “03 Escolha seus refis” | `rgb(247, 244, 213)` | `rgb(16, 86, 102)` | 7,41:1 | 4,5:1 | Passou |
| Descrições dos passos — Selecione a cor..., Escolha os refis..., Visualize sua combinação... | `rgb(247, 244, 213)` | `rgb(131, 153, 88)` | 2,83:1 | 4,5:1 | **Falhou** |
| Nota de preços fictícios | `rgb(247, 244, 213)` | `rgb(16, 86, 102)` | 7,41:1 | 4,5:1 | Passou |
| Introdução das impressões | `rgb(16, 86, 102)` | `rgb(247, 244, 213)` | 7,41:1 | 4,5:1 | Passou |
| Três relatos demonstrativos | `rgb(10, 51, 35)` | `rgb(247, 244, 213)` | 12,48:1 | 3:1 | Passou |
| Introdução do FAQ | `rgb(16, 86, 102)` | `rgb(211, 150, 140)` | 3,34:1 | 4,5:1 | **Falhou** |
| Resposta aberta do FAQ | `rgb(16, 86, 102)` | `rgb(211, 150, 140)` | 3,34:1 | 4,5:1 | **Falhou** |
| Parágrafo da chamada final e frase do rodapé | `rgb(247, 244, 213)` | `rgb(10, 51, 35)` | 12,48:1 | 4,5:1 | Passou |
| Texto base do rodapé | `rgb(247, 244, 213)` | `rgb(10, 51, 35)` | 12,48:1 | 4,5:1 | Passou |

