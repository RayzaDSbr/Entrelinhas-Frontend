# Estado depois — movimento reduzido

- Página: `http://localhost:5173/`
- Ferramentas Playwright MCP: `browser_evaluate`, `browser_emulate_media`

`browser_evaluate` percorreu as folhas de estilo acessíveis e encontrou uma regra `@media (prefers-reduced-motion: reduce)`, sem erro de acesso a stylesheet. Ela define `scroll-behavior: auto` no `html` e reduz duração/iterações de animações e transições.

Com `prefers-reduced-motion: reduce` emulado pelo Playwright:

| Verificação | Resultado |
|---|---|
| `matchMedia('(prefers-reduced-motion: reduce)').matches` | `true` |
| `getComputedStyle(document.documentElement).scrollBehavior` | `auto` |
| Duração computada de animação no `body` | `0.00001s` |
| Duração computada de transição no `body` | `0.00001s` |
