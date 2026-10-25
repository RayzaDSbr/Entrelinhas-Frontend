# Relato — Atividade 02: Acessibilidade com MCP

## Aspecto analisado

Analisei a acessibilidade da landing page com foco nos critérios aplicáveis da **WCAG 2.2 nível AA**. Registrei landmarks, hierarquia de títulos, textos alternativos, navegação por teclado, contraste, comportamento móvel, anúncios de mudanças dinâmicas e preferência por movimento reduzido.

## MCP utilizado e motivo da escolha

Utilizei o **Playwright MCP, no VS Code com Copilot Agent**. Escolhi essa ferramenta porque ela permite inspecionar a página em um navegador real e verificar diferentes aspectos do comportamento: árvore de acessibilidade, estilos computados, tamanhos de viewport, interação por teclado e screenshots.

O navegador foi especialmente útil para comparar o estado antes e depois das alterações. Por exemplo, pude conferir os atributos `aria-expanded` do menu, observar onde o foco realmente chegava, ler a mensagem da região de status e medir cores renderizadas por `getComputedStyle`.

## Como utilizei

Usei as ferramentas Playwright MCP a seguir, conforme registrado nas evidências:

- `browser_navigate`: abri `http://localhost:5173/`.
- `browser_snapshot`: inspecionei a árvore de acessibilidade, landmarks, títulos e conteúdo em cada viewport.
- `browser_resize`: testei a página em `1440px`, `899px` e `375px`.
- `browser_press_key`: percorri a interface com Tab, acionei o skip link com Enter e testei o fechamento do menu com Escape.
- `browser_evaluate`: consultei atributos e estado do DOM, foco ativo, estilos computados, contraste e a região de status.
- `browser_fill_form`: preenchi o campo do nome da capa com “Lua”.
- `browser_click`: selecionei Rosé, acionei “Adicionar ao carrinho” e interagi com o menu.
- `browser_take_screenshot`: salvei capturas das versões móvel e desktop.

## O que já estava bom

No estado inicial, identifiquei quatro landmarks: `banner`, `navigation`, `main` e `contentinfo`. A hierarquia de títulos também estava estruturada, com um `h1`, títulos `h2` e `h3`, sem níveis `h4` a `h6`.

Os elementos interativos apareciam identificados na ordem de teclado por nomes compreensíveis, como “Abrir sacola”, escolhas de cor e refil, ações dos kits e perguntas do FAQ. O campo de nome tinha identificação. A tabulação inicial alcançava 36 elementos focáveis e os controles apresentavam indicação visual de foco nas capturas focadas. O FAQ e as opções de personalização já expunham estados como `aria-expanded` e `aria-pressed`.

Esses pontos positivos não significavam que todos os fluxos estavam completos: o primeiro foco era “Início”, por exemplo, e não havia link para pular diretamente ao conteúdo principal.

## Problemas encontrados e modificações

As evidências iniciais registraram os seguintes problemas:

- Em `375px` e `899px`, o cabeçalho não apresentava navegação nem botão de menu.
- O primeiro elemento focável era “Início”; não havia skip link para o conteúdo principal.
- A prévia e o contador da sacola mudavam visualmente, mas não existia região `aria-live`, `role="status"`, alerta, log ou `<output>` para anunciar a mudança.
- O documento usava `scroll-behavior: smooth` sem regra `prefers-reduced-motion`.
- Quatro imagens de produto usavam como `alt` o mesmo título exibido no card.
- A medição inicial encontrou pares de contraste reprovados.

Com base nos testes e no histórico do Git, implementei o menu móvel acessível, o skip link, anúncios por uma região de status, suporte a movimento reduzido e alts descritivos para imagens de produtos. Também ajustei os tokens e estilos de cor. O commit `f3b1acf` registra em conjunto as alterações de contraste, navegação mobile, skip link, `aria-live`, `prefers-reduced-motion` e alts.

### Contraste: antes e depois

As razões abaixo são as registradas em `antes-contraste.md` e `depois-contraste.md`. Para texto grande, o mínimo aplicado foi `3:1`; para texto normal, `4,5:1`.

