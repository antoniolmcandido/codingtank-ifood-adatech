const folgas = [
    "quinta-Feira",
    "Sexta-feira",
    "sábado",
    "Domingo",
    "segunda",
    "quarta",
    "Quarta-feira",
];

console.log(folgas.map(folga => folga.charAt(0).toUpperCase() + folga.slice(1)));

const alunos = [
    { nome: "Filipe Diogo", nota: "80" },
    { nome: "Enzo Miguel", nota: "77" },
    { nome: "Mateus Danilo", nota: "88" },
    { nome: "Olivia Stella", nota: "95" },
    { nome: "César Paulo", nota: "68" },
];

console.log(alunos.filter(aluno => aluno.nota >= 70).length);

const feedbacks = [
    "Melhorar responsividade do site",
    "Erros confusos",
    "Os botões são intuitivos",
    "Erros confusos",
];

// remover duplicatas

console.log(feedbacks.filter((feedback, index) => feedbacks.indexOf(feedback) === index));