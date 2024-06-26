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
let carsClone = null;
/* carsClone = cars; //ça marche pas  */
/* carsClone = [...cars]; // ça marche mais c'est mieux d'utiliser la méthode .slice() */
/* carsClone = [].concat(cars) // ça marche mais c'est mieux d'utiliser la méthode .slice() */
console.log([].concat(cars));
console.log([].concat('23', '12'));

carsClone = cars.slice();
console.log(carsClone);
carsClone.pop();
console.log(carsClone);
console.log(cars);

const tabExemple = '12.5,56.3,12,0.5'.split(',');
console.log(tabExemple);

let resultat = 0;
for(value of tabExemple){
    resultat = resultat + parseFloat(value);
}
console.log(resultat);

const chaineExemple = [12.5,56.3,12,0.5].join(',');
console.log(chaineExemple);

/* inverser un mot */
const mot = 'kayane';
const motInverse = mot.split('').reverse().join('');
console.log(motInverse);

/* trier un tableau */
tabExemple.sort().reverse();
console.log(tabExemple);
console.table(tabExemple);

/* et les tableau à plusieurs dimensions */
/* 

int tab(5,5);

*/

let carsTest = [
    ['Fiat', 1996],
    ['Kya', 1995],
    ['Kya', 1990],
    ['Ford', 1950]
];

console.log(carsTest);
console.table(carsTest);

console.table(carsTest.sort());

/* parcourir et afficher les valeurs du tableau */
/* une méthode : boucle imbriquée */
console.log('--------------- for imbriqués ---------------');
for(let i = 0; i < carsTest.length; i = i + 1){
    for(j = 0; j < carsTest[i].length; j = j +1){
        console.log(carsTest[i][j]);
    }
}

console.log('--------------- for of imbriqués ---------------');
for(value of carsTest){
    for(subValue of value){
        console.log(subValue);
    }
}

/* une méthode .foreach() */
console.log('--------------- forEach ---------------');
carsTest.forEach(function(value){
    value.forEach(function(value){
        console.log(value);
    });
});

/* une méthode .map() */
console.log('--------------- .map() ---------------');
carsTest.map(function(value){
    value.map(function(value){
        console.log(value);
    });
});

/* trouver un élément dans un tableau .find() */

console.log('--------------- .found() ---------------');
const arrayNum = [5, 20, 8, 130, 54, 12, 44];
/* trouver le premier élément tu bleau strictement supérieur à 20 */
const found = arrayNum.find(function(element){
    /*
    if(element > 20){
        return element;
    }
    */
   return element > 20;
});

console.log(found);
console.log('--------------- .filter() ---------------');
/* trouver tous les éléments tu bleau strictement supérieurs à 20 */
const filter = arrayNum.filter(function(element){
    return element > 20;
});

console.log(filter);

const filter2 = arrayNum.filter(
    /*
    function(element){
        return element > 20;
    }
    */
   /*
   (element)=>{
       return element > 20;
    }
    */
   /*
   element=>{
       return element > 20;
    }
    */
    element=>element > 20
);

console.log(filter2);

/* l'opérateur => arrow est surtout utilisé pour gérer les CONSÉQUENCES */

const monObjet = {
    nom: 'toto',
    numbers: [5, 20, 8, 130, 54, 12, 44],
    affTab: function(){
        console.log(this);
        this.numbers.map((element)=>{
            console.log(this);
            console.log(element);
        });
    }
};

/*
console.log(monObjet);
console.log(monObjet.nom);
console.log(monObjet.numbers);
*/
console.log(monObjet.affTab());