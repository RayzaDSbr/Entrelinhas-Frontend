# Estado antes — movimento e foco inicial

- Página: `http://localhost:5173/`
- Ferramenta: Playwright MCP `browser_evaluate`

| Verificação | Resultado |
|---|---|
| `getComputedStyle(document.documentElement).scrollBehavior` | `smooth` |
| Regra `prefers-reduced-motion` encontrada nas folhas de estilo | Não |
| Primeiro elemento focável (verificação complementar) | Link “Início”, `href="#inicio"` |

