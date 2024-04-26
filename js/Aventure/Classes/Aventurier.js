import { randomize } from "../Modules/Utils.js";
import Arme from "./Arme.js";

export default class Aventurier{
    constructor(prenom, nom)
    {
        /* attributs décidés par le joueurs */
        this.prenom = prenom;
        this.nom = nom;
        /* attributs déterminés ou calculés par la classe */
        this.niveau  = 1;
        this.bagarre = 3;
        this.cerveau = 3;
        this._PVBase = this.bagarre * 20;
        this.PVActuels = this.getPv;
        this._PABase = this.cerveau + this.niveau;
        this.PAActuels = this.getPa;
        this.arme = new Arme();
    }

    get getPv(){
        return this._PVBase;
    }

    /**
     * @param {number} nbPV
     */
    set setPV(nbPV){
        this._PVBase = this._PVBase + nbPV;
    }
    
    get getPa(){
        return this._PABase;
    }

    /**
     * @param {number} nbPa
     */
    set setPa(nbPa){
        this._PABase = this._PABase + nbPa;
    }

    deuxD6PlusSkill(skill = 0){
        return randomize(1, 6) + randomize(1, 6) + skill;
    }

    /**
     * 
     * @param {string} type - type de point (PV, PVA, PA, PAA)
     * @param {*} P - nombre de point a modifier (positif ou négatif)
     */
    modifierP(type, P){
        switch(type){
            case 'PV':
                this.setPV = this.getPV + P;
            break;
            case 'PVA':
                if(this.PVActuels + P <= this.getPv){
                    this.PVActuels = this.PVActuels + P;
                }else{
                    this.PVActuels = this.getPv;
                }
            break;
            case 'PA':
                this.setPa = this.getPa + P;
            break;
            case 'PAA':
                if(this.PAActuels + P <= this.getPa){
                    this.PAActuels = this.PAActuels + P;
                }else{
                    this.PAActuels = this.getPa;
                }
            break;
        }
        return true;
    }

    attaquer(ennemi){
        const dg = this.arme.calculerDegat();
        /*console.log(this.arme.dg);*/
        const score = this.deuxD6PlusSkill(this.bagarre);
        /*
        si score <= 6 => attaque ratée
        si 7 <= score < 10 attaque réussie mais arrondi sup(dg / 2) 
        si 10 <= score < 12 attaque réussie dg norm
        si score === 12 attaque réussie dg norm + 1d6 dg
        */

        let dgTotaux = 0;
        let message = '';
        switch(true){
            case (score < 7):
                message = `Attaque ratée (score : ${score}), 0 dégâts occasionnés\n`;
            break;
            case (score >= 7 && score < 10):
                dgTotaux = Math.ceil(dg / 2);
                message = `Attaque réussie de peu (score : ${score}), ${dgTotaux} dégâts occasionnés\n`;
            break;
            case (score >= 10 && score <= 11):
                dgTotaux = dg
                message = `Attaque réussie (score : ${score}), ${dgTotaux} dégâts occasionnés\n`;
            break;
            case (score > 11):
                const bonus = randomize(1, 6);
                dgTotaux = dg + bonus;
                message = `Attaque critique (score : ${score}), ${dg} + ${bonus} = ${dgTotaux} dégâts occasionnés\n`;
            break;
        }
        ennemi.modifierP('PVA', -dgTotaux);
        return message;
    }

    soigner(personnage = this){
        let message = `${this.prenom} ${this.nom} tente de soigner ${personnage.prenom}\n`;
        if(this.PAActuels - 1 >= 0){
            const soin = this.deuxD6PlusSkill(this.cerveau);
            personnage.modifierP('PVA', soin);
            if(personnage.PVActuels + soin <= personnage.getPV){
                message = message + `Le soin procure ${soin} PV\n santé : ${personnage.PVActuels} / ${personnage.getPv} PV`;
            } else {
                message = message  +`Le soin procure ${soin} PV\nSanté maximale atteinte : ${personnage.PVActuels} / ${personnage.getPv} PV`;
            }
            this.modifierP('PAA', -1);
        }else{
            message = message + 'pas assez de points d\'aventure pour appliquer des soins';
        }

        return message;
    }

    coupSpecial(personnage){
        let message = `${this.prenom} ${this.nom} tente un coup spécial sur ${personnage.prenom}\n`;
        if(this.PAActuels - 1 >= 0){
            const dDgBase = this.arme.dg;
            this.arme.dg = this.arme.dg + 1;
            message = message + this.attaquer(personnage);
            this.arme.dg = dDgBase;
            this.modifierP('PAA', -1);
        }else{
            message = message + 'pas assez de points d\'aventure pour faire un coup spécial';
        }
        return message;
    }
}