# Estado depois — anúncio dinâmico

- Página: `http://localhost:5173/`
- Ferramentas Playwright MCP: `browser_navigate`, `browser_find`, `browser_fill_form`, `browser_click`, `browser_evaluate`

Preenchidos o nome da capa com **Lua**, selecionada a cor **Rosé** e acionado “Adicionar ao carrinho”.

`browser_evaluate` encontrou o elemento `role="status"` com `aria-live="polite"` e o texto:

> Planner de Lua na cor Rosé adicionado à sacola. Itens na sacola: 1.

O nome e a cor anunciados correspondem às opções escolhidas e a mensagem confirma a ação e a quantidade. O rótulo do botão da sacola passou a **“Abrir sacola, 1 item”**.
