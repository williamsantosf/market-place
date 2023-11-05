export const catalogo = [
    {
      id: '1',  
      nome: "Regata Masculina",
      marca: "Lupo",
      preco: 110.00,
      nomeArquivoImagem: "produto1.jpg",
    },
    {
      id: '2',
      nome: "Camisa Gola Polo Masculina",
      marca: "Dudalina",
      preco: 320.00,
      nomeArquivoImagem: "produto2.jpg",
    },
    {
      id: '3',
      nome: "Cueca Boxer",
      marca: "Lupo",
      preco: 49,
      nomeArquivoImagem: "produto3.jpg",
    },
    {
      id: '4',
      nome: "Tênis Corrida",
      marca: "Olympikus",
      preco: 250.00,
      nomeArquivoImagem: "produto4.webp",
    },
    {
      id: '5',
      nome: "Short Corrida",
      marca: "Nike'",
      preco: 110.00,
      nomeArquivoImagem: "produto5.webp",
    },
    {
      id: '6',
      nome: "Calcinha Algodão",
      marca: "Trifill",
      preco: 39.00,
      nomeArquivoImagem: "produto6.jpg",
    },
    {
      id: '7',
      nome: "Camisa Gola V Social Feminina",
      marca: "Colombo",
      preco: 220.00,
      nomeArquivoImagem: "produto7.jpg",
    },
    {
      id: '8',
      nome: "Regata Feminina Fitness",
      marca: "Fila",
      preco: 129.90,
      nomeArquivoImagem: "produto8.jpg",
    },
    {
      id: '9',
      nome: "Short Compressão Feminino",
      marca: "Lupo",
      preco: 200.00,
      nomeArquivoImagem: "produto9.jpg",
    },
    {
      id: '10',
      nome: "Tênis Corrida Feminino",
      marca: "Olympikus",
      preco: 259.00,
      nomeArquivoImagem: "produto10.jpg",
    },
    ];

function salvarLocalStorage (chave, informacao) {
    localStorage.setItem(chave, informacao);
}    