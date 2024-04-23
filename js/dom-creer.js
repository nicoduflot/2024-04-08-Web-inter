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
        
        /* preventdefault() */

    });
});