function addItemList(listItem){
    if(listItem !== ''){
        /*
        on peut transformer une collection d'éléments HTML en un tableau, pour pouvoir utiliser la méthode .include() des tableaux qui permet de vérifier s'il y a déja au moins une occurence d'un élément
        */
        const tabLi = Array.from(document.querySelectorAll('#toDoList li'));
        /*
        tabLi est un tableau contenant des éléments de liste <li></li>, on le parcours avec .map(), dans la callback du .map(), on récupère le contenu texte de la li et on la retourne.
        À la sortie du .map(), on regarde si la chaîne de caratère de l'élément parcouru est semblable à l'élément que l'on veut ajouter dans la liste.
        Dès qu'il y a correspondance (doublon) on sort prématurément de la fonction, sinon, on continue et l'élément est ajouté à la liste
        */
        if(
            ( tabLi.map(function(li){
                return li.textContent.toLowerCase();
            }).includes(listItem.toLowerCase()) )
        ){
            return false;
        }

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(listItem));
        li.addEventListener('click', function(){
            this.remove();
        });
        document.getElementById('toDoList').appendChild(li);
        return true;
    }
}

window.addEventListener('DOMContentLoaded', function(){
    const tabEventTarget = document.querySelector('table.tabEventTarget');
    tabEventTarget.addEventListener('click', function(event){
        const line = event.target.parentNode;
        const column = event.target;
        const conteneur = document.getElementById('conteneur');
        
        let tr = null;

        if(conteneur.lastChild.nodeName === 'TR'){
            if(conteneur.lastChild.children.length === 5){
                tr = document.createElement('tr');
                conteneur.appendChild(tr);
            }else{
                tr = conteneur.lastChild;
            }
        }else{
            tr = document.createElement('tr');
            conteneur.appendChild(tr);
        }
        
        const td = document.createElement('td');
        td.setAttribute('data-col', column.dataset.col);
        td.setAttribute('data-row', line.dataset.line);
        const content = document.createTextNode(`${column.dataset.col} - ${line.dataset.line}`);
        td.addEventListener('click', function(){
            document.getElementById('coordonnees').innerText = this.innerText;
        });
        td.appendChild(content);
        tr.append(td);        
    });
    
    /* preventdefault() */
    allPLinks = document.querySelectorAll('a.testPreventLink');
    allPLinks.forEach(element => {
        element.addEventListener('click', function(event){
            event.preventDefault();
            console.log(this.innerText);
        });
    });


    /* 
    ajouter un span dans le paragraphe
    
    - répérer le clic sur le bouton
    - créer un span
    - dans le span, ajouter la classe testSpan
    - dans le span, ajouter le numéro du span créé
        - si c'est le premier, n° 1, le deuxième : n° 2, etc
    - si on clique sur le span, on le supprime du DOM (chercher dans la doc)
    - le compteur de span reste inchangé

    */

    let cpt = 1;

    const addSpan = document.getElementById('addSpan');
    addSpan.addEventListener('click', function(){
        const span = document.createElement('span');
        span.classList.add('testSpan');
        /* span.className = 'testSpan' */
        const content = document.createTextNode(`n°${cpt}`);
        cpt = cpt + 1;
        span.addEventListener('click', function(){
            this.remove();
        });
        span.append(content);
        document.getElementById('pSpan').append(span);
    });

    const inputItem = document.getElementById('listItem');
    document.getElementById('addItem').addEventListener('click', function(){
        /* appel fonction d'ajoût dans la liste */
        addItemList(inputItem.value);
        inputItem.value = '';
        inputItem.focus();
    });
    
    inputItem.addEventListener('keyup', function(event){
        if(event.key === 'Enter'){
            addItemList(inputItem.value);
            inputItem.value = '';
            inputItem.focus();
        }
    });

});