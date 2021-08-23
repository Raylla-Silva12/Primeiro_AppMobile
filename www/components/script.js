
window.onload = function(){
  const valor1 = document.querySelector("#valor1");
  const valor2 = document.querySelector("#valor2");
  const multiplicar = document.querySelector("#calc");
  const somar = document.querySelector("#calc");
  const subtrair = document.querySelector("#calc");

  multiplicar.addEventListener("click", function(){
    let resultado = parseFloat(valor1.value) * parseFloat(valor2.value);
    document.querySelector("#resposta1").value = resultado;
  });

  somar.addEventListener("click", function(){
    let resultado = parseFloat(valor1.value) + parseFloat(valor2.value); 
    document.querySelector("#resposta2").value = resultado;
  });

  subtrair.addEventListener("click", function(){
    let resultado = parseFloat(valor1.value) - parseFloat(valor2.value);
    document.querySelector("#resposta3").value = resultado;
  });
}



