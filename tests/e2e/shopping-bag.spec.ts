import { expect, test } from '@playwright/test'

async function addPlanner(
  page: import('@playwright/test').Page,
  options: { name: string; cover: 'Verde-sálvia' | 'Rosé' | 'Creme'; layout: 'Visão semanal' | 'Visão diária' | 'Visão mensal'; removeRefill?: string; addRefill?: string },
) {
  await page.getByLabel('Nome para a capa').fill(options.name)
  await page.getByRole('button', { name: options.cover }).click()
  if (options.removeRefill) await page.getByRole('button', { name: new RegExp(options.removeRefill) }).click()
  if (options.addRefill) await page.getByRole('button', { name: new RegExp(options.addRefill) }).click()
  await page.getByRole('group', { name: 'Layout das páginas internas' }).getByRole('button', { name: new RegExp(options.layout) }).click()
  await page.getByRole('button', { name: /Adicionar ao carrinho|Adicionado à sacola/ }).click()
}

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('abre o drawer, fecha pelo X e devolve foco ao botão da sacola', async ({ page }) => {
  const bagButton = page.getByRole('button', { name: 'Abrir sacola, 0 itens' })
  await bagButton.click()

  const drawer = page.getByRole('dialog', { name: 'Sua sacola' })
  await expect(drawer).toBeVisible()
  await expect(drawer).toBeFocused()
  await page.keyboard.press('Tab')
  await expect(page.getByRole('button', { name: 'Fechar sacola' })).toBeFocused()
  await page.keyboard.press('Shift+Tab')
  await expect(page.getByRole('button', { name: 'Continuar comprando' })).toBeFocused()
  await page.getByRole('button', { name: 'Fechar sacola' }).click()
  await expect(drawer).toBeHidden()
  await expect(bagButton).toBeFocused()
})

test('fecha o drawer com Escape e com clique no backdrop', async ({ page }) => {
  const bagButton = page.getByRole('button', { name: 'Abrir sacola, 0 itens' })
  await bagButton.click()
  const drawer = page.getByRole('dialog', { name: 'Sua sacola' })

  await page.keyboard.press('Escape')
  await expect(drawer).toBeHidden()
  await expect(bagButton).toBeFocused()

  await bagButton.click()
  await page.locator('#shopping-bag-drawer').press('Escape')
  await expect(drawer).toBeHidden()

  await bagButton.click()
  await page.locator('#shopping-bag-drawer').locator('xpath=..').click({ position: { x: 8, y: 400 }, force: true })
  await expect(drawer).toBeHidden()
})

test('mostra uma mensagem e ação de continuar comprando quando vazia', async ({ page }) => {
  await page.getByRole('button', { name: 'Abrir sacola, 0 itens' }).click()
  await expect(page.getByText('Sua sacola está esperando por você.')).toBeVisible()
  await page.getByRole('button', { name: 'Continuar comprando' }).click()
  await expect(page.getByRole('dialog', { name: 'Sua sacola' })).toBeHidden()
})

test('exibe os dados escolhidos e mantém planners diferentes em linhas separadas', async ({ page }) => {
  await addPlanner(page, {
    name: 'Planner Rosé',
    cover: 'Rosé',
    layout: 'Visão diária',
    removeRefill: 'Anotações livres',
    addRefill: 'Metas e objetivos',
  })

  await page.getByLabel('Nome para a capa').fill('Planner Sálvia')
  await page.getByRole('button', { name: 'Verde-sálvia' }).click()
  await page.getByRole('button', { name: /Rastreador de hábitos/ }).click()
  await page.getByRole('group', { name: 'Layout das páginas internas' }).getByRole('button', { name: /Visão mensal/ }).click()
  await page.getByRole('button', { name: /Adicionar ao carrinho|Adicionado à sacola/ }).click()

  await page.getByRole('button', { name: 'Abrir sacola, 2 itens' }).click()
  const drawer = page.getByRole('dialog', { name: 'Sua sacola' })
  const firstItem = drawer.getByRole('article').filter({ has: page.getByRole('heading', { name: 'Planner Rosé' }) })
  const secondItem = drawer.getByRole('article').filter({ has: page.getByRole('heading', { name: 'Planner Sálvia' }) })

  await expect(drawer.getByRole('article')).toHaveCount(2)
  await expect(firstItem).toContainText('Rosé')
  await expect(firstItem).toContainText('Visão diária')
  await expect(firstItem).toContainText('Metas e objetivos')
  await expect(firstItem).not.toContainText('Anotações livres')
  await expect(firstItem.getByText('Quantidade').locator('..')).toContainText('1')
  await expect(firstItem.getByRole('img', { name: /capa Rosé/ })).toBeVisible()
  await expect(secondItem).toContainText('Verde-sálvia')
  await expect(secondItem).toContainText('Visão mensal')
  await expect(secondItem).toContainText('Rastreador de hábitos')
  await expect(secondItem.getByRole('img', { name: /capa Verde-sálvia/ })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Abrir sacola, 2 itens' })).toBeVisible()
  await expect(drawer.getByText(/subtotal/i)).toHaveCount(0)
})

test('remove um item, atualiza o contador e exibe estado vazio após remover o último', async ({ page }) => {
  await addPlanner(page, { name: 'Planner A', cover: 'Creme', layout: 'Visão semanal' })
  await page.getByLabel('Nome para a capa').fill('Planner B')
  await page.getByRole('button', { name: 'Rosé' }).click()
  await page.getByRole('group', { name: 'Layout das páginas internas' }).getByRole('button', { name: /Visão diária/ }).click()
  await page.getByRole('button', { name: /Adicionar ao carrinho|Adicionado à sacola/ }).click()

  await page.getByRole('button', { name: 'Abrir sacola, 2 itens' }).click()
  await page.getByRole('button', { name: 'Remover Planner A da sacola' }).click()
  await expect(page.getByRole('button', { name: 'Abrir sacola, 1 item' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Planner B' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Planner A' })).toHaveCount(0)

  await page.getByRole('button', { name: 'Remover Planner B da sacola' }).click()
  await expect(page.getByRole('button', { name: 'Abrir sacola, 0 itens' })).toBeVisible()
  await expect(page.getByText('Sua sacola está esperando por você.')).toBeVisible()
})
