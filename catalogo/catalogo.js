var listaUsuarios = []

listaUsuarios = JSON.parse(localStorage.getItem('bdfilmes'))
if (listaUsuarios == null) {
    listaUsuarios = []
}
exibirUsuarios()


function validarCadastro(nome, escolha, linkdogif) {

    if (nome != '' && escolha != '' && linkdogif != '') {
        return true
    } else {
        return false
    }
}

function botaoCadastrar() {
    var nome = document.getElementById("nome").value
    var escolha = document.getElementById("escolha").value
    var linkdogif = document.getElementById("linkdogif").value

    var possoCadastrar = validarCadastro(nome, escolha, linkdogif)
    if (possoCadastrar == false) {
        alert('Verifique os dados antes de cadastrar')
        return
    }
    var usuario = {
        nome: nome,
        escolha: escolha,
        linkdogif: linkdogif
    }
    listaUsuarios.push(usuario)

    localStorage.setItem('bdfilmes', JSON.stringify(listaUsuarios))

    exibirImagem()

    document.getElementById("nome").value = ''
    document.getElementById("escolha").value = ''
    document.getElementById("linkdogif").value = ''
    document.getElementById("nome").focus()

    alert('Usuário cadastrado com sucesso. Faça o login.')
}

function exibirImagem() {
    var link = document.getElementById("linkdogif").value
    document.getElementById("resultado").innerHTML =
        `<img src="${link}" alt=""
    class="cadastroMidia">`
    location.href = "../index.html"
}
