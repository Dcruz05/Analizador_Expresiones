let string = "+--3*42/*6396"
let ar= Array.from(string)
console.log(ar)
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

/* POST ORDEN */
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