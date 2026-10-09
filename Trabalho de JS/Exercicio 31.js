/*
31. Qual será o valor da variável estoque após a execução do código abaixo? 
*/

let quantidade = 0;
let estoque = (quantidade > 0) ? "Disponível" : "Esgotado";

console.log(estoque); // Esgotado

/*
Resposta: B) Esgotado

Explicação: como quantidade é 0, a condição quantidade > 0 é falsa.
No operador ternário, quando a condição é falsa, o valor da segunda opção é escolhido:
"Esgotado".
*/