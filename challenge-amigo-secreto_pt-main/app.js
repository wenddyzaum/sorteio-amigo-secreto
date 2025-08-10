// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo na lista
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
   
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";

}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

// Função para sortear um amigo aleatoriamente e removê-lo do array
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    // Valida se há amigos cadastrados
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    // Gera índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Remove o amigo sorteado do array e guarda o nome
    let amigoSorteado = amigos.splice(indiceAleatorio, 1)[0];

    // Atualiza a lista de amigos na tela
    atualizarLista();

    // Exibe o resultado
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}