/**
 * functiones anonimas
 */

const nombres = ['Lorena', 'Juan Pablo', 'Felipe'];

for (let i = 0; i < nombres.length; i++){
  console.log(nombres[i]); 
}

nombres.forEach(function (nombre) {
  console.log(nombre);
});

nombres.forEach(mostrarNombre);

// funcion de declaración
function mostrarNombre(nombre) {
  console.log(nombre);
}

// función de expresión
const mostrarNombreExp = function (nombre) {
  console.log(nombre);
}

// función de flecha
const mostrarNombreArrow = (nombre) => { console.log(nombre) }
const funcionSinArgumentos = () => { console.log("Hola, esta es una función flecha sin parámetros"); }


// nombres.forEach((nombre) => console.log(nombre));

console.log(mostrarNombre.length);


const sumar3Valores = (a, b, c) => { return a + b + c };

console.log(sumar3Valores(1, 2, 3));

console.log(sumar3Valores.length);


