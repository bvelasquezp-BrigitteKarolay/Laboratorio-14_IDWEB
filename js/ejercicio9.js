// EJERCICIO 9 - DISTANCIA ENTRE DOS PUNTOS

// EL USUARIO INGRESA LAS COORDENADAS DE DOS PUNTOS
let x1 = parseFloat(prompt("Ingrese la coordenada x1:"));
let y1 = parseFloat(prompt("Ingrese la coordenada y1:"));
let x2 = parseFloat(prompt("Ingrese la coordenada x2:"));
let y2 = parseFloat(prompt("Ingrese la coordenada y2:"));

// SE CALCULA LA DISTANCIA ENTRE LOS DOS PUNTOS
let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

// TAMBIEN SE CALCULA LA DISTANCIA DE CADA PUNTO AL ORIGEN
let distOrigen1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
let distOrigen2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
let sumaDistancias = distOrigen1 + distOrigen2;

// RESULTADOS
console.log("Distancia entre los dos puntos:", distancia);
console.log("Distancia del punto 1 al origen:", distOrigen1);
console.log("Distancia del punto 2 al origen:", distOrigen2);
console.log("Suma de las distancias al origen:", sumaDistancias);
