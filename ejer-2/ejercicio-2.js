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