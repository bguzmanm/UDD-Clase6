/**
 * funciones como argumento
 */

function aplicarOperacion(a, b, operacion) {
  return operacion(a, b);
}

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

const resultSuma = aplicarOperacion(10, 20, suma);
console.log(resultSuma);

const resultResta = aplicarOperacion(40, 20, resta);
console.log(resultResta);