import { inicializarCarrinho } from "./src/menuCarrinho";

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
    preco: 49,
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
    nomeArquivoImagem: "produto12.png",
  },
  {
    id: 13,
    nome: "Whey Protein 900g",
    marca: "Max Titanium",
    preco: 138.90,
    nomeArquivoImagem: "produto13.jpg",
  },
  ];

for (const produtoCatalogo of catalogo){
    const cartaoProduto = `<div class='border-solid border-2 border-sky-500 w-48 m-2 bg-white' id="card-produto-${produtoCatalogo.id}"> 
    <img 
    src="./assets/img/${produtoCatalogo.nomeArquivoImagem}" 
    style="height: 200px"/>
    <p>${produtoCatalogo.nome}</p> 
    <p class='marca'>${produtoCatalogo.marca}</p>
    <p>R$ ${produtoCatalogo.preco}</p>
    <button>Add Cart</button>
    </div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
    
};

inicializarCarrinho();




