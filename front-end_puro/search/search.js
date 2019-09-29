function pesquisando(){

    let input = document.querySelector("#pesquisa");
    let elemento = input.value.toUpperCase();
    let produtos = document.querySelector(".produtos");
    let bloco = produtos.getElementsByTagName("div");

    for(let i = 0; i < bloco.length; i++){
        let li = bloco[i].getElementsByTagName("p")[0]; 
        texto = li.textContent || li.innerText;
        texto.toUpperCase().indexOf(elemento) > -1 ? bloco[i].style.display = "block" : bloco[i].style.display = "none";
    }

}
