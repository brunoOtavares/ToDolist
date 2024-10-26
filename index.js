function adicionar(){
    const lista = document.getElementById('texto')
    const UL = document.getElementById('ElementList')
    const lisFeita = document.createElement('li')
    lisFeita.className = 'list'
    lisFeita.innerText = lista.value
    
    if (lista.value.trim() === "") {
        alert("Por favor, insira um item.");
        return;
    }

    const Remove = document.createElement('button')
    Remove.innerText = 'remove'
    Remove.className = 'Btn'
    Remove.onclick = function () {
        UL.removeChild(lisFeita)
    }
    lisFeita.appendChild(Remove)
    UL.appendChild(lisFeita)

    lista.value = ''


}