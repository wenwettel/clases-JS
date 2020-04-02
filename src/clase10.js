let i = 0;
i = i + 1;
console.log("suma normal de i :" + i);
// shortcut (atajo), abreviatura
i += 1;
console.log("suma shortcut de i :" + i);
i++;
console.log("Suma uno a la variable i: " + i);

for (let j = 0; j < 5; j++) {}

// funciones

// como crear una función
function hola() {
  console.log("hola");
}

// se guarda en hola la definición de hola
// un copio pego
// console.log(hola);

// como ejecutar una función
hola();
hola();

// funciones con variables

function inverso(numero) {
  console.log(-numero);
}

inverso(1);
inverso(-5);

let mePuedesVer = "No lo se";

function ver() {
  console.log(mePuedesVer);
}

ver();

function maldad() {
  function maldadx2() {
    function wendyMeComplica() {
      console.log("Segundo " + mePuedesVer);
    }
    wendyMeComplica();
  }
  maldadx2();
}

maldad();

// Function expresion

const hello = function() {
  console.log("hello");
};

hello();

// Arrow function

const arrow = () => {
  console.log("arrow");
};

arrow();

// cuando es una unica variable se puede
// omitir los parentesis
// para todos los otros casos se necesitan
// los parentesis
const suma2 = numero => {
  console.log(numero + 2);
};

suma2(4);

const multiplicar2 = numero => {
  console.log(numero * 2);
};

multiplicar2(8);

const restar5 = numero => {
  console.log(numero - 5);
};

restar5(8);
