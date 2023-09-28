console.log("=== IMC ===");

function calcularImc() {
    // console.log("Calculando...");
    // Entrada
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    let result = null;
    
    // Processamento
    // console.log(peso, altura);
    const imc = peso / (altura * altura);
    // console.log(imc, typeof imc);
    if (imc < 17) {
        result = "muito abaixo do peso";
    } else if(imc < 18.5) {
        result = "abaixo do peso";
    } else if(imc < 25) {
        result = "peso normal";
    } else if(imc < 30) {
        result = "acima do peso";
    } else if(imc < 35) {
        result = "obesidade I";
    } else if(imc < 40) {
        result = "obesidade II";
    } else {
        result = "obesidade mórbida"
    }

    // Saída
    document.getElementById("result").textContent = 
        `Seu IMC é ${imc.toFixed(1)} e você está ${result}`;
}


/*
Abaixo de 17	Muito abaixo do peso
Entre 17 e 18,49	Abaixo do peso
Entre 18,5 e 24,99	Peso normal
Entre 25 e 29,99	Acima do peso
Entre 30 e 34,99	Obesidade I
Entre 35 e 39,99	Obesidade II (severa)
Acima de 40	Obesidade III (mórbida)
*/