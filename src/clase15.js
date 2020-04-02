/*
Hacer una función que se llama esPar, que reciba un número y me devuelve true si 
es par y false si es impar. Recordar que tienen la operacion resto (%)
Ejemplo: esPar(2)  // true    esPar(1)  // false
*/

const esPar = numero => numero % 2 === 0;

const esParMasLargo = numero => {
  if (numero % 2 === 0) {
    return true;
  }

  return false;
};

console.log(esPar(1));
console.log(esPar(2));
console.log(esPar(3));

/*
Dada un array de enteros como strings y números, devuelve
la suma de los valores del array como si todos fueran números.
Ejemplo: sumaMixta([9, 3, '7', '3']) // 9+3+7+3 = 22 
*/

const sumaMixta = array => {
  let acumulador = 0;
  for (let elemento of array) {
    acumulador += Number(elemento); // acumulador = acumlador + elemento
  }
  return acumulador;
};

console.log(sumaMixta([9, 3, "7", "3"]));

/*
   Sumar los contenidos de dos arrays con el mismo tamaño y devolver su resultado
   sumaDosArrays([1,2], [3,4])   // 10
*/

const sumaDosArrays = (array1, array2) => {
  let acumulador = 0;
  for (let elemento of array1) {
    acumulador += elemento;
  }
  for (let elemento of array2) {
    acumulador += elemento;
  }
  return acumulador;
};

console.log(sumaDosArrays([1, 2], [3, 4]));

const sumaDosArraysConPosicion = (array1, array2) => {
  let acumulador = 0;
  for (let i = 0; i < array1.length; i++) {
    acumulador += array1[i] + array2[i]; // acumulador = acumulador + array1[i] + array2[i]
  }
  return acumulador;
};

console.log(sumaDosArraysConPosicion([1, 2], [3, 4]));

/*
Hacer una función que reciba un número y devuleva un negativo, si ya es negativo
dejarlo negativo
*/

const hacerNegativo = numero => {
  if (numero > 0) {
    return -numero;
  }
  return numero;
};

console.log(hacerNegativo(5));
console.log(hacerNegativo(-55));
console.log(hacerNegativo(0));
console.log(hacerNegativo(10));

/*
hacer una función que retorne un string al revés
solucion('world'); // 'dlrow'
*/

// La suma de strings no es conmutativa
// 'a' + 'b' = 'ab'
// 'b' + 'a' = 'ba'

const solucionConFor = string => {
  let acumulador = "";
  for (let caracter of string) {
    acumulador = caracter + acumulador;
  }
  return acumulador;
};

console.log(solucionConFor("world"));

const solucion = string => {
  return string
    .split("")
    .reverse()
    .join("");
};

solucion("world");

/* convertir un nummero a un array de numeros
 */

const convertir = numero => {
  const arrayNumerosString = numero.toString().split("");

  const acumulador = [];

  for (let elemento of arrayNumerosString) {
    acumulador.push(Number(elemento));
  }

  return acumulador;
};

console.log(convertir(1234));

/*
  Crear una función que reciba como parametro un string y devuelve
  un string pero sacando el primer y ultimo caracter del string
  que se recibio como parametro.
  El string va a tener 2 o mas caracteres
*/

const sacarPrimeroUltimo = string => {
  const arrayDelString = string.split("");
  arrayDelString.pop(); // saca el ultimo elemento del array
  arrayDelString.shift(); // saca el primer elemento del array
  return arrayDelString.join("");
};

console.log(sacarPrimeroUltimo("dfsafsadfsadfsafab"));

/*
 Crear una función que reciba un numero mayor a 0
 y que devuelva la secuencia invertida de ese numero hasta 0
 en un array
  secuenciaInvertida(5) // [5,4,3,2,1]
*/

const secuenciaInvertida = numero => {
  const acumulador = [];
  for (let i = 1; i <= numero; i++) {
    acumulador.unshift(i);
  }
  return acumulador;
};

console.log(secuenciaInvertida(5));

/*
Crear una función que saque un espacio del string
*/

const stringSinEspacios = str => {
  return str.replace(" ", "");
};

console.log(stringSinEspacios("hola amea"));

/*
crear una función que reciba un array de 2 elementos y los intercambie
*/

const intercambioReverse = array => {
  return array.reverse();
};

console.log(intercambioReverse([2, 10]));

const intercambio = array => {
  const auxiliar = array[0];
  array[0] = array[1];
  array[1] = auxiliar;
  return array;
};

console.log(intercambio([2, 10]));

const intercambioOtro = array => {
  const arrayAuxiliar = [];
  arrayAuxiliar.push(array[1]);
  arrayAuxiliar.push(array[0]);
  return arrayAuxiliar;
};

console.log(intercambioOtro([2, 10]));
