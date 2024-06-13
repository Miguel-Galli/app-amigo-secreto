let amigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
    if(nomeAmigo.value == ''){
        alert('Digite um nome para adicionar');
        return;
    }

    if(amigos.includes(nomeAmigo.value)){
        alert('Esse amigo já foi adicionado');
        return;
    }
    
    
    let lista = document.getElementById('lista-amigos');
    amigos.push(nomeAmigo.value);
    
    if(lista.textContent == ''){
        lista.textContent = nomeAmigo.value;
    } else {
        lista.textContent = lista.textContent + ', '+ nomeAmigo.value;
    }
    nomeAmigo.value = '';
}

function sortear(){
    if(amigos <=  4){
        alert('Adicone pelo menos 4 pessoas');
        return;
    }

    embaralha(amigos);

    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {
        

        if(i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else{
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
       
        
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}


function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}
