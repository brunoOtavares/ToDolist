// Função para carregar a lista do localStorage
function carregarLista() {
    const UL = document.getElementById('ElementList');
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

    tarefas.forEach(tarefa => {
        const lisFeita = document.createElement('li');
        lisFeita.className = 'list';
        lisFeita.innerText = tarefa.texto;

        const Remove = document.createElement('button');
        Remove.innerText = 'remove';
        Remove.className = 'Btn';
        Remove.onclick = function () {
            UL.removeChild(lisFeita);
            removerTarefa(tarefa.texto); // Remove do localStorage
        };

        lisFeita.appendChild(Remove);
        UL.appendChild(lisFeita);
    });
}

// Função para adicionar a tarefa
function adicionar() {
    const lista = document.getElementById('texto');
    const UL = document.getElementById('ElementList');

    if (lista.value.trim() === "") {
        alert("Por favor, insira um item.");
        return;
    }

    const lisFeita = document.createElement('li');
    lisFeita.className = 'list';
    lisFeita.innerText = lista.value;

    const Remove = document.createElement('button');
    Remove.innerText = 'remove';
    Remove.className = 'Btn';
    Remove.onclick = function () {
        UL.removeChild(lisFeita);
        removerTarefa(lista.value); // Remove do localStorage
    };

    lisFeita.appendChild(Remove);
    UL.appendChild(lisFeita);

    // Salvar a tarefa no localStorage
    salvarTarefa(lista.value);

    lista.value = ''; // Limpa o campo de entrada
}

// Função para salvar a tarefa no localStorage
function salvarTarefa(tarefaTexto) {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas.push({ texto: tarefaTexto });
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// Função para remover a tarefa do localStorage
function removerTarefa(tarefaTexto) {
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas = tarefas.filter(tarefa => tarefa.texto !== tarefaTexto);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// Carregar a lista ao iniciar a aplicação
window.onload = carregarLista;
