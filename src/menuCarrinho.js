import { catalogo } from "./utilidades";

function abrirCarrinho() {
    document.getElementById('carrinho').classList.remove("right-[-360px]");
    document.getElementById('carrinho').classList.add("right-[0px]");
}

function fecharCarrinho() {
    document.getElementById('carrinho').classList.remove("right-[0px]");
    document.getElementById('carrinho').classList.add("right-[-360px]");
}

export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");
    
    botaoFecharCarrinho.addEventListener("click",fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
    
}
//explicação da função abaixo
export function adicionarAoCarrinho (idProduto) {
    const produto = catalogo.find(p => p.id === idProduto);
    const containerProdutosCarrinho = document.getElementById('produtos-carrinho')
    const cartaoProdutoCarrinho = ` <article class="flex bg-slate-100 rounded-lg p-1 relative">
    <button id="fechar-carrinho" class="absolute top-0 right-2"><i 
        class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i></button>
      <img src="./assets/img/${produto.nomeArquivoImagem}" alt="Carrinho: ${produto.nome}" class="h-24 rounded-lg">
      <div class="py-2">
        <p class="text-slate-900 text-sm">${produto.nome}</p>
        <p class="text-slate-400 text-xs">Tamanho: M</p>
        <p class="text-green-700 text-lg">R$ ${produto.preco}</p>
      </div>
  </article>`;
  
  containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho;
};
//Criamos a função adicionarAoCarrinho:
//1. criamos a variavel cartaoProdutoCarrinho e nela colocamos o HTML vindo do index.hmtl
//2. criamos a variavel containerProdutoCarrinho, recuperamos o elemento do HTML que ela deverá manipular no caso toda a área (seção)
//na qual ficarão os produtos no carrinho.
//3. No fim da função o retorno, containerProdutoCarrinho recupera seu HTML interior e adiciona isso à um cartaoProdutoCarrinho
//4. exportamos a função para ser acessada por outros arquivos.
//22.importamos o catalogo.
//  na função adiconarAoCarrinho, incluimos o parâmtro idProduto, ou seja, para adicionar produto ao carrinho, deve-se informar seu id (contido no botão)
//  na linha 23, criamos a variavel produto (essa variavel tem escolo local e refer-se ao produto que será adicionado ao carrinho, a varivavel que representa o produto renderizado no catalogo é a produtoCatalogo)
//  na variavel produto está contida a função catalogo.find(p => p.id === idProduto), que lê-se: 
// "no catalogo, encontre um produto p TAL QUE (=>) seu id seja igual (===) ao id fornecido como parâmetro"
//23. em imagem, nome e preço ${} para que recupere randomicamente 