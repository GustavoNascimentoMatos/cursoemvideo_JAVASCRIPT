//5! = 5x4x3x2x1

function fatorial(numero){
    let fatorial = 1
    for(let cont = numero; cont > 1; cont--){
        fatorial *= cont
    }
    return fatorial
}

console.log(fatorial(5))