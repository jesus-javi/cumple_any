let subir= document.getElementById("subir");
let  pasar = document.getElementById("pasar");

subir.onclick=()=>{
    pasar.classList.remove("ver");
    window.setTimeout(function(){
        pasar.classList.add("ver");
    },6000);
};