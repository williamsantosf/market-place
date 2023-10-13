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


//1. Primeiro criamos a função que DICIONÁRIO e exclui o produto do docionário
function removerDoCarrinho (idProduto){                 // 5. função recebe como parâmetro o idProduto 
    delete idsProdutoCarrinhoComQuantidade[idProduto];  // 5.1 acessa o docionário e remove o produto do dicionário pelo idProduto     
    renderizarProdutosCarrinho();                       // 5.2 renderiza o carrinho novamente com base nos dados do dicionário.      
}

function incrementarQuantidadeProduto(idProduto) {
  idsProdutoCarrinhoComQuantidade[idProduto]++;
  atualizarInformacaoQuantidade(idProduto); 
}

function decrementarQuantidadeProduto(idProduto) {   // 7. Agora atualizamos a função decrementar, que também será capaz de remover um produto do carrinho                
    if (idsProdutoCarrinhoComQuantidade[idProduto] === 1){ // 7.1 A condicional checa se a quantidade do produto no dicionário é igual a 1.
        removerDoCarrinho(idProduto);                // 7.2 Se a condição for verdadeira, a função remover carrinho será acionada.           
        return;                                      // 7.3 e o fluxo retorna, ou seja, acaba. Caso contrário contonua a decrementar.                
    }
  idsProdutoCarrinhoComQuantidade[idProduto]--;
  atualizarInformacaoQuantidade(idProduto); 
}

function atualizarInformacaoQuantidade(idProduto) {
  document.getElementById(`quantidade-${idProduto}`).innerText =
    idsProdutoCarrinhoComQuantidade[idProduto];
}

//2. Criamos a função desenharProdutoCarrinho para que, após deleção, o os produtos sejam atualizados com base nas informações do dicionário.
//Ou seja, o trecho de código desde o momento é encontrado no catálogo e colocado no carrinho, com todas as suas funcionalidades, agora passa a ser uma ,função separada.
function desenharProdutoNoCarrinho (idProduto){
  const produto = catalogo.find((p) => p.id === idProduto);
  
  const containerProdutosCarrinho =
    document.getElementById("produtos-carrinho");
  
  const elementoArticle = document.createElement("article"); 
  
  const articleClasses = ["flex", "bg-slate-100","rounded-lg", "p-1", "relative"];
  
  for (const articleClass of articleClasses){ 
    elementoArticle.classList.add(articleClass);
  } //adicionado o id no botão que remove o produto do carrinho
    const cartaoProdutoCarrinho = `
    <button id="remover-item-${produto.id}" class="absolute top-0 right-2"><i 
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
  containerProdutosCarrinho.appendChild(elementoArticle);

  document
    .getElementById(`decrementar-produto-${idProduto}`)
    .addEventListener("click", () => decrementarQuantidadeProduto(produto.id));

    document
    .getElementById(`incrementar-produto-${idProduto}`)
    .addEventListener("click", () => incrementarQuantidadeProduto(produto.id));

    document
    .getElementById(`remover-item-${produto.id}`)                      //6.1 recuperamos o elemento do HTML, no caso o "X" que remove o botão                        
    .addEventListener("click", () => removerDoCarrinho(produto.id));   //6.2 adicionamos o evento ao clicar no X que execura a função d eremover do carrinho                        
}

//4.A função renderizar produtos carrinho, será responsável por refazer o containerProdutosCarrinho, com base nas informações contidas no dicionário. Sendo:
function renderizarProdutosCarrinho (){                      //4.1 criação da função renderizar carrinho  
    const containerProdutosCarrinho=                         //4.2 criação da variável que acessar o HTML do container de produtos,
    document.getElementById("produtos-carrinho");            //o produtos-carrinho
    containerProdutosCarrinho.innerHTML = "";                //4.3 injetamos um HTML vazio na variável

    for (const idProduto in idsProdutoCarrinhoComQuantidade){//4.4 criamos um loop for para percorrer o dicionário e 
        desenharProdutoNoCarrinho(idProduto);                //executar a função de desenhar o produto para cada idProduto no dcionário.
    }
}

export function adicionarAoCarrinho(idProduto) {
  if (idProduto in idsProdutoCarrinhoComQuantidade) { 
    incrementarQuantidadeProduto(idProduto);
    return; 
  }
  idsProdutoCarrinhoComQuantidade[idProduto] = 1;
  desenharProdutoNoCarrinho(idProduto); //3. Todo o trecho de código que estava aqui, agora é apenas uma função, que terá o mesmo efeito.
}