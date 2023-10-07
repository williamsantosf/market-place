// PROGRAMANDO FUNÇÕES

//Aqui vamos programar as funções que abrem e fecham o carrinho, sendo:

//Na função abrirCarrinho: 

function abrirCarrinho() {
    
    document.getElementById('carrinho').classList.remove("right-[-360px]");
    //do documento HTML, recuperamos o elemento pelo seu Id, e de todas as classes do elemento, queremos remover
    //a classe right-[-360px]. Ou seja, trazer o elemento para dentro da página, já que ele estava negativo à borda.
    
    document.getElementById('carrinho').classList.add("right-[0px]");
    //do documento HTML, recuperamos o elemento pelo sei Id, e de todas as suas classe, queremos adicionar 
    // a classe right-[0px]. Ou seja trazer o elemento de volta á pagina.
    //OBS.: Note que remover uma classe, não necessariamente traz a outra. Daí o motivo pelo qual a função possui
    //um .remove e um .add. A ordem não faz diferença, desde que uma faça o "contrário" da outra.
}


function fecharCarrinho() {
    
    document.getElementById('carrinho').classList.remove("right-[0px]");
    //Analogamente, a função fecharCarrinho irá remover e adicionar as classes, de modo a ocultar o carrinho da tela.
    //Logo, .remove deve em fechar carrinho deve remover a classe que o torna visível, assim como .add de've adicionar
    //a classe que o torna oculto.
    
    document.getElementById('carrinho').classList.add("right-[-360px]");
}

//Essa função deve ser acessível aos demais arquivos do projeto, lopgo usamos "export", para alterar a visibilidade da função dentro do projeto.
export function inicializarCarrinho() {
    //A função inicializarCarrinho é quem de fato implementa as ações programadas nas funções acima
    //Primeiro criamos as variaveis que recuperam os elementos do HTML aos quais queremos atribuir ações:
    
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    //Dentro da variável botaoFecharCarrinho, recuperamos do HTML o elemento de id "fechar-carrinho"
    
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");
    //dentro da variável botaoAbrirCarrinho, recuperamos do HTML o elemento de id "abrir-carrinho"

    //Em seguida, adicionamos os eventos às varáveis que criamos acima.
    botaoFecharCarrinho.addEventListener("click",fecharCarrinho);
    //Da variável botaoFecharCarrinho, adicionamos um listener que aguarda pelo evento click e dispara a função fecharCarrinho
    
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
    //Da variável botaoAbrirCarrinho, adicionamos um listener que aguarda pelo click e dispara a função abrirCarrinho

}