# Estado depois — navegação móvel

Ferramentas Playwright MCP: `browser_resize`, `browser_snapshot`, `browser_find`, `browser_click`, `browser_press_key`, `browser_evaluate`, `browser_take_screenshot`.

| Viewport | Snapshot fechado | Snapshot aberto / links | Clique em “Personalize” | Escape e foco |
|---|---|---|---|---|
| `375 × 812` | Navegação principal com botão “Abrir menu”. | Após clique, snapshot mostra “Fechar menu” expandido; avaliação confirmou `aria-expanded="true"`, lista visível (`display: grid`) e links Coleção 2027, Personalize, Kits e FAQ. | O clique alterou a URL para `#personalize`, rolou até a seção (topo medido em aproximadamente `0px`) e fechou o menu (`aria-expanded="false"`, lista `display: none`). | Reaberto o menu; Escape fechou (`aria-expanded="false"`) e devolveu foco ao botão “Abrir menu”. |
| `899 × 900` | Snapshot mostra navegação móvel e botão do menu. | Após clique, botão “Fechar menu” aparece expandido; avaliação confirmou `aria-expanded="true"`, lista visível e os quatro links citados. | O clique alterou a URL para `#personalize`, rolou até a seção (topo medido em aproximadamente `0px`) e fechou o menu (`aria-expanded="false"`, lista `display: none`). | Reaberto o menu; Escape fechou e devolveu foco ao botão “Abrir menu”. |

## Capturas

- 375px, menu fechado: [depois-375-fechado.png](./depois-375-fechado.png)
- 375px, menu aberto: [depois-375-aberto.png](./depois-375-aberto.png)
- 899px, menu aberto: [depois-899.png](./depois-899.png)

