/* créer une fonction */
/* une procédure : une fonction qui fait un traitement mais ne renvoie rien */
function coucou(){
    console.log('coucou');
}

coucou();

/* on peut ajouter des paramètres à une fonction */
function hello(name){
    console.log(`Hello ${name}`);
}

hello('Nico');

/* des paramètres par défaut */
function helloKitty(name = 'Kitty'){
    console.log(`Hello ${name}`);
}

helloKitty();
helloKitty('Doudou');

/* un fonction renvoie un résultat */
function circo(rayon){
    /*
    let circonference = 0;
    circonference = 2 * Math.PI * rayon;
    return circonference;
    */
   /*
    if(isNaN(parseFloat(rayon))){
        return 0;
    }else{
        return 2 * Math.PI * rayon;
    }
    */
    /* et si on utilisait un ternaire */
    /* 
    
    ( condition )?  resultat si vrai : resultat si faux;
    
    */
   return ( isNaN(parseFloat(rayon)) )? 0 : 2 * Math.PI * rayon ;
}

console.log(circo(3));
console.log(circo('3'), typeof circo('3'));
console.log(circo('a'));

/* 
opérateur variadique (rest parameter || spread parameter )

...valeurs

function test(...valeurs){
    // code
}

test('test', 'toto', 24);

...valeurs <=> ['test', 'toto', 24]

*/
/**
 * 
 * @param  {...number} valeurs - tableau des nombres a additionner
 * @returns 
 */
function addition(...valeurs){
    let res = 0;
    for(let nombre of valeurs){
        if(!isNaN(nombre)){
            res = res + parseFloat(nombre);
        }
    }
    return res;
}

console.log(addition(1,2,3,'a',4,5,'6',7,8,9));

/* fonction anonyme ou callback function ou fonction de rappel */

const maFonctionAnonyme = function(name = null){
    return `Hello ${(name === null)? 'Kitty' : name}`;
}

console.log(maFonctionAnonyme('toto'));
console.log(maFonctionAnonyme());

/* utilisant le format fonction auto-éxécutée */
/*

( définition de la fonction anonyme a éxécuter )( définition des variables a envoyer dans la fonction de callback si il y en a );

*/

(function(name = null){
    console.log(`Hello ${(name === null)? 'Kitty' : name}`);
})('Nikko', 'toto');

/*
exercice

créer une fonction qui va parcourir un tableau de données tableauDeFruits 
et renvoyer une liste des doublons dans le tableau tableauxDoublons

Pensez a utiliser .map()

le fruit : <fruit> est présent x fois

*/

const tableauDeFruits = [
    'banane',
    'tomate',
    'pêche',
    'pomme',
    'banane',
    'tomate',
    'banane',
    'fraise',
    'tomate',
    'pêche',
    'banane',
    'tomate',
    'pomme'
];


function trouverDoublons(tableau){
    tableau.sort();
    let tableauFiltre = [];
    let tableauxDoublons = [];
    let cpt = 1;
    tableau.map(function(element, index, tab){
        if(element === tab[index+1]){
            cpt = cpt + 1;
        }else{
            if(cpt > 1){
                tableauxDoublons.push(`l'élément' ${element} est présent ${cpt} fois`);
            }
            cpt = 1;
            tableauFiltre.push(element);
        }
    });
    return [tableauFiltre, tableauxDoublons];
}

const fruitsFiltres = trouverDoublons(tableauDeFruits.slice());

const tableauFiltre = fruitsFiltres[0];
const tableauxDoublons = fruitsFiltres[1];

console.log('Tableau non filtré', tableauDeFruits);
console.log('Tableau filtré', tableauFiltre);
console.log('Les doublons', tableauxDoublons);


/* La destructuration */
const liste = [1, 2, 3, 4];
/* assigner les valeurs de la liste au variables suivante a, b, c */
/*
const a = liste[0];
const b = liste[1];
const c = liste[2];
*/

const[a, b, c] = liste;
console.log(`a = ${a}, b = ${b}, c = ${c}, `);

const[d, , f, g] = liste;
console.log(`d = ${d}, f = ${f}, g = ${g}, `);

const[h, i, j, k = 0, l = 5] = liste;
console.log(`h = ${h}, i = ${i}, j = ${j}, k = ${k}, l = ${l}`);

function unTruc(unTruc = 12, uneOption = false, ...valeurs){
    console.log(unTruc);
    console.log(uneOption);
    console.log(valeurs);
    const [a = 0, b = false, c = 'Compta'] = valeurs;
    console.log(a, b, c);
}

unTruc();
unTruc(13, true, 123.03, 'deebweeb', 101, 56, 85);

let[val01, val02] = [42, 66];
console.log(val01, val02);
/* échanger les valeur entre val01 et val02 */
/*
let valTampon = val01;
val01 = val02;
val02 = valTampon;
*/
[val01, val02] = [val02, val01];

console.log(val01, val02);

/* utiliser la fonction de filtrage des doublons, récupération des réponse en destructuration */
const tabNumbers = [5, 56, 2, 3004, 2, 5, 28, 49, 3004];
const [numbersFiltered, numbersDouble] =  trouverDoublons(tabNumbers);

console.log('Tableau non filtré', tabNumbers);
console.log('Tableau filtré', numbersFiltered);
console.log('Les doublons', numbersDouble);

/* la destructuration fonctionne aussi avec les objets ! */

const jeanNeige = {
    lastName: 'Sno',
    firstName: 'Jon',
    job: 'NightWatch',
    knowledge(){
        return `You 'now notin' ${this.firstName} ${this.lastName} !`;
    }
};

console.log(jeanNeige.firstName);
console.log(jeanNeige.knowledge());

const {firstName, job} = jeanNeige;

console.log(firstName);
console.log(job);

const {
    lastName: prenom1,
    firstName: nom1,
} = jeanNeige;

console.log(nom1, prenom1);

const perso1 = {
    nom: 'LeCanard',
    prenom: 'Herbert',
    coupSpecial: function(){
        return 'Pichenette';
    }
}

const perso2 = {
    nom: 'LeDragon',
    prenom: 'Marvin',
    coupSpecial: function(){
        return 'TONG DEUM !!';
    }
}

console.log(perso1, perso1.coupSpecial(), perso2, perso2.coupSpecial());
[perso1.coupSpecial, perso2.coupSpecial] = [perso2.coupSpecial, perso1.coupSpecial];
console.log(perso1, perso1.coupSpecial(), perso2, perso2.coupSpecial());

/* 

créer une fonction avec en paramètre un taux, une liste de prix.

la fonction renvoie un tableau avec les prix sur lesquel le taux est appliqué

function tauxPromo(taux, ...prixHT){
    // code
    return tabTTC;
}

*/

function tauxPromo(taux, ...prixHT){
    prixHT.map((element, index)=>{
        prixHT[index] = element*taux;
    });
    return prixHT;
}
const tauxTTC = 1.1;
console.log(`le taux appliqué : ${tauxTTC}`,tauxPromo(tauxTTC, 23, 56, 80));