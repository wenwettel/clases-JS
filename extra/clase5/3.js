// Introducción Filter
// La función que se le pasa a filter recibe los mismos parametros que el map
// 1. valor
// 2. Indice
// 3. Array
// Filtra el array por una condicion en particular
// Si el valor que retorno es true, ingresa el valor al array
// Si el valor que retorno es falso, no ingresa ningun valor al array
// Ejemplo: Devolver solo los valores que sean pares

const arrayNummeros = [1,5,6,7,10,14,13,0,-10,-11];

const fn = (valor) => {
  return valor % 2 === 0;
}

const newArray = arrayNummeros.filter(fn);

console.log(newArray);