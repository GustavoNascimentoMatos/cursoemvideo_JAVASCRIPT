let numero = [5,8,2,9,3]

//numero[3] = 6
numero.push(1)

console.log(`Nosso vetor é: ${numero}`)
console.log(`O primeiro valor do vertor é: ${numero[0]}`)
console.log(`O tamanho do vertor é: ${numero.length}`)

numero.sort()
console.log(`Nosso vetor em ondem crescente é: ${numero}`)

let posicao = numero.indexOf(4)

if (posicao == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor esta na posição ${posicao}`)
}
