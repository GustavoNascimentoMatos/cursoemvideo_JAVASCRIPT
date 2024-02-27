function verificar () {
    var dia = new Date()
    var ano = dia.getFullYear()
    var form_ano = window.document.getElementById('i_txtano')
 
    var res = document.querySelector('div#res')

    if (Number(form_ano.value.length) == 0 || Number(form_ano.value) > ano) {
        window.alert(`[ERRO]`)
    } else {
        var form_sex = document.getElementsByName('n_sex')
        var idade = ano - Number(form_ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (form_sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 5) {
                img.setAttribute('src', '_imagens/bebe_m.png')
            }else if (idade >= 5 && idade < 13) {
                img.setAttribute('src', '_imagens/crianca_m.png')
            } else if (idade >= 13 && idade < 21) {
                img.setAttribute('src', '_imagens/adolecente_m.png')
            } else if (idade >= 21 && idade < 30) {
                img.setAttribute('src', '_imagens/jovem_m.png')
            } else if (idade >= 30 && idade < 60) {
                img.setAttribute('src', '_imagens/adulto_m.png')
            } else {
                img.setAttribute('src', '_imagens/idoso_m.png')
            }
        } else if (form_sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 5) {
                img.setAttribute('src', '_imagens/bebe_f.png')
            }else if (idade >= 5 && idade < 13) {
                img.setAttribute('src', '_imagens/crianca_f.png')
            } else if (idade >= 13 && idade < 21) {
                img.setAttribute('src', '_imagens/adolecente_f.png')
            } else if (idade >= 21 && idade < 30) {
                img.setAttribute('src', '_imagens/jovem_f.png')
            } else if (idade >= 30 && idade < 60) {
                img.setAttribute('src', '_imagens/adulto_f.png')
            } else {
                img.setAttribute('src', '_imagens/idoso_f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}