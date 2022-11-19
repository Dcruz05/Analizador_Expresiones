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
            if(aux.hI!=null&&aux.hD!=null){
                lista += `SIMBOLO:${aux.simbolo}  HI:${aux.hI.simbolo}  HD: ${aux.hD.simbolo}\n`
            }
            aux=aux.sig;
        }
        return lista
    }
    crearArbol(){
        let aux = this.primero
        while(aux){
            if(aux!=null&&(aux.simbolo=="*"||aux.simbolo=="/")){
                aux.hI=aux.ant
                aux.hD=aux.sig
                aux.sig=aux.sig.sig
                aux.ant=aux.ant.ant
                if(aux.ant!=null){
                    aux.ant.sig=aux
                }
                if(aux.sig!=null){
                    aux.sig.ant=aux
                }
            }
            aux=aux.sig
        }
        aux=this.primero
        while(aux){
            if(aux.simbolo=="+"||aux.simbolo=="-"){
                aux.hI=aux.ant
                aux.hD=aux.sig
                aux.sig=aux.sig.sig
                aux.ant=aux.ant.ant
                if(aux.ant!=null){
                    aux.ant.sig=aux
                }
                if(aux.sig!=null){
                    aux.sig.ant=aux
                }
                
            }
            if(aux.sig==null){
                return aux
            }
            aux=aux.sig;
        }
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
lista.crearArbol();
console.log(lista.lista())