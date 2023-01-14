var button =  document.querySelector("#btnTraduzir")
var busca;

var palavras=[
    {pt : "Maçã", en : "Apple"},
    {pt : "Cachorro", en : "Dog"},
    {pt : "Gato", en : "Cat"},
]
function traduzir(){
    busca = document.getElementById('Busca').value
    var resultado=document.getElementById('resultado')
var traducao =  palavras.find((palavra)=> palavra.pt == busca)
resultado.innerText = traducao.en

}