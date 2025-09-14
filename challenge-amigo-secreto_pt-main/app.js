//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
console.log("JS carregado!");

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
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //serve para limpar a lita antes de atualizar

    for(let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); //criar element <li>
        li.textContent = amigos[i]; //adicionar o nome do amgo
        lista.appendChild(li); //adicionar a lista no html 
    }

}

function sortearAmigo() {
    if (amigos.length === 0) { //verifiar se a lista tá vazia
        alert("Não há amigos na lista!");
        return;
    }

    //sortear um indice/amigo aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //Obter o nome sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    //mostar o resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;

}