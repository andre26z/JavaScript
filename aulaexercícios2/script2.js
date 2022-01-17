function verificar() { 
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')
if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('ERRO verifique as informações e prossiga')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade >=1 && idade < 6){ 
            img.setAttribute('src', 'menino1-5.png')
        } else if (idade < 14 ) {
            img.setAttribute('src', 'menino6-14.png')
        
        } else if (idade < 30) {
            img.setAttribute('src', 'menino15-30.png')

        } else if (idade < 59) {
            img.setAttribute('src', 'menino31-59.png')

        } else {
            img.setAttribute('src', 'menino60.png')

        }
    } else if (fsex[1].checked) {
        gênero = 'Mulher'
        if (idade >=1 && idade < 6){ 
            img.setAttribute('src', 'menina1-5.png')
        } else if (idade < 14 ) {
            img.setAttribute('src', 'menina6-14.png')
        
        } else if (idade < 30) {
            img.setAttribute('src', 'menina15-30.png')

        } else if (idade < 59) {
            img.setAttribute('src', 'menina31-59.png')

        } else {
            img.setAttribute('src', 'menina60.png')
        }
    }
    res.style.textAling = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    res.appendChild(img)
    }
}
