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