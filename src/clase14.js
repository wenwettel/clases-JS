// coerción

const valor1 = "5";
const valor2 = 9;
let suma = valor1 + valor2;

console.log(suma);

// único cambio de conversión en el ejemplo porque es
// explicito
suma = Number(valor1) + valor2;

console.log(suma);

let multiplicacion = valor1 * valor2;

let otraMultiplicacion = "five" * 9;

console.log(multiplicacion);

console.log(otraMultiplicacion);

let resta = valor1 - valor2;

console.log(resta);

let division = valor1 / valor2;

console.log(division);

// coerción extendida
// == vs ===
// == hace una coerción cuando los tipos de los datos
// no son iguales, elige a uno de los datos como referencia
// y pasa el otro dato a al tipo de dato que se tomo como referencia.
// === no hace coercion y compara el valor y el tipo de dato
// si el valor y el tipo de dato es exactamente igual, es verdadero

console.log("2" == 2); // transforma "2" a número y lo compara
console.log("2" === 2); // compara si ambos tienen el mismo tipo y valor

// Por valor y por referencia

const numero = 2; // guarda el valor 2 en numero
const string = "hola"; // guarda el valor "hola" en string
const boolean = true; // guarda el valor true en boolean
const array = []; // guarda la referencia del array []
// array = [2,3,5] No se puede hacer porque cambiaria la refencia
// al nuevo array
array.push(3, 4);

array.unshift(2, 3);

array[2] = 100;

console.log(array);

const obj = {};

// obj = { comida: "Arepas" }; No se puede cambiar por otro objeto

obj.algo = "Ave maria morena";

console.log(obj);

// Expresiones
/*
hay dos tipos de expresiones: las que tienen efectos 
secundarios (por ejemplo: aquellas que asignan un valor
 a una variable) y las que de alguna manera son evaluadas y 
 resuelven un valor.
*/

2 > 3; // de tipo 2, resuelve un valor y no tiene efecto secundario
let b = !true; // de tipo 1, tiene efecto secundario que es se
// guarda en la variable b

// operaciones extendidas

console.log(2 ** 3);
console.log(10 % 3); // El resto = 1
// 1. Division entera de  10 / 3 = 3
// 2. Queda como resto 1

console.log(5 % 2); // Lo importante es el divisor 2
console.log(2 % 2);

// funciones puras
// Una función pura es aquella que no tiene efectos colaterales
// o efectos secundarios y siempre devuelve un valor
// efectos colaterales son aquellos que tienen una
// efecto más alla de su scope(alcance)

let hola = "saludos humano";

function crearString() {
  hola = "Nuevo String";
}

crearString();

console.log(hola);

let otroHola = "saludos humano";

function nuevoString(texto) {
  return texto + " algo mas";
}

console.log(nuevoString(otroHola));
console.log(otroHola);

const pepita = {
  tipo: "puercopaloma",
  patas: 4,
  alas: 2
};

// cuando se pasa un objeto o un array por paramentro a una función
// no se lo pasa por valor(crea una copia nueva)
// se lo pasa por referencia (la dirección exact en memoria)
// por lo tanto si lo modifico dentro de la función
// va a causar efectos secundarios indeseados
function crearPalomaNormal(obj) {
  obj.tipo = "paloma";
  obj.patas = 2;
  return obj;
}

const nuevaPaloma = crearPalomaNormal(pepita);
console.log(nuevaPaloma);
console.log(pepita);

// solucion a este problemita

const otraPepita = {
  tipo: "puercopaloma",
  patas: 4,
  alas: 2
};

function crearNuevaPaloma(obj) {
  const copiaDelObjeto = {
    ...obj //spread operator, operador de propagación
  };
  copiaDelObjeto.tipo = "paloma";
  copiaDelObjeto.patas = 2;
  return copiaDelObjeto;
}

const realmenteNuevaPaloma = crearNuevaPaloma(otraPepita);
console.log(realmenteNuevaPaloma);
console.log(otraPepita);

// ejemplo filtro

const hotel = {
  id: 1,
  estrellas: 5,
  tripAdvisor: 4,
  conDesayuno: false
};

const agrupadorEstrellas = {
  5: [1, 350],
  4: [2, 3],
  3: [4, 5],
  2: [],
  1: []
};
