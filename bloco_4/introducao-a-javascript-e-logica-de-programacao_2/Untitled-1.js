// ex 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers);

//ex 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for(let index=0; index < numbers.length; index += 1 ) {
    result += numbers [index];
}
console.log(result)

//ex 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;


for(let index=0; index < numbers.length; index += 1 ) {
    result += numbers [index];
    
}
 let mediaArit = result / numbers.length;
console.log (mediaArit)

if (mediaArit > 20) {
    console.log ("valor maior que 20");
    
} else {
    console.log("valor menor ou igual a 20")
    
}

//ex 5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// o valor da variável higherNumber poderia ser qualquer um, desde que fosse menor que o menor número do array numbers. Caso atribuíssemos o valor 101 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número maior que 101 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}

console.log(higherNumber);

//ex 6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}
if (result === 0) {
    console.log ('nenhum valor ímpar encontrado')
    
} else {
    console.log (result)
    
}

//ex 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowerNumber = numbers [0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < lowerNumber) {
  
        lowerNumber = numbers[index];
    }    
}
console.log (lowerNumber);

//ex 8

let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

console.log(numbers);

//ex 9
for (let index = 0; index < numbers.length; index += 1) {
    console.log (numbers[index] / 2 )
    
}