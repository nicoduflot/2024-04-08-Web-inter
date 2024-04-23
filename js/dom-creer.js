window.addEventListener('DOMContentLoaded', function(){
    const tabEventTarget = document.querySelector('table.tabEventTarget');
    tabEventTarget.addEventListener('click', function(event){
        const line = event.target.parentNode;
        const col = event.target;
        console.log(line.dataset);
        console.log(col.dataset);
    });
});