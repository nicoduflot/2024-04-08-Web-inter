import { randomize, xDy } from "../Modules/Utils.js";
import Arme from "./Arme.js";
import Aventurier from "./Aventurier.js";

export default class Mage extends Aventurier{
    constructor(prenom, nom)
    {
        /* attributs décidés par le joueurs */
        super(prenom, nom);
        this.bagarre = 2;
        this.cerveau = 4;
        this._PVBase = this.bagarre * 20;
        this.PVActuels = this.getPv;
        this._PABase = this.cerveau + this.niveau * 2;
        this.PAActuels = this.getPa;
        this.arme = new Arme('Bâton', 2);
    }

    bouleDeFeu(personnage){
        let message = `${this.prenom} ${this.nom} tente une boule de feu sur ${personnage.prenom}\n`;
        if(this.PAActuels - 1 >= 0){
            let dg = 0;
            for(let score of xDy(this.getPa, 4)){
                dg = dg + score;
            }
            message = message + `Boule de feu, réussite automatique, ${dg} dégâts occasionnés\n`;
            personnage.modifierP('PVA', -dg);
            this.modifierP('PAA', -1);
        }else{
            message = message + 'pas assez de points d\'aventure pour faire une boule de feu !';
        }
        return message;
    }

    coupSpecial(personnage){
        let message = '';
        /* le coup spécial du mage ne fonctionne que s'il possède une ligne de vue directe sur la victime, ici on ne gère pas ce paramètre, il passe à chaque fois */
        if(1 === 1){
            return this.bouleDeFeu(personnage)
        }else{
            message = `la position de ${this.prenom} ne permet pas le coup spécial`;
        }
        return message;
    }
}