/*
c'est dans les premières lignes d'un fichier de module qu'on importe 
les différentes bibliothèques (ensemble de fonctions, de fichiers, de config, etc.)
dont on va avoir besoin pour éxécuter les instructions JS de Modules.js
*/

/* Imports des modules */

import * as other from './Others.js';
import loaded, {s, sA} from './Utils.js';
import Company from './Company.js';
import Asso from './Company.js';
import AnotherCompany from './Another.js';

loaded(function(){

    console.log(other);
    console.log(other.test());

    console.log(s('body > header'));
    console.log(sA('p'));


    const myFirm = new Company('Agence tous risque');
    console.log(myFirm);
    console.log(myFirm.constructor.name);

    const myAsso = new Asso('L\'Antre du jeux');
    console.log(myAsso);
    console.log(myAsso.constructor.name);
    
    const customCompany = new AnotherCompany('Nike', 'Just do it');
    console.log(customCompany);
    console.log(customCompany.constructor.name);

});
