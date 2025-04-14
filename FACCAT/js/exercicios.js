


function funcao1() {
    let ano = parseInt(prompt("Digite quantos anos voce tem:"))
    let mes = parseInt(prompt("Digite quando foi seu ultimo mesversario:"))
    let dia = parseInt(prompt("Digite o dia que está:"))
    let idade = (ano * 365) + (mes * 30) + dia
    alert("Você tem " + idade + " dias de vida")
}

function funcao2() {
    let numerototal = parseInt(prompt("Digite o número total de votos:"))
    let numerobranco = parseInt(prompt("Digite o número total de votos brancos:"))
    let numeronulo = parseInt(prompt("Digite o número total de votos nulos:"))
    let numerovalido = parseInt(prompt("Digite o número total de votos válidos"))

    let valido = ((numerovalido / numerototal) * 100).toFixed(2)
    let branco = ((numerobranco / numerototal) * 100).toFixed(2)
    let nulo = ((numeronulo / numerototal) * 100).toFixed(2)

    alert("O número total de eleitores que votaram em branco foi:"+branco+ "%")
    alert("O número total de eleitores que votaram em nulo foi:"+nulo+"%")
    alert("O número total de votos válidos foi:"+valido+ "%")
}

function funcao3(){
    let salafuncionario = parseFloat(prompt("Digite o salário do funcionário:"))
    let reajuste = parseFloat(prompt("Digite o reajuste do funcionário em porcentagem:"))
    let salariofinal = (salafuncionario * reajuste )/ 100
    let salariototal = salafuncionario + salariofinal

    alert("O salario do funcionario após o reajuste foi: R$"+salariototal)
}
function funcao4(){
    let custofabrica = parseFloat(prompt("Digite o custo de fabricação do produto:"))
    let valorcarro = parseFloat(prompt("Digite o valor do carro:"))
    let imposto = (custofabrica * 45) / 100
    let porcentagemdistribuidor  = (custofabrica * 28) / 100
    let carronovo = custofabrica + imposto + porcentagemdistribuidor
    let custofinal = valorcarro + carronovo
    alert("O valor final do carro é: R$"+ custofinal)
}

function funcao5()
{
    let carrovendido = parseFloat(prompt("Digite o valor total de carros vendidos pelo seu funcionario:"))
    let valortotalvenda = parseFloat(prompt("Digite o valor total de vendas:"))
    let salariofixo = parseFloat(prompt("Digite o valor do salario fixo do funcionario:"))
    let comissaovendacarro = parseFloat(prompt("Digite o valor da comissão de seu funcionario em porcentagem:"))
    comissaovendacarro = (valortotalvenda * comissaovendacarro) / 100
    comissaofixa = (valortotalvenda * 5) / 100
    salariofinal = (salariofixo + comissaofixa + comissaovendacarro).toFixed(2)
    alert("O salario final do funcionario é: R$"+salariofinal)
}

function funcao6()
{
 let F = parseFloat(prompt("Digite graus em Fahrenheit:"))
 let C = ((F - 32) * 5/9).toFixed(2)
 alert("O valor em Celsius é: "+C)
}

function funcao7()
{
 let notaA = parseFloat(prompt("Digite a nota da prova A:"))
 let notaB = parseFloat(prompt("Digite a nota da prova B:"))
 let notaC = parseFloat(prompt("Digite a nota da prova C:"))
 let media = (notaA * 2 + notaB * 3 + notaC * 5) / 10
 alert("A média das notas é: "+media)
}

function funcao8()
{
let numero = parseInt(prompt("Digite um número:"))
if (numero > 10) 
{
    alert("Seu número é maior que 10")
}
else{
    alert("Seu número é menor ou igual a 10")
}
}

function funcao9()
{
    let numero = parseInt(prompt("Digite um número"))
    if (numero >= 0) 
        {
            alert("Seu número é positivo")
        }
        else
        {
            alert("Seu número é negativo")
        }
}

function funcao10()
{
let numeromaca = parseInt(prompt("Digite o número de maçãs compradas:"))
if (numeromaca <= 12) 
{
   let maca = 1.30 * numeromaca
   alert("O valor das maçãs é: "+maca) 
}
else{
  let maca = 1 * numeromaca
  alert("O valor das maçãs é: "+maca)
}
}

function funcao11()
{
let avaliacaoA = parseFloat(prompt("Digite a nota da avaliação A:"))
let avaliacaoB = parseFloat(prompt("Digite a nota da avaliação B:"))
let media = (avaliacaoA + avaliacaoB) / 2
if (media < 6)
{
    alert("Você foi reprovado")
    alert("Sua média final foi: "+ media)
}
else{
    alert("Você foi aprovado")
    alert("Sua média final foi: "+ media)
}
}

function funcao12()
{
    let anoatual = parseInt(prompt("Digite o ano atual:"))
    let anonascimento = parseInt(prompt("Digite o ano de nascimento:"))
    let voto = anoatual - anonascimento

    if (voto >= 18)
    {
        alert("Você tem direito a votar")
    }
    else
    {
        alert("Você não tem direito a votar pois tem apenas "+voto+" anos")
    }
}
function funcao13()
{

}























// Adiciona eventos aos botões depois que a página carregar
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn1").addEventListener("click", funcao1)
    document.getElementById("btn2").addEventListener("click", funcao2)
    document.getElementById("btn3").addEventListener("click", funcao3)
    document.getElementById("btn4").addEventListener("click", funcao4)
    document.getElementById("btn5").addEventListener("click", funcao5)
    document.getElementById("btn6").addEventListener("click", funcao6)
    document.getElementById("btn7").addEventListener("click", funcao7)
    document.getElementById("btn8").addEventListener("click", funcao8)
    document.getElementById("btn9").addEventListener("click", funcao9)
    document.getElementById("btn10").addEventListener("click", funcao10)
    document.getElementById("btn11").addEventListener("click", funcao11)
    document.getElementById("btn12").addEventListener("click", funcao12)
    document.getElementById("btn13").addEventListener("click", funcao13)
})
