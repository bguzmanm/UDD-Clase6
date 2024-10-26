/**
 * Instrucciones
Crea una función "manejoTienda" que reciba un array de objetos, 
donde cada objeto representa un producto en inventario 
(con propiedades como nombre, precio y cantidad en inventario). 

La función debe retornar un nuevo objeto que represente la tienda, 
con métodos para agregar nuevos productos, 
eliminar productos y calcular el valor total del inventario.
 */

const productos = [
  { nombre: "iphone", precio: 1000, stock: 10 },
  { nombre: "macbook", precio: 2000, stock: 8 },
  { nombre: "macbook pro", precio: 2500, stock: 12 }
]


function manejoTienda(productos) {
  const tienda = {
    productos: productos,
    agregar: function (producto) {
      this.productos.push(producto);
    },
    eliminar: function (nombre) {
      let productoFiltrado = productos.filter((producto) => producto.nombre !== nombre);
      this.productos = productoFiltrado;
    },
    // stockTotal: function () {
    //   return this.productos.reduce((total, producto) => total + producto.stock, 0);
    // }
    // stockTotal: () => {
    //   let totalStock = 0;
    //   productos.map((producto) => totalStock += producto.stock);
    //   return totalStock;
    // }
    stockTotal: () => {
      let totalStock = 0;
      productos.forEach(element => {
        totalStock += element.stock;
      });
      return totalStock;
    }
  }
  return tienda;
}


const tienda = manejoTienda(productos);

// tienda.agregar({
//   nombre: "ipad",
//   precio: 890,
//   stock: 20,
// });

// tienda.eliminar("iphone");

console.log(tienda.productos);
console.log(tienda.stockTotal());
