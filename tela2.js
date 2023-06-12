var lista = JSON.parse(localStorage.getItem('bdfilmes'))

exibir()

function exibir() {
    var Container = document.getElementById('Filmes')

    lista.forEach(filme => {
        Container.innerHTML += `
                <img src="${filme.linkdogif}">
            `
    })
}