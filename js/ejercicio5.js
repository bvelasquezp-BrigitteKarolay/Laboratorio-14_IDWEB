// EJERCICIO 5 - LANZAMIENTO DE DOS DADOS

// FUNCION QUE DEVUELVE UN NUMERO ALEATORIO ENTRE MIN Y MAX
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let dado1 = numeroAleatorio(1, 6);
let dado2 = numeroAleatorio(1, 6);
let suma = dado1 + dado2;

// RESULTADO
console.log("Dado 1:", dado1);
console.log("Dado 2:", dado2);
console.log("Suma de los dos dados:", suma);
