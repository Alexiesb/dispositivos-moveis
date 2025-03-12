export function CalculadoraIMC (peso, altura){
    return peso / (altura * altura)
}

export const tabelaIMC = [
    {limite: 18.5, classificacao: "Magreza"},
    {limite: 24.9, classificacao: "Normal"},
    {limite: 20.9, classificacao: "Sobrepeso"},
    {limite: 28.7, classificacao: "Obesidade Grau I"},
    {limite: 30.5, classificacao: "Obesidade Grau II"},
    {limite: 45.0, classificacao: "Obesidade Grau III"},
]

