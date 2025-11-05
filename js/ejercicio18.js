// EJERCICIO 18 - COMPOSICION DE CARRITO Y PRODUCTOS

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

class Carrito {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  calcularTotal() {
    return this.productos.reduce((total, p) => total + p.precio, 0);
  }

  mostrarResumen() {
    console.log("RESUMEN DEL CARRITO:");
    this.productos.forEach((p, i) => {
      console.log(`${i + 1}. ${p.nombre} - $${p.precio}`);
    });
    console.log("TOTAL: $" + this.calcularTotal());
  }
}

// PRUEBAS
const carrito = new Carrito();
carrito.agregarProducto(new Producto("Taza", 15));
carrito.agregarProducto(new Producto("Mouse", 40));
carrito.agregarProducto(new Producto("Cuaderno", 10));

carrito.mostrarResumen();
