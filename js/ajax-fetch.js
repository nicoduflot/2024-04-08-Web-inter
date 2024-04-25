function readableStreamToList(data){
    /*console.log(data.length);*/
    let liste = '<ul>\n';
    for(element in data){
        if((typeof data[element]) === 'object'){
            console.log(element);
            liste = `${liste}\n<li>${element}`;
            liste = `${liste}\n${readableStreamToList(data[element])}`;
            liste = `${liste}\n</li>`;
        }else{
            /*console.log(element);
            console.log(data[element]);*/
            liste = `${liste}\n<li>`;
            liste = `${liste}\n${element} : ${data[element]}`;
            liste = `${liste}\n</li>`;
        }
    }
    /*
    if(data.length != undefined){
        
    }else{
        console.log('pas un tableau d`\'objets json');
    }
    */
    liste = `${liste}\n</ul>`
    return liste;
}   

loaded(function(){
    sA('button.read').forEach(button=>{
        button.addEventListener('click', function(){
            const url = button.dataset.url;
            fetch(url)
            .then(reponse=>{
                return reponse.json();
            })
            .then(data=>{
                //s('#reponse').innerText = data;
                s('#reponse').innerHTML = readableStreamToList(data);
            })
            .catch(error=>{
                s('#reponse').innerText = error.message;
            })
            .finally(function(){
                console.log('traitement terminé');
            });
        });
    });
});