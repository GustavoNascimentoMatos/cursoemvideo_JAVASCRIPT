//5! = 5x4x3x2x1

function fatorial(numero){
    if(numero ==1){
        return 1
    }else{
        return numero * fatorial(numero-1)
    }
}

console.log(fatorial(5))