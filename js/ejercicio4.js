// EJERCICIO 4 - NUMERO ALEATORIO EN UN RANGO

// FUNCION PARA GENERAR UN NUMERO ENTERO ENTRE MIN Y MAX
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// SOLICITAN LOS LIMITES
let minimo = parseInt(prompt("Ingrese el numero minimo:"));
let maximo = parseInt(prompt("Ingrese el numero maximo:"));

// VALIDA Y MUESTRA RESULTADO
if (isNaN(minimo) || isNaN(maximo) || minimo > maximo) {
  console.log("Datos invalidos");
} else {
  let aleatorio = numeroAleatorio(minimo, maximo);
  console.log("Numero aleatorio entre", minimo, "y", maximo, ":", aleatorio);
}
