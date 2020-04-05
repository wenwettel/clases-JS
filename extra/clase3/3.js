
const mostrarInfo = info => {
  console.log(info)
}

const traerInfo = fetch('urlficticia')
traerInfo
  .then(mostrarInfo);

console.log('Hola Wendy');

/*
  Suponer que hay una línea de código que tarde 2000ms
*/