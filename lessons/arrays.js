//Conteudos sobre array e suas respectivas funcoes: Map, Reduce, Filter, Find

const array = [1,2,3,4,5,6,7,8,9];
const array2 = [];

//Percorrer todos os itens do vetor
const exampleMap = array.map(function(item){
    return item;
});
console.log(exampleMap);

const exampleMap2 = array.map((item) => item);
const exampleMap2 = array.map((item) => item = (item % 2) != 0 ? array2.push(item) : item);

console.log(exampleMap2);
console.log(array2);

//Consumir todo o vetor e transformar em uma unica informacao
const exampleReduce = array.reduce(function(prev, next){
    return prev + next;
});

// console.log(exampleReduce);

//Faz a filtragem de informacoes do vetor
const exampleFilter = array.filter(function(item){
    // return item % 2 === 0;
});

// console.log(exampleFilter);

//Verificar se existe informacao no vetor.
const exampleFind = array.find(function(item){
    return item === 2;
});

// console.log(exampleFind);