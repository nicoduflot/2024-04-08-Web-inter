console.log(sessionStorage);

console.log(localStorage);
console.log(document.cookie);
loaded(function(){
    /* sessioStorage */
    
    s('#usernameLogged').innerHTML = sessionStorage.getItem('username');

    s('#sessionUserNameLog').addEventListener('click', function(){
        const username = s('#sessionUser').value;
        if(username !== ''){
            sessionStorage.setItem('username', username);
            s('#usernameLogged').innerHTML = sessionStorage.getItem('username');
            s('#sessionUser').value = '';
        }
    });

    s('#sessionDeleteUsername').addEventListener('click', function(){
        sessionStorage.removeItem('username');
        s('#usernameLogged').innerHTML = sessionStorage.getItem('username');
    });
    
    s('#sessionClearSession').addEventListener('click', function(){
        sessionStorage.clear();
        s('#usernameLogged').innerHTML = sessionStorage.getItem('username');
    });

    /* localStorage  */
    s('#usernameLocalLogged').innerHTML = localStorage.getItem('username');

    s('#localUserNameLog').addEventListener('click', function(){
        const username = s('#localUser').value;
        if(username !== ''){
            localStorage.setItem('username', username);
            s('#usernameLocalLogged').innerHTML = localStorage.getItem('username');
            s('#localUser').value = '';
        }
    });

    s('#localDeleteUsername').addEventListener('click', function(){
        localStorage.removeItem('username');
        s('#usernameLocalLogged').innerHTML = localStorage.getItem('username');
    });
    
    s('#localClearLocal').addEventListener('click', function(){
        localStorage.clear();
        s('#usernameLocalLogged').innerHTML = localStorage.getItem('username');
    });

    /* cookie */
    /* première sécurité d'un cookie : sa date d'expiratio / sa durée maximale d'utilisation */

    /* les date en JS */

    const dateNow = new Date();
    console.log(dateNow);
    console.log(dateNow.getMonth());
    console.log(dateNow.getDay());
    console.log(dateNow.toUTCString());
    console.log(dateNow.getTime());
    console.log(dateNow.getTime() + 24 * 60 * 60 * 1000);
    console.log( dateNow.setTime( (dateNow.getTime() + 24 * 60 * 60 * 1000) ));
    console.log(dateNow.toUTCString());
    console.log(dateNow.getDay());
    console.log(dateNow);

    const uneJournee = 3600;
    /*
        document.cookie = `monCookie=mavaleur; max-age=${uneJournee}; path=/js-storage.html; Samesite=Strict; secure`;
        document.cookie = `monCookie2=une autre valeur; max-age=${uneJournee+3600}; path=/; Samesite=Strict; secure`;
    */

    console.log('panier1'.indexOf('panier1'));
    console.log('panier12'.indexOf('panier12'));
    console.log('panier12'.indexOf('toto'));

    if(getCookie('username')){
        s('#cookieLogUsername').innerHTML = getCookie('username');
    }

    s('#logCookie').addEventListener('click', function(){
        const username = s('#cookieUsername').value;
        if(username !== ''){
            setCookie('username', username, 1);
            s('#cookieLogUsername').innerHTML = getCookie('username');
            s('#cookieUsername').value = '';
        }
    });
    
    s('#unlogCookie').addEventListener('click', function(){
        setCookie('username');
        s('#cookieLogUsername').innerHTML = '';
        s('#cookieUsername').value = '';
    });
});