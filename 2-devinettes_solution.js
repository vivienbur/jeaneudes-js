const prompt = require('prompt-sync')();

let nombreAleatoire = Math.floor(Math.random() * 100) + 1;

let nombreEssais;

for (nombreEssais = 1; nombreEssais < 11; nombreEssais++) {

  const nombreSaisi = prompt("Devine un nombre: ");

  if (nombreSaisi < nombreAleatoire) {
    console.log("Plus grand");
  } else if (nombreSaisi > nombreAleatoire) {
    console.log("Plus petit");
  } else {
    console.log("GAGNÉ!!");
    console.log("En " + nombreEssais + " essais");
    break;
  }
}

// comment afficher le nombre aléatoire quand le joueur a perdu?
