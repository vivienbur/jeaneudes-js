let nombres = [5, 26, 7, 19, 2, 3];

// comment afficher le nombre le plus grand?

let max = 0;

for (let i = 0; i < nombres.length; i++) {
  if (nombres[i] > max) {
    max = nombres[i];
  }
}
console.log(max);


// comment multiplier ces nombres entre eux et afficher le résultat?

let total = 1;

for (let i = 0; i < nombres.length; i++) {

    total = total * nombres[i];
}

console.log(total);


// comment inverser ce tableau?
