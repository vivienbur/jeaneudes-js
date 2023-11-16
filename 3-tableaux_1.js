let fruits = ["pomme", "banane", "cerise"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// ajouter un élément à la fin
fruits.push("framboise");
console.log(fruits);

// remplacer un élément
fruits[1] = "citron";
console.log(fruits);

// insérer un élément
fruits.splice(2, 0, "orange");
console.log(fruits);

// longeur d'un tableau
console.log(fruits.length);



// Comment accéder au dernier élément d'un tableau?
console.log(fruits[fruits.length - 1]);

// Comment accéder à chaque élément d'un tableau, un par un? (boucles...)
for (let i = 0; i < fruits.lenght; i++) {
  console.log(fruits[i]);
}