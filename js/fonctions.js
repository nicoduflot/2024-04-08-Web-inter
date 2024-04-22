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

        let tableauDeFruits = [
            'banane',
            'tomate',
            'pêche',
            'banane',
            'tomate',
            'banane',
            'fraise',
            'tomate',
            'pêche',
            'banane',
            'tomate'
        ];

        let tableauxDoublons = [];