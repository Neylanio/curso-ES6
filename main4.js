//Desestruturação

const usuario = {
    nome: 'Neylanio',
    idade: 23,
    endereco: {
        cidade: 'Juazeiro do Norte',
        UF: 'CE'
    }
}
const {nome, idade, endereco: {cidade}} = usuario;
// console.log(cidade)

//---------------------------------------------------

function mostraNome({nome, idade, endereco:{cidade}}){
    console.log(cidade)
}

mostraNome(usuario);