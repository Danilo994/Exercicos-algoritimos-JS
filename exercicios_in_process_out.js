//Exercícios Entrada Processamento Saida JS

/*

    1 - Elaborar um programa que leia o valor de um jantar. 
    Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago

    Ex:
        Valor do Jantar: R$ 80.00
        Taxa do Garçom: R$ 8.00
        Total a pagar: R$ 88.00

*/
var valorjanta = Number(prompt("Valor Janta: R$"));
var taxgar = valorjanta * 0.1;
var tot1 = valorjanta + taxgar;
alert(`Taxa do Garçom: R$${taxgar.toFixed(2)} \n Total a pagar: R$${tot1.toFixed(2)}`);

/*

    2 - Elaborar um programa que leia a duração de uma viagem em dias e horas.
    Calcule e informe a duração total da viagem em número de horas.


    Ex:
        Nº Dias: 2
        Nº Horas: 5
        Total de Horas: 53

*/
var ndia = Number(prompt("N° Dias: "));
var nhora = Number(prompt("N° Horas: "));
var tot2 = ndia * 24 + nhora;
alert(`Total de Horas: ${tot2}`);

/*
    3 - Elaborar um programa que leia um número.
    Calcule e informe os seus vizinhos, ou seja, o número anterior e o número posterior  

    Exemplo:
        Número: 15
        Vizinhos: 14 e 16

*/
var numero = Number(prompt("Número: "));
var v1 = numero - 1;
var v2 = numero + 1;
alert(`Vizinhos: ${v1} e ${v2}`);

/*
    4 - Elaborar um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la.
    Calcule e informe o valor a ser pago por cliente.

    Exemplo:
        Valor da conta: R$ 90.00
        Número de clientes: 3
        Valor por cliente: 30.00
*/
var cont = Number(prompt("Valor da conta: R$"));
var ncliente = Number(prompt("Número de clientes: "));
var valorpcliente = cont / ncliente;
alert(`Valor por Cliente: R$${valorpcliente.toFixed(2)}`);

/*
    5 - Elaborar um programa para uma loja, o qual leia o preço de um prouto e informe as opções de pagamento.
    Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.

    Exemplo:
        Preço: R$ 60.00
        À vista: R$ 54.00
        Ou 3x de R$: 20.00
*/
var prec = Number(prompt("Preço: R$"));
var vista = prec * 0.1;
var parc = prec / 3;
alert(`À vista: R$${vista} \n Em 3x de: R$${parc.toFixed(2)}`);

/*
    6 - Elaborar um programa que leia 3 notas de um aluno em uma determinada disciplina.
    Calcule e informe a média das notas.

    Exemplo:
        1ª Nota: 7.5
        2ª Nota: 8.0
        3ª Nota: 6.4
        Média: 7.3
*/
var nota1 = Number(prompt("1ª Nota: "));
var nota2 = Number(prompt("2ª Nota: "));
var nota3 = Number(prompt("3ª Nota: "));
var media = (nota1 + nota2 + nota3) / 3;
alert(`Média: ${media}`)
