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

function removerDoCarrinho (idProduto){                  
    delete idsProdutoCarrinhoComQuantidade[idProduto]; 
    atualizarPrecoCarrinho(); //2. colocamos a função atualizarPrecoCarrinho em todos os lugares onde ela precisa ser chamada,
    renderizarProdutosCarrinho(); //  ou seja, toda vez que algum evento altera a quantidade no carrinho.                        
}

function incrementarQuantidadeProduto(idProduto) {
  idsProdutoCarrinhoComQuantidade[idProduto]++;
  atualizarPrecoCarrinho(); //2.1 quantidade do carrinho é alterada
  atualizarInformacaoQuantidade(idProduto); 
}

function decrementarQuantidadeProduto(idProduto) {  
    if (idsProdutoCarrinhoComQuantidade[idProduto] === 1){ 
        removerDoCarrinho(idProduto);                
        return;                                      
    }
  idsProdutoCarrinhoComQuantidade[idProduto]--;
  atualizarPrecoCarrinho(); //2.2 quantidade do carrinho é alterada
  atualizarInformacaoQuantidade(idProduto); 
}

function atualizarInformacaoQuantidade(idProduto) {
  document.getElementById(`quantidade-${idProduto}`).innerText =
    idsProdutoCarrinhoComQuantidade[idProduto];
}

function desenharProdutoNoCarrinho (idProduto){
  const produto = catalogo.find((p) => p.id === idProduto);
  
  const containerProdutosCarrinho =
    document.getElementById("produtos-carrinho");
  
  const elementoArticle = document.createElement("article"); 
  
  const articleClasses = ["flex", "bg-slate-100","rounded-lg", "p-1", "relative"];
  
  for (const articleClass of articleClasses){ 
    elementoArticle.classList.add(articleClass);
  } 
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
    .getElementById(`remover-item-${produto.id}`)                      
    .addEventListener("click", () => removerDoCarrinho(produto.id));   
}


function renderizarProdutosCarrinho (){                      
    const containerProdutosCarrinho=                         
    document.getElementById("produtos-carrinho");            
    containerProdutosCarrinho.innerHTML = "";                

    for (const idProduto in idsProdutoCarrinhoComQuantidade){
        desenharProdutoNoCarrinho(idProduto);                
    }
}

export function adicionarAoCarrinho(idProduto) {
  if (idProduto in idsProdutoCarrinhoComQuantidade) { 
    incrementarQuantidadeProduto(idProduto);
    return; 
  }
  idsProdutoCarrinhoComQuantidade[idProduto] = 1;
  desenharProdutoNoCarrinho(idProduto);
  atualizarPrecoCarrinho(); 
}

//1.Criação da função que vai atualizar o preço no carrinho
function atualizarPrecoCarrinho () {                                  //1.1 A função não necessita de nenhum parâmetro                                     
  const precoCarrinho = document.getElementById("preco-total");       //1.2 criamos a variavel precoCarrinho que acessa o elemento html que queremos manipular     
  let precoTotalCarrinho = 0;                                         //1.3 criamos a variavel precoTotalCarrinho com valor inicial zerado (let pois essa variável precisa permitir ser atualizada)             
  for (const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade){ //1.4 criamos um laço for para percorrer o dicionário (idProdutoNoCarrinho para ilustrar que estamos buscando pelos produtos no carrinho)              
    precoTotalCarrinho +=                                             //1.5 lê-se: para cada idProdutoNoCarrinho no dicionário         
      catalogo.find((p) => p.id === idProdutoNoCarrinho).preco *      // acesse o catálogo encontre um produto p tal que seu id seja igual ao id do produto no carrinho, acesse o atributo preco                   
      idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho];           // multiplique pelo idProdutoNoCarrinho do dicionário (lembre-se que o idProdutoNoCarrinho é uma chave, que guarda a quantidade do produto no carrinho)                   
  }                                                                   //acrescente isso á variável precoTotalCarrinho.
  precoCarrinho.innerText = `Total: $${precoTotalCarrinho}`;        //1.6 acesse o texto interno e coloque o precoTotalCarrinho       
}