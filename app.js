//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Arrays que irão armazenar nomes
let amigos = [];
let nomesSorteados = [];

//Função para adicionar amigos

function adicionarAmigo() {
    let adicionarNomes = document.querySelector('input');
    let nome = adicionarNomes.value.trim();

if(nome == '') {
    alert ('O campo está vazio! Por favor insira um nome.');
} else {
    amigos.push(nome);
    atualizarLista();
    limparCampo();
}

}

//Função para limpar campo
function limparCampo() {
    let adicionarNomes = document.querySelector('input');
     adicionarNomes.value = '';
 }

//Função para Atualizar Lista

function atualizarLista() {
    let lista = document.getElementById ('listaAmigos');
    lista.innerHTML = '';

    for(nomeAmigo of amigos) {
        let escolhido = document.createElement('li');
        escolhido.innerHTML = nomeAmigo;
        lista.appendChild(escolhido);
    }
}

//Função para sortear amigos

function sortearAmigo() {
    if (amigos.length == 0){
        alert('A lista de amigos está vazia. Por favor insira os nomes para o sorteio!');
    } else if (nomesSorteados.length == amigos.length) {
        alert('Todos os amigos já foram sorteados!');
    } else { 
        let nomeAleatorio;
        let amigoEscolhido;
        do {
            nomeAleatorio = Math.floor(Math.random() * amigos.length);
            amigoEscolhido = amigos[nomeAleatorio];
        } while (nomesSorteados.includes(amigoEscolhido)); 

        nomesSorteados.push(amigoEscolhido); 
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `A pessoa sorteada é: ${amigoEscolhido}`;
        
    }
    
}

function limparLista() {
    amigos = [];
    nomesSorteados = [];
    atualizarLista();
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}