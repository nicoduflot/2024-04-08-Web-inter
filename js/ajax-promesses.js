console.log(Math.random());

/* 
un chiffre entre 1 (compris) et 3 (compris) [1, 3]  
Math.random() ]0, 1[
*/

console.log( Math.floor(Math.random()*3 + 1) );

/*
arrondi "mathématique"
Math.round(valeur)
1.2 => 1 
1.6 => 2
1.499999999 => 1
1.5 => 2

arrondi "vers le bas"
Math.floor(valeur)
1.2 => 1 
1.5 => 1
1.8 => 1

arrondi "vers le haut"
Math.ceil(valeur)
1.2 => 2
1.5 => 2
1.8 => 2

*/

function traitementLong(){
    const randError = Math.floor(Math.random()*3 + 1);
    const data = 'Le formateur fait des "blagues" parfois...';

    return new Promise( function(resolve, reject){
        setTimeout(function(){
            
            if(randError !== 2){
                resolve(data);
            }else{
                reject( new Error('L\'information demandée n\'est pas disponible') );
            }

        }, 3000);

    } );

}

async function asyncCall(){
    const result = await traitementLong();

    return result;
}


loaded(function(){
    s('.read').addEventListener('click', function(){
        console.log('avant l\'appel de la fonction asynchrone');
        
        asyncCall()
        .then(function(reponse){
            /* si la promesse a renvoyé un resolve */
            s('#reponse').innerHTML = reponse;
            return 'toto';
        })
        .then(function(uneVar){
            console.log(uneVar);
        })
        .catch(function(error){
            /* si la promesse a renvoyé un reject */
            console.error(error.message);
            s('#reponse').innerHTML = error.message;
        })
        .finally(function(){
            /* optionnel, la fin du traitment quel que soit la réponse resolve ou reject */
            console.log('Traitement de la demande terminé');
        })

        
        console.log('après l\'appel de la fonction asynchrone');
    });
});