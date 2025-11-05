// EJERCICIO 12 - MODIFICACION DEL PRODUCTO CON FORMATO DE MONEDA

class Producto {
  #nombre;
  #precio;
  #stock;

  constructor(nombre, precio, stock) {
    this.#nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

  // GET PARA DEVOLVER EL PRECIO CON FORMATO DE MONEDA
  get precio() {
    return `$${this.#precio.toFixed(2)}`;
  }

  // SETTER PARA ACEPTAR NUMEROS O CADENAS
  set precio(valor) {
    let nuevoValor = Number(valor);
    if (!isNaN(nuevoValor) && nuevoValor > 0) {
      this.#precio = nuevoValor;
    } else {
      console.log("El precio ingresado no es valido");
    }
  }

  // SET Y GET PARA STOCK
  set stock(valor) {
    if (valor >= 0) {
      this.#stock = valor;
    } else {
      console.log("El stock no puede ser negativo");
    }
  }

  get stock() {
    return this.#stock;
  }
}

// PRUEBA 
const producto1 = new Producto("Teclado Mecanico", "120.5", 5);
console.log("Precio con formato:", producto1.precio);
producto1.precio = 200;
console.log("Nuevo precio con formato:", producto1.precio);
