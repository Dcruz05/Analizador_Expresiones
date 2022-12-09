let string = "3+1(5+2*4/3)"
let ar= Array.from(string)
//console.log(ar)
let i = 0
while(i!=ar.length){
    if(ar[i]=='('){
        let j = i+1; 
        while(ar[j]!=')'){
            console.log(ar[j])
            j++
        }
    }
    i++
}







/*
let numeros = [];
while(ar.length != 0) {
    let temp = ar.pop()
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
    console.log(numeros)
}
console.log(numeros)

/* POST ORDEN *//*
let string2 = "342*-63*9/-6+"
let vector= Array.from(string2)
console.log(vector)
let numeros2 = []
 console.log ("\n")
while(vector.length != 0) {
    let temp = vector.shift() 
    console.log(temp)
    if(temp!="+"&&temp!="-"&&temp!="*"&&temp!="/"){
        numeros2.push(parseInt(temp))
    }else{
        let nums = [numeros2.pop(),numeros2.pop()]
        switch(temp){
            case "+":
                numeros2.push(nums[1]+nums[0])
                break
            case "-":
                numeros2.push(nums[1]-nums[0])
                break
            case "*":
                numeros2.push(nums[1]*nums[0])
                break
            case "/":
                numeros2.push(nums[1]/nums[0])
                break
        }
    }
}
console.log(numeros2)

*/