// esse exercicios vai basicamente trocar dois valores
// exemplo 
// a = 5
// b = 8 
// depois vai inverter os valores


// primeira forma
let a = 5;
let b = 8; 
let aux = a;

a = b;
b = aux;

console.log('Valor de a = ',a);
console.log('Valor de b = ',b);

// segunda forma
var c = 7;
var d = 10;
aux = c;

c = d;
d = aux;

console.log(c);
console.log(d);