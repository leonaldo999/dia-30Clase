// Declarar un array con al menos 5 números
const numeros = [23, 4, 6, 7, 99, 12, 19, 8, 43, 21, 65];

// Función para sumar los elementos del array
function sumarElementos(array) {
    let suma = 0; // Inicializar la suma en 0
    for (let i = 0; i < array.length; i++) {
        suma += array[i]; // Sumar cada elemento al total
    }
    return suma; // Retornar la suma total
}

// Llamar a la función y mostrar el resultado en la consola
const resultado = sumarElementos(numeros);
console.log("La suma de los elementos del array es:", resultado);

/* -------------------------------------------  */

