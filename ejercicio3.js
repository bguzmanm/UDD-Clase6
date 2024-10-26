const contactos = [];

// función de declaración
function agregar(nombre, telefono) {
  contactos.push({
    nombre, telefono
  });

  console.info("Contacto agregado");
}
// función de expresión
const eliminar = function(nombre) {
  const index = contactos.findIndex((contacto) => contacto.nombre === nombre);
  if (index >= 0) {
    contactos.splice(index, 1);
    console.info("Contacto Eliminado");
  } else {
    console.error("Contacto no existe");
  } 
}

// función anonima <- No se puede hacer una función anonima, que tenga nombre. ASí que, haremos una función de expresión
const buscar = function(nombre) {
  const result = contactos.find((contacto) => contacto.nombre === nombre);

  if (result === undefined) {
    console.info("Contacto no encontrado");
  }

  console.info(result);
  return result;
  
}
//función flecha
const mostrar = () => {
  contactos.map((contacto) => console.log(contacto));
}
