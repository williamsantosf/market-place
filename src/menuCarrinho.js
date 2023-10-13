import { catalogo } from "./utilidades";

//4. Para resolver o problema dos produtos repeditos no carrinho, criamos o DICIONÁRIO {} vazio idsProdutoCarrinhoComQuantidade.
//Dicionários são estruturas de dados que guardam pares de chave : valor. Sendo assim, o idProduto será a chave e a quantidade desse produto será o valor.
//Cada vez que o usuário clicar no botão de incluir ao carrinho, será atualizado o dicionário. Explicado mais abaixo no if.
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
//8. Criamos a função que incrementa a quantidade, que recebe como parâmtero o idProduto (trazido do catalogo) 
function incrementarQuantidadeProduto(idProduto) {
  idsProdutoCarrinhoComQuantidade[idProduto]++;
  atualizarInformacaoQuantidade(idProduto); //chamada à função que atualiza  a quantidade
}
//9. Criamos a função de decrementar a quantidade
function decrementarQuantidadeProduto(idProduto) {
  idsProdutoCarrinhoComQuantidade[idProduto]--;
  atualizarInformacaoQuantidade(idProduto); //chamada à função que atualiza a quantidade
}
//11. Criamos a função que atualiza a quantidade no cartao do produto no carrinho. Lê-se: recupere o elemento pelo sei id (id gerado dinamicamente), acesse seu TEXTO INTERIOR e atualize seu valor.
function atualizarInformacaoQuantidade(idProduto) {
  document.getElementById(`quantidade-${idProduto}`).innerText =
    idsProdutoCarrinhoComQuantidade[idProduto];
}

//6. Precisamos controlar a quantidade de vezes que o produto aparece no carrinho. Para isso vamos usar a estrutura condicional if:
export function adicionarAoCarrinho(idProduto) {
  if (idProduto in idsProdutoCarrinhoComQuantidade) { //SE idProduto estiver em (in) idsProdutoCarrinhoComQuantidade, incrementarQuantidadeProduto (idProduto)
    incrementarQuantidadeProduto(idProduto);
    return; //10. return sai da função. Ou seja, caso o produto esteja no carrinho ele sai da função, Caso contrtário executa todo o código abaixo.
  }
  idsProdutoCarrinhoComQuantidade[idProduto] = 1; // acessa o idProduto no dicionário e adiciona a quantidade. Cria a chave caso ela não exista.
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho =
    document.getElementById("produtos-carrinho");
  const cartaoProdutoCarrinho = ` <article class="flex bg-slate-100 rounded-lg p-1 relative">
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
      </div>
  </article>`;
//5. ${idsProdutoCarrinhoComQuantidade[produto.id]} adicionado na tag p da div de incremento/decremento de produtos para que possamos acessar a quantidade de 
//produtos incluídos no carrinho que está no dicionário criado.

  containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho;

//12. adicionamos a funcionalidade aos botoes incrementar/decrementar produto nas linhas 76 - 84.
//("click", () => decrementarQuantidadeProduto(produto.id)); deve ser escrito dessa forma, senão a função será executada sem o click.
  document
    .getElementById(`decrementar-produto-${idProduto}`)
    .addEventListener("click", () => decrementarQuantidadeProduto(produto.id));

    document
    .getElementById(`incrementar-produto-${idProduto}`)
    .addEventListener("click", () => incrementarQuantidadeProduto(produto.id));
}
//2. adicionado justify-between no innerHTML do cartaoCarrinhoProduto.
//3. criamos mais uma div (cartaoCarrinhoProduto) para agrupar os botões de incremento e decremento e a quantidade do produto no carrinho.
//essa div deve ser flex. Para que eles fiquem em linha usamos items-end, para ficarem alinhados à base da div. Como a div pai está como position relative,
//a div filha deve estar absolute, bottom-0 e right-2 para deixar no canto inferior direito da div.
//3. adicionamos id na tag p na div de incremento e decremento.
