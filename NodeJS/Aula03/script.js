const sum = require('../Aula03/sum');
const multiply = require('../Aula03/multiply');

[argOne, argTwo, ...rest] = process.argv;

let operation = '';
const symbolOperation = rest[0];
const valueOne = Number(rest[1]);
const valueTwo = Number(rest[2]);

if (symbolOperation !== 's') operation = 'Ivalid';
if (symbolOperation !== 'm') operation = 'Ivalid';

if (symbolOperation === 's') operation = sum(valueOne, valueTwo);

if (symbolOperation === 'm') operation = multiply(valueOne, valueTwo);

console.log(operation);