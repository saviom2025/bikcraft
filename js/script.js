// link ativo
const links = document.querySelectorAll(".header-menu li a");
function menu(event) {
  const link = event.href;
  const url = window.location.href;
  if (url.includes(link)) {
    event.classList.add("ativo");
  }
}

links.forEach(menu);

// parametro
const url = new URLSearchParams(location.search);
function seleciona(parametro) {
  const element = document.getElementById(parametro);
  if (element) {
    element.checked = true;
  }
}
url.forEach(seleciona);
// pergunta frenquente
const perguntas = document.querySelectorAll(".perguntas button");
function addClass(event) {
  const pergunta = event.currentTarget;
  const control = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(control);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}
function eventPergunta(pergunta) {
  pergunta.addEventListener("click", addClass);
}
perguntas.forEach(eventPergunta);
// galeria
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const container = document.querySelector(".bicicleta-imagens");
function trocarImagem(event) {
  const imagem = event.currentTarget;
  const verifica = matchMedia("(min-width: 1000px)").matches;

  if (verifica) {
    container.prepend(imagem);
  }
}
function eventGaleria(img) {
  img.addEventListener("click", trocarImagem);
}
galeria.forEach(eventGaleria);
// plugins

if (window.SimpleAnime) {
  new SimpleAnime();
}
//plugin externo
if (window.ClipboardJS) {
  new ClipboardJS(".introducao-conteudo p");
}
