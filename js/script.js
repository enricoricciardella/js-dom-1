
//Estraggo l'ID della Lampadina spenta
const whiteLamp = document.getElementById("white_lamp");
console.log(whiteLamp);
// const bodybg = document.getElementsByClassName("bodybg")[0];
// console.log(bodybg);

//Estraggo il bottone Accendi
const btnAccendi = document.getElementById("btnAccendi");
console.log(btnAccendi);


btnAccendi.addEventListener("click", function(){
    //dalla lampadina spenta a quella accesa
    if(whiteLamp.src.includes("white_lamp.png")){
        whiteLamp.src = "./img/yellow_lamp.png";
        //testo bottone che cambia
        btnAccendi.textContent = "Spegni"
        //Cambio colore bottone a rosso con le scritte bianche
        btnAccendi.style.backgroundColor ="red"
        btnAccendi.style.color = "white"
        //Cambio colore dello sfondo assegnandoglielo a body
        document.body.style.backgroundColor = "yellow";
    } else{
        //dalla lampadina accesa di prima, a spenta
        whiteLamp.src = "./img/white_lamp.png"
        btnAccendi.textContent = "Accendi"
        //Cambio colore al bottone a verde con le scritte bianche
        btnAccendi.style.backgroundColor ="green"
        btnAccendi.style.color = "white"
        //Cambio colore dello sfondo assegnandoglielo al body
        document.body.style.backgroundColor = "black";
    }
})