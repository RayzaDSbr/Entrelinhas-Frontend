# Documentação do processo de testes automatizados E2E

## 1. Introdução e objetivo

Este documento registra o processo de implementação e validação da personalização de páginas internas do planner Entrelinhas Papelaria e da respectiva sacola de compras. O objetivo da suíte E2E é observar os fluxos pela interface como uma pessoa usuária: escolher layouts, conferir prévias, adicionar planners personalizados, revisar/remover itens e utilizar o drawer em diferentes tamanhos de tela.

A cronologia registra separadamente a validação exploratória inicial, a criação da sacola, a suíte automatizada, o experimento controlado com falha e a correção posterior. Os resultados abaixo correspondem às execuções realizadas, não a resultados presumidos.

## 2. Tecnologias e ferramentas utilizadas

| Ferramenta | Uso |
|---|---|
| Playwright Test (`@playwright/test` 1.65.1) | Execução e organização dos testes E2E. |
| Chromium | Navegador utilizado no projeto Playwright. |
| Vite | Servidor de desenvolvimento iniciado automaticamente pela configuração Playwright na porta `4173`. |
| React | Interface da aplicação e estado da personalização/sacola. |
| ESLint | Verificação estática por meio de `npm run lint`. |

O Playwright está configurado em `playwright.config.ts`, com execução paralela, reporter em lista e HTML, screenshot/vídeo/trace retidos em falhas e servidor Vite gerenciado pelo próprio runner. A suíte lê erros de console e exceções de página **nos cenários responsivos**; essa verificação não está configurada como fixture global para todos os testes.

## 3. Estrutura dos testes automatizados

```text
playwright.config.ts
tests/
└── e2e/
    ├── planner-customization.spec.ts
    ├── shopping-bag.spec.ts
    └── responsive.spec.ts
```

Os testes usam roles, nomes acessíveis, labels e texto visível sempre que possível. Cada teste navega para a aplicação em seu próprio contexto, para não depender da ordem de execução. As verificações cobrem interações e estados resultantes, não apenas a presença inicial dos componentes.

### 3.1 Cenários de personalização

Em `tests/e2e/planner-customization.spec.ts`, três testes validam:

1. Disponibilidade dos layouts semanal, diário e mensal e seleção inicial da visão semanal.
2. Alternância dos layouts, exclusividade do item selecionado via `aria-pressed` e atualização do detalhe da prévia.
3. Persistência da visão mensal ao navegar para outra seção e retornar, além da confirmação ao adicionar o planner.

### 3.2 Cenários da sacola

Em `tests/e2e/shopping-bag.spec.ts`, cinco testes validam:

1. Abertura do drawer, fechamento pelo X, foco inicial e retorno do foco ao botão que abriu a sacola; inclui navegação por Tab/Shift+Tab.
2. Fechamento por Escape e clique no backdrop.
3. Mensagem da sacola vazia e ação “Continuar comprando”.
4. Inclusão de dois planners distintos e conferência de nome, capa, cor, refis, layout, quantidade e separação dos itens.
5. Remoção de itens, atualização do contador e retorno ao estado vazio ao remover o último planner.

O teste de dados também confirma a ausência de subtotal. Os preços disponíveis em kits/produtos são identificados no projeto como demonstrativos/fictícios, portanto não são usados como preço real da sacola.

### 3.3 Cenários responsivos

Em `tests/e2e/responsive.spec.ts`, a seleção, prévia e drawer são exercitados nos seguintes viewports:

| Dispositivo | Viewport |
|---|---:|
| Desktop | 1440 × 1000 |
| Tablet | 768 × 1024 |
| Mobile | 390 × 844 |

O teste verifica disponibilidade e interação dos cards, texto da prévia, ausência de overflow horizontal, largura/posição do drawer, acesso aos botões de fechar e continuar comprando, e erros de console/pageerror durante cada cenário.

## 4. Descrição dos cenários de teste

Os onze testes exercitam estes resultados observáveis:

