console.log("=== PROGRAMA ===");

// Entrada de Dados (Input)
let nome = prompt("Digite seu nome:");

// Processamento
// contexto.instrucao()
// nome = nome.repeat(3);
// nome = nome.toUpperCase();
nome = nome.toUpperCase().repeat(10).replace(/C/g, "K");

// Saída de Dados (Output)
document.write("Seu nome é: ", nome);
