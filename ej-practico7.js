export function checkArray(array) {

    if (array.length === 0) {
      return false
    }
    return array.every(item => item % 2 === 0);
   
  }

  //Tu reto es retornar true si dentro de array de números todos son pares, para solucionarlo vas a encontrar una función llamada checkArray que recibe un parámetro de entrada:

// numbers: Un array de números
// Dentro del cuerpo de la función checkArray debes escribir tu solución.