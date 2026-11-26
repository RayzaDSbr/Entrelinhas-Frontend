import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('apresenta os três layouts e seleciona a visão semanal inicialmente', async ({ page }) => {
  const layouts = page.getByRole('group', { name: 'Layout das páginas internas' })
  const weekly = layouts.getByRole('button', { name: /Visão semanal/ })

  await expect(layouts.getByRole('button')).toHaveCount(3)
  await expect(weekly).toHaveAttribute('aria-pressed', 'true')
  await expect(page.getByText('PRÉVIA DO MIOLO')).toBeVisible()
  await expect(page.getByText('Os sete dias lado a lado para organizar compromissos, tarefas e atividades.')).toBeVisible()
})

test('alterna os layouts, mantendo somente um selecionado e atualizando a prévia', async ({ page }) => {
  const layouts = page.getByRole('group', { name: 'Layout das páginas internas' })
  const cases = [
    { name: /Visão diária/, detail: 'Uma página para cada dia, com espaço extra para anotações e planejamento.' },
    { name: /Visão mensal/, detail: 'Calendário completo para destacar datas importantes, compromissos e eventos.' },
    { name: /Visão semanal/, detail: 'Os sete dias lado a lado para organizar compromissos, tarefas e atividades.' },
  ]

  for (const option of cases) {
    await layouts.getByRole('button', { name: option.name }).click()
    await expect(layouts.getByRole('button', { pressed: true })).toHaveCount(1)
    await expect(layouts.getByRole('button', { name: option.name })).toHaveAttribute('aria-pressed', 'true')
    await expect(page.getByText(option.detail)).toBeVisible()
  }
})

test('preserva a seleção ao navegar pela página e ao adicionar o planner', async ({ page }) => {
  const monthly = page.getByRole('group', { name: 'Layout das páginas internas' }).getByRole('button', { name: /Visão mensal/ })
  await monthly.click()

  await page.locator('#kits').scrollIntoViewIfNeeded()
  await page.locator('#personalize').scrollIntoViewIfNeeded()
  await expect(monthly).toHaveAttribute('aria-pressed', 'true')
  await expect(page.getByText('Calendário completo para destacar datas importantes, compromissos e eventos.')).toBeVisible()

  await page.getByRole('button', { name: 'Adicionar ao carrinho' }).click()
  await expect(page.getByRole('status')).toContainText('visão mensal')
  await expect(page.getByRole('button', { name: 'Abrir sacola, 1 item' })).toBeVisible()
})
