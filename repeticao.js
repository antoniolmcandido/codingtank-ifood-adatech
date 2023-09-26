console.log('=== Repetição ===');

document.write(1);
document.write(2);
document.write(3);
document.write(4);
document.write(5);

document.write('<hr>');

let contador = 1;
let limite = 10;

// incremento
while (contador <= limite) {
    document.write(contador, ' ');
    contador = contador + 1;
}

document.write('<hr>');

contador = 50;
limite = 1;

// decremento
while (contador >= limite) {
    document.write(contador, ' ');
    contador = contador - 1;
}

const escola = 'Ada';
console.log(escola, typeof escola);
console.log(escola.charAt());
console.log(escola.charCodeAt());
console.log(String.fromCharCode(65));
console.log(escola[0]);
console.log(escola.length);

contador = 97;
limite = 122;

document.write('<hr>');
document.write('Letras minusculas pelo código ASCII');
document.write('<hr>');

// incremento
while (contador <= limite) {
    document.write(String.fromCharCode(contador), ' ');
    contador++;
}

document.write('<hr>');
document.write('Descobrir os codigos decimais para cada letra da frase');
document.write('<hr>');

// Cada código decimal da letra da frase
const frase = 'Coding Tank Ifood';
contador = 0;
while (contador < frase.length) {
    document.write(frase.charCodeAt(contador), ' ');
    contador++;
}

// imprimir numeros pares começando de 100 com for
document.write('<hr>');
document.write('Imprimir numeros pares começando de 100 com for');
document.write('<hr>');

for (let i = 100; i >= 2; i -= 2) {
    i == 2 ? document.write(i, '') : document.write(i, ' - ');
}

document.write('<hr>');
document.write('Imprimir asteriscos');
document.write('<hr>');

for (let i = 1; i <= 5; i += 1) {
    for (let j = 1; j <= 10; j += 1) {
        document.write('* ');
    }
    document.write('<br>');
}
