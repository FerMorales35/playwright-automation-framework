/** Usuarios públicos de prueba que provee SauceDemo en su pantalla de login. */
export const users = {
  standard: { username: 'standard_user', password: 'secret_sauce' },
  lockedOut: { username: 'locked_out_user', password: 'secret_sauce' },
} as const;

export const products = {
  backpack: { name: 'Sauce Labs Backpack', price: 29.99 },
  bikeLight: { name: 'Sauce Labs Bike Light', price: 9.99 },
  boltTShirt: { name: 'Sauce Labs Bolt T-Shirt', price: 15.99 },
} as const;

export const customer = {
  firstName: 'Fernando',
  lastName: 'Morales',
  postalCode: '5000',
};
