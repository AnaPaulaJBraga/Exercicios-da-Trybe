const assert = require('assert');
// escreva a função sumAllNumbers aqui

const sumAllNumbers = (numeros) => {
    let output = 0;
   for(let index in numeros) {
       output = output + numeros[index];
   }
   return output
  
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);