console.log("=== REPETICAO ===");

document.write(1);
document.write(2);
document.write(3);
document.write(4);
document.write(5);
document.write(6);
document.write(7);
document.write(8);
document.write(9);
document.write(10);

document.write("<hr>");

document.write("<h2>Números de 1 à 10</h2>");

let contador = 1; // valor_inicial
let limite = 10; // valor_inicial

while (contador <= limite) { // condicao_logica
    document.write(contador, " ");
    contador = contador + 1; // incremento
}

document.write("<hr>");

document.write("<h2>Números de 50 à 1</h2>");

contador = 50; // valor_inicial
limite = 1; // valor_inicial

while (contador >= limite) { // condicao_logica
    document.write(contador, " ");
    contador = contador - 1; // decremento
}

document.write("<hr>");

const escola = "Ada";
console.log(escola, typeof escola);
console.log(escola.charAt(1)); // proprio_caracter
console.log(escola.charCodeAt(1)); // codigo_numerico
console.log(String.fromCharCode(65)); // A
console.log(escola[0]); // recupera_caracter_posicao
console.log(escola.length); // quantidade_caracteres

document.write("<h2>Gerar o Alfabeto com as letras minúsculas (a-z)</h2>");

contador = 97;
limite = 122;

while (contador <= limite) {
    document.write(String.fromCharCode(contador), " ");
    // contador = contador + 1;
    // contador += 1;
    contador++;
}

document.write("<hr>");

document.write("<h2>Descobrir os códigos decimais para cada letra da frase</h2>");

const frase = "Coding Tank Ifood";

contador = 0;
console.log("---");

while (contador < frase.length) {
    console.log(frase[contador], frase[contador].charCodeAt());
    document.write(frase.charCodeAt(contador), " ");
    contador++;
}

document.write("<hr>");
document.write("<h2>Números de 1 à 100</h2>");

for(let contador = 1, limite = 100; contador <= limite; contador++) {
    document.write(contador, " ");
}

// Números Pares (100 até o 2)
// 100 - 98 - 96 - 94 ... 6 - 4 - 2

document.write("<hr>");
document.write("<h2>Números Pares (100 até o 2)</h2>");

let saida = '';
for(let i = 100; i >= 2; i -= 2) {
    saida += i;
    if (i > 2) {
        saida += ' - ';
    }
}
document.write(saida);

document.write("<hr>");
document.write("<h2>Asteriscos</h2>");

// **********
// **********
// **********
// **********
// **********

for(let x=1; x <= 5; x++) {
    for(let y=1; y <= 10; y++) {
        document.write("*");
    }
    document.write("<br>");
}

// Estrutura de Dados

// Array (literal)
const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

const letras = ["a", "b", "c", "d", "e"];
for (let x = 0; x < letras.length; x++) {
    document.write(letras[x]);
}

// Exemplo Final
document.write("<hr><h2>Lista de Veículos</h2>");
const carros = []; // array vazio
let controle = true;

while (controle) {
    carros[carros.length] = prompt(`Digite o nome do veículo ${carros.length}:`);

    if(carros.length == 5) {
        controle = false;
    }
}

// for (let index = 0; index < carros.length; index++) {
//     document.write(carros[index], "<br>");
// }

document.write(carros);





