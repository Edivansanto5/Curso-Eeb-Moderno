// criando uma variavel e não inicializando ela

let valor;
console.log(valor);

valor = null // ausencia de valor nessa variavel
console.log(valor)

//console.log(valor.toString()); não pode 

// outro exemplo 
const valor2 = {};
console.log(valor2.preco);
console.log(valor2);


valor2.preco = 45.89;
console.log(valor2.preco);
console.log(valor2);

