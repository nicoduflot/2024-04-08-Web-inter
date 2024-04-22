/* Avant es6 */
/* 
var tableau = new Array('valeur', 1, 13, true, {nom: 'Duflot', age: 44});
console.log(tableau);
console.log(typeof tableau);

*/

const tableau = ['valeur', 1, 13, true, {nom: 'Duflot', age: 44}];
console.log(tableau);
console.log(typeof tableau);

/*
les tableaux associatifs
en php, les tableaux peuvent être sous cette forme
[
    "uneClef" => "une valeur",
    12 => 45
]

En JS, ça n'existe pas bien qu'on puisse les créer et les utiliser
*/

let tabAsso = [];
tabAsso['fruit'] = 'cerise';
tabAsso['legume'] = 'courgette';
tabAsso['cereale'] = 'blé';

console.log(tabAsso);

/* 
une des raisons principale est que javascript ne reconnait 
pas de longueur à ce tableau alors qu'il est bien composé de trois éléments 
On utilisera à la place une instance de la classe Map() (plus tard dans la partie collections)
*/

let cars = ['Peugeot', 'Citroën', 'Renault'];
console.log(cars);
console.log(cars.length);

/* ajouter un élément au tableau */
cars[cars.length] = 'Ford'; /* ça marche mais NON ! */
console.log(cars);

cars.push('Hyunday');
console.log(cars);
cars.push('Fiat', 'BMW');
console.log(cars);

/* les boucles */
console.log('------------ boucle for -----------------');
for(let i = 0; i < cars.length; i = i + 1){
    console.log(`la valeur de cars à l'index ${i} est ${cars[i]}`);
}

console.log('------------ boucle for in -----------------');
for(let index in cars){
    console.log(`la valeur de cars à l'index ${index} est ${cars[index]}`);
}

/*  le for in peut parcourir les objets */

const objLit = {
    nom: 'ONISUKA', 
    prenom: 'EIKICHI',
    age: 22, 
    presentation: function(){
        return `${this.prenom} ${this.nom}, ${this.age}, célibataire, GTO`;
    }
};

console.log(objLit.nom);
console.log(objLit.prenom);
console.log(objLit.presentation());

console.log('------------ boucle for in dans un objet -----------------');

for(let key in objLit){
    console.log(`${key}, ${objLit[key]}`);
}

/* depuis es6 */

console.log('------------ boucle for of -----------------');
for(let value of cars){
    console.log(value);
}

console.log('---------- boucle tant que (while) -------------');
cpt = 0;
while(cpt < cars.length){
    console.log(cars[cpt]);
    cpt = cpt + 1;
}

console.log('---------- boucle faire tant que ( dowhile) -------------');
cpt = 0;
do{
    console.log(cars[cpt]);
    cpt = cpt + 1;
}while(cpt < cars.length);


console.log('---------- méthode pour chaque élément d\'un objet itérable .forEach() -------------');
cars.forEach(function(value, index, tab){
    console.log(value, index, tab);
});

let tabTarif = [12, 55.6, 23];
const TVA = 0.055;

console.log(tabTarif);

tabTarif.forEach(function(valeur, index, tab){
    tab[index] = valeur * (1 +TVA);
});

console.log(tabTarif);

/*  */
console.log('---------- méthode pour parcourir chaque élément d\'un tableau .map() -------------');

cars.map(function(value, index, tab){
    console.log(value, index, tab);
});

console.log('---------- méthode pour parcourir chaque élément d\'un tableau .entrie() -------------');
for(let entry of cars.entries()){
    console.log(entry);
}

cars.push('Seat', 'Toyota', 'Volskwagen');

/* Extraire la dernière valeur d'un tableau .pop(); */
console.log(cars);
const lastEntry = cars.pop();
console.log(cars);
console.log(lastEntry);

/* Extraire la première valeur d'un tableau .shift(); */
const firstEntry = cars.shift();
console.log(cars);
console.log(firstEntry);

/* Extraire, remplacer, ajouter une ou plusieurs valeurs dans un tableau, n'importe où : .splice() */
/* .splice : extraire des valeurs */

const removed = cars.splice(1, 3);
console.log(removed);
console.log(cars);

/* remplacer */
const replaced = cars.splice(1, 1, 'Alpine', 'Mazda');
console.log(replaced);
console.log(cars);

/* ajouter */
const rest = cars.splice(1, 0, firstEntry, lastEntry, removed[0], removed[1], removed[2], replaced[0]);
console.log(cars);
console.log(rest);

/* Exercice : créer une copie d'un tableau */
