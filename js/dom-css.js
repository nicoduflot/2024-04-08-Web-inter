

/*  la page est chargée */
loaded(function(){
    s('#btn').addEventListener('click', function(){
        const cible = s('#cible');
        if(cible.hasAttribute('style')){
            cible.removeAttribute('style');
            console.log(cible.style.cssText);
        }else{
            /*
            cible.style.borderWidth = '2px';
            cible.style.borderColor = 'darkmagenta';
            cible.style.borderStyle = 'dashed';
            */
            /*
            cible.style.setProperty('border-width', '2px');
            cible.style.setProperty('border-color', 'darkmagenta');
            cible.style.setProperty('border-style', 'dashed');
            */
            cible.style.cssText = 'border-width: 2px; border-color: darkmagenta; border-style: dashed;';
            console.log(cible.style.cssText);

        }
    });

    /* faire bouger le carre */
    s('#gauche').addEventListener('click', ()=>s('#carre').className = 'gauche');
    s('#centre').addEventListener('click', ()=>s('#carre').className = '');
    s('#droite').addEventListener('click', ()=>s('#carre').className = 'droite');

});