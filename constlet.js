const a = 1; //somente leitura

const usuario = { nome: 'Lucas'};

usuario.nome = 'Cleiton'; // exemplo de mutação

console.log(usuario);

function teste (x) {

    let y = 2; // variavel de escopo local
    if (x>5) {
        console.log(x, y);
    }
}

teste(10);