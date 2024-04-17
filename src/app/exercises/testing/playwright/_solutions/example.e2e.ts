import { expect, test } from '@playwright/test'

test.describe('navigation', () => {
  test('habit should be created', async ({ page }) => {
    await page.goto('/')

    await page.getByLabel('Siguiente ejercicio').click()
    const result = await page.title()

    expect(result).toBe('Files Distribution')
  })
})
