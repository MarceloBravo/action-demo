/**
 * Importa la función sum desde el archivo sum.js.
 */
const sum = require('./sum');

/**
 * Prueba unitaria para verificar la suma de dos números positivos.
 */
test('Suma dos números', () => {
 expect(sum(1, 2)).toBe(3);
});

/**
 * Prueba unitaria para verificar la suma de dos números negativos.
 */
test('Suma de números negativos', () => {
 expect(sum(-1, -2)).toBe(-3);
});

/**
 * Prueba unitaria para verificar la suma de números fraccionarios.
 */
test('Suma de números fraccionarios', () => {
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
});