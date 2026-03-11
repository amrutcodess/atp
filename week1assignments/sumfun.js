let array=[50,60,40,70,80]

function arraySum(array){
    let sum=0
for(let i=0;i<array.length;i++){
    sum+=array[i]
}
console.log("Sum of array= ",sum)
}

arraySum(array);