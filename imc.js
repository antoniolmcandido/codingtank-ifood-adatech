console.log('=== IMC ===');

function calcularIMC() {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let imc = peso / (altura * altura);
    document.getElementById('imc').textContent = imc.toFixed(2);
    // if (imc < 18.5) {
    //     document.getElementById('resultado').textContent = 'MAGREZA';
    // } else if (imc >= 18.5 && imc <= 24.9) {
    //     document.getElementById('resultado').textContent = 'NORMAL';
    // } else if (imc >= 25 && imc <= 29.9) {
    //     document.getElementById('resultado').textContent = 'SOBREPESO';
    // } else if (imc >= 30 && imc <= 39.9) {
    //     document.getElementById('resultado').textContent = 'OBESIDADE';
    // } else {
    //     document.getElementById('resultado').textContent = 'OBESIDADE GRAVE';
    // }

    // com switch
    switch (true) {
        case (imc < 18.5):
            document.getElementById('resultado').textContent = 'MAGREZA';
            break;
        case (imc >= 18.5 && imc <= 24.9):
            document.getElementById('resultado').textContent = 'NORMAL';
            break;
        case (imc >= 25 && imc <= 29.9):
            document.getElementById('resultado').textContent = 'SOBREPESO';
            break;
        case (imc >= 30 && imc <= 39.9):
            document.getElementById('resultado').textContent = 'OBESIDADE';
            break;
        case (imc > 40):
            document.getElementById('resultado').textContent = 'OBESIDADE GRAVE';
            break;
        default:
            document.getElementById('resultado').textContent = 'ERRO';
            break;
    }
}