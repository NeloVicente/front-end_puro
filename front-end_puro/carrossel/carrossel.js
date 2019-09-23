var intervalo = setInterval(time, 4000);

const primeiraImagem = document.querySelector("#slide img:first-child");
const ultimaImagem = document.querySelector("#slide img:last-child");

const primairaLegenda = document.querySelector("#legenda div:first-child");
const ultimaLegenda = document.querySelector("#legenda div:last-child");

const primeiraLinha = document.querySelector("#div-linha img:first-child")
const ultimaLinha = document.querySelector("#div-linha img:last-child")

function time(){

    const ativo = document.querySelector(".ativo");
    const legendaAtivada = document.querySelector(".legendaAtivada");
    const linhaAtivada = document.querySelector(".linhaAtivada")

    if(ativo.nextElementSibling){

        ativo.classList.remove("ativo");        
        ativo.nextElementSibling.classList.add("ativo");

        legendaAtivada.classList.remove("legendaAtivada");      
        legendaAtivada.nextElementSibling.classList.add("legendaAtivada");

        linhaAtivada.classList.remove("linhaAtivada");
        linhaAtivada.nextElementSibling.classList.add("linhaAtivada");
        

    }else{

        ativo.classList.remove("ativo");
        primeiraImagem.classList.add("ativo");

        primairaLegenda.classList.add("legendaAtivada");
        legendaAtivada.classList.remove("legendaAtivada");

        primeiraLinha.classList.add("linhaAtivada");
        linhaAtivada.classList.remove("linhaAtivada");
    }
}

function next(){
    
    clearInterval(intervalo);

    const ativo = document.querySelector(".ativo");
    const legendaAtivada = document.querySelector(".legendaAtivada");
    const linhaAtivada = document.querySelector(".linhaAtivada")

    if(ativo.nextElementSibling){

        ativo.classList.remove("ativo");        
        ativo.nextElementSibling.classList.add("ativo");

        legendaAtivada.classList.remove("legendaAtivada");      
        legendaAtivada.nextElementSibling.classList.add("legendaAtivada");

        linhaAtivada.classList.remove("linhaAtivada");
        linhaAtivada.nextElementSibling.classList.add("linhaAtivada");
        

    }else{

        ativo.classList.remove("ativo");
        primeiraImagem.classList.add("ativo");

        primairaLegenda.classList.add("legendaAtivada");
        legendaAtivada.classList.remove("legendaAtivada");

        primeiraLinha.classList.add("linhaAtivada");
        linhaAtivada.classList.remove("linhaAtivada");

    }
    
    intervalo = setInterval(time, 4000);
}

function prev(){
   
    clearInterval(intervalo)
    
    const ativo = document.querySelector(".ativo");
    const legendaAtivada = document.querySelector(".legendaAtivada");
    const linhaAtivada = document.querySelector(".linhaAtivada")

    if(ativo.previousElementSibling){

        ativo.classList.remove("ativo");
        ativo.previousElementSibling.classList.add("ativo");

        legendaAtivada.classList.remove("legendaAtivada");      
        legendaAtivada.previousElementSibling.classList.add("legendaAtivada");

        linhaAtivada.classList.remove("linhaAtivada");
        linhaAtivada.previousElementSibling.classList.add("linhaAtivada")
        

    }else{

        ativo.classList.remove("ativo");
        ultimaImagem.classList.add("ativo");

        legendaAtivada.classList.remove("legendaAtivada");
        ultimaLegenda.classList.add("legendaAtivada");
        
        linhaAtivada.classList.remove("linhaAtivada");
        ultimaLinha.classList.add("linhaAtivada")
    }

    intervalo = setInterval(time, 4000);

}

function linha(a){
    clearInterval(intervalo)

    const ativo = document.querySelector(".ativo");
    const img = document.querySelector("#img-" + a)
    const legendaAtivada = document.querySelector(".legendaAtivada");
    const legenda = document.querySelector("#legenda-" + a)
    const linhaAtivada = document.querySelector(".linhaAtivada")
    const linha = document.querySelector("#linha-" + a)

    ativo.classList.remove("ativo");
    img.classList.add("ativo")

    legendaAtivada.classList.remove("legendaAtivada");  
    legenda.classList.add("legendaAtivada")
    
    linhaAtivada.classList.remove("linhaAtivada");
    linha.classList.add("linhaAtivada")

    intervalo = setInterval(time, 4000);
}
