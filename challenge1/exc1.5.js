//  1

const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x); 
console.log(y);

function soma(...arr) {
  return arr.reduce((a, b) => a + b);
}

console.log(soma(1, 2, 3, 4, 5, 6)); 
console.log(soma(1, 2)); 

// 2

const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil"
  }
};

const usuario2 = { ...usuario, nome: "Gabriel" };
const usuario3 = {
  ...usuario,
  endereco: { ...usuario.endereco, cidade: "Lontras" }
};