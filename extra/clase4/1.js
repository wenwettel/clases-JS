const mostrarInfo = info => {
  console.log(info)
}

const holaMasTarde = () => {
  console.log('Hola 0 segundos?');
}

setTimeout(holaMasTarde, 0);

const traerInfo = fetch('urlficticia')
traerInfo
  .then(mostrarInfo);

console.log('Wendy');

/*
  Suponer que hay una línea de código que tarde 2000ms
*/