// instalar plugin no babel atraves do yarn add @babel/plugin-proposal-object-rest-spread

// REST

const usuario = {
    nome: 'Lucas',
    idade: 23,
    uni: 'UFF'
};

const { nome, ...resto} = usuario; // para pegar o resto do objeto, array etc

console.log(nome);
console.log(resto);

//SPREAD - repassar as informações de um objeto ou array para outra estrutura de dados.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];


const arr3 = [...arr1, ...arr2]; 

console.log(arr3);

const user2 = {...usuario, nome: 'Ademir'};  //sobrepoe a propriedade nome

console.log(user2);