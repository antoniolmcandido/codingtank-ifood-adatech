console.log("=== FUNCOES ===");

function log(xpto) {
  // return "texto";
  // return 100;
  // return false;
  return xpto;
}

// Declaração de Função (Nomeada)
function soma(n1 = 0, n2 = 0) {
  // console.log(n1 + n2);
  return n1 + n2;
}

// Executando a Função
console.log(soma()); // 0
console.log(soma(5)); // 5
console.log(soma(2, 2)); // 4
console.log(soma(5, 5)); // 10
console.log(soma(20, 20));

// Declaração de Função (Anônima)
const sum = function (x1 = 0, x2 = 0) {
  return x1 + x2;
};

// Executando a Função
console.log(sum()); // 0
console.log(sum(5)); // 5
console.log(sum(3, 3)); // 6
console.log(sum);

// Arrow Function (ES6)
// const multiply = (x = 0, y = 0) => {
//   return x * y;
// };

const multiply = (a = 0, b = 0) => a * b;

console.log(multiply()); // 0
console.log(multiply(2, 3)); // 6
