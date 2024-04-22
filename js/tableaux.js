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