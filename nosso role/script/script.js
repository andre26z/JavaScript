function descobrir(){
var lista1 = document.getElementById("lista1").value;
var lista2 = document.getElementById("lista2").value;
var res = document.getElementById("res");



if (lista1 % 2===0 && lista2 % 2===0) res.innerHTML='deu certo'; 
    

else res.innerHTML='errado'
}
