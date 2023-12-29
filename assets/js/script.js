let botaoMenos=document.getElementById("decrementa")
let botaoMais=document.getElementById("incrementa")
let mostraNum=document.querySelector("div")

let numeroAtual=0;
const exibeResultado=()=>{
        mostraNum.textContent= numeroAtual; 
        mostraNum.style.color = numeroAtual > 0 ? 'green' : (numeroAtual < 0 ? 'red' : 'white');  
    }
      

const aumenta=()=>{
   numeroAtual++;
   exibeResultado();
}

const diminui=()=>{
    numeroAtual--;
    exibeResultado();
}


botaoMais.addEventListener("click",aumenta)   
botaoMenos.addEventListener("click",diminui)
  




