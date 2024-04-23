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
        event.stopPropagation();
        console.log(btnTestezMoi.value);
        console.log(event);
    });

    document.getElementById('ajoutHTML').innerHTML = '<button id="toto">toto</button>';
    const toto = document.querySelector('#toto');
    console.log(toto);
    toto.addEventListener('click', function(event){
        event.stopPropagation();
        console.log('oui ça marche');
    });
    /* 
    ça marche mais ce n'est pas propre.
    il est préférable de créer l'élément à l'aide des méthodes de document 
        - pour créer le bouton
        - ajouter les divers attributs au bouton
        - créer le noeud de texte
        - ajouter le noeud de texte à l'intérieur du bouton
        - ajouter le bouton en enfant de l'élément paragraphe
    */

    /* 
    - abonner le bouton "tester les paragraphes" à l'événement click
    - quand le bouton est cliqué, récupérer tous les paragraphes de la page sauf celui possédant la classe "special"
    - afficher la variable qui aura récupéré tous les paragraphes dans la console
    */

    const allP = document.querySelectorAll('p:not(p.special)');
    document.getElementById('checkP').addEventListener('click', function(){
        console.log(allP);
    });

    allP.forEach(function(element){
        element.addEventListener('click', function(){
            document.getElementById('showP').innerHTML = this.innerHTML;
        });
    });

    const imgOver = document.getElementById('imgOver');
    imgOver.addEventListener('mouseenter', function(){
        this.setAttribute('src', './images/pip-boy-thumb-up.png');
        this.setAttribute('alt', 'pip-boy avec le bras droit');
        this.nextElementSibling.innerHTML = 'Pip boy avec son bras droit';
    });
    
    imgOver.addEventListener('mouseleave', function(){
        this.setAttribute('src', './images/pip-boy-thumb-down.png');
        this.setAttribute('alt', 'pip-boy sans bras droit');
        this.nextElementSibling.innerHTML = 'Pip boy sans son bras droit';
    });

    

});