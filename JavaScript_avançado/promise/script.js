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

function createUser (nameUser) {

    let newName = {
        name: nameUser
    } 
    
    return listUser.push(newName);
}

const insertUser = (newNameUser, callbackListUser) => {

    setTimeout(() => {
        createUser(newNameUser)
        callbackListUser();
    }, 2000);


}

const imprimListUser = () => {
    
    for(i of listUser) {
        console.log(i.name);
    }


}

insertUser('Carlos', imprimListUser);