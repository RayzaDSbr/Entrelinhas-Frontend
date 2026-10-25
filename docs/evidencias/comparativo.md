# Comparativo de acessibilidade — antes e depois

Testes realizados em `http://localhost:5173/` com Playwright MCP. As capturas móveis estão em [depois-mobile.md](./depois-mobile.md).

| Problema | Antes | Depois | Ferramentas do MCP usadas | Status |
|---|---|---|---|---|
| Snapshot, landmarks e títulos | 4 landmarks reconhecidos; hierarquia h1–h3 sem h4–h6. | Mesmos landmarks e hierarquia; navegação agora se chama “Principal” e existe skip link antes do conteúdo. | `browser_snapshot`, `browser_evaluate` | resolvido |
| Alts das imagens | Quatro imagens de produto repetiam o título do card; o hero já tinha descrição. | Os quatro produtos têm descrições específicas; hero inalterado; três imagens de depoimento têm `alt=""` e foram identificadas como decorativas. As três imagens não estavam discriminadas no relatório snapshot anterior. Os cards de Kits não têm imagens, então não foi possível verificar `imageAlt` renderizado neles. | `browser_evaluate`, `browser_snapshot` | parcial |
| Primeiro foco e destino do skip link | Primeiro foco era o link “Início”; 36 pontos de foco. | Primeiro foco é “Pular para o conteúdo”; Enter leva o foco a `main#main-content`; 37 pontos de foco observados, sem saltos. | `browser_press_key`, `browser_evaluate`, `browser_navigate` | resolvido |
| Menu em 375px e 899px | Não havia botão de menu ou navegação móvel utilizável. | Em ambos os tamanhos, menu abre com `aria-expanded="true"` e mostra Coleção, Personalize, Kits e FAQ; fechar por link rola até a seção e esconde a lista; Escape fecha e restaura o foco ao botão. Capturas foram salvas. | `browser_resize`, `browser_snapshot`, `browser_find`, `browser_click`, `browser_press_key`, `browser_evaluate`, `browser_take_screenshot` | resolvido |
| Anúncio ao adicionar à sacola | Mudanças na prévia e no contador não eram anunciadas. | A região `role="status"`/`aria-live="polite"` anuncia “Planner de Lua na cor Rosé adicionado à sacola. Itens na sacola: 1.”; o botão informa “Abrir sacola, 1 item”. | `browser_fill_form`, `browser_click`, `browser_evaluate`, `browser_find` | resolvido |
| Movimento reduzido | Havia rolagem suave e não havia confirmação de preferência reduzida. | Regra `prefers-reduced-motion` encontrada; emulação retorna `scroll-behavior: auto` e duração de animação/transição reduzida a `0.00001s`. | `browser_evaluate`, `browser_emulate_media` | resolvido |
| Contraste de texto | `antes-contraste.md` registra pares reprovados em conteúdo sálvia, seções rosé e texto do FAQ. | Reavaliação computou contraste de 84 textos (`h1–h6`, parágrafos, botões e links), com zero reprovações; os valores agrupados medidos estão documentados em `depois-contraste.md`. | `browser_evaluate` | resolvido |

## Observação sobre o escopo das imagens de Kits

Os cards do widget Kits não exibem imagens. Portanto, `imageAlt` nos dados/tipo de Kit não foi associado a um `<img>` nem testado como texto alternativo renderizado. As imagens visíveis dos cards de produto na Coleção foram verificadas no DOM e usam seus textos descritivos.
