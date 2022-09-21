// declarando as variaveis das notas
let nota1 = 8.9;
let nota2 = 7.4;

// declarando os valores das notas
let peso01 = 1.5;
let peso02 = 2.0;

// somando os pesos das notas e atribuindo os valores na variavel
let somaPeso = peso01 + peso02;

// somar todas as notas e fazer a media
let somaTotal = (nota1 * peso01) + (nota2 * peso02);
let mediaNotas = somaTotal / somaPeso;

console.log(somaTotal);
console.log(mediaNotas);

console.log(mediaNotas.toFixed(3)); //aqui vai formatar o valor em 3 casas decimal
console.log(typeof mediaNotas);
console.log(mediaNotas.toString(2)); // vai converter em para binario
