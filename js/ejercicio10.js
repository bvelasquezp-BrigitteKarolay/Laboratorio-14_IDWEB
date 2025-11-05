// EJERCICIO 10 - NORMALIZACION DE CALIFICACIONES

// SE CREA UN ARREGLO DE NOTAS
let notas = [12, 18, 15, 20, 10];

// SE OBTIENE EL VALOR MAXIMO DEL ARREGLO
let maximo = Math.max(...notas);

// SE NORMALIZA CADA NOTA DIVIDIENDO ENTRE EL MAXIMO
let notasNormalizadas = notas.map(nota => (nota / maximo).toFixed(2));

// RESULTADOS
console.log("Notas originales:", notas);
console.log("Notas normalizadas:", notasNormalizadas);
