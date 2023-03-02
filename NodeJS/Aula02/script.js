//FIXME: Iserindo argumentos

[argOne, argTwo, ...rest] = process.argv;

let operation = '';
const symbolOperation = rest[0];
const valueOne = Number(rest[1]);
const valueTwo = Number(rest[2]);

const sum = (numOne, numTwo) => numOne + numTwo;
const multiply = (numOne, numTwo) => numOne * numTwo;

if (symbolOperation !== 's') operation = 'Ivalid';
if (symbolOperation !== 'm') operation = 'Ivalid';

if (symbolOperation === 's') operation = sum(valueOne, valueTwo);

if (symbolOperation === 'm') operation = multiply(valueOne, valueTwo);

console.log(operation);