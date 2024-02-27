let txt_numero = window.document.getElementById('txt_i_numero')
let lista = window.document.getElementById('flista')
let res = window.document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(txt_numero.value) && !inLista(txt_numero.value, valores)){
        valores.push(Number(txt_numero.value))
        let item = document.createElement('option')
        item.text = (`Valor: ${txt_numero.value} adicionado.`)
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert(`Valor inválido ou já encontrado na lista.`)
    }
    txt_numero.value = ''
    txt_numero.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert(`Adicione valores antes de finalizar!`)
    }else{
        let tot_elementos = valores.length
        let menor_elemento = valores[0]
        let maior_elemento = valores[0]
        let soma = 0
        let media = 0

        for(let cont in valores){
            if(valores[cont] > maior_elemento){
                maior_elemento = valores[cont]
            }
            if(valores[cont] < menor_elemento){
                menor_elemento = valores[cont]
            }
            soma += valores[cont]
        }

        media = (soma / valores.length)

        res.innerHTML = ''
        if(valores.length == 1){
            res.innerHTML += `<br>Ao todo, temos ${tot_elementos} número cadastrado.`
        }else{
            res.innerHTML += `<br>Ao todo, temos ${tot_elementos} números cadastrados.`
        }
        res.innerHTML += `<br>O valor: ${maior_elemento} foi maior número digitado.`
        res.innerHTML += `<br>O valor: ${menor_elemento} foi menor número digitado.`
        res.innerHTML += `<br>O valor: ${soma} é a soma de todos os digitado.`
        res.innerHTML += `<br>O valor: ${media.toFixed(2)} é a média de todos os digitado.`
    }

}