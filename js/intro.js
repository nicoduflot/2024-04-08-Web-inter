/*
// commentaire en une ligne
commentaires en bloc
*/

console.log('toto'); /* toto */
console.log('tata');

var prenom = 'Jean'; /* INTERDIT X */
console.log(prenom);
console.log(prenom, typeof prenom);

let nom = 'Neige';
console.log(nom);

const laPause = 'Café ?';

console.log(laPause);

console.log(prenom + ' ' + nom + ', l\'apprenti gardien du nord, prends un ' + laPause); /* on n'utilise plus la concaténation pour les chaînes de caractères */

/* on utlise à la pace l'interpolation de texte */

/* òÒ à À */

console.log(`${prenom} ${nom}, l'apprenti gardien du nord, prends un ${laPause}`);

console.log(`${125 * 3}`);

function toto(){
    return 'tata';
}

console.log(`j'aime ma ${toto()}`);

console.log(`l'interpolation c'est cool`); /* toléré mais déconseillé */
console.log('l\'interpolation c\'est cool'); /* OUI ! */

console.log(nom, typeof nom);

nom = 1;
console.log(nom, typeof nom);

let tata;
console.log(tata, typeof tata);

tata = 'une chaîne';
console.log(tata, typeof tata);

const LANGFR = 'FR-fr';
const LANGUK = 'EN-uk';
const LANGUS = 'EN-us';
const POUND = '£';
const USD = '$';
const EURO = '€';
const SERVERFR = '255.125.23.1';
const SERVEREN = '255.126.33.5';

function ecomerce(lang, devise, server){
    /*  ....  */
}

ecomerce(LANGUK, POUND, SERVERFR);

