import { test } from '../../fixtures/pages';
import { users } from '../../fixtures/test-data';

test.describe('Login', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('LOGIN-01 · Login exitoso con usuario estándar @smoke', async ({ loginPage, inventoryPage }) => {
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.expectLoaded();
  });

  test('LOGIN-02 · Usuario bloqueado no puede ingresar', async ({ loginPage }) => {
    await loginPage.login(users.lockedOut.username, users.lockedOut.password);
    await loginPage.expectError('Epic sadface: Sorry, this user has been locked out.');
  });

  // Casos negativos parametrizados (data-driven)
  const invalidCases = [
    {
      id: 'LOGIN-03',
      title: 'contraseña incorrecta',
      username: users.standard.username,
      password: 'wrong_password',
      error: 'Epic sadface: Username and password do not match any user in this service',
    },
    {
      id: 'LOGIN-04',
      title: 'usuario vacío',
      username: '',
      password: users.standard.password,
      error: 'Epic sadface: Username is required',
    },
    {
      id: 'LOGIN-05',
      title: 'contraseña vacía',
      username: users.standard.username,
      password: '',
      error: 'Epic sadface: Password is required',
    },
  ];

  for (const c of invalidCases) {
    test(`${c.id} · Login fallido: ${c.title}`, async ({ loginPage }) => {
      await loginPage.login(c.username, c.password);
      await loginPage.expectError(c.error);
    });
  }
});
