/**
 * Fonction raccourci pour ne plus avoir a écrire window.addEventListener('click', function(){})
 * @param {*} callbackFunction 
 */

function loaded(callbackFunction){
    window.addEventListener('DOMContentLoaded', callbackFunction);
}

/**
 * 
 * @param {string} selector 
 * @returns 
 */
function s(selector){
    return document.querySelector(selector);
}

/**
 * 
 * @param {string} selector 
 * @returns 
 */
function sA(selector){
    return document.querySelectorAll(selector);
}

/**
 * 
 * @param {string} selector 
 * @returns 
 */
function q(selector){
    const collection = document.querySelectorAll(selector);
    return (collection.length > 1)? collection : collection[0];
}