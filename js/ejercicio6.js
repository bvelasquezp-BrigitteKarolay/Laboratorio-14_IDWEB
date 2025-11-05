// EJERCICIO 6 - POTENCIAS Y RAICES

// SE PIDE UN NUMERO AL USUARIO
let numero = parseFloat(prompt("Ingrese un numero:"));

// SE REVISA QUE SEA UN NUMERO VALIDO
if (isNaN(numero)) {
  console.log("Debe ingresar un numero valido");
} else {
  // SE CALCULAN EL CUADRADO, EL CUBO Y LA RAIZ CUADRADA
  let cuadrado = Math.pow(numero, 2);
  let cubo = Math.pow(numero, 3);
  let raiz = Math.sqrt(numero);

  // SE MUESTRAN LOS RESULTADOS EN LA CONSOLA
  console.log("Numero ingresado:", numero);
  console.log("Cuadrado:", cuadrado);
  console.log("Cubo:", cubo);
  console.log("Raiz cuadrada:", raiz);
}
