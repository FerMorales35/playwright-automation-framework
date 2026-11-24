# Playwright E2E – SauceDemo

[![Playwright Tests](https://github.com/FerMorales35/playwright-automation-framework/actions/workflows/playwright.yml/badge.svg)](https://github.com/FerMorales35/playwright-automation-framework/actions/workflows/playwright.yml)
[![Reporte](https://img.shields.io/badge/reporte-HTML-2EAD33?logo=playwright)](https://fermorales35.github.io/playwright-automation-framework/)

Framework de automatización **E2E (UI + API)** con **Playwright + TypeScript**.

📊 **[Ver el último reporte de ejecución](https://fermorales35.github.io/playwright-automation-framework/)**

## ✨ Qué muestra este proyecto

- **Page Object Model** con locators por `data-test`
- **Fixtures personalizados** de Playwright (páginas inyectadas y sesión ya logueada)
- **Tests data-driven** para casos negativos de login
- **Testing de API** con el cliente `request` de Playwright (status, headers, contrato, CRUD, 404)
- **Cross-browser:** Chromium y Firefox
- **CI/CD con GitHub Actions:** type check, ejecución en cada push y PR, regresión semanal programada y reporte HTML publicado en GitHub Pages
- **Evidencia ante fallos:** screenshot, video y trace

## 🧪 Cobertura

| Suite | Casos |
|---|---|
| Login | Login exitoso · usuario bloqueado · contraseña incorrecta · usuario vacío · contraseña vacía |
| Carrito y checkout | Contador del carrito · productos en el carrito · compra completa con validación de subtotal · validación de campos obligatorios |
| Ordenamiento | Precio ascendente y descendente · nombre Z→A |
| API (JSONPlaceholder) | GET listado · contrato de un recurso · filtro por query param · POST · 404 |

Los tests marcados con `@smoke` forman la suite rápida.

## 🧱 Estructura

```
├── pages/               # Page Objects (Login, Inventory, Cart, Checkout)
├── fixtures/
│   ├── pages.ts         # Fixtures personalizados de Playwright
│   └── test-data.ts     # Usuarios, productos y datos de cliente
├── tests/
│   ├── ui/              # Tests de interfaz
│   └── api/             # Tests de API
├── playwright.config.ts
└── .github/workflows/   # Pipeline de CI
```

## 🚀 Cómo ejecutarlo

Requisitos: Node.js 18 o superior.

```bash
git clone https://github.com/FerMorales35/playwright-automation-framework.git
cd playwright-automation-framework
npm install
npx playwright install
```

```bash
npm test                          # Toda la suite
npm run test:ui                   # Solo UI (Chromium + Firefox)
npm run test:api                  # Solo API
npx playwright test --grep @smoke # Suite smoke
npm run test:headed               # Viendo el navegador
npm run report                    # Abrir el último reporte HTML
```

## 🔗 Proyecto relacionado

Los mismos flujos automatizados con Cypress: [Challenge_QA_Cypress](https://github.com/FerMorales35/Challenge_QA_Cypress)

---

👤 **Fernando Sebastián Morales** – QA Automation Engineer · [LinkedIn](https://www.linkedin.com/in/fernando-sebasti%C3%A1n-morales-6ba86292/)
