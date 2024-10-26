const libros = [];

// función de declaración
function agregar(titulo, autor, ano) {
  libros.push({
    titulo, autor, ano
  });

  console.info("Libro agregado");
}
// función de expresión
const eliminar = function(titulo) {
  const index = libros.findIndex((libro) => libro.titulo === titulo);
  if (index >= 0) {
    libros.splice(index, 1);
    console.info("Libro Eliminado");
  } else {
    console.error("Libro no existe");
  } 
}

// función anonima <- No se puede hacer una función anonima, que tenga nombre. ASí que, haremos una función de expresión
const buscar = function(titulo) {
  const result = libros.find((libro) => libro.titulo === titulo);

  if (result === undefined) {
    console.info("Libro no encontrado");
  }

  // console.info(result);
  return result;
  
}
//función flecha
const mostrar = () => {
  libros.map((libro) => console.log(libro));
}
