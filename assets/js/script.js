window.onload = function(){
    document.querySelector(".menuMobile").addEventListener("click", function(){
        if(document.querySelector(".nav-list").style.display == 'flex') {
            document.querySelector(".nav-list").style.display = 'none';
        }else{
            document.querySelector(".nav-list").style.display = 'flex';
        }
    });
};