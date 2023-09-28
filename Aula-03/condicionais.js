console.log("=== CONTROLE CONDICIONAL ===");

// Switch / Case

// Entrada
const diaDaSemana = parseInt(prompt("Informe o dia da semana:"));
console.log(diaDaSemana, typeof diaDaSemana);
let result;

// Processamento
switch (diaDaSemana) {
    case 1:
        result = "DOM";
        break;

    case 2:
        result = "SEG";
        break;

    case 3:
        result = "TER";
        break;

    case 4:
        result = "QUA";
        break;

    case 5:
        result = "QUI";
        break;

    case 6:
        result = "SEX";
        break;

    case 7:
        result = "SAB";
        break;

    default:
        result = "DIA DA SEMANA INVALIDO";
        break;
}

// Saída
document.write(`Hoje é ${result}`);
