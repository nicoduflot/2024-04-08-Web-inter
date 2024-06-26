import { randomize } from "../Modules/Utils.js";
import Arme from "./Arme.js";
import Aventurier from "./Aventurier.js";

export default class Guerrier extends Aventurier{
    constructor(prenom, nom)
    {
        /* attributs décidés par le joueurs */
        super(prenom, nom);
        this.bagarre = 4;
        this.cerveau = 2;
        this._PVBase = this.bagarre * 20;
        this.PVActuels = this.getPv;
        this._PABase = this.cerveau + this.niveau;
        this.PAActuels = this.getPa;
        this.arme = new Arme('Épée', 3);
    }

    doubleAttaque(personnage){
        let message = `${this.prenom} ${this.nom} tente une double attaque sur ${personnage.prenom}\n`;
        if(this.PAActuels - 1 >= 0){
            message = message + this.attaquer(personnage);
            message = message + this.attaquer(personnage);
            this.modifierP('PAA', -1);
        }else{
            message = message + 'pas assez de points d\'aventure pour faire une double attaque';
        }
        return message;
    }

    coupSpecial(personnage){
        return this.doubleAttaque(personnage)
    }
}