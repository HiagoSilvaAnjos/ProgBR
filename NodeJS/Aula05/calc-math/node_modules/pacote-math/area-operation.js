module.exports.square = (side) => side * side;
module.exports.rectangle = (base, height) => base * height;
module.exports.triangle = (base, height) => (base * height) / 2;
module.exports.circle = (raio) => { const pi = 3.14; return pi * raio * raio };