loaded(function(){
    /* 
        Un objet est composé d'au moins un attribut (ou clef) qui contient une valeur ou une méthode 
        méthode : une fonction uniquement utilisable via l'objet
        quand un objet est créé à l'aide d'une classe, c'est une instance de la classe.
        les méthodes statiques sont utilisables en appelant directement la classe qui la contient (mais on ne peut pas les appeler depuis l'objet créé par la classe)
        les méthodes non statiques sont uniquement appelable (utilisables) depuis l'instance d'une classe (un objet)
        */

        /*
        il est possible de créer des objets litéralement (sans passer par une classe)
        */

        /* objet Litéral */

        const monObjet = {
            propriete: 'valeur',
            methode: function(){
                const message = `${this.propriete} OK`;
                return message;
            },
            autreMethode(valeur){
                const message = `${valeur} ne fait pas partie des attributs de l'objet`;
                return message;
            }
        };

        console.log(monObjet);

        for(key in monObjet){
            console.log(key);
            console.log(typeof monObjet[key], monObjet[key]);
        }

        /*
        Les objets js sont prototypés => ils possèdent un constructeur
        */

        function Humain(nom, prenom, age){
            this.nom = nom;
            this.prenom = prenom;
            this._age = age;
            this.esperanceDeVie = this._age + randomize(10, 30);
        }

        Humain.prototype.monNom = function(){
            return `Je suis ${this.prenom} ${this.nom}`;
        }

        Humain.crier = function(cri = ''){
            return `${cri} RRRRRRR`;
        }

        const monHumain = new Humain('LeSage', 'Craô', 35);

        console.log(monHumain);
        console.log(monHumain.monNom());
        console.log(Humain.crier());
        console.log(Humain.crier('PAR CROM !'));

        /*
        Utiliser class
        le terme class est arrivé avec ES6
        À la difference des langages forts, les classes JS n'ont pas encore la possibilité de rendre les attributs ou les méthodes privées

        Pour représenter aux développeurs qu'un attribut ou une méthode s'utilise de façon privée, on utilisera une convention d'écriture
        */

        class Voiture{
            /* la voiture, comme l'humain, a besoin d'une méthode constructeur */
            constructor(marque, modele, couleur){
                this._marque = marque;
                this._modele = modele;
                this.couleur = couleur;
                this._options = [];
                this._ignition = false;
            }

            /* 
            Si un attribut est privé, pour pouvoir être modifié ou récupéré, on doit passer par des méthodes particulières : 
                getter et setter
            */

            get getMarque(){
                return this._marque;
            }

            get getModele(){
                return this._modele
            }

            get getOptions(){
                return this._options;
            }
            
            /**
             * @param {*} optionName
             */
            set setOptions(optionName){
                this._options.push(optionName);
            }

            get getIgnition(){
                return this._ignition;
            }

            /**
             * @param {bool} state
             */
            set setIgnition(state){
                this._ignition = state;
            }
            
            /*
            toutes les voitures démarrent ou s'arrètent, roulent, etc.
            pour cela, ma voiture possède ses méthodes
            */

            demarrer(){
                if(this.getIgnition){
                    return `la ${this.constructor.name} est déjà démarrée`;
                }else{
                    this.setIgnition = true;
                    return `la ${this.constructor.name} démarre`;
                }
            }
            
            couperContact(){
                if(!this.getIgnition){
                    return `le contact est déjà coupé`;
                }else{
                    this.setIgnition = false;
                    return `le contact est coupé`;
                }
            }
            
            rouler(){
                if(this.getIgnition){
                    return `La ${this.constructor.name} roule`;
                }else{
                    return `le contact est coupé`;
                }
            }

            /* Méthode privée */
            _methodePrivee(){
                return null;
            }

            /* Méthode statique */
            static klaxonner(){
                return 'POUEEEEEET ! POUEEEEEET !';
            }

        }

        const maPremiereBagnole = new Voiture('Renault', 'R21 partner', 'Blanche');

        console.log(maPremiereBagnole);
        console.log(maPremiereBagnole.constructor.name);
        console.log(maPremiereBagnole.couleur);
        console.log(maPremiereBagnole.getMarque);
        console.log(maPremiereBagnole.getModele);
        console.log(maPremiereBagnole.getOptions);
        maPremiereBagnole.setOptions = 'autoradio';
        maPremiereBagnole.setOptions = 'abs';
        console.log(maPremiereBagnole.getOptions);
        console.log(maPremiereBagnole.couperContact());
        console.log(maPremiereBagnole.demarrer());
        console.log(maPremiereBagnole.rouler());
        console.log(maPremiereBagnole.couperContact());
        console.log(Voiture.klaxonner());

        /* 
        Considérons que Voiture est la classe de base de tous les véhicule de type B
        Une Ambulance est une extension d'un Voiture
        Créons une ambulance
        */

        class Ambulance extends Voiture{
            constructor(marque, modele, couleur){
                super(marque, modele, couleur);
                if(this.couleur.toLowerCase() !== 'blanc'){
                    this.couleur = 'Blanc';
                }
                this._options = [];
                this._ignition = false;
                this._sirene = false;
            }

            get getSirene(){
                return this._sirene;
            }

            /**
             * @param {bool} state
             */
            set setSirene(state){
                this._sirene = state;
            }

            toggleSirene(){
                this.setSirene = (this.getSirene)? false: true;
            }

            demarrer(){
                if(this.getIgnition){
                    return `l'a '${this.constructor.name} est déjà démarrée`;
                }else{
                    let message = `l'${this.constructor.name} démarre`;
                    this.setIgnition = true;
                    message = message + ( (this.getSirene)? '\nPIN PON PIN PON PIN PON !': '' );
                    return message;
                }
            }
        }

        const amublanceBobo = new Ambulance('Renault', 'R21 break', 'Rouge');
        console.log(amublanceBobo);
        console.log(amublanceBobo.demarrer());
        console.log(amublanceBobo.couperContact());
        amublanceBobo.toggleSirene();
        console.log(amublanceBobo.demarrer());

        /* mini exo sur les classes */

        /* créer une classe mère 
        Compte 
            Attributs :
            - nom 
            - prenom
            - solde
            Méthodes
            - retirer de l'argent
            - ajouter de l'argent
        
        une classe fille CompteCourant
            Attributs :
            - nom 
            - prenom
            - solde
            - _codePin
            Méthodes
            - retirer de l'argent
            - ajouter de l'argent
            - payer avec la carte
        */

        class Compte{
            constructor(nom, prenom, solde){
                this.nom = nom;
                this.prenom = prenom;
                this.solde = (parseFloat(solde)?parseFloat(solde) : 0);
            }

            retirerArgent(montant){
                const montantRetirer = (parseFloat(montant))?parseFloat(montant): 0;
                this.solde = this.solde - montantRetirer;
                if(montantRetirer === 0){
                    return `montant de ${montant} inconnu, aucun montant n'a été retiré du solde ${ (this.solde >= 0)? 'crediteur': 'débiteur' } : ${this.solde}€`;
                }else{
                    return `${montantRetirer} € retiré(s),\nsolde ${ (this.solde >= 0)? 'crediteur': 'débiteur' } : ${this.solde}€`;
                }
            }

            ajouterArgent(montant){
                const montantRetirer = (parseFloat(montant))?parseFloat(montant): 0;
                this.solde = this.solde + montantRetirer;
                if(montantRetirer === 0){
                    return `montant de ${montant} inconnu, aucun montant n'a été ajouté au solde ${ (this.solde >= 0)? 'crediteur': 'débiteur' } : ${this.solde}€`;
                }else{
                    return `${montantRetirer} € ajouté(s), solde ${ (this.solde >= 0)? 'crediteur': 'débiteur' } : ${this.solde}€`;
                }
            }
        }

        class CompteCourant extends Compte{
            constructor(nom, prenom, solde, codePin){
                super(nom, prenom, solde);
                this._codePin = codePin;
            }

            get getCodePin(){
                return this._codePin;
            }

            /**
             * 
             * @param {number} montant 
             * @param {number} codePin 
             * @returns 
             */
            payerParCarte(montant, codePin){
                if(this.getCodePin === codePin && parseFloat(montant)){
                    return `Un paiement de ${montant} € a été effectué par carte.\n${this.retirerArgent(montant)}`;
                }else{
                    return `Une tentative de paiement par carte de ${montant} € a échoué`;
                }
            }
        }

        const monCompteCourant = new CompteCourant('Duflot', 'Nicolas', 'toto');
        console.log(monCompteCourant);
        console.log(monCompteCourant.ajouterArgent(2500));
        console.log(monCompteCourant.payerParCarte(23));
        console.log(monCompteCourant.solde);
        console.log(monCompteCourant.retirerArgent(150));

        /*
        après l'exo
        Ajouter ensemble
        une classe fille CompteInteret
            Attributs :
            - nom 
            - prenom
            - solde
            - tauxInteret
        Methodes
            - retirer de l'argent
            - ajouter de l'argent
            - créditer les intérêts sur le solde
        
        */

    });