//1

const arr = [1, 2, 3, 4, 5];

arr.map(item => item + 10);

// 2

const usuario = { nome: "Diego", idade: 23 };

const mostraIdade = usuario => usuario.idade;

mostraIdade(usuario);

// 3

const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = "Diego", idade = 18) => ({
  nome,
  idade
});

mostraUsuario(nome, idade);
mostraUsuario(nome);

// 4

const promise = () => new Promise((resolve, reject) => resolve());