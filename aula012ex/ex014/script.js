function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        msg.innerHTML += `<br>Bom dia!`
        img.src = '_imagens/fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora > 12 && hora < 18){
        msg.innerHTML += `<br>Boa tarde!`
        img.src = '_imagens/fototarde.png'
        document.body.style.background = '#FCCFA6'
    } else {
        msg.innerHTML += `<br>Boa noite!`
        img.src = '_imagens/fotonoite.png'
        document.body.style.background = '#372A46'
    }
}