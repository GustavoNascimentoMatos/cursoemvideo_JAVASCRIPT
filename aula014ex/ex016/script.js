function contar(){

    var inicio = window.document.getElementById('txt_i_inicio')
    var fim = window.document.getElementById('txt_i_fim')
    var passo = window.document.getElementById('txt_i_passo')
    var res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert(`[ERRO] Faltam dados!`)
    } else{
        res.innerHTML = 'Contando:<br>'

        var n_inicio = Number(inicio.value)
        var n_fim = Number(fim.value)
        var n_passo = Number(passo.value)

        if (n_passo <= 0){
            window.alert(`[ERRO] Passo inválido! Considerando Passo 1!`)
            n_passo = 1
        }

        if(n_inicio < n_fim){
            //Contagem crescente
            for (var cont = n_inicio; cont <= n_fim; cont += n_passo){
                res.innerHTML += (`${cont} \u{1F449} `)
            }
        }else {
            //Contagem decrescente
            for (var cont = n_inicio; cont >= n_fim; cont -= n_passo){
                res.innerHTML += (`${cont} \u{1F449} `)
            }
        }
        res.innerHTML += (`\u{1F3C1}`)
    }
}