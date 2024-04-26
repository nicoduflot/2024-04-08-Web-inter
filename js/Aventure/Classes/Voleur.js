import { randomize } from "../Modules/Utils.js";
import Arme from "./Arme.js";
import Aventurier from "./Aventurier.js";

export default class Voleur extends Aventurier{
    constructor(prenom, nom)
    {
        /* attributs décidés par le joueurs */
        super(prenom, nom);
        this.bagarre = 3;
        this.cerveau = 4;
        this._PVBase = this.bagarre * 20;
        this.PVActuels = this.getPv;
        this._PABase = this.cerveau + this.niveau;
        this.PAActuels = this.getPa;
        this.arme = new Arme('Dague', 2);
    }

    backStab(personnage){
        let message = `${this.prenom} ${this.nom} tente un backstab sur ${personnage.prenom}\n`;
        const bonus = randomize(1, 6);
        if(this.PAActuels - 1 >= 0){
            const dg = this.arme.calculerDegat(bonus);
            message = `Backstab, réussite automatique, ${dg} dégâts occasionnés\n`;
            this.modifierP('PAA', -1);
            personnage.modifierP('PVA', -dg);
        }else{
            message = message + 'pas assez de points d\'aventure pour faire un backstab !';
        }
        return message;
    }

    coupSpecial(personnage){
        let message = '';
        /* le coup spécial du voleur ne fonctionne que s'il n'a pas été vu par la victime, ic on ne gère pas ce paramètre, il passe à chaque fois */
        if(1 === 1){
            message = this.backStab(personnage);
        }else{
            message = `la position de ${this.prenom} ne permet pas le coup spécial`;
        }
        return message;
    }
}