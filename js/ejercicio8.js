// EJERCICIO 8 - GENERAR CONTRASENAS NUMERICAS

// ESTA FUNCION CREA UNA CONTRASENA DE 6 DIGITOS ALEATORIOS
function generarContrasena() {
  let contrasena = "";

  // SE USA UN BUCLE
  for (let i = 0; i < 6; i++) {
    let digito = Math.floor(Math.random() * 10);
    contrasena += digito;
  }

  return contrasena;
}

// SE MUESTRA LA CONTRASENA GENERADA
let resultado = generarContrasena();
console.log("Contrasena generada:", resultado);
