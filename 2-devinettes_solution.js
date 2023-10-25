const prompt = require('prompt-sync')();

let nombreAleatoire = Math.floor(Math.random() * 100) + 1;
let nombreEssais;

for (nombreEssais = 0; nombreEssais < 10; nombreEssais++) {
  const nombreSaisi = prompt("Devine un nombre: ");

  if (nombreSaisi < nombreAleatoire) {
    console.log("Plus grand");
  } else if (nombreSaisi > nombreAleatoire) {
      console.log("Plus petit");
  } else {
      console.log("GAGNÉ!!! en " + (nombreEssais + 1) + " essais");
    break;
  }
}

// comment afficher le nombre aléatoire quand le joueur a perdu?
