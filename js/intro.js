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

/**
 * Types principaux : Primitif - Référence
 * 
 * Primitif
 * number       => nombre (entier, flottant, etc. )
 * bool         => booléen ( vrai true ou faux false )
 * 
 * Référence
 * String       => chaîne de caractère
 * Array        => tableau de données
 * Object       => objet
 * JSON         => JavaScript Obbjecty Notation
 * 
 * 'toto': {
 *      'age': 12,
 *      'hobby': 'Mange des BN',
 *      'adresse': {
 *          'voie': 'Rue de la tranquilité',
 *          'numero': '12'
 *      }
 * }
 * 
 */

/**
 * 
 * Opérateurs
 * 
 * Mathématiques
 * 
 * +    => addition (autrefois utilisé aussi pour la concaténation INTERDIT X)
 * -    => soustraction
 * *    => multiplication
 * **   => Puissance (remplace Math.pow())
 *      => math.pow(2, 3);
 *      => 2**3
 * /    => division 10 / 3 = 3.33333333
 * %    => modulo   10 % 3 = 1
 * 
 * il n'y a pas de quoi réccupérer le quotient
 * 
 * let res = parseInt(10/3);
 * 
 *          => parseInt(3.333333) => 3;
 * 
 * ++   =>  Incrémentation on augmente de 1 
 * let cpt = 1;
 * cpt ++ <=> cpt = cpte + 1;
 * 
 * --   =>  Décrémentation on diminue de 1
 * cpt-- <=> cpt = cpt - 1;
 * 
 */

let cpt = 0;
cpt = cpt + 1; /* cpt = 1 */
console.log(cpt++); /* affiche 1 puis cpt passe à 2 */
console.log(cpt); /* affiche 2 */
console.log(cpt + 1); /* affiche le résultat de cpt + 1 => 3 */

console.log(++cpt); /* affiche 4 */

cpt += 1; /* cpt = cpt + 1 */
console.log(cpt); /* affiche 5 */

let titi = 'toto';

titi += ' tutu';

console.log(titi);

/**
 * Logiques
 * 
 * ET (AND)
 * &&
 *  a && b => a est vrai et b est vrai => vrai
 *  a && b => a est vrai et b est faux => faux
 *  a && b => a est faux et b est faux => faux
 *  a && b => a est faux et b est vrai => faux
 * 
 * OU (OR)
 * || 
 *  a || b => a est vrai et b est vrai => vrai
 *  a || b => a est vrai et b est faux => vrai
 *  a || b => a est faux et b est faux => faux
 *  a || b => a est faux et b est vrai => vrai
 * 
 * OU EXCLUSIF BINAIRE (XOR)
 * ^
 * seulement une des condition doit être vrai pour renvoyer vrai
 *  a ^ b => a est vrai et b est vrai => faux
 *  a ^ b => a est vrai et b est faux => vrai
 *  a ^ b => a est faux et b est faux => faux
 *  a ^ b => a est faux et b est vrai => vrai
 * 
 * NON (NOT)
 * ! 
 * vrai est non faux
 * faux est non vrai
 * !a       => a est vrai, !a = faux
 * !a       => a est faux, !a = vrai
 * 
 */

/**
 * Comparaison
 * 
 * <        => inférieur srtictement à
 * >        => supérieur srtictement à
 * <=       => inférieur ou égal à
 * >=       => supérieur ou égal à
 * 
 * ==       => comapraison de valeur (non stricte)
 * ===      => comparaison devaleur ET de type (stricte)
 * 
 * 2 == 2   => vrai
 * 2 == '2' => vrai
 * 
 * 2 === 2  => vrai
 * 2 === '2'=> faux
 * 
 */

/*
        créer deux variables nombre et afficher dans la console
            leur addition
            leur soustraction
            leur multiplication
                 division
                 le modulo
            var1 puissance var2
*/