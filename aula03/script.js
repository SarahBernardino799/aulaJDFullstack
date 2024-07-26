
const inputUsername = document.getElementById("input-username");
const inputTitulo = document.getElementById("input-titulo");
const inputPost = document.getElementById("input-post");
const inputQtdPosts = document.getElementById("qtd-posts");
const botaoPostar = document.getElementById("botao-postar");
const botaoDeletar = document.getElementById("deletar");
const listDePosts = document.getElementById("lista-de-posts");

botaoPostar.addEventListener(
"click",
  function postar() {
 
    for (let x = 1; x <= inputQtdPosts.value; x++) {
      const nome = inputUsername.value;
      const titulo = inputTitulo.value;
      const mensagem = inputPost.value;

      const nomeElemento = document.createElement("p");
      nomeElemento.textContent = nome;
      const tituloElemento = document.createElement("h3");
      tituloElemento.textContent = titulo;
      const mensagemElemento = document.createElement("small");
      mensagemElemento.textContent = mensagem;
      const postLiElement = document.createElement("li");
      postLiElement.appendChild(nomeElemento);
      postLiElement.appendChild(tituloElemento);
      postLiElement.appendChild(mensagemElemento);
      listDePosts.appendChild(postLiElement);
    }
  }
);

botaoDeletar.addEventListener("click", function deletar() {
  const ultimoItemDaLista =
    listDePosts.children[listDePosts.children.length - 1];
  if (ultimoItemDaLista) {
    listDePosts.removeChild(ultimoItemDaLista);
  } else {
    alert("Lista Vazia");
  }
});
