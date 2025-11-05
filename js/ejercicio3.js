// EJERCICIO 3 - REDONDEO DE PRECIOS

// SE PIDE UN NUMERO DECIMAL QUE REPRESENTE EL PRECIO DE UN PRODUCTO
let precio = parseFloat(prompt("Ingrese el precio del producto:"));

// SE VERIFICA SI ES UN NUMERO VALIDO
if (isNaN(precio)) {
  console.log("Debe ingresar un numero valido");
} else {
  // MUESTRAN LOS DIFERENTES REDONDEOS
  console.log("Precio ingresado:", precio);
  console.log("Redondeo hacia abajo:", Math.floor(precio));
  console.log("Redondeo hacia arriba:", Math.ceil(precio));
  console.log("Redondeo normal:", Math.round(precio));
}
