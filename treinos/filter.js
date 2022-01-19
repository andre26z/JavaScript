const num = [1 ,2 , 4 , 5 , 32 , 85]

const numpar = num.filter((valor) => {
    if (valor % 2 === 0) return valor;
});

console.log(numpar);

const nomes = [ 'andre', 'ana', 'baiano', 'bruneti', 'abriao']

const nomesb = nomes.filter((valor) => {
    return valor.charAt(0) === 'b'
})
console.log(nomesb);

const notas = [ 8, 4, 6, 9, 10 ,7 , 6, 5]
const mais7 = notas.filter((valor) =>{
    if (valor > 7) return valor;
});
console.log(mais7);