/*
  Necesitamos buscar a la persona con más edad en la familia.
  O sea, quién es la más viejita de la familia.
  Solo nececsito saber la edad
*/

let edadesFamilia = [4, 80, 90, 50, 18, 30, 25];

let edadMaxima = 0;

for (let i = 0; i < edadesFamilia.length; i = i + 1) {
  console.log("posicion: ", i);
  console.log("valor: ", edadesFamilia[i]);
  if (edadesFamilia[i] > edadMaxima) {
    edadMaxima = edadesFamilia[i];
  }
  console.log("edadMaxima: ", edadMaxima);
}

console.log("La persona con mayor edad tiene " + edadMaxima + " años.");
