const prompt = require('prompt-sync')();

let prix = prompt("Quel est le prix de l'ordinateur?: ");
let quantite = prompt("Combien d'ordinateurs voulez-vous acheter?: ");

let total = 0;

if (quantite > 10) {
  total = prix * quantite * 0.9;
} else {
  total = prix * quantite;
}

console.log("Le prix total est de: " + total + " dollars.");