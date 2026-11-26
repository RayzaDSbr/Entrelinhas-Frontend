# ✏️ Entrelinhas | Papelaria Personalizável

**Sua rotina, do seu jeito.**  
Uma landing page para planners 2027 personalizáveis, desenvolvida com React e TypeScript.

---

**📌 Atividade: Evolução com MCP — Playwright MCP e testes E2E**

- 📄 [Relato das modificações](docs/RELATO-ATIVIDADE-02.md)
- 🗂️ [Evidências antes/depois](docs/evidencias/)
- 📊 [Comparativo](docs/evidencias/comparativo.md)
- 🧪 [Testes automatizados E2E](tests/e2e/)

## ✿ Sobre o projeto

A **Entrelinhas** é uma papelaria conceitual e fictícia que vende **planners 2027 personalizáveis**, permitindo que cada pessoa crie um planner de acordo com seu estilo e suas necessidades.

Na landing page, o usuário pode:

- Personalizar a capa do planner, escolhendo cores e adicionando seu nome.
- Selecionar os refis e conteúdos internos.
- Escolher diferentes layouts de organização.
- Visualizar as personalizações antes de finalizar.
- Adicionar planners personalizados à sacola.
- Gerenciar os itens adicionados à sacola.

## 🧪 Atividade 02 — Automação de testes E2E

Nesta etapa, o projeto evoluiu com a utilização de ferramentas MCP e a implementação de uma suíte de testes automatizados com **Playwright**.

Foram desenvolvidos testes para validar:

- Personalização do planner e seleção de layouts.
- Atualização da prévia conforme as escolhas do usuário.
- Adição e remoção de produtos da sacola.
- Abertura, fechamento e navegação da sacola.
- Comportamento responsivo em diferentes tamanhos de tela.
- Interações por teclado e acessibilidade.

### Ferramentas utilizadas

- React
- TypeScript
- Playwright
- Playwright MCP
- Node.js

### Resultados dos testes

**11 testes aprovados**, sem falhas ou testes ignorados na execução final.

Também foram executadas as verificações de qualidade:

- `npm run lint` — aprovado.
- `npm run build` — aprovado.

### Como executar os testes

Instale as dependências:

```bash
npm install
```

Execute a suíte de testes:

```bash
npm run test:e2e
```

Para abrir a interface de execução do Playwright:

```bash
npm run test:e2e:ui
```

---

## 🔗 Repositório

[Entrelinhas — GitHub](https://github.com/RayzaDSbr/Entrelinhas-Frontend)
