// Introducción función map
// El primer parametro es el valor de cada elemento del array
// Debo devolver el valor para que se agregue al nuevo array
// que es creado por la función map
// la función que le paso a map es la encargada de modificar el 
// valor del elemento en el array

const array = [1,2,4];

const fn = (valor) => {
  return valor * 2;
}

const fn2 = (valor) => {
  return valor - 3;
}

const nuevoArray = array.map(fn2);

console.log(array, 'arraySinTocar')
console.log(nuevoArray, 'nuevoArray');

// El segundo parametro que recibe la función que le pasamos a map es el indice
// Ejemplo: sumar 3 a todos los elementos del array, menos el primero
// que debo devolver el mismo elemento. O sea, lo dejo igual.

const fn3 = (valor, index) => {
  if(index === 0)
    return valor;
  
  return valor + 3;
}

const newArray = array.map(fn3);

console.log(newArray, 'newArray');

// El tercer parametro es el mismo array

const fn4 = (valor, index, array) => {
  console.log(valor, index, array);
}

array.map(fn4);