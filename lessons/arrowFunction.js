//Conteudo sobre ArrowFunction

const array = [1,3,5,7,9];

//Sem ArrowFunction
const iterar1 = array.map(function(item){
    return item * 2;
});
console.log(iterar1);


//Com ArrowFunction
const iterar2 = array.map(item => item * 2);
console.log(iterar2);

//-------------------------------------------

//Sem ArrowFunction
const somar1 = function(x){
    return x + 2;
} 
console.log(somar1(4));


//Com ArrowFunction
const somar2 = (x) => x + 2;
console.log(somar2(4));