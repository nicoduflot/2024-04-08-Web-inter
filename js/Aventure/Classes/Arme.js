import { randomize } from "../Modules/Utils.js";

export default class Arme{
    constructor(nom = 'mains nues', dg = 1){
        this.nom = nom;
        this.dg = dg;
    }

    calculerDegat(){
        let dgTotaux = 0;
        for(let i = 0; i < this.dg; i = i + 1){
            dgTotaux = dgTotaux + randomize(1, 6);
        }
        return dgTotaux;
    }
}