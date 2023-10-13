import { catalogo } from "./utilidades";

const idsProdutoCarrinhoComQuantidade = {};

function abrirCarrinho() {
  document.getElementById("carrinho").classList.remove("right-[-360px]");
  document.getElementById("carrinho").classList.add("right-[0px]");
}

function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("right-[0px]");
  document.getElementById("carrinho").classList.add("right-[-360px]");
}

export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
  const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

  botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
  botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
}

function incrementarQuantidadeProduto(idProduto) {
  idsProdutoCarrinhoComQuantidade[idProduto]++;
  atualizarInformacaoQuantidade(idProduto); 
}

function decrementarQuantidadeProduto(idProduto) {
  idsProdutoCarrinhoComQuantidade[idProduto]--;
  atualizarInformacaoQuantidade(idProduto); 
}

function atualizarInformacaoQuantidade(idProduto) {
  document.getElementById(`quantidade-${idProduto}`).innerText =
    idsProdutoCarrinhoComQuantidade[idProduto];
}

export function adicionarAoCarrinho(idProduto) {
  if (idProduto in idsProdutoCarrinhoComQuantidade) { 
    incrementarQuantidadeProduto(idProduto);
    return; 
  }
  idsProdutoCarrinhoComQuantidade[idProduto] = 1; 
  const produto = catalogo.find((p) => p.id === idProduto);
  
  const containerProdutosCarrinho =
    document.getElementById("produtos-carrinho");
  
//2. criamos a constante que vai recriar o elemento do HTML, nesse caso o article, uma vez que o card do produto está todo dentro da tag <article></article>.
  const elementoArticle = document.createElement("article"); 
  
//3. Criamos uma variável que recebe um array com todos as classes que queremos criar simultaneamente no article  
  const articleClasses = ["flex", "bg-slate-100","rounded-lg", "p-1", "relative"];
//elementoArticle.classList.add();  caso fóssemos incluir cada prop da classe separadamente, o que não é viável.
  
//4. Agora, criamos um loop for para percorrer a lista criada acima, que em seguida acessa a lista de classes do elementoArticle e adiciona uma a uma dinamicamente  
  for (const articleClass of articleClasses){ //Lê-se: para cada articleClass de articleClasses, acesse a lista de classes do elementoArticle, e adicione a articleClass
    elementoArticle.classList.add(articleClass);
  }
    const cartaoProdutoCarrinho = `
    <button id="fechar-carrinho" class="absolute top-0 right-2"><i 
        class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i></button>
      <img src="./assets/img/${produto.nomeArquivoImagem}" alt="Carrinho: ${
    produto.nome
  }" class="h-24 rounded-lg">
      <div class="p-2 flex flex-col justify-between text-lg">
        <p class="text-slate-900 text-sm">${produto.nome}</p>
        <p class="text-slate-400 text-xs">Tamanho: M</p>
        <p class="text-green-700 text-lg">R$ ${produto.preco}</p>
      </div>
      <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
        <button id="decrementar-produto-${produto.id}">-</button>
        <p id="quantidade-${produto.id}" class="ml-2">${
    idsProdutoCarrinhoComQuantidade[produto.id]}</p>
        <button id="incrementar-produto-${
          produto.id
        }" class="ml-2">+</button>        
      </div>`;

  elementoArticle.innerHTML= cartaoProdutoCarrinho;
  //5. Após criar o elementoArticle e montar o cartaoProdutoCarrinho, acessamos o innerHTML do elementoArticle e incluímos o cartaoProdutoCarrinho      

  containerProdutosCarrinho.appendChild(elementoArticle);
  //6. Acessamos o containerProdutosCarrinho, e através da prop .appendChild adicionamos o elementoArticle, já totalmente montado

  document
    .getElementById(`decrementar-produto-${idProduto}`)
    .addEventListener("click", () => decrementarQuantidadeProduto(produto.id));

    document
    .getElementById(`incrementar-produto-${idProduto}`)
    .addEventListener("click", () => incrementarQuantidadeProduto(produto.id));
}

//1. Não é possível alterar a quantidade dos produtos adicionados anteriormente no carrinho, pois o navegador, a cada vez que incluimos um produto diferente,
//refaz todo o HTML anterior para adicionar o novo elemento. Sendo assim, os cartões anteriores se tornam simples HTML, sem JavaScript, pois as funcionalidades
//estão somente no último produto inserido. Vamos resolver isso nos próximos passos.