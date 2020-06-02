// Exercicio - 1 

// class Usuario {
//     constructor(email, senha){
//         this.email = email;
//         this.senha = senha;
//         this.admin = false;
//     }
//     isAdmin(){
//         return this.admin;
//     }
// }

// class Admin extends Usuario{
//     constructor(email, senha){
//         super(email,senha);
//         this.admin = true;
//     }        
//     isAdmin(){
//         return this.admin;
//     }
// }

// const User1 = new Usuario('neylanio@gmail.com', '123');
// const Adm1 = new Admin('admin@gmail.com', '123456');

// console.log(User1.isAdmin());
// console.log(Adm1.isAdmin());



// ####################################################################



// Exercicio - 2 

// const usuarios = [
//     { nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
//     { nome: 'Gabriek', idade: 15, empresa: 'Rocketseat'},
//     { nome: 'Neylanio', idade: 30, empresa: 'Facebook'}
// ];

// const idades = usuarios.map( item => item.idade);
// console.log(idades);

// ---------------------------------------------------------------------

// const users = usuarios.filter(item => item.idade > 18 && item.empresa == 'Rocketseat');
// console.log(usuarios);

// ----------------------------------------------------------------------

// const users = usuarios.find(item => item.empresa == 'Google');
// console.log(users);

// -----------------------------------------------------------------------

// const usuarios2 = [
//     { nome: 'Diego', idade: 46, empresa: 'Rocketseat'},
//     { nome: 'Gabriek', idade: 30, empresa: 'Rocketseat'},
//     { nome: 'Neylanio', idade: 60, empresa: 'Facebook'}
// ];

// const users = usuarios2.filter(item => item.idade <= 50);
// console.log(users)


// ########################################################################


// Exercicio - 3 

// const arr = [1,2,3,4,5];
// arr.map(item => item + 10);

// -------------------------------------------------------------------------

// const usuario = { nome: 'Diego', idade: 23 };
// const mostraIdade = (usuario) => usuario.idade;   
// mostraIdade(usuario);

// --------------------------------------------------------------------------

// const nome = 'Diego';
// const idade = 23;
// const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });
// mostraUsuario(nome, idade)
// mostraUsuario(nome)

// ---------------------------------------------------------------------------


// const promise = () => new Promise( (resolve, reject) => resolve() );




// ###########################################################################




// Exercício - 4

// const empresa = {
//     nome: 'Rockeseat',
//     endereco: {
//         cidade: 'Rio do Sul',
//         estado: 'SC'
//     }
// };

// const { nome, endereco: { cidade, estado } } = empresa;
// console.log(nome)
// console.log(cidade)
// console.log(estado)

// ---------------------------------------------------------------------------

// function mostraInfo({ nome, idade }){
//     return `${nome} tem ${idade} anos.`;
// }
// mostraInfo({ nome: 'Diego', idade: 23 });





// ###########################################################################




// Exercício - 5

// const arr = [1,2,3,4,5,6];
// const [ x, ...y ] = arr;
// console.log(x)
// console.log(y)


// ---------------------------------------------------------------------------

// function soma(...params){
//     return params.reduce((total, next) => total + next);
// }
// console.log(soma(1,2,3,4,5));


// ---------------------------------------------------------------------------


// const usuario = {
//     nome: 'Diego',
//     idade: 23,
//     endereco: {
//         cidade: 'Rio do Sul',
//         uf: 'SC',
//         país: 'Brasil'
//     }
// };
// const usuario2 = { ...usuario, nome: 'Gabriel' };
// const usuario3 = { ...usuario, endereco: {...usuario.endereco, cidade: 'Lontras' } };



// ############################################################################



// Exercício - 6 


// const usuario = 'Diego';
// const idade = 23;

// console.log(`O usuario ${usuario} possui ${idade} anos`);


// ###########################################################################//#endregion




// Exercício - 7


// const name = 'Diego';
// const idade = 23;

// const usuario = {
//     nome,
//     idade, 
//     cidade: 'Rio do Sul'
// };


// FINISH