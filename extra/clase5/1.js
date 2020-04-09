// Programación Funcional
// Inmutabilidad
// Funciones Puras
// Evitar Efectos Secundarios

// Inmutabilidad es el hecho de no cambiar un valor
// Ejemplo
// Me dan un array y sume 1 a cada uno de esos valores.

const array = [1,2,3];
console.log(array, 'antes');

for(let i = 0; i < array.length; i++){
  array[i] = array[i] + 1;
}

console.log(array, 'despues');

// Esto causa mucha confusión, por lo tanto se trata de no mutar a los objetos
// Algo similar sucede con los objetos

// Una función es pura cuando recibe al menos 1 o más parametros y devuelve un valor
// Ademas no debe tener efectos colaterales

// Esto no es una función pura porque tiene efectos colaterales
// y ademas no recibe ningun parametro y no devuelve ningun valor
const otroArray = [1,2,3];

const arraySuma = () => {
  for(let i = 0; i < otroArray.length; i++){
    otroArray[i] = otroArray[i] + 1;
  }
}

arraySuma();
console.log(otroArray, 'Otro array modificado');


// Esto es una función pura
// Recibe parametros (al menos uno) y devuelve un valor

const arraySinTocar = [1,2,3]

const sumaPura = (array) => {
  const nuevoArray = [...array];
  for(let i = 0; i < nuevoArray.length; i++){
    nuevoArray[i] = nuevoArray[i] + 1;
  }
  return nuevoArray;
}

const nuevo = sumaPura(arraySinTocar);

console.log(arraySinTocar, 'array sin tocar');
console.log(nuevo, 'nuevo array');

// Quiero hacer lo mismo pero con una función que me devuelva un nuevo valor

const suma1 = (numero) => {
  return numero + 1;
}

const multiplicarPor2 = (numero) => {
  return numero * 2;
}


const arrayMap = (array, fn) => {
  const nuevoArray = [];
  for(let i = 0; i < array.length; i++){
    nuevoArray.push(fn(array[i]));
  }
  return nuevoArray
}

console.log(arrayMap([2,4,6], multiplicarPor2), 'arrayMap');