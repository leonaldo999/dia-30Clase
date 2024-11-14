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