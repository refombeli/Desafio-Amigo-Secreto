let listaNomes = [];

function adicionarNome() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    let apenasLetras = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
   
    if (nome === '') {
        alert('Por Favor, digite um nome antes de adicionar.')
    } else if(!apenasLetras.test(nome)) {
        alert('Por Favor, digite apenas letras (sem números ou caracteres especiais).');
    } else {
    listaNomes.push(nome);
    atualizarLista();
    input.value = '';
    }
    
}

function atualizarLista () {
    let listaElementos = document.getElementById('listaNomes');
    listaElementos.innerHTML = '';

    for (let nome of listaNomes) {
        let item = document.createElement('li');
        item.textContent = nome;
        listaElementos.appendChild(item);
    }
    limparCampo()
}

function limparCampo() {
    let input = document.querySelector('#amigo');
    input.value = '';
}

function sortearAmigo(){
    if (listaNomes.length <= 1) {
        alert ('Adicionar mais amigos e sortear novamente');
        return;
    }
    let amigoSorteado = listaNomes[Math.floor(Math.random()*listaNomes.length)];
    console.log(amigoSorteado);

    let mensagemTela = document.querySelector('h1');
    let reiniciarJogo = document.querySelector('h2');
    let reiniciarBotao = document.querySelector('button');
    mensagemTela.innerHTML = `Parabéns <b>${amigoSorteado}</b>, você foi Sorteado(a)!!!!`;
    reiniciarJogo.textContent = 'Deseja Iniciar o Sorteio novamente? Clique em Reiniciar';
    reiniciarBotao.textContent = 'Reiniciar';
    reiniciarBotao.setAttribute('onclick','reiniciarJogo()');
    limparLista();
}

function reiniciarJogo() {
    mensageminicial();
    limparLista();
    let botao = document.querySelector('button');
    botao.setAttribute('onclick','adicionarNome()');
}
    
function limparLista() {
    listaNomes = [];

    let listaElementos = document.getElementById('listaNomes');
    if (listaElementos) {
        listaElementos.innerHTML = '';
    }

    let input = document.getElementById('amigo');
    if (input) {
        input.value = '';
    }
    
}

mensageminicial();

function mensageminicial() {
    let mensagem = document.querySelector('h1');
    let mensagem2 = document.querySelector('h2');
    let mensagembotao = document.querySelector('button');
    mensagem.textContent = 'Amigo Secreto';
    mensagem2.textContent = 'Digite o nome dos seus amigos';
    mensagembotao.textContent = 'Adicionar';

}

