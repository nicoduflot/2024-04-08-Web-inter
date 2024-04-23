console.log('début du chargement de la page');
window.addEventListener('DOMContentLoaded', function(event){
    /*
    this.document.addEventListener('click', function(event){
        console.log(event.target);
    });
    */
    console.log(event);
    console.log('la page est chargée, je peux intervenir sur ses éléments');
    console.log(document.getElementsByTagName('p'));
    console.log(document.getElementsByName('stupide'));
    console.log(document.querySelector('p.stupide.toto'));
    console.log(document.querySelector('p.stupide.toto').classList);
    /*const btnTestezMoi = document.querySelector('#testez-moi');*/
    const btnTestezMoi = document.getElementById('testez-moi');
    console.log(btnTestezMoi);
    btnTestezMoi.addEventListener('click', function(event){
        console.log(btnTestezMoi.value);
        console.log(event);
    });

    document.getElementById('ajoutHTML').innerHTML = '<button id="toto">toto</button>';
    const toto = document.querySelector('#toto');
    console.log(toto);
    /* 
    ça marche mais ce n'est pas propre.
    il est préférable de créer l'élément à l'aide des méthodes de document 
        - pour créer le bouton
        - ajouter les divers attributs au bouton
        - créer le noeud de texte
        - ajouter le noeud de texte à l'intérieur du bouton
        - ajouter le bouton en enfant de l'élément paragraphe
    */

});