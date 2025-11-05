// EJERCICIO 11 - CONTROL DE INVENTARIO CON ENCAPSULACION

// SE CREA LA CLASE PRODUCTO
class Producto {
  #nombre;
  #precio;
  #stock;

  constructor(nombre, precio, stock) {
    this.#nombre = nombre;
    this.precio = precio; 
    this.stock = stock;  
  }

  // SET CON VALIDACION
  set precio(valor) {
    if (valor > 0) {
      this.#precio = valor;
    } else {
      console.log("El precio debe ser mayor que cero");
    }
  }

  set stock(valor) {
    if (valor >= 0) {
      this.#stock = valor;
    } else {
      console.log("El stock no puede ser negativo");
    }
  }

  // GET PARA VER DATOS
  get nombre() {
    return this.#nombre;
  }

  get precio() {
    return this.#precio;
  }

  get stock() {
    return this.#stock;
  }

  // METODO PARA VENDER PRODUCTOS
  vender(cantidad) {
    if (cantidad > 0 && cantidad <= this.#stock) {
      this.#stock -= cantidad;
      console.log(`Venta realizada: ${cantidad} unidades`);
    } else {
      console.log("No hay suficiente stock o cantidad invalida");
    }
  }
}

// PRUEBA
const p1 = new Producto("Mouse Gamer", 120, 10);
console.log("Producto:", p1.nombre);
console.log("Precio:", p1.precio);
console.log("Stock inicial:", p1.stock);
p1.vender(3);
console.log("Stock actual:", p1.stock);
