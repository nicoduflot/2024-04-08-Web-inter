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
}