- Três layouts disponíveis e semanal ativo inicialmente.
- Destaque e estado acessível atualizados a cada seleção.
- Detalhe da prévia correspondente ao layout escolhido.
- Escolha mantida após navegação pela página e refletida ao adicionar o planner.
- Drawer modal aberto pelo botão da sacola e fechado pelos controles solicitados.
- Foco direcionado ao drawer e devolvido ao botão de origem após fechar.
- Cada planner conserva seus próprios dados ao coexistirem dois itens na sacola.
- Remoção de um item sem afetar o outro e atualização do contador.
- Mensagem apropriada quando a sacola não contém itens.
- Comportamento do personalizador e drawer nos três tamanhos de tela definidos.

Não há teste de avanço/retorno entre etapas de personalização: o fluxo do produto é uma seção única, e a seção “Passo a passo” é informativa, não uma navegação por etapas.

## 5. Histórico das etapas de implementação

### Etapa 1 — Implementação da personalização do planner

Foi adicionada a seção “Escolha o layout do seu planner” com três alternativas em cards:

- **Visão semanal:** sete dias organizados juntos.
- **Visão diária:** espaço dedicado para cada dia.
- **Visão mensal:** representação do calendário do mês.

A seleção atualiza o destaque acessível/visual e a prévia do miolo. O layout integra o estado de personalização junto ao nome, à capa e aos refis selecionados.

### Etapa 2 — Validação exploratória inicial

Foi feita uma validação manual automatizada no navegador com Playwright, interagindo com os cards, a prévia, os breakpoints e o botão da sacola. Resultado: **18 verificações aprovadas e 2 reprovadas**.

As verificações de seleção, alternância, prévia, destaque, contador e responsividade passaram. As duas limitações encontradas naquele momento foram:

1. A página não tinha fluxo de etapas com ações de avançar/voltar; só foi possível comprovar a persistência ao rolar entre seções e retornar.
2. O botão da sacola atualizava o contador, mas não abria uma visualização com os detalhes do produto.

Essas limitações motivaram a implementação intermediária da sacola. A validação também registrou ausência de erros no console nessa execução exploratória.

### Etapa intermediária — Implementação da sacola

Foi criado um drawer lateral integrado ao estado central da personalização, sem estado de contador separado. A sacola passou a suportar vários planners independentes, cada qual com nome, cor da capa, refis, layout, quantidade e identificador próprio.

O drawer apresenta uma representação da capa e os dados de cada planner, permite remover itens, atualiza o contador a partir da lista e mostra um estado vazio com ação para continuar comprando. O fechamento pode ocorrer pelo botão X, Escape, clique no backdrop ou botão de continuar. A implementação também administra foco, navegação por teclado, atributos ARIA e bloqueio de rolagem do documento enquanto aberto.

Como os preços disponíveis no projeto são fictícios/demonstrativos, a sacola não apresenta preço nem subtotal.

### Etapa 3 — Criação da suíte automatizada

O projeto não tinha Playwright Test configurado. Foi adicionada a dependência de desenvolvimento `@playwright/test` e criada a configuração `playwright.config.ts`, que inicia o Vite e executa a suíte no Chromium.

Também foram criados os três arquivos organizados em `tests/e2e/`, cobrindo personalização, sacola e responsividade. Na execução final desta etapa, o resultado foi **11 testes aprovados**.

### Etapa 4 — Introdução intencional de uma falha

Para verificar se a suíte detectava problemas reais, o detalhe da prévia foi temporariamente fixado no texto semanal, mesmo ao selecionar outro layout. A alteração foi feita em `src/widgets/Customize/ui/Customize.tsx`.

O teste responsável foi:

```text
alterna os layouts, mantendo somente um selecionado e atualizando a prévia
```

Na execução individual, o teste falhou ao buscar o detalhe diário esperado:

```text
Expected: visible
Locator: getByText('Uma página para cada dia, com espaço extra para anotações e planejamento.')
Error: element(s) not found
```

Na suíte completa, o resultado foi **6 aprovados e 5 reprovados**. Falharam o teste de alternância, o teste de persistência/adição que conferia a prévia mensal e os três cenários responsivos que também esperavam o detalhe mensal. Os demais testes da sacola passaram.

