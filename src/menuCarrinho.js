import { catalogo, salvarLocalStorage, lerLocalStorage } from "./utilidades"; //5. colocamos manualmente o import da função.

const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {}; //6.Agora, na criação do dicionário, antes será lido o localSotorage. 
                                                                           //Usamos o operador de coalecência nula, que se não houver nada no localStorage, aí sim ele cria o objeto vazio.
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
    salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
    atualizarPrecoCarrinho(); 
    renderizarProdutosCarrinho();                         
}

function incrementarQuantidadeProduto(idProduto) {
  idsProdutoCarrinhoComQuantidade[idProduto]++;
  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
  atualizarPrecoCarrinho(); 
  atualizarInformacaoQuantidade(idProduto); 
}

function decrementarQuantidadeProduto(idProduto) {  
    if (idsProdutoCarrinhoComQuantidade[idProduto] === 1){ 
        removerDoCarrinho(idProduto);                
        return;                                      
    }
  idsProdutoCarrinhoComQuantidade[idProduto]--;
  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade); //alteração da quantidade de produtos no carrinho, salvar no storage
  atualizarPrecoCarrinho(); 
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


export function renderizarProdutosCarrinho (){  //7.vamos exportar a função renderizarProdutosCarrinho, para que seja executada logo no main.js                    
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
  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade); //2. Chamamos a função salvarLocalStorage todas as vezes que a quantidade de produtos no carrinho for alterada.
  desenharProdutoNoCarrinho(idProduto);
  atualizarPrecoCarrinho(); 
}


export function atualizarPrecoCarrinho () {                                                                     
  const precoCarrinho = document.getElementById("preco-total");            
  let precoTotalCarrinho = 0;                                         
  for (const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade){ 
    precoTotalCarrinho +=                                   
        catalogo.find((p) => p.id === idProdutoNoCarrinho).preco *    
        idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho];         
    }                                                                 
    precoCarrinho.innerText = `Total: $${precoTotalCarrinho}`;     
}