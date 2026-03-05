function sum(...a){
    let sum=0
    for(let element of a){
        sum+=element
    }
    console.log(sum)
}

sum(1,2,3,4,3,2,2,2)