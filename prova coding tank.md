# Prova Coding Tank

# **Coding Tank - Ifood - Vem ser Tech**

1. Desafio: Conversor de Horários

Ao efetuar a compra de sua refeição no Ifood o sistema, após confirmação do pagamento, envia seu pedido ao restaurante, que ao aceitá-lo registra esse momento e lhe retorna o horário de previsão da sua entrega. Esse recurso, apesar de interessante começou a gerar uma quantidade significativa de reclamações na Central de Atendimento, pois os clientes ficaram um pouco confusos com os horários indicados para a entrega. Ao investigar o problema, o time de desenvolvimento entendeu que os horários apresentados estavam no formato de 12hs (AM/PM), sendo que o correto seria utilizar o formato de 24hs. Sua missão: criar um algoritmo capaz de fazer essa conversão! Para isso, crie uma função que receba um horário qualquer, respeitando o formato 12hs (`06:15:25PM`) e retorne o equivalente (`18:15:25`).

```jsx
function converteHora(horaAmPm) {
    // vou pegar a hora, minuto e segundo e o AM ou PM
    // como é string, vou percorrer
    let hora = horaAmPm.slice(0, 2)

    // evitar o problema quando for 12
    if (hora === '12') {
        hora = '00'
    }

    let minuto = horaAmPm.slice(3, 5)
    let segundo = horaAmPm.slice(6, 8)
    let ampm = horaAmPm.slice(8, 10)

    if (ampm == 'PM') {
        // se for PM, vou somar 12 horas
        hora = parseInt(hora) + 12
    }

    return `${hora}:${minuto}:${segundo}`
}

console.log('Questão 01')
console.log(converteHora('06:15:25PM'))
document.getElementById('q01').textContent = converteHora('06:15:25PM')
```

---

2. Desafio: Quantidade de Palavras

Neste desafio, sua missão será encontrar a quantidade de palavras existentes na seguinte frase: "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa"

Como você pode perceber, essa frase está no padrão camelCase, portanto cada nova palavra é representada pela inicial em maiúscula. Crie uma função que receba uma string e retorne a quantidade de palavras existentes!

```jsx
function contarPalavras(frase) {
    let palavraAtual = ''
    let contador = 0

    // vou percorrer a frase e verificar quando tem letra maiuscula
    for (let i = 0; i < frase.length; i++) {
        const letra = frase[i]
        if (letra === letra.toUpperCase()) {
            // se for maiuscula, vou incrementar o contador
            if (palavraAtual !== '') {
                contador++
            }
            palavraAtual = letra
        } else {
            palavraAtual += letra
        }
    }
    if (palavraAtual !== '') {
        contador++
    }
    return contador
}

console.log('Questão 02')
console.log(
    contarPalavras(
        'façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa'
    )
)
document.getElementById('q02').textContent = contarPalavras(
    'façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa'
)
```

---

3. Desafio: Número Solitário

Neste desafio, seu objetivo é encontrar o(s) número(s) solitário(s) (que não se repete), a partir do array de números fornecido. Para resolver, crie uma função que recebe um array com os seguintes números: [12, 17, 15, 19, 22, 17, 19, 12] e retorne os que não estiverem repetidos.

```jsx
function verificarNaoRepetidos(array) {
    let naoRepetidos = []

    // fixando um for de um por um
    for (let i = 0; i < array.length; i++) {
        let repetido = false

        // percorrendo o array para verificar se tem repetido
        for (let j = 0; j < array.length; j++) {
            if (i !== j && array[i] === array[j]) {
                repetido = true
                break
            }
        }
        if (!repetido) {
            naoRepetidos.push(array[i])
        }
    }
    return naoRepetidos
}

console.log('Questão 03')
console.log(verificarNaoRepetidos([12, 17, 15, 19, 22, 17, 19, 12]))
document.getElementById('q03').textContent = verificarNaoRepetidos([
    12, 17, 15, 19, 22, 17, 19, 12,
])
```

---

4. Qual é a saída do código a seguir?

```jsx
let n = 4
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        console.log(j)
    }
}
```

```diff
- a. Não imprime nada

- b. 1 2 3

- c. 1 1 2 1 2 3 1 2 3

- d. 1 2 3 4

+ e. 1 1 2 1 2 3 1 2 3 4
```

---

5. Qual é o resultado da expressão booleana abaixo?

```jsx
!(true && false) || (false && true)
```

```diff
+ a. true

- b. null

- c. false

- d. NaN

- e. undefined
```

---

6. Qual o valor da saída do código abaixo?

```jsx
let x = 0
let a = 0
let b = -5
if (a > 0) {
    if (b < 0) {
        x = x + 5
    } else if (a > 5) {
        x = x + 4
    } else {
        x = x + 3
    }
} else {
    x = x + 2
}
console.log(x)
```

```diff
- a) 0

+ b) 2

- c) 3

- d) 4
```
