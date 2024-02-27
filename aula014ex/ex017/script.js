function calcular() {

    var txt_numero = window.document.getElementById('txt_i_numero')
    var sel_tabuada = window.document.getElementById('sel_tabuada')

    if (txt_numero.value.length > 0){
        var n_numero = Number(txt_numero.value)
        sel_tabuada.innerHTML = ''
        for (var cont = 1; cont <= 10; cont ++) {
            var item = document.createElement('option')
            item.text = (`${n_numero} x ${cont} = ${cont * n_numero}`)
            item.value = `sel_tabuada${cont}`
            sel_tabuada.appendChild(item)  
        }
    }else {
        window.alert(`Informe um número!`)
    }
}