| Elemento | Antes | Depois | Avaliação |
|---|---:|---:|---|
| h3 “Feito para você” — creme sobre sálvia | 2,83:1 | 4,71:1 | Passou; texto grande exige 3:1 |
| h3 “Do seu jeito” — sálvia sobre creme | 2,83:1 | 4,71:1 | Passou; texto grande exige 3:1 |
| h2 “Um planner que tem a sua cara.” — creme sobre rosé | 2,22:1 | 5,63:1 | Passou; texto grande exige 3:1 |
| h2 “Criar o seu é simples.” — creme sobre sálvia | 2,83:1 | 4,71:1 | Passou; texto grande exige 3:1 |
| h3 dos três passos — creme sobre sálvia | 2,83:1 | 4,71:1 | Passou; texto grande exige 3:1 |
| “Personalize a capa e escolha cada detalhe.” — texto normal | 4,41:1 | 4,71:1 | Passou; mínimo 4,5:1 |
| “Você escolhe os detalhes. A gente imagina as possibilidades.” — texto normal | 2,22:1 | 5,63:1 | Passou; mínimo 4,5:1 |
| Descrições dos três passos — texto normal | 2,83:1 | 4,71:1 | Passou; mínimo 4,5:1 |
| Introdução e resposta aberta do FAQ — texto normal | 3,34:1 | 5,63:1 | Passou; mínimo 4,5:1 |
| Numeração das perguntas do FAQ — texto normal | 3,34:1 | 5,63:1 | Passou; mínimo 4,5:1 |

Na medição posterior, calculei novamente os pares de texto visíveis na página. A evidência registra 84 textos medidos e nenhuma reprovação. Os pares repetidos e os resultados detalhados estão em [`evidencias/depois-contraste.md`](./evidencias/depois-contraste.md).

## Contribuição do MCP: avaliação crítica e limitações

O MCP ajudou a transformar impressões em verificações reproduzíveis: pude comparar snapshots, observar estados ARIA, acompanhar foco, medir valores computados e guardar capturas de tamanhos diferentes. Também foi útil para conferir uma mensagem dinâmica concreta, com o nome e a cor escolhidos, em vez de apenas verificar a existência do componente no código.

Ainda assim, considerei os resultados com cautela:

- A medição de contraste documentada considera o fundo sólido mais próximo. Ela não avalia corretamente todos os casos de transparência, imagens, gradientes ou fundos visuais complexos.
- O snapshot mostra a representação acessível da página, mas não me diz exatamente o que um leitor de tela real fala nem substitui testes com leitores de tela e tecnologias assistivas.
- O MCP não determina se um texto alternativo descreve bem uma imagem. A árvore mostra o conteúdo do atributo `alt`, mas a adequação semântica depende de avaliar a imagem e o contexto.


## Evidências

Os links a seguir são relativos a este relato e apontam para os arquivos registrados em `docs/evidencias/`.

### Estado antes

- [antes-snapshot.md](./evidencias/antes-snapshot.md)
- [antes-contraste.md](./evidencias/antes-contraste.md)
- [antes-teclado.md](./evidencias/antes-teclado.md)
- [antes-mobile.md](./evidencias/antes-mobile.md)
- [antes-dinamico.md](./evidencias/antes-dinamico.md)
- [antes-movimento.md](./evidencias/antes-movimento.md)
- [antes-375.png](./evidencias/antes-375.png)
- [antes-899.png](./evidencias/antes-899.png)

### Estado depois e comparação

- [depois-snapshot.md](./evidencias/depois-snapshot.md)
- [depois-contraste.md](./evidencias/depois-contraste.md)
- [depois-teclado.md](./evidencias/depois-teclado.md)
- [depois-mobile.md](./evidencias/depois-mobile.md)
- [depois-dinamico.md](./evidencias/depois-dinamico.md)
- [depois-movimento.md](./evidencias/depois-movimento.md)
- [comparativo.md](./evidencias/comparativo.md)
- [depois-1440.png](./evidencias/depois-1440.png)
- [depois-375-fechado.png](./evidencias/depois-375-fechado.png)
- [depois-375-aberto.png](./evidencias/depois-375-aberto.png)
- [depois-899.png](./evidencias/depois-899.png)
