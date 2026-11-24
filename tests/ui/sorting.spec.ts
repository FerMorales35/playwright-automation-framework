import { test, expect } from '../../fixtures/pages';

test.describe('Ordenamiento de productos', () => {
  test('SORT-01 · Precio de menor a mayor', async ({ loggedIn }) => {
    await loggedIn.sortBy('lohi');
    const prices = await loggedIn.getPrices();
    expect(prices).toEqual([...prices].sort((a, b) => a - b));
  });

  test('SORT-02 · Precio de mayor a menor', async ({ loggedIn }) => {
    await loggedIn.sortBy('hilo');
    const prices = await loggedIn.getPrices();
    expect(prices).toEqual([...prices].sort((a, b) => b - a));
  });

  test('SORT-03 · Nombre de Z a A', async ({ loggedIn }) => {
    await loggedIn.sortBy('za');
    const names = await loggedIn.getNames();
    expect(names).toEqual([...names].sort().reverse());
  });
});
