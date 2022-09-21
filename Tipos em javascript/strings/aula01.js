let nome = 'Maria Isabel de sousa ' ;
let curso = 'Cold3r';

console.log(nome.charAt(0)); // vai pegar o valor do index 0 = M
console.log(curso.charAt(4));

console.log(nome.charCodeAt(0)); // vai pegar o valor referente a tabelo unicod da w3c
console.log(curso.charCodeAt(4));

console.log(nome.substring(2)); // vai mostrar a partir do index 2 
console.log(curso.substring(3));

console.log(nome.substring(0,7)); // vai mostrar a partir do indice 0 até o 7
console.log(curso.substring(4,8));

console.log(nome.concat('maçã')); //vai concatenar com a palavra maçã
console.log(curso.concat("!!!!!!!!!"));

console.log(curso.length); // vai mostrar a quantidade de caractere
console.log(nome.length);

console.log(curso.replace(3,'e')); // vai substituir onde tem 3 pela letra e
console.log(curso.replace('e',3));
console.log(nome.replace('a',5));

console.log(nome.repeat(2));// vai fazer 2 vezes o nome da variavel