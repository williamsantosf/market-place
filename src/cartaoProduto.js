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

//21. Após renderizar todo o catálogo, fazemos um segundo loop que percorra todo o catáloogo, novamente, e atribuia um id a cada botão.
//Ou seja, para cada produtoCatalogo de catalogo, recupere o elemento pelo seu id (`adicionar-${produtoCatalogo.is}`) e em seguida
//adicione um evento que a cada click, execute a função adicionarAocarrinho. Vide passo 22.
//addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id)); função adicionarAoCarringo recebendo dinâmicamente o id trazido pela variavel produtoCatalogo.id
//deve ser escrito dessa forma para que a função só seja executada no click, caso contrário ele executa a função durante o loop, o que pode dar erro
    for (const produtoCatalogo of catalogo) {
        document.getElementById(`adicionar-${produtoCatalogo.id}`)
        .addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
    }
}

//6. colocmos o loop que renderiza o catálogo dentro de uma função para que possa ser exportado para outros pontos do projeto
//11. Estilizamos o cartão do produto, no catalogo, adicionando o botão do carrinho que adiciona ao carrinho. Retiramos a altura fixa das imagens
//12. estilo hover no botão para indicar que ele é clicável.
//13. adicionada group na classe.
//14. adicionado hover, duration na imagem e group para que a imagem cresça quando passar o cursos em qualquer área do cartão (para isso a classe pai deve conter o group também)
//15. text-sm para diminuir o texto nos cartões do catálogo.
//16. my-3 para que a imagem não se sobreponha ao texto.
//17. retiramos a borda dos cartões
//18. shadow-xl para adicionar sombra aos cartões e a cor da sobra.
//19. rounded-lg para arredondar as bordas arredondadas no cartão e nas imagens também.
//20. na varável cartaoProduto faremos com que cada botão tenha um id, e para isso vamos utilizar o id do próprio produto
//o id do botão será id='adicionar'-${produtoCatalgo.id} ou seja por exemplo id='adicionar-2'
//24. 