let user = {
    name: 'NameDoUsuário',
    age: 30
};

let contact = {
    telephone: 919999999,
    email: 'NameDoUsuário@gmail.com',
};

const userData = {...user, ...contact}

console.log(userData);