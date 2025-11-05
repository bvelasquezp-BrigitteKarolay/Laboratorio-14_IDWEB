// EJERCICIO 7 - CONVERSION ENTRE GRADOS Y RADIANES

// FUNCION PARA PASAR DE GRADOS A RADIANES
function gradosARadianes(grados) {
  return grados * (Math.PI / 180);
}

// FUNCION PARA PASAR DE RADIANES A GRADOS
function radianesAGrados(radianes) {
  return radianes * (180 / Math.PI);
}

// EL USUARIO ELIGE EL TIPO DE CONVERSION QUE QUIERE HACER
let opcion = prompt("Elija una opcion: 1 = Grados a Radianes, 2 = Radianes a Grados");

// SI ELIGE LA OPCION 1, SE CONVIERTE DE GRADOS A RADIANES
if (opcion === "1") {
  let grados = parseFloat(prompt("Ingrese el valor en grados:"));
  if (isNaN(grados)) {
    console.log("Valor no valido");
  } else {
    let radianes = gradosARadianes(grados);
    console.log(grados, "grados equivalen a", radianes, "radianes");
    console.log("Seno:", Math.sin(radianes));
    console.log("Coseno:", Math.cos(radianes));
  }

// SI ELIGE LA OPCION 2, SE CONVIERTE DE RADIANES A GRADOS
} else if (opcion === "2") {
  let radianes = parseFloat(prompt("Ingrese el valor en radianes:"));
  if (isNaN(radianes)) {
    console.log("Valor no valido");
  } else {
    let grados = radianesAGrados(radianes);
    console.log(radianes, "radianes equivalen a", grados, "grados");
  }

// SI INGRESA OTRA OPCION, SE MUESTRA UN MENSAJE DE ERROR
} else {
  console.log("Opcion no valida");
}
