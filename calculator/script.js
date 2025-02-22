// inputs para entrada dos valores
let inputOne = document.getElementById("one")

let inputTwo = document.getElementById("two")

// buttons para as operações
let buttonSum = document.getElementById("sum");
let buttonSub = document.getElementById("sub");
let buttonMult = document.getElementById("mult");
let buttonDiv = document.getElementById("div");

function somar() {
    let num1 = parseFloat(inputOne.value);
    let num2 = parseFloat(inputTwo.value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    alert("A soma é " + (num1 + num2));
}

function subtrair() {
    let num1 = parseFloat(inputOne.value);
    let num2 = parseFloat(inputTwo.value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    alert("A subtração é " + (num1 - num2));
}

function multiplicar() {
    let num1 = parseFloat(inputOne.value);
    let num2 = parseFloat(inputTwo.value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    alert("A multiplicação é " + (num1 * num2));
}

function dividir() {
    let num1 = parseFloat(inputOne.value);
    let num2 = parseFloat(inputTwo.value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return;
    }
    if (num2 === 0) {
        alert("Não é possível dividir por zero.");
        return;
    }

    alert("A divisão é " + (num1 / num2));
}

buttonSum.addEventListener("click", somar);
buttonSub.addEventListener("click", subtrair);
buttonMult.addEventListener("click", multiplicar);
buttonDiv.addEventListener("click", dividir);