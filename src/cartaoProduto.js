import { catalogo } from "./utilidades";
import { adicionarAoCarrinho } from "./menuCarrinho";

export function renderizarCatalogo () {
    for (const produtoCatalogo of catalogo){
        const cartaoProduto = `<div class='w-48 m-2 p-2 bg-white shadow-xl shadow-slate-400 rounded-lg flex flex-col justify-between group' id="card-produto-${produtoCatalogo.id}"> 
        <img 
        src="./assets/img/${produtoCatalogo.nomeArquivoImagem}"
        class= 'rounded-lg group-hover:scale-110 duration-300 my-3'
        />
        <p class='text-sm'>${produtoCatalogo.nome}</p> 
        <p class='text-sm'>${produtoCatalogo.marca}</p>
        <p class='text-sm'>R$ ${produtoCatalogo.preco}</p>
        <button id='adicionar-${produtoCatalogo.id}' class="bg-black text-slate-200 hover:bg-slate-500 duration-300"><i class="fa-solid fa-cart-plus" style="color: #ffffff;"></i></button>
        </div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;  
    }

    for (const produtoCatalogo of catalogo) {
        document.getElementById(`adicionar-${produtoCatalogo.id}`)
        .addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
    }
}