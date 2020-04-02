// var y hoisting
/* hoisting es cuando las definiciones de las variables
se instancian o se crean apenas empiza el context de ejecucion global.
O sea, cuando empieza la aplicación (arranca javascript)

console.log(hola);

var hola = 2;

console.log(hola);

*/

// let var y const diferencia
// pregunta de entrevista
// el único problema con var es el hoisting
// let crea la variable cunado javascript lee esa línea de código
// console.log(comida);
// let comida = "Arepa";
// const pi = 3.14
// Todo se debe declarar como una constante a menos que
// sepa que voy a cambiar su valor

/* hoisting dentro de una función
function prueba() {
  console.log(hola);
  var hola = "hola";
  console.log(hola);
}

prueba();

console.log(hola);
*/

// function y hoisting

saludo();

function saludo() {
  console.log("hola");
}

let saludoNuevo = () => {
  console.log("hola");
};

let otroSaludo = function() {
  console.log("hola otra vez");
};

/*
Para que funcione se debe correr en la consola de chrome o firefox
cuando no se declara la variable con var
se creaba una variable global por vos
Lo comento porque en codesandbox no funciona
function unaFuncion(){
  algo = 2;
}
unaFuncion();
console.log(algo);
*/

// typeof = el tipo de algo
// typeof es una palabra reservada que nos dice el tipo de un dato
// devuelve un string

console.log(typeof 2);
console.log(typeof "cosa");
console.log(typeof true);
console.log(typeof {});
console.log(typeof undefined);
console.log(typeof null); // bug de javascript
console.log(typeof function() {});
console.log(typeof []); // efecto no deseado, pero es verdad

console.log(Array.isArray([]));

const cuadrado = x => {
  if (typeof x !== "number") {
    return "error";
  }
  return x * x;
};

const resultado = cuadrado(undefined);

console.log(resultado);

// Strings avanzados

const walter = "el Viaje De Walter";
// walter[0] = "a"; no funciona
// walter.charAt(0) = "o"; no funciona
// los string son inmutables
const walterMayuscula = walter.toUpperCase();
const walterMinuscula = walter.toLowerCase();

console.log(walter);
console.log(walterMayuscula);
console.log(walterMinuscula);

console.log(walter.split(""));
console.log(walter.split(" "));
console.log(walter.split("a"));
console.log(walter.includes("Walter"));
console.log(walter.length); // me trae la cantidad de caracteres totales del string
console.log(walter.charAt(0)); // me trae el caracter en esa posición del string
console.log(walter[1]); // me trae el caracter en esa posición del string

// Arrays avanzados

const array = ["Walter", "Ayer", "cumplio", 40, "añitos"];

console.log(array.indexOf("cumplio")); // en que posición se encuentra en el array

console.log(array.reverse());

console.log(array.toString(""));

console.log(array.toString().replace(/,/g, ""));

console.log(array.length); // tamaño del array

// funciones avanzadas

function avanzada() {}

console.log(avanzada.name); // el nombre de la función en formato string

// number avanzado

const number = NaN;

console.log(typeof number);
console.log(Number.isNaN(number));
console.log(Number.isInteger(number));
console.log(Number("123"));

// objetos avanzados
// un objeto es una coleccion de llaves(keys) y valores(values)

const pepita = {
  tipo: "PuercoPaloma",
  alas: 4,
  patas: 4
};

console.log(Object.keys(pepita));
console.log(Object.values(pepita));
console.log(Object.entries(pepita));
console.log(Object.entries(pepita)[2]);

const ejemploEntries = [["tipo", "PuercoPaloma"], ["alas", 4], ["patas", 4]];

console.log(ejemploEntries[2]);
