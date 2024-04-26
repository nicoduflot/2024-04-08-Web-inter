import loaded, {s, sA, randomize} from "./Modules/Utils.js";
import Arme from "./Classes/Arme.js";
import Aventurier from "./Classes/Aventurier.js";
import Guerrier from "./Classes/Guerrier.js";

/* début de l'aventure */
loaded(function(){
    
    /*console.log(randomize(1, 20));*/

    /*
    const testArme = new Arme();
    console.log(testArme);
    console.log(testArme.calculerDegat());
    const epee = new Arme('Épée', 3);
    console.log(epee);
    console.log(epee.calculerDegat());
    */

    const monAventurier = new Aventurier('Indiana', 'Jones');
    console.log(monAventurier);
    console.log(monAventurier.deuxD6PlusSkill(monAventurier.cerveau));
    console.log(monAventurier.deuxD6PlusSkill(monAventurier.bagarre));
    
    const monGuerrier = new Guerrier('Geralt', 'De Rivia');
    console.log(monGuerrier);
    console.log(monGuerrier.deuxD6PlusSkill(monGuerrier.cerveau));
    console.log(monGuerrier.deuxD6PlusSkill(monGuerrier.bagarre));
    
    console.log(monGuerrier.PVActuels);
    console.log(monAventurier.attaquer(monGuerrier));
    console.log(monGuerrier.PVActuels);

    console.log(monAventurier.PVActuels);
    console.log(monGuerrier.attaquer(monAventurier));
    console.log(monAventurier.PVActuels);

});