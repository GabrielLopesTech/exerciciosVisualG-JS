function funcao1() {
    let contador = 1
    do {
        console.log("Número: " + contador)
        contador++
    } while (contador < 10)

}
function funcao2() {
    let inicio = parseInt(prompt("Digite a partir de qual número você deseja começar a contar: "))
    let fim = parseInt(prompt("Digite até qual número deseja contar: "))
    let contador = inicio

    do {
        console.log("Número: " + contador)
        contador++
    } while (contador <= fim)
}

function funcao3() {
    alert("Digite números positivos para continuar somando, digite negativo para encerrar.")

    let soma = 0
    let numero
    do {
        numero = parseFloat(prompt("Digite um número: "))
        if (numero >= 0) {
            soma += numero
        }

    } while (numero >= 0)
    alert("A soma dos números positivos é: " + soma.toFixed(2))
}

function funcao4() {
    let numero = parseFloat(prompt("Digite um número: "))
    let contador = 0

    do {
        let multiplicacao = numero * contador
        console.log("A multiplicação do número: " + numero + "*" + contador + "=" + multiplicacao)
        contador++
    } while (contador <= 10)
}

function funcao5() {
    let limite = parseInt(prompt("Digite até qual número deseja ver os pares: "))

    let numero = 0

    do {
        if (numero % 2 == 0)
            alert("Número par: " + numero)
        numero++
    } while (numero < limite)

}

function funcao6() {
    let nota;
    let soma = 0;
    let contador = 0;

    alert("Digite notas de 0 a 10.\nAo digitar um valor inválido, o programa será encerrado e mostrará a média.");

    do {
        nota = parseFloat(prompt("Digite uma nota:"));

        if (nota >= 0 && nota <= 10) {
            soma += nota;
            contador++;
        }

    } while (nota >= 0 && nota <= 10);

    if (contador > 0) {
        let media = soma / contador;
        alert("Média das notas: " + media.toFixed(2));
    } else {
        alert("Nenhuma nota válida foi inserida.");
    }
}

function funcao7() {
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let tentativa;
    let contador = 0;

    alert("Tente adivinhar o número que estou pensando (entre 1 e 10)!");

    do {
        tentativa = parseInt(prompt("Digite sua tentativa:"));
        contador++;

        if (tentativa < numeroSecreto) {
            alert("O número é MAIOR que " + tentativa);
        } else if (tentativa > numeroSecreto) {
            alert("O número é MENOR que " + tentativa);
        }

    } while (tentativa !== numeroSecreto);

    alert("Parabéns! Você acertou! O número era: " + numeroSecreto +
        "Total de tentativas: " + contador);
}

function funcao8() {
    alert("Contagem de vogais (digite 'sair' para encerrar)");

    let palavra = prompt("Digite uma palavra:");

    while (palavra.toLowerCase() !== "sair") {
        let totalVogais = 0;

        for (let i = 0; i < palavra.length; i++) {
            let letra = palavra[i].toLowerCase();

            if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
                totalVogais++;
            }
        }

        alert("A palavra '" + palavra + "' tem " + totalVogais + " vogal(is).");

        palavra = prompt("Digite uma palavra:");
    }

    alert("Programa encerrado.");
}

function funcao9() {
    alert("Calculando fatoriais");

    let numero = parseInt(prompt("Digite o número para calcular o fatorial:"));

    if (numero < 0) {
        alert("Não é possível calcular o fatorial de um número negativo.");
    } else {
        let fatorial = 1;
        let contador = numero;
        let passos = "";

        do {
            passos += contador;
            fatorial *= contador;
            contador--;

            if (contador > 0) {
                passos += " x ";
            }

        } while (contador > 0);

        alert(numero + "! = " + passos + " = " + fatorial +
            "O fatorial de " + numero + " é: " + fatorial);
    }
}

function funcao10() {
    let senha = 12345;
    let valor;

    do {
        valor = parseInt(prompt("Digite sua senha:"));

        if (valor !== senha) {
            alert("Senha incorreta. Tente novamente.");
        }

    } while (valor !== senha);

    alert("Acesso permitido.");
}

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
})