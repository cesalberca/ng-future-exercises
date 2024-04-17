import { expect, test } from '@playwright/test'

test.describe('navigation', () => {
  test('should navigate to next exercise', async ({ page }) => {
    await page.goto('/')

    await page.getByLabel('Siguiente ejercicio').click()
    const result = await page.title()

    expect(result).toBe('Files Distribution')
  })
})
