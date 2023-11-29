// mi creo la funzione generatrice di celle

function cellGenerator(){
    const element = document.createElement("div");
    element.classList.add("square");
    element.style.width= "calc(100% / 10)";
    element.style.height= "calc(100% / 10)";
    return element;
}

// mi collego al elemento del dom in cui dovro iniettare il codice
const grid= document.getElementById("grid");

const button= document.getElementById("genera")
//eseguo il ciclo for per la creazione della griglia
for(let i=1; i<=100; i++){
    let cell= cellGenerator()
    grid.appendChild(cell)
}




