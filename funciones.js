/* 
Funcion total <- sumar(a, b)
	Definir total Como Entero;
	total <- a + b;
FinFuncion
*/

// function sumar(a, b) {
//   let total;
//   total = a + b;
//   return total;
// }


// funciones de declaración
function sumar(a, b) {
  return a + b;
}

let num1 = 10;
let num2 = 20;

let resutado = sumar(num1, num2);

console.log(resutado);

function saludar(nombre) {
  console.log("hola " + nombre);
}

saludar("Brian");

// funciones de expresión
const resta = function (a, b) {
  return a - b;
}

let resultadoResta = resta(20, 10);
console.log(resultadoResta);

function holanda(a) {
  a;
}



holanda(sumar(4, 4));
holanda(resta(50, 10));


const peliculas = [
  { titulo: 'La La Land', genero: 'Musical', duracion: 128 },
  { titulo: 'Pulp Fiction', genero: 'Crimen', duracion: 154 },
  { titulo: 'The Godfather', genero: 'Crimen', duracion: 175 },
  { titulo: 'Whiplash', genero: 'Drama', duracion: 106 },
  { titulo: 'Inception', genero: 'Ciencia Ficción', duracion: 148 },
];

function mostrarPeliculas(lista) {
  for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    // console.table(element);    
  }
}

mostrarPeliculas(peliculas);

function cualDuraMas(lista) {
  let laMasLarga = lista[0];
  for (let i = 1; i < lista.length; i++){
    if (lista[i].duracion > laMasLarga.duracion) {
      laMasLarga = lista[i];
    }
  }

  return laMasLarga;
}


const cualDuraMas2 = function (lista) {
  return lista.reduce(
    function (laMasLarga, pelicula) {
      // if (pelicula.duracion > laMasLarga.duracion) {
      //   return pelicula;
      // } 
      // return laMasLarga;

      return pelicula.duracion > laMasLarga.duracion ? pelicula : laMasLarga; // operador ternario, reemplaza el if

    });
}


const cualDuraMas3 = (lista) => {
  return lista.reduce((laMasLarga, pelicula) => pelicula.duracion > laMasLarga.duracion ? pelicula : laMasLarga)
}



const cualDuraMas4 = (lista) => {
  
}


const resultadoMasLarga = cualDuraMas(peliculas);

console.table(resultadoMasLarga);
console.log(cualDuraMas2(peliculas));



function filtrarPeliculaPorGenero(lista, genero) {
  return lista.filter(
    function (pelicula) {
      return pelicula.genero === genero;
    }
  );
}

function filtrarPeliculasPorGenero2(lista, genero) {
  return lista.filter((p) => p.genero === genero);
}

let peliculasCrimen = filtrarPeliculaPorGenero(peliculas, "Crimen");
console.table(peliculasCrimen);

let peliculasCrimen2 = filtrarPeliculasPorGenero2(peliculas, "Drama");
console.table(peliculasCrimen2);