O Playwright gerou screenshots, vídeos, traces e contextos de erro sob `test-results/`. Um caminho registrado para a falha de alternância foi:

```text
test-results/planner-customization-alte-b653e-nado-e-atualizando-a-prévia-chromium/test-failed-1.png
```

Os traces correspondentes foram disponibilizados nas mesmas pastas por teste. A falha foi temporária e corrigida na etapa seguinte.

### Etapa 5 — Correção e validação final

A expressão do detalhe foi restaurada para buscar a opção correspondente a `kit.layout`, permitindo que o texto acompanhe a seleção do usuário. Nenhum teste foi modificado para mascarar a falha.

Resultados após a correção:

| Verificação | Resultado |
|---|---:|
| Teste individual de alternância e prévia | 1 aprovado |
| Suíte E2E completa | 11 aprovados, 0 reprovados, 0 ignorados |
| `npm run lint` | Aprovado na execução isolada |
| `npm run build` | Aprovado |

Na primeira tentativa de lint em paralelo com E2E/build, houve erro transitório ao percorrer `test-results`, porque o Playwright estava removendo/recriando o diretório. O lint foi repetido isoladamente e passou. O build foi concluído sem erros.

## 6. Experimento com falha intencional

O experimento demonstrou que a suíte verifica a alteração da prévia após a seleção: a falha ocorreu na expectativa do detalhe diário e propagou-se corretamente para cenários dependentes do detalhe mensal nos testes responsivos e de persistência.

| Estado | Testes aprovados | Testes reprovados | Testes ignorados |
|---|---:|---:|---:|
| Falha intencional ativa, suíte completa | 6 | 5 | 0 |
| Após correção, suíte completa | 11 | 0 | 0 |

A linha deliberadamente incorreta não faz parte do estado final: foi substituída pela consulta dinâmica baseada em `kit.layout`.

## 7. Correção e validação final

O estado final da aplicação atualiza a prévia conforme o layout selecionado. A verificação individual da alternância passou, assim como os testes de sacola e os três cenários responsivos. A suíte final registrou 11/11 aprovados.

A verificação explícita de erros de console/pageerror está nos testes responsivos. Não se afirma que todos os onze testes tenham uma coleta global de erros de console.

## 8. Comandos para executar os testes

Na raiz do projeto, instale as dependências (e o browser Playwright, caso ainda não esteja instalado) e execute:

```bash
npm install
npx playwright install chromium
npm run test:e2e
```

Execução da interface gráfica do Playwright:

```bash
npm run test:e2e:ui
```

Execução de um grupo ou teste pelo nome:

```bash
npm run test:e2e -- --grep "planner"
npm run test:e2e -- --grep "alterna os layouts, mantendo somente um selecionado e atualizando a prévia"
```

Verificações estáticas e build:

```bash
npm run lint
npm run build
```

## 9. Evidências e resultados

- Configuração: `playwright.config.ts`.
- Cenários de personalização: `tests/e2e/planner-customization.spec.ts`.
- Cenários da sacola: `tests/e2e/shopping-bag.spec.ts`.
- Cenários responsivos e coleta de console: `tests/e2e/responsive.spec.ts`.
- Evidências da falha intencional: screenshots, vídeos, traces e contextos produzidos pelo Playwright em `test-results/` durante aquela execução.
- Relatório HTML: gerado em `playwright-report/` pelas execuções configuradas.

As pastas `test-results/` e `playwright-report/` são artefatos de execução, não evidências versionadas com o documento. O histórico confirma os caminhos e os tipos de artefatos gerados para as falhas; a disponibilidade de todos os binários de execuções antigas pode variar conforme limpeza local posterior. Screenshots de outras validações visuais estão em `docs/evidencias/`, mas não são identificadas como screenshots da falha intencional.

## 10. Conclusão

O processo evoluiu da personalização visual do miolo para uma sacola integrada com suporte a vários planners e, em seguida, para uma suíte de 11 testes E2E. O experimento com falha comprovou que as expectativas de interação identificam uma prévia incompatível com a seleção. Após restaurar o vínculo com `kit.layout`, todos os testes passaram, assim como lint e build.
