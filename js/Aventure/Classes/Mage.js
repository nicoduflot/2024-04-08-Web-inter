import { randomize } from "../Modules/Utils.js";
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
            message = message + this.attaquer(personnage);
            message = message + this.attaquer(personnage);
            this.modifierP('PAA', -1);
        }else{
            message = message + 'pas assez de points d\'aventure pour faire une boule de feu !';
        }
        return message;
    }

    coupSpecial(personnage){
        return this.bouleDeFeu(personnage)
    }
}