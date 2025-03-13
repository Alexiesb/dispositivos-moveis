import {CalculadoraIMC, tabelaIMC} from "./CalculadoraIMC.js"

console.log(">>>>>Calculadora IMC<<<<<<");
console.table(tabelaIMC);


const peso = 80
const altura = 1.70

const resultado = CalculadoraIMC(peso, altura);

console.log(resultado.toFixed(2));


import moment from 'moment';

const hoje = moment().locale('pt-br')
console.log(hoje.format("DD/MM/YYYY"));
