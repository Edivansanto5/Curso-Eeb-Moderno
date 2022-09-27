// função sem retorno
function somarNumero(numero1,numero2){
    console.log(numero1 + numero2);
}
// chamanddo a função
somarNumero(56,78)


// outro exemplo
function media(){

    let nota1 = 4;
    let nota2 = 3;
    let nota3 = 8;
    let nota04 = 1;

    let soma = nota1 + nota2+ nota3 + nota04;
    let mediaNota = soma/4;
    console.log(soma);
    console.log(mediaNota);

    if(mediaNota > 7 ){
        console.log('Aprovado');
    }else if(mediaNota <= 7 & mediaNota >= 4 ){
        console.log('Prova Final');
    }else{
        console.log('reprovado Direto ');
    }

}
media()



