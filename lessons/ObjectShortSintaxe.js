//Object Short Sintax

// Nao precisa repeticao no object quando a variavel e do mesmo jeito da palavra no objeto

// const name = "Fulano";
// const test = {
    // name: name,   WRONG-WAY
    // name,    CORRECT-WAY
// }

const name = 'Neylanio';
const idade = 23;

const usuario = {
    name, 
    idade, 
    tel: '88999556622',
}

console.log(usuario)