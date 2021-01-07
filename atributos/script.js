let img = document.getElementById("xbox");

img.addEventListener("click", function () {
  img.src = "/imagens/unlike.png";

  // img.setAttribute("src", "/imagens/document.jpg") -- OUTRO METODO PARA TROCAR A IMAGEM

  // img.setAttribute("id", "like") //-- #### PERMITE ACESSAR UM ATRIBUTO ATRAVÉS DO JAVASCRIPT
});


let lista = document.getElementById("lista");

let num = parseInt(lista.getAttribute("data-num")); //quando coloca o data na frente pode-se opera de outra forma

console.log(lista.dataset.num);

let conteudo = ""

for (let i = 0; i < num; i++){
  conteudo += "<li>" + i + "</li>" //equivalente a A = A + B
} //ENQUANTO I FOR MENOR QUE NUM (10), i ++ ele mesmo, ai vai acontecer a seguinte operação;
//CONTEURO = CONTEUDO + "<li>" + i + </li> -- IRÁ PECORRER DE 0 A 10 E ADICIONAR LI

lista.innerHTML = conteudo;