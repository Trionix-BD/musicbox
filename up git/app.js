var songOne = document.getElementById('PlayOne');

var songTwo = document.getElementById('playTwo');

songOne.addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById('gan1').play();
});

songTwo.addEventListener("click",function(x){
    x.preventDefault();
    document.getElementById('gan2').play();
});

pauseOne.addEventListener("click",function(a){
    a.preventDefault();
    document.getElementById('gan1').pause();
});

pauseTwo.addEventListener("click",function(b){
    b.preventDefault();
    document.getElementById('gan2').pause();
});