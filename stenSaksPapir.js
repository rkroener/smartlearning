
//Et par variabler til at starte op på
var spillerValg; var computerValg;
var muligeTraek = ["sten","saks","papir"];
var divResultatPrint = document.getElementById("resultatPrint");


//computerens valg skal sættes vilkårligt
function randomValg(){
   computerValg = muligeTraek[Math.floor(Math.random()*3)];
}


//De to spilleres valg sammenlignes for at finde en vinder
function sammenlign(spiller1, spiller2){
    if(spiller1 === spiller2){
        resultat(0);
    } else if(
        (spiller1 === "sten" && spiller2 === "saks")  ||
        (spiller1 === "saks" && spiller2 === "papir") ||
        (spiller1 === "papir" && spiller2 === "sten")){
            resultat(1);
    } else {resultat(2)};
}

//Samling af de mulige udfald af spillet
function resultat(spilUdfald){
    switch(spilUdfald){
        case 0:
            divResultatPrint.innerHTML = 
            "Uafgjort. <br><br> Computer: "+ computerValg + "<br> Dig: " + spillerValg;
            break;
        case 1: 
            divResultatPrint.innerHTML = 
            "Du vinder. <br><br> Computer: " + computerValg + "<br> Dig: " + spillerValg;
            break;
        case 2:
        divResultatPrint.innerHTML = 
        "Computer vinder. <br><br> Computer: " + computerValg + "<br> Dig: " + spillerValg;
            break;
    }
}

//funktionen initieres af event listener og kører de andre funktioner
function startSpil(){
        spillerValg = prompt("Indtast sten, saks eller papir")
        randomValg();
        sammenlign(spillerValg,computerValg);
}

