// iife
// immediately invoked function expression
// Expresión de función ejecutada inmediatamente

// Estos dos codigos son analogos
{
  let numero = 2;
  console.log(numero);
}

(function() {
  let numero = 2;
  console.log(numero);
})();

// Cosas que no se puede hacer con el la nueva sintaxis
// podemos pasar un argumento en la ejecución para luego
// guardarlo en una variable
// tambien se puede devolver o retornar un valor

let otroNumero = (function(numero) {
  return numero;
})(2);

console.log(otroNumero);

// High order Function (HOF)
// Función de orden alto
// Son aquellas funciones que reciben como parametro y/o devuelven
// una función

const HOF = otraFuncion => {
  otraFuncion();
};

const hola = () => {
  console.log("Hola");
};

const buenasTardes = () => {
  console.log("BuenasTardes");
};

HOF(hola);
HOF(buenasTardes);

const otroHOF = () => {
  return () => {
    console.log("Hola Otra vez");
  };
};

const holaOtraVez = otroHOF();

holaOtraVez();

// Closure
// creo una variable que luego se usa en la función que retorno
// Esta variable queda asociada a la función que retorno en un espacio
// aparte a la memoria local, como si fuera una mochilita.
// Para que se cumpla esta condición deben pasar tres cosas
// 1. Crear una variable dentro de la función padre
// 2. La función padre debe devolver otra función (Función hija)
// 3. La función hija (O sea, la función que se retorno) debe usar la variable
// de la función padre.

const closure = () => {
  let counter = 0;
  return () => {
    counter++;
    console.log(counter);
  };
};

const contador = closure();
const otroContador = closure();

console.log("Contador");
contador();
contador();
contador();
contador();

console.log("Otro Contador");
otroContador();

// Otro ejemplo de HOC
const otroHOC = (f1, f2, numero) => {
  console.log(f1(numero));
  console.log(f2(numero));
  console.log(f2(f1(numero)));
  console.log(f1(f2(numero)));
};

const suma2 = x => x + 2;

const negativo = x => -x;

otroHOC(suma2, negativo, 3);
