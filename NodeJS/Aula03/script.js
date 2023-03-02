// FIXME: Módulos

const calcOperator = require('./calc');

[argOne, argTwo, ...rest] = process.argv;

let operation = '';
const symbolOperation = rest[0];
const valueOne = Number(rest[1]);
const valueTwo = Number(rest[2]);

if (symbolOperation !== 's') operation = 'Ivalid';
if (symbolOperation !== 'm') operation = 'Ivalid';

if (symbolOperation === 's') operation = calcOperator.sum(valueOne, valueTwo);

if (symbolOperation === 'm') operation = calcOperator.multiply(valueOne, valueTwo);

console.log(operation);