let a = {
    Nome: "Igor",
    Nota: 10
}

a = JSON.stringify(a)

console.log(a)
console.log(JSON.parse(a))






let b = '{"Nome": "Hiago", "Nota": 10}';

console.log(JSON.stringify(b))
console.log(JSON.parse(b))