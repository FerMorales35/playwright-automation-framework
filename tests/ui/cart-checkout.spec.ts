import { test } from '../../fixtures/pages';
import { customer, products } from '../../fixtures/test-data';

test.describe('Carrito y checkout', () => {
  test('CART-01 · Agregar y quitar productos actualiza el contador', async ({ loggedIn }) => {
    await loggedIn.addToCart(products.backpack.name);
    await loggedIn.addToCart(products.bikeLight.name);
    await loggedIn.expectCartCount(2);

    await loggedIn.removeFromCart(products.backpack.name);
    await loggedIn.expectCartCount(1);
  });

  test('CART-02 · El carrito muestra los productos agregados', async ({ loggedIn, cartPage }) => {
    await loggedIn.addToCart(products.backpack.name);
    await loggedIn.addToCart(products.boltTShirt.name);
    await loggedIn.openCart();

    await cartPage.expectLoaded();
    await cartPage.expectProducts([products.backpack.name, products.boltTShirt.name]);
  });

  test('CHECKOUT-01 · Compra completa de punta a punta @smoke', async ({ loggedIn, cartPage, checkoutPage }) => {
    await loggedIn.addToCart(products.backpack.name);
    await loggedIn.addToCart(products.bikeLight.name);
    await loggedIn.openCart();
    await cartPage.checkout();

    await checkoutPage.fillCustomerInfo(customer);
    await checkoutPage.expectSubtotal(products.backpack.price + products.bikeLight.price);
    await checkoutPage.finish();
    await checkoutPage.expectOrderComplete();
  });

  test('CHECKOUT-02 · No permite continuar sin código postal', async ({ loggedIn, cartPage, checkoutPage }) => {
    await loggedIn.addToCart(products.backpack.name);
    await loggedIn.openCart();
    await cartPage.checkout();

    await checkoutPage.fillCustomerInfo({ firstName: customer.firstName, lastName: customer.lastName });
    await checkoutPage.expectError('Error: Postal Code is required');
  });
});
