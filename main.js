//Criamos uma constante catalogo que contém uma lista de objetos, que são os produtos. A lista deve iniciar com um 
//colchete (array list) e as chaves delimitam cada objeto. 

const catalogo = [{
    id: 1,  
    nome: "Regata Masculina",
    marca: "Lupo",
    preco: 110.00,
    nomeArquivoImagem: "produto1.jpg",
  },
  {
    id: 2,
    nome: "Camisa Gola Polo Masculina",
    marca: "Dudalina",
    preco: 320.00,
    nomeArquivoImagem: "produto2.jpg",
  },
  {
    id: 3,
    nome: "Cueca Boxer",
    marca: "Lupo",
    preco: 49.90,
    nomeArquivoImagem: "produto3.jpg",
  },
  {
    id: 4,
    nome: "Tênis Corrida",
    marca: "Olympikus",
    preco: 250.00,
    nomeArquivoImagem: "produto4.webp",
  },
  {
    id: 5,
    nome: "Short Corrida",
    marca: "Nike'",
    preco: 110.00,
    nomeArquivoImagem: "produto5.webp",
  },
  {
    id: 6,
    nome: "Calcinha Algodão",
    marca: "Trifill",
    preco: 39.00,
    nomeArquivoImagem: "produto6.jpg",
  },
  {
    id: 7,
    nome: "Camisa Gola V Social Feminina",
    marca: "Colombo",
    preco: 220.00,
    nomeArquivoImagem: "produto7.jpg",
  },
  {
    id: 8,
    nome: "Regata Feminina Fitness",
    marca: "Fila",
    preco: 129.90,
    nomeArquivoImagem: "produto8.jpg",
  },
  {
    id: 9,
    nome: "Short Compressão Feminino",
    marca: "Lupo",
    preco: 200.00,
    nomeArquivoImagem: "produto9.jpg",
  },
  {
    id: 10,
    nome: "Tênis Corrida Feminino",
    marca: "Olympikus",
    preco: 259.00,
    nomeArquivoImagem: "produto10.jpg",
  },
  {
    id: 11,
    nome: "Creatina 300g",
    marca: "Integral Médica",
    preco: 130.00,
    nomeArquivoImagem: "produto11.jpg",
  },
  {
    id: 12,
    nome: "Pré-Treino 150g",
    marca: "Max Titanium",
    preco: 90.00,
    nomeArquivoImagem: "produto12.jpg",
  },
  {
    id: 13,
    nome: "Whey Protein 900g",
    marca: "Max Titanium",
    preco: 138.90,
    nomeArquivoImagem: "produto13.jpg",
  },
  ];
 
//Abaixo é mostrado como a constante  cartaoProduto, com um HTML embutido, busca os elementos da lista,
//acessando os atributos de cada objeto de acordo com sua posição no array.
//Essa maneira ainda não é interessante, pois o processo de recuperação dos itens da lista está manual.
const cartaoProduto = `<div id="card-produto-1">
<img 
src="./assets/img/${catalogo[3].nomeArquivoImagem}" 
style="height: 300px"/>
<p>${catalogo[3].nome}</p> 
<p>${catalogo[3].marca}</p>
<p>$ ${catalogo[3].preco}</p>
<button>Add Cart</button>
</div>`;

//essa função recupera um elemto à partir do ID, no caso a section container-produto
//o atributo .innerHTML vai resgatar o HTML embutido no elemento
// += acrescenta o conteúdo da constante cartaoProduto
document.getElementById("container-produto").innerHTML += cartaoProduto;
