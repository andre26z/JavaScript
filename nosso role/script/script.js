function descobrir(){
var lista1 = document.getElementById("lista1").value;
var lista2 = document.getElementById("lista2").value;
var res = document.getElementById("res");
/* o var lista1 e lista2 já pegou o value, só o value da opção que a pessoa escolheu vale*/


if (lista1 % 2===0 && lista2 % 2===0) res.innerHTML='Você Ganhou um Beijo na Boca!';  /* valor da lista % 2 === 0 isso quer dizer que todo número divisivel por 2 for true a mesnagem deu certo aparece*/
    

else res.innerHTML='Você Levou um Tapa na Cara!'
}
