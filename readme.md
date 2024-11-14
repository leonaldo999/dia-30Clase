# Práctica Evaluada - Idat

- *Fecha: 13/11/2024*

## Instrucciones

A continuación se presentan cinco ejercicios de programación. Cada ejercicio vale 3 puntos, excepto el ejercicio 5, este ejercicio cuenta con 4 ejercicios que equivalen a 2 puntos cada uno Deben resolverlos utilizando y luego implementar el código en JavaScript.

- *Nombre del Alumno:* **Figueroa Lima , Leonardo de Jesus**

### Ejercicio 1: Sumar los números del siguiente array

`[23,4,6,7,99,12,19,8,43,21,65]`

- Declara un array con al menos 5 números y crea una función que recorra el array y sume todos sus elementos.

- Muestra el resultado de la suma en la consola.

#### Resultado 1

```js
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

```

### Ejercicio 2: Clasificación de notas

Descripción: Escribe un algoritmo que reciba una nota de un examen (de 0 a 20) y determine si el estudiante aprobó o reprobó. Considera que una nota mayor o igual a 11 es aprobatoria. Luego, implementa el código JavaScript.

#### Resultado 2

```js
// Función para clasificar la nota
function clasificarNota(nota) {
  if (nota < 0 || nota > 20) {
    console.log("La nota debe estar entre 0 y 20.");
    return; // Salir de la función si la nota es inválida
  }

  if (nota >= 11) {
    console.log("Aprobado");
  } else {
    console.log("Reprobado");
  }
}

// Ejemplo de uso
const notaEstudiante = prompt("Ingresa la nota del estudiante (0-20):"); // Solicita al usuario que ingrese la nota
clasificarNota(parseFloat(notaEstudiante)); // Llama a la función con la nota ingresada
```

### Ejercicio 3: Conversión de grados Celsius a Fahrenheit

Crea una función que reciba una temperatura en grados Celsius y la convierta a Fahrenheit. La fórmula es:

`F = (C * 9/5) + 32`

Llama a la función con varios valores de prueba y muestra los resultados.

#### Resultado 3

```js
function convertirCelsiusAFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

console.log("0 grados Celsius son:", convertirCelsiusAFahrenheit(0), "grados Fahrenheit");
console.log("10 grados Celsius son:", convertirCelsiusAFahrenheit(10), "grados Fahrenheit");
console.log("20 grados Celsius son:", convertirCelsiusAFahrenheit(20), "grados Fahrenheit");
console.log("30 grados Celsius son:", convertirCelsiusAFahrenheit(30), "grados Fahrenheit");
```

### Ejercicio 4: Encontrar el mayor de tres números

- Crea una función que reciba tres números como parámetros y retorne el mayor de los tres.

- Llama a la función con diferentes conjuntos de números para verificar que funcione correctamente.

#### Resultado 4

```js
function mayorDeTres(num1, num2, num3) {
  // Retorna el mayor de tres números
  return Math.max(num1, num2, num3);
}

// Llamadas a la función con diferentes conjuntos de números
console.log(mayorDeTres(10, 20, 30));       // Debería retornar 30
console.log(mayorDeTres(5, 3, 8));          // Debería retornar 8
console.log(mayorDeTres(0, 0, 0));          // Debería retornar 0
console.log(mayorDeTres(100, 99, 101));     // Debería retornar 101
console.log(mayorDeTres(7, 14, 14));        // Debería retornar 14
console.log(mayorDeTres(-10, -20, -5));     // Debería retornar -5
console.log(mayorDeTres(1.5, 2.3, 1.2));    // Debería retornar 2.3
console.log(mayorDeTres(1000, 999, 1001));  // Debería retornar 1001
console.log(mayorDeTres(42, 42, 42));       // Debería retornar 42
console.log(mayorDeTres(3.14, 2.71, 1.61)); // Debería retornar 3.14
console.log(mayorDeTres(-1.5, -2.5, -0.5)); // Debería retornar -0.5
```

### Ejercicio 5: Operaciones con arrays

- Escribe una función que busque y devuelva el objeto del personaje con el valor de attack más alto.

- Encontrar a los personajes de la raza Saiyan

- Crea una función que recorra el array de personajes y calcule el total del attack de todos los personajes.

- Crea una función que recorra el array de personajes y devuelva un nuevo array con solo los nombres de los personajes.

#### Resultado 5

```js
const personajes = [
  {
    "id": 1,
    "name": "Goku",
    "race": "Saiyan",
    "attack": 50000,
    "defense": 50000,
    "abilities": [
      "Transformaciones de Super Saiyan",
      "Super Kamehameha",
      "Super Dragon Fist"
    ]
  },
  {
    "id": 2,
    "name": "Vegeta",
    "race": "Saiyan",
    "attack": 49000,
    "defense": 49000,
    "abilities": [
      "Super Saiyan Transformations",
      "Final Flash",
      "Big Bang Attack"
    ]
  },
  {
    "id": 3,
    "name": "Gohan",
    "race": "Humano/Saiyan",
    "attack": 38000,
    "defense": 38000,
    "abilities": [
      "Super Saiyan Transformations",
      "Super Kamehameha",
      "Masenko"
    ]
  },
  {
    "id": 4,
    "name": "Freezer",
    "race": "Unknown",
    "attack": 47000,
    "defense": 47000,
    "abilities": [
      "Eye Laser",
      "Death Beam",
      "Death Ball"
    ]
  },
  {
    "id": 5,
    "name": "Cell",
    "race": "Android",
    "attack": 20000,
    "defense": 20000,
    "abilities": [
      "Energy Shield",
      "Super Kamehameha",
      "Destructo Disk"
    ]
  },
  {
    "id": 6,
    "name": "Buu",
    "race": "Majin",
    "attack": 29000,
    "defense": 29000,
    "abilities": [
      "Absorption",
      "Healing",
      "Chocolate Beam"
    ]
  }
];

// 1. Función para buscar el personaje con el ataque más alto
function personajeConMayorAtaque(personajes) {
  return personajes.reduce((max, personaje) => (personaje.attack > max.attack ? personaje : max));
}

// 2. Función para encontrar personajes de la raza Saiyan
function personajesSaiyan(personajes) {
  return personajes.filter(personaje => personaje.race.includes("Saiyan"));
}

// 3. Función para calcular el total del ataque de todos los personajes
function totalAtaque(personajes) {
  return personajes.reduce((total, personaje) => total + personaje.attack, 0);
}

// 4. Función para devolver un nuevo array con solo los nombres de los personajes
function nombresPersonajes(personajes) {
  return personajes.map(personaje => personaje.name);
}

// Ejemplos de uso
console.log("Personaje con mayor ataque:", personajeConMayorAtaque(personajes));
console.log("Personajes Saiyan:", personajesSaiyan(personajes));
console.log("Total de ataque:", totalAtaque(personajes));
console.log("Nombres de personajes:", nombresPersonajes(personajes));
```
