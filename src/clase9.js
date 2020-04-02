// For .. of

let listaCualquiera = [13, 206, 3, 5, 30, 65546, 6543540];

let existe = false;

for (let valor of listaCualquiera) {
  if (valor == 30) {
    existe = true;
  }
}

if (existe) {
  console.log("Existo!");
} else {
  console.log("Doh!");
}

// Switch

let palabra = "sarasa";

console.error("Mensaje de if");
if (palabra == "comida") {
  console.log("tengo hambre");
} else if (palabra == "arepas") {
  console.log("hmmm que rico");
} else if (palabra == "asado") {
  console.log("tengo hambre");
} else if (palabra == "vaso") {
  console.log("tenes sed");
} else if (palabra == "piña colada") {
  console.log("hmmm que rico");
} else {
  console.log("No te entendi");
}

console.warn("Mensaje de switch");

switch (palabra) {
  case "comida":
  case "asado":
    console.log("Tengo hambre");
    break;
  case "arepas":
  case "piña colada":
    console.log("hmm que rico");
    break;
  case "vaso":
    console.log("tenes sed");
    break;
  default:
    console.log("No te entendi");
}
