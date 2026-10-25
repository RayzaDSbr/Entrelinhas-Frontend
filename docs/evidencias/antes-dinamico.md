# Estado antes — atualização dinâmica

- Página: `http://localhost:5173/`
- Procedimento: snapshot inicial; campo “Nome para a capa” preenchido com `Lua`; cor `Rosé` selecionada; botão “Adicionar ao carrinho” acionado; snapshot após a ação.

## Antes

- Nome na prévia: `Meu Planner`
- Cor selecionada: `Verde-sálvia`
- Contador da sacola: `0`

## Depois

- Nome no campo/prévia: `Lua`
- Cor selecionada: `Rosé`
- Contador da sacola: `1`
- A prévia e o contador foram atualizados visualmente no snapshot.

## Anúncio a tecnologias assistivas

`browser_evaluate` consultou `[aria-live]`, `[role="status"]`, `[role="alert"]`, `[role="log"]` e elementos `<output>`. Nenhum elemento correspondente foi encontrado (`[]`). Assim, a mudança da prévia e do contador não está em uma região live/alerta/status e parece silenciosa para leitores de tela.

