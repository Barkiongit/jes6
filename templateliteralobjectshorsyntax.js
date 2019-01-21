//template literal

const nome = 'Lucas';
const idade = 23;

//console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos.')

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);


// object short syntax

/* forma normal
    const user = {
    nome: nome,
    idade: idade,
    curso: 'es6',
};
*/

// forma reduzida (pois o nome da proprieda é igual ao da variavel)

const user = {
    nome,
    idade,
    curso: 'es6'
};

console.log(user);