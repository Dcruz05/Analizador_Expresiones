class Nodo{
    constructor(simbolo){
        this.simbolo=simbolo;
        this.sig=null;
        this.ant=null;
        this.hI=null;
        this.hD=null;
    }
}
class Arbol{
    constructor(){
        this.raiz=null;
        this.lista="";
    }
}
class Lista{
    constructor(){
        this.primero=null;
        this.ultimo=null;
    }
    agregar(nuevo){
        if(this.primero==null){
            this.primero=nuevo;
            this.ultimo=nuevo;
        }
        else{
            nuevo.ant=this.ultimo;
            this.ultimo.sig=nuevo;
            this.ultimo=nuevo
        }
    }
    lista(){
        let aux = this.primero
        let lista  = ""
        while(aux){
            lista += `${aux.simbolo}`
            aux=aux.sig;
        }
        return lista
    }
}

let expresion = "1+2*5-3/7"
let lista=new Lista()
let convertir = (exp)=>{
    for (let i=0; i<exp.length; i++) {
        let nodo = new Nodo(exp[i])
        lista.agregar(nodo)
    }
}
convertir(expresion)
console.log(lista.lista())