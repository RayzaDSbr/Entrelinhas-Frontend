# Estado depois — navegação por teclado

- Página: `http://localhost:5173/`
- Viewport: `1440 × 1000` CSS px
- Ferramentas Playwright MCP: `browser_navigate`, `browser_press_key` (Tab e Enter), `browser_evaluate`
- O foco foi registrado por eventos `focusin`, com Tab pressionado até completar os 37 pontos de foco.

## Primeiro foco e skip link

O primeiro Tab focou o link **“Pular para o conteúdo”** (`href="#main-content"`). Pressionar Enter atualizou o fragmento para `#main-content` e moveu o foco para `main#main-content` (`tabIndex="-1"`).

## Ordem do foco

1. Link “Pular para o conteúdo”
2. Link “Início” (navegação principal)
3. Link “Coleção 2027” (navegação principal)
4. Link “Personalize o seu”
5. Link “Acessórios”
6. Link “FAQ” (navegação principal)
7. Botão “Abrir sacola, 0 itens”
8. Botão “Monte seu planner”
9. Botão “Conheça a coleção”
10. Botão “Ver detalhes” (Planner 2027 Personalizado)
11. Botão “Ver detalhes” (Refis Personalizados)
12. Botão “Ver detalhes” (Kit de Acessórios)
13. Botão “Ver detalhes” (Kit Completo 2027)
14. Campo de texto “01 Nome para a capa”
15. Botão de cor “Verde-sálvia”
16. Botão de cor “Rosé”
17. Botão de cor “Creme”
18. Botão de refil “Planejamento semanal”
19. Botão de refil “Metas e objetivos”
20. Botão de refil “Controle financeiro”
21. Botão de refil “Rastreador de hábitos”
22. Botão de refil “Anotações livres”
23. Botão “Adicionar ao carrinho”
24. Botão “Escolher este kit” (Essencial)
25. Botão “Escolher este kit” (Personalizado)
26. Botão “Escolher este kit” (Completo)
27. Botão FAQ “Como funciona a personalização do planner?”
28. Botão FAQ “Posso escolher diferentes tipos de refis?”
29. Botão FAQ “Posso comprar apenas folhas avulsas?”
30. Botão FAQ “Quais opções de capas estão disponíveis?”
31. Botão FAQ “Como funciona o pedido?”
32. Botão FAQ “Posso alterar minha personalização antes de finalizar?”
33. Botão “Criar meu planner”
34. Link “Coleção 2027” (rodapé)
35. Link “Personalize” (rodapé)
36. Link “Kits” (rodapé)
37. Link “FAQ” (rodapé)

Todos os elementos focáveis enumerados foram alcançados na ordem, sem saltos observados. O total aumentou de 36 para 37 por causa do novo skip link.
