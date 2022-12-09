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
    preOrder(){
        this.lista= ""
        if(this.raiz==null){
            console.log("");
        }else{
            this.preOrderRecur(this.raiz)
        }
        return this.lista
    }
    preOrderRecur(nodoX){
        this.lista+=`${nodoX.simbolo}`
        if(nodoX.hI!=null){
            this.preOrderRecur(nodoX.hI);
        }
        if(nodoX.hD!=null){
            this.preOrderRecur(nodoX.hD);
        }
    }
    postOrder(){
        this.lista= ""
        if(this.raiz==null){
            console.log("");
        }else{
            this.postOrderRecur(this.raiz)
        }
        return this.lista
    }
    postOrderRecur(nodoX){
        if(nodoX.hI!=null){
            this.postOrderRecur(nodoX.hI);
        }
        if(nodoX.hD!=null){
            this.postOrderRecur(nodoX.hD);
        }
        this.lista+=`${nodoX.simbolo}`
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

let convertListD = (exp,list)=>{
    for (let i=0; i<exp.length; i++) {
        let nodo = new Nodo(exp[i])
        list.agregar(nodo)
    }
}

let analizar= (string)=>{
    let vector= Array.from(string)
    let numeros = [];
    if(vector[0]=="+"||vector[0]=="-"||vector[0]=="*"||vector[0]=="/"){
        while(vector.length != 0) {
            let temp = vector.pop()
            if(temp!="+"&&temp!="-"&&temp!="*"&&temp!="/"){
                numeros.push(parseInt(temp))
            }else{
                let nums = [numeros.pop(),numeros.pop()]
                switch(temp){
                    case "+":
                        numeros.push(nums[0]+nums[1])
                        break
                    case "-":
                        numeros.push(nums[0]-nums[1])
                        break
                    case "*":
                        numeros.push(nums[0]*nums[1])
                        break
                    case "/":
                        numeros.push(nums[0]/nums[1])
                        break
                }
            }
        }
    }else{
        while(vector.length != 0) {
            let temp = vector.shift() 
            if(temp!="+"&&temp!="-"&&temp!="*"&&temp!="/"){
                numeros.push(parseInt(temp))
            }else{
                let nums = [numeros.pop(),numeros.pop()]
                switch(temp){
                    case "+":
                        numeros.push(nums[1]+nums[0])
                        break
                    case "-":
                        numeros.push(nums[1]-nums[0])
                        break
                    case "*":
                        numeros.push(nums[1]*nums[0])
                        break
                    case "/":
                        numeros.push(nums[1]/nums[0])
                        break
                }
            }
        }
    }
    return numeros[0]
}
/* pruebas node
let expresion = "3-4*2-6*3/9+6"
let arbol = new Arbol();
let lista=new Lista();
convertListD(expresion,lista)
arbol.raiz=lista.crearArbol()
let preOrder =arbol.preOrder()
let postOrder =arbol.postOrder()
console.log(preOrder)
console.log(postOrder)
console.log("RESULTADO(PRE-ORDER): " + analizar(preOrder))
console.log("RESULTADO(POST-ORDER): " + analizar(postOrder))
*/