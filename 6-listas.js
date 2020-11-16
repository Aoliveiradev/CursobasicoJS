console.log(`Trabalhando com Listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const riodeJaneiro = `Rio de Janeiro`;

let news = 2;

const listaDeDestinos = new Array(
  `Salvador`, 
  `São Paulo`, 
  `Rio de Janeiro`,
  
);

listaDeDestinos.push(`Curitiba`) //adicionando item na lista depois de declarada
console.log("Destinos Possíveis:");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);

console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]);