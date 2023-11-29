// mi creo la funzione generatrice di celle

function cellGenerator(number){
    const element = document.createElement("div");
    element.classList.add("square");
    element.style.width= "calc(100% / 10)";
    element.style.height= "calc(100% / 10)";
    element.innerText= number;
    return element;
}

// mi collego al elemento del dom in cui dovro iniettare il codice
const grid= document.getElementById("grid");

//mi collego al bottone che fara eseguire la creazione
const button= document.getElementById("genera")

// inserisco l'evento al quale corrispondera la creazione della griglia
button.addEventListener("click", function(){

//eseguo il ciclo for per la creazione della griglia
  for(let i=1; i<=100; i++){
        let cell= cellGenerator(i);
        grid.appendChild(cell);    
    }  
})


    





