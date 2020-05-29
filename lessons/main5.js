//Rest e Spread

function soma(a, b, ...params){
    return params;
}
// console.log(soma(1,2,3,4,5,6));

const usuario1 = {
    nome: 'Neylanio',
    idade: 23,
    endereco: {
        cidade: 'Juazeiro do Norte',
        uf: 'CE'
    }
};

const usuario2 = { ...usuario1, nome: 'Soares', endereco: {cidade: 'Crato'} }

console.log(usuario2);