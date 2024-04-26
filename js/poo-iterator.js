loaded(function(){
    /* Iterator */
    /*
    un itérator est un objet itérable, possèdant ses propres méthodes, comme Map() et Set()
    */

    /* on peut créer un iterator via une classe ou un objet literal */

    class MyIterator{
        constructor(...elements){
            /* dans le constructeur, au moins un des attributs doit être un tableau */
            this.elements = elements;
            this.size = this.count();
        }

        add(...valeurs){
            for(let value of valeurs){
                this.elements.push(value);
            }
            this.size = this.count();
        }

        count(){
            return this.elements.length;
        }
        /*
        il faut maintenant déclarer le concept itérateur de l'objet
        Il faut définir quelle sera la porpriété de l'objet qui sera l'itérable dans l'objet.
        On déclare alors le Symbole (Symbol) Itérateur de l'objet
        */
        [Symbol.iterator](){
            let index = 0;
            let elements = this.elements;
            return{
                next(){
                    /*
                    next est un generator
                    il va renvoyer au fur et à mesure, l'une après l'autre, les données qui reçoit / trouve.
                    Il attends deux type de données : value - done
                    value représente la valeur actuelle des éléments itérés, 
                    done est un booléen.
                    Tant que done est faux, next() continue son traitement
                    */
                    return{
                        value: elements[index++],
                        done: elements.length < index
                    }
                }
            }
        }
    }

    const myMap = new Set();
    myMap.add('toto').add('tata');

    const monIterateur = new MyIterator('toto', 12, 36, 'kowabounga');

    console.log(myMap);
    console.log(monIterateur);
    monIterateur.add('tutu');
    console.log(monIterateur);

    for(let value of monIterateur){
        console.log(value);
    }

    /*
    generator
    Une fonction qui retourne plusieurs valeurs
    Une fonction utilise généralement return, une fois que return est atteint (ou éxécuté) la fonction s'arrête.
    Un generator n'utilise pas return mais yield
    Yield = rendre / récolter
    Pour spécifier qu'une fonction agis en tant que generator,
    on le spécifie à l'aide du caractère * lors de la déclaration function
    function* mafonction(){
        //code
        yield ... ;
    }
    */

    function returnEven(min, max){
        let result = [];
        for(let i = min; i <= max; i = i +1){
            if( 0 === (i % 2 )){
                result.push(i);
            }
        }
        return result;
    }

    console.log(returnEven(3, 25));

    /* 
    yoda code : 
        comparer le non variable au variable au lieu de comparer le variable au non variable 
    */

    /*
    // en java
    String a = 'Chaîne';
    a.equal('Chaîne'); // retourne true
    
    String b = null;
    b.equal('Chaîne'); // retourne une erreur de type NullPointerException

    // en yoda code pour éviter l'erreur et avoir le résultat du test
    'Chaîne'.equal(b); // retourne false

    */

    /*
    avec un generator
    */

    function* valeursPaires(min, max){
        for(let i = min; i <= max; i = i +1){
            if( 0 === (i % 2 )){
                yield i;
            }
        }
    }

    /*console.log(valeursPaires(3, 25));*/
    /* la commande précédente n'affiche rien, car elle attends qu'on récolter une a une les données qu'elle renvoie */

    for(let value of valeursPaires(3, 25)){
        console.log(value);
    }

    /* 
    mini exo generator
    créer un géenerator de lancer de dés polyèdres

    let cpt = 1;
    for(let score of xDy(3, 6)){
        console.log(`lancé ${cpt} : ${score}`);
        cpt = cpt + 1;
    }
    */

    /* on a randomize */

    function* xDy(nbD, nbFaces){

    }


});