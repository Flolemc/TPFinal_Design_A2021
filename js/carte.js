var conteneurCarte = document.getElementById("carteHeure");
var active = false;

function afficheCarte(){
    var conteneurCarte = document.getElementById("carteHeure");

    if (active == true){
        conteneurCarte.classList.remove("carteActive");
        document.body.style.overflowY = 'scroll';
        active = false;
    } else if(active == false) {
        conteneurCarte.classList.add("carteActive");
        document.body.style.overflowY = 'hidden';
        active = true;
    }
}

function fermerCarte(){
    conteneurCarte.classList.remove("carteActive");
    document.body.style.overflowY = 'scroll';
}