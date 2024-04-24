/* la syntaxe switch */

const data = 14;

switch(data){
    case 13:
        console.log('pas de chance');
    break;
    case 22:
        console.log('c\'est les flics');
    break;
    case 12:
    case 14:
        console.log('c\'est 12 ou 14');
    break;
    case '':
    default:
        console.log('quand aucun résultat ne correspond');
}
/* switch remplace aisément ce type de if imbriqué : */
/*
if(data === 13){
    console.log('pas de chance');
}else if(data === 22){
    console.log('c\'est les flics');
}else if(data === 12 || data === 14){
    console.log('c\'est 12 ou 14');
}else{
    console.log('quand aucun résultat ne correspond');
}
*/

/* switch true */
switch(true){
    case ( (data+1) === 14 ):
        console.log('c\'est 14');
    case ( (data%2) === 0 ):
        console.log('c\'est paire');
    break;
    case ( (data%2) === 1 ):
        console.log('c\'est impaire');
    break;
    default:
        console.log(' 1 + 1 ça fait deux, banane');
}

