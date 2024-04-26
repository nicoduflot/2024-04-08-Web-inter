loaded(function(){
    /*
    La factory va permettre la création d'un objet qui sera en partie l'assempblage de plusieurs objets
    */

    class Employe{
        constructor(lastName){
            this.lastName = lastName;
            this.role = 'Employee';
            this.resAuth = 'User';
            this.parking = 'Non';
        }
    }
    
    class Formateur extends Employe{
        constructor(lastName){
            super(lastName);
            this.role = 'Trainer';
            this.resAuth = 'UserTrainer';
            this.parking = 'Non';
        }
    }
    
    class Manager extends Employe{
        constructor(lastName){
            super(lastName);
            this.role = 'Manager';
            this.resAuth = 'SuperUser';
            this.parking = 'Oui';
        }
    }
    
    class RessourceManager extends Employe{
        constructor(lastName){
            super(lastName);
            this.role = 'HRM';
            this.resAuth = 'RessourceManager';
            this.parking = 'Oui';
        }
    }

    /*
    On utilise (invoque) une factory quand on voudra créer un utilisateur du réseaux de l'entreprise.
    Elle s'appuiera sur la classe Employe et ses classes enfants pour définir certains aspects, elle créera l'utilisateur selon le rôle défini
    */

    class UserFactory{
        /*
        Une factory n'a pas de contructeur, c'est le constructeur de la classe appelée (selon le rôle de l'utilisateur) qui sera utilisé.
        */

        static createUser(
            firstName, lastName, email, phone, city, country, role
        ){
            const info = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                role: role
            };

            const adresse = {
                city: city,
                country: country
            }

            const user = {
                login: email
            }

            /* il faut parfois des méthodes pour un utilisateur, par exemple, déclarer ses heures de travail */
            const methodes = {
                declarerHeures(nbHeures, activite){
                    return `${this.firstName} enregistre ${nbHeures} pour l'activité ${activite}`;
                },
                demandeConges(typeConge, dateDebut, dateFin, demiJournee = false){
                    return `congé ${typeConge} demandé pour ${this.firstName}, du ${dateDebut} au ${dateFin}, demi-journée : ${demiJournee}`;
                }
            };

            /* configurons le type d'employé (Eploye ou classe enfant d'Employe) */
            let reponse = null;
            switch(role){
                case 'Trainer':
                    reponse = new Formateur(lastName);
                break;
                case 'Manager':
                    reponse = new Manager(lastName);
                break;
                case 'HRM':
                    reponse = new RessourceManager(lastName);
                break;
                default:
                    reponse = new Employe(lastName);
            }

            /* reponse contient maintenant une instance de la classe Employe ou une instance d'une classe enfant d'Employe 
            On transforme l'objet réponse en utilisateur en y ajoutant les donnée générée par la factory
            */

            Object.assign(user, info, adresse, methodes, reponse);

            return user;

        }

        static changeRole(user, newRole){
            const newUser = this.createUser(
                user.firstName, user.lastName, user.email, user.phone, user.city, user.country, newRole
            );

            return newUser;
        }
    }

    let nDuflot = UserFactory.createUser('Nicolas', 'Duflot', 'nduflot@dawan.fr', '0123456789', 'Lille', 'France', 'Trainer');
    let hHodor = UserFactory.createUser('Hodor', 'Hodor', 'hhodor@htd.ws', '9876543210', 'LeNord', 'Westeros', 'Employee');

    console.log(nDuflot);
    console.log(hHodor);
    
    hHodor = UserFactory.changeRole(hHodor, 'HRM');
    console.log(hHodor);
    
    console.log(hHodor.declarerHeures(5, 'Tenir la porte'));
    
    console.log(nDuflot.demandeConges('RTT', '2024-05-10', '2024-05-10', false));
});