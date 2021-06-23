let a = 10;
let b = 5;

let adicao = a + b;
console.log(adicao);

let subtracao = a - b;
console.log(subtracao);

let multiplicacao = a * b;
console.log(multiplicacao);

let divisao = a / b;
console.log(divisao);

let modulo = a % b;
console.log(modulo);

let num1 = 3;
let num2 = 5;

if(num1 > num2) {
    console.log("num1 maior que num2");
} else {
    console.log('num1 menor que num2');
}

let num1 = 3;
let num2 = 5;
let num3 = 6;

if(num1 > num2 && num1 > num3) {
    console.log('maior numero é o:' + num1 + '(num1)');
} else if (num2 > num1 && num2 >num3) {
    console.log('maior numero é o: (num2)');
}
else{
    console.log('maior numero é o:' + num3 + '(num3)');
}