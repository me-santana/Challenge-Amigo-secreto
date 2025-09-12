//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let input = document.querySelector("#nomeAmigo");
    let nome = input.value; 


    if (nome == "") {
        alert("Digite um nome.");
        return;
    } 

    amigos.push(nome); //adicionar o nome na lista
    input.value = ""; //limpar o campo pra digitar novamente

    mostrarLista(); //função para saber quem á está na lista. 
}

//atualizando os amigos na tela

function mostrarLista (){
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML = ""; //serve para limpar a lita antes de atualizar
    lista.innerHTML = "<li>" + amigos.join("</li><li>") + "</li>"; // exibir os amigos
}