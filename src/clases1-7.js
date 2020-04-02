console.log("hi");
let nombre = "Pablo";
console.log(nombre);
nombre = "Paula";
console.log(nombre);
let nombre2 = "Pablo";
let fusion = nombre + nombre2;
console.log(fusion);
let suma = 2 + 3;
console.log(suma);
console.log("hola" + 2);

/*
  VIAJE DE WALTER
*/

let tanque = 2.5;
if (tanque > 3) {
  console.log("Vas a Ramos");
} else if (tanque > 2) {
  console.log("Vas a la Salsera");
} else {
  console.log("Sale netflix XD");
}

console.log("Iteración del while");
let i = 1; // contador
while (i <= 10) {
  console.log(i);
  i = i + 1;
}

console.log("Iteración del for");
for (let j = 1; j <= 10; j = j + 1) {
  console.log(j);
}

// condicional canal

let horario = 1;
if (horario === 24 || (horario >= 0 && horario < 8)) {
  console.log("Estas viendo Los Simpsons");
} else if (horario >= 8 && horario < 10) {
  console.log("Estas viendo El Noticiero");
} else if (horario >= 10 && horario < 13) {
  console.log("Estas viendo El Zorro");
} else if (horario >= 13 && horario < 19) {
  console.log("Estas viendo El Clon");
} else if (horario >= 19 && horario < 22) {
  console.log("Estas viendo Video Match");
} else if (horario >= 22 && horario < 24) {
  console.log("Estas viendo Peliculas");
} else {
  console.log("Horario fuera de rango");
}

// Clase 6

if (6 > 7) {
  console.log("soy mayor");
} else {
  console.log("soy menor");
}

let walterNotas = [7, 3, 9, 10, 1, 10]; // array
let sumaDeNotas = 0;
console.log(walterNotas);
// 0, 1, 2, 3
console.log(walterNotas[0]);
console.log(walterNotas[1]);
console.log(walterNotas[2]);
console.log(walterNotas[3]);
console.log("tamaño:" + walterNotas.length); // tamaño del array

console.log("sumaDeNotas: " + sumaDeNotas);

for (let i = 0; i < walterNotas.length; i = i + 1) {
  console.log("posicion: " + i);
  console.log("nota: " + walterNotas[i]);
  sumaDeNotas = walterNotas[i] + sumaDeNotas;
  console.log("sumaDeNotas:" + sumaDeNotas);
}

let promedio = sumaDeNotas / walterNotas.length;
console.log(promedio);

// EJemplo

let comidas = ["hamburguesa", "ensalada", "Tofu"];
console.log(comidas.length);
let vacio = [];
console.log(vacio.length);

// Arrays
console.warn("Clase Nueva Arrays");
let arrayVacio = [];
console.log(arrayVacio.length); // cantidad de elementos
arrayVacio.push(3); // push es para agregar un elemento al final del array
arrayVacio.push(10);
arrayVacio.push(0.5);
arrayVacio.push(6);
arrayVacio[2] = 7; // como cambiar un valor pre-existente en el array
console.log(arrayVacio.pop()); // como sacar un elemento del array
console.log(arrayVacio);

let listaNumeros = [1, 5, 10, 50, 95];

let encontrado = false;
let k = 0;
while (k < 5) {
  if (listaNumeros[k] == 10) {
    encontrado = true;
  }
  k = k + 1;
}

if (encontrado) {
  console.log("Encontre un 10");
} else {
  console.log("No encontre nada");
}

let listaDePalabras = ["hola", "hambre", "comida", "Arepas"];

let found = false;
for (let w = 0; w < listaDePalabras.length; w = w + 1) {
  if (listaDePalabras[w] == "Arepas") {
    found = true;
  }
}

if (found) {
  console.log("Encontré las arepas!!!");
} else {
  console.log("Alguien se comió las arepas D:");
}

// funciones

function multiplicarPorAlgo(x, y) {
  console.log(x * y);
}

multiplicarPorAlgo(1, 3);
multiplicarPorAlgo(2, 3);
multiplicarPorAlgo(4, 2);

function alCuadrado(x) {
  console.log(x * x);
}

alCuadrado(2);
alCuadrado(10);
