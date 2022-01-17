let num = [5,4,8,5,2]
console.log(`nosso vetor é ${num}`)
num.push(6,7,8)
num.sort()
console.log(num.indexOf(8))
/*for(let pos=0; pos<num.length; pos++) {
    console.log(`Repetindo os valores: ${num[pos]}`)
}
if (num.length<10) {
    console.log('sua posição é menor que 10')
}
else {
    console.log('sua posição é maior que 10')
} 
/*for (let pos in num) {
    console.log (`a posição ${pos} tem o valor ${num[pos]}`)
}*/