/**
 * Fonction raccourci pour ne plus avoir a écrire window.addEventListener('click', function(){})
 * @param {*} callbackFunction - fonction de rappel a éxécuter une fois que le DOM est entièrement chargé
 */
export default function loaded(callbackFunction){
    window.addEventListener('DOMContentLoaded', callbackFunction);
}

/**
 * Raccourcis de querySelector
 * @param {string} selector - selector : sélecteur CSS de l'élément recherché
 * @returns 
 */
export function s(selector){
    return document.querySelector(selector);
}

/**
 * Raccourcis de querySelectorAll
 * @param {string} selector  - sélecteur CSS des éléments recherchés
 * @returns 
 */
export function sA(selector){
    return document.querySelectorAll(selector);
}

/**
 * Raccourcis de querySelector && querySelectorAll
 * @param {string} selector - sélecteur CSS du ou des éléments recherchés
 * @returns 
 */
export function q(selector){
    const collection = document.querySelectorAll(selector);
    return (collection.length > 1)? collection : collection[0];
}

/**
 * Génère un entier compris entre [min , max]
 * @param {number} min 
 * @param {number} max 
 * @returns
 */
export function randomize(min = 0, max = 0){
    if(isNaN(parseFloat(min)) || isNaN(parseFloat(max))){
        return 0;
    }else{
        if(parseFloat(max) <= parseFloat(min)){
            return 0;
        }else{
            return Math.floor(Math.random() * (parseFloat(max) - parseFloat(min) + 1)) + parseFloat(min);
        }
    }
}

export function* xDy(nbD, nbFaces){
    for(let i = 0; i < nbD; i = i + 1){
        yield randomize(1, nbFaces);
    }
}