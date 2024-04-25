/*
Collections : 
Objets itérables : 
    - les dictionnaires (ou tableaux associatif) de la classe Map()
    - les collections de la classe Set()
    - les objets itérables créés en utilisant le design pattern Iterator
*/

/* illégal mais qui fonctionne à peu près pâs du tout */

let tabAssoPirate = [];
tabAssoPirate['toto'] = 23;
tabAssoPirate['titi'] = 24;

console.log(tabAssoPirate, typeof tabAssoPirate);

tabAssoPirate.forEach(element=>{
    console.log(element);
});

console.log(tabAssoPirate['titi']);

console.log(tabAssoPirate.slice());
/*
L'équivalent d'un tableau associatif PHP ['clef' => 'valeur', 'autreClef'=> 'autreValeur'];
se trouve avec une instance de la classe Map()
*/

const map = new Map();

console.log(map);

map
.set('lastName', 'Doe')
.set('firstName', 'Jane')
.set('email', 'jane.doe@missing.com')
.set('phone', '0123456789')
.set('phone', '9876543210');

console.log(map);

map.forEach((value, key, data)=>{
    console.log(`${key} : ${value} dans ${data}`);
});

console.log(map.has('email'));
console.log(map.has('toto'));

map.delete('phone');


/* Map() produit un objet itérables, avec ses propores méthodes itératives */
/*
.entries()
.keys()
.values()
*/

/* .entries() */

console.log(`|${ 'KEY'.padEnd(25, ' ') }|${ 'VALUE'.padStart(25, ' ') }|`);
console.log(`|${ ''.padEnd(25, '-') }|${ ''.padStart(25, '-') }|`);

for(let [key, value] of map.entries()){
    console.log(`|${key.padEnd(25, ' ')}|${value.padStart(25, ' ')}|`);
}
console.log(`|${ ''.padEnd(25, '-') }|${ ''.padStart(25, '-') }|`);

/* .keys() */

console.log(`|${ 'KEY'.padEnd(25, ' ') }|${ 'VALUE'.padStart(25, ' ') }|`);
console.log(`|${ ''.padEnd(25, '-') }|${ ''.padStart(25, '-') }|`);

for(let key of map.keys()){
    console.log(`|${key.padEnd(25, ' ')}|${'****'.padStart(25, ' ')}|`);
}

console.log(`|${ ''.padEnd(25, '-') }|${ ''.padStart(25, '-') }|`);
/* .values() */

console.log(`|${ 'KEY'.padEnd(25, ' ') }|${ 'VALUE'.padStart(25, ' ') }|`);
console.log(`|${ ''.padEnd(25, '-') }|${ ''.padStart(25, '-') }|`);

for(let value of map.values()){
    console.log(`|${'****'.padEnd(25, ' ')}|${value.padStart(25, ' ')}|`);
}

map.clear();
console.log(map);

/*
Set()
*/

const set = new Set();
console.log(set);

set
    .add('Sansa')
    .add('Rob')
    .add('Joffrey')
    .add('Sansa')
    .add('Hodor')
    .add('Brandon')
    .add('Oona');

console.log(set);

console.log(`|${ 'KEY'.padEnd(25, ' ') }|${ 'VALUE'.padStart(25, ' ') }|`);
console.log(`|${ ''.padEnd(25, '-') }|${ ''.padStart(25, '-') }|`);

for(let [key, value] of set.entries()){
    console.log(`|${key.padEnd(25, ' ')}|${value.padStart(25, ' ')}|`);
}
console.log(`|${ ''.padEnd(25, '-') }|${ ''.padStart(25, '-') }|`);

/* .keys() */

console.log(`|${ 'KEY'.padEnd(25, ' ') }|${ 'VALUE'.padStart(25, ' ') }|`);
console.log(`|${ ''.padEnd(25, '-') }|${ ''.padStart(25, '-') }|`);

for(let key of set.keys()){
    console.log(`|${key.padEnd(25, ' ')}|${'****'.padStart(25, ' ')}|`);
}

console.log(`|${ ''.padEnd(25, '-') }|${ ''.padStart(25, '-') }|`);
/* .values() */

console.log(`|${ 'KEY'.padEnd(25, ' ') }|${ 'VALUE'.padStart(25, ' ') }|`);
console.log(`|${ ''.padEnd(25, '-') }|${ ''.padStart(25, '-') }|`);

for(let value of set.values()){
    console.log(`|${'****'.padEnd(25, ' ')}|${value.padStart(25, ' ')}|`);
}