let listUser = [
    {
        name: 'John',
    },
    {
        name: 'Igor',
    },
    {
        name: 'Neymar',
    },
    {
        name: 'Messi',
    }
]

function createUser(nameUser) {

    let newName = {
        name: nameUser
    }

    return listUser.push(newName);
}

const insertUser = (newNameUser) => {

    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            createUser(newNameUser)
            const alertError = false;

            if (!alertError) {
                resolve();
            } else {
                reject({msg: 'OPS...'});
            }
        }, 2000);

    })

    return promise
}

const imprimListUser = () => {

    for (i of listUser) {
        console.log(i.name);
    }

}

const imprimError = (error) => {
    console.log(error.msg);
}

async function execute () {
   await insertUser('Hiago');
   imprimListUser();
}

execute().catch(imprimError);