//Conteudo inicial sobre classes em jscript

class TodoList {

    constructor(){
        this.todo = [];
    }

    add(cont){
        this.todo.push("cliente "+cont)
        console.log(this.todo[this.todo.length-1])
    }

}

var minhaLista = new TodoList()
let cont = 1

document.getElementById('but').onclick = function(){
    if (cont <= 10) {
        minhaLista.add(cont)
    }else if(cont == 11){
        console.log("Impossivel adicionar mais clientes")
    }
    cont++;    
}