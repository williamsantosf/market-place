
//Abaixo é o rascunho de como o JS traz o elemento para o HTML, de forma manual
//Isso NÃO é apropriado, pois teríamos que uma constante para cada produto e, consequentemente, uma constante
//para cada cartão. Mas abaixo foi construído dessa forma para fins didáticos. No próximo commit, veja o script
//que automatiza esse processo.

//Objeto produto com atribuição direta dos atributos nome, marca, preço e imagem. Objeto guardado na constante produto1
const produto1 = {
  id: 1,  
  nome: "Regata feminia",
  marca: "Fila",
  preco: 110,
  nomeArquivoImagem: "produto1.jpg",
};

//essa constante cartaoProduto vai conter o cartão do produto que vai trazer os dados de cada produto
//abaixo colocamos o html que deve conter na secton conteiner-produto entre ASPAS, e para imagem, nome, marca,
//vamos acessar os atributos do objeto prodduto
const cartaoProduto = `<div id="card-produto-1">
<img 
src="./assets/img/${produto1.nomeArquivoImagem}" 
style="height: 300px"/>
<p>${produto1.nome}</p> 
<p>${produto1.marca}</p>
<p>$${produto1.preco}</p>
<button>Add Cart</button>
</div>`;

//essa função recupera um elemto à partir do ID, no caso a section container-produto
//o atributo .innerHTML vai resgatar o HTML embutido no elemento
// += acrescenta o conteúdo da constante cartaoProduto
document.getElementById("container-produto").innerHTML += cartaoProduto;
