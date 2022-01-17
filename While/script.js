function contar(){
    var res = document.querySelector('div#res')
    var ini = document.getElementById ("txtinicio")
    var fim = document.getElementById("txtfim")
    var passo = document.getElementById("txtpasso")

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {

    window.alert('Impossível contar!')

    } else  {
    res.innerHTML = 'Contando: '
    i = Number(ini.value)
    f = Number(fim.value)
    p = Number(passo.value)
    
    if (i < f) {
    for (let c = i; c <= f; c += p) {
        res.innerHTML += `\u{1F449} ${c}`
    }
    }
    else  {
    for ( let c = i; c >= f; c -= p) {
        res.innerHTML += `\u{1F449} ${c}`
    
    }
}  res.innerHTML += `\u{1F449}`
  }
}
