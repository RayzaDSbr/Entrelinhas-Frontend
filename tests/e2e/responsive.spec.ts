import { expect, test } from '@playwright/test'

const viewports = [
  { name: 'desktop 1440×1000', width: 1440, height: 1000 },
  { name: 'tablet 768×1024', width: 768, height: 1024 },
  { name: 'mobile 390×844', width: 390, height: 844 },
]

for (const viewport of viewports) {
  test(`personalização e sacola responsivas em ${viewport.name}`, async ({ page }) => {
    const browserErrors: string[] = []
    page.on('pageerror', (error) => browserErrors.push(error.message))
    page.on('console', (message) => {
      if (message.type() === 'error') browserErrors.push(message.text())
    })

    await page.setViewportSize({ width: viewport.width, height: viewport.height })
    await page.goto('/')

    const layoutGroup = page.getByRole('group', { name: 'Layout das páginas internas' })
    await expect(layoutGroup.getByRole('button')).toHaveCount(3)
    await layoutGroup.getByRole('button', { name: /Visão mensal/ }).click()
    await expect(page.getByText('Calendário completo para destacar datas importantes, compromissos e eventos.')).toBeVisible()
    await expect(page.locator('#personalize')).toBeVisible()
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(viewport.width)

    await page.getByRole('button', { name: /Adicionar ao carrinho/ }).click()
    await page.getByRole('button', { name: 'Abrir sacola, 1 item' }).click()
    const drawer = page.getByRole('dialog', { name: 'Sua sacola' })
    await expect(drawer).toBeVisible()
    await expect(drawer.getByRole('button', { name: 'Fechar sacola' })).toBeVisible()
    await expect(drawer.getByRole('button', { name: 'Continuar comprando' })).toBeVisible()

    const drawerBox = await drawer.boundingBox()
    expect(drawerBox).not.toBeNull()
    expect(drawerBox!.width).toBeLessThanOrEqual(viewport.width)
    expect(drawerBox!.x + drawerBox!.width).toBeLessThanOrEqual(viewport.width + 2)

    await page.getByRole('button', { name: 'Fechar sacola' }).click()
    await expect(drawer).toBeHidden()
    expect(browserErrors).toEqual([])
  })
}
