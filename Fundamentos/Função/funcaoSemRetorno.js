// função sem retorno
function somarNumero(numero1,numero2){
    console.log(numero1 + numero2);
}
// chamanddo a função
somarNumero(56,78)


// outro exemplo
function media(){

    let nota1 = 5;
    let nota2 = 7;
    let nota3 = 3;
    let nota04 = 9;

    let soma = nota1 + nota2+ nota3 + nota04;
    let mediaNota = soma/4;
    console.log(mediaNota);

    if(mediaNota <= 7){
        console.log('reprovado');
    }else{
        console.log('se fudeu')
    }

}
media()



