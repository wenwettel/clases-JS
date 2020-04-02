// Call Stack

/*
  FILO
  First In, Last out
  Primero que entra,
  Es el último que sale
  Un tubo de papas fritas
*/

// Scope
let mensaje = 1;

{
  let mensaje = "hola";
  console.log(mensaje);
}

console.log(mensaje);

{
  console.log(mensaje);
}

// la variable i se crea dentro de la iteración
// y luego de terminar ese bloque, se borra
for (let i = 0; i <= 10; i++) {}

// funciones con variables multiples

console.log("funcion suma con log");
const sumaLog = (x, y) => {
  console.log(x + y);
};

sumaLog(2, 4);
sumaLog(2, 7);

console.log("funcion multiplicar con log");
const multiplicarLog = (x, y) => {
  console.log(x * y);
};

multiplicarLog(5, 9);
multiplicarLog(10, 10);

console.log("funcion resta con log");
const restaLog = (x, y) => {
  console.log(x - y);
};

restaLog(9, 8);

console.log("funcion division con log");
const divisionLog = (x, y) => {
  console.log(x / y);
};

divisionLog(3, 6);

console.log("guardar suma");
let guardar = sumaLog(2, 3);

console.log(guardar);

// explicación de return

console.log("Suma con return");
function suma(x, y) {
  return x + y;
}

let total = suma(2, 3);

console.log(total);
console.log(5);
console.log(suma(2, 3));

let suma3Numeros = suma(suma(8, 7), 9);

console.log(suma3Numeros);

console.log("División con return");
function division(x, y) {
  return x / y;
}

let divisionNumeros = division(10, 5);

console.log(divisionNumeros);

let sumayDivision = division(suma(2, 3), 5);

console.log(sumayDivision);
