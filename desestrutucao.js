const usuario = {
    nome: 'Lucas',
    idade: 23,
    endereco: {
        cidade: 'Angra',
        estado: 'RJ',
    },
};

const { nome, idade, endereco: { cidade}} = usuario; // pegar as informações de um objet em apenas uma linha

console.log(nome);
console.log(idade);
console.log(cidade);


function mostraNome({nome, idade}){ //desestruração em funçoes
    console.log(nome, idade);
};

mostraNome(usuario);