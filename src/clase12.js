// return en arrow functions

function cuadradoNormal(x) {
  return x * x;
}

console.log(cuadradoNormal(6));

const cuadradoArrow = x => x * x;

console.log(cuadradoArrow(6));

function sumaNormal(x, y) {
  return x + y;
}

console.log(sumaNormal(5, 10));

const sumaArrow = (x, y) => x + y;

console.log(sumaArrow(5, 10));

// argumentos opcionales
// nan = not a number
let variable;

console.log(variable);

console.log(2 + undefined); // undefined no lo va a pasar a ningun
// numero. Por lo tanto, va a mostrar NAN

console.log(3 + null); // null lo va a transformar a cero

const suma = (x = 0, y = 0) => x + y;

console.log(suma());
console.log(suma(5, 6));

// function overload (Sobrecarga)

const resta = (x, y) => x - y;

console.log(resta(10, 3));
console.log(resta(10, 3, 2, 5, 20, 1, 6));

resta(resta(resta(10, 3), 5), 7);

// Objetos

console.warn("Objetos");
const coche = {
  puertas: 4,
  color: "rojo",
  motor: 1.8,
  ruedas: 4,
  frenos: "abs",
  aireAcondicionado: true,
  ruedaDeAuxilio: false,
  gps: true,
  cpuCentral: true,
  arrancar: () => {
    console.log("Brrruuuummmm");
  }
};

console.log(coche);
console.log(coche.puertas);
console.log(coche.ruedas);

coche.aireAcondicionado = false;
coche.arrancar();

console.log(coche.aireAcondicionado);

console.log(console);

console.log(Math);

// Los metodos son las acciones que terminan siendo funciones
// las propiedades son atributos que determinan al objeto

const pepita = {
  energia: 100,
  volar: function(km) {
    this.energia = this.energia - 5 * km;
  },
  estado: function() {
    console.log(this.energia);
  },
  comer: function(kg) {
    this.energia = this.energia + 3 * kg;
    if (kg > 6) {
      this.silbar();
    }
  },
  silbar: function() {
    console.log("oink oink");
  }
};

pepita.volar(1);
pepita.estado();

pepita.comer(1);
pepita.comer(2);
pepita.comer(3);
pepita.comer(4);
pepita.comer(5);
pepita.comer(6);
pepita.comer(7);
pepita.comer(8);
pepita.estado();

pepita.volar(5);
pepita.volar(6);
pepita.volar(7);
pepita.volar(1);
pepita.estado();
