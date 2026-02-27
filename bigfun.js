//biggest of three numbers

let a=10
let b=20
let c=30

function largestOfThree(a,b,c){
    if(a>b&&a>c){
        console.log("A + ",a,"is greatest")
    }
    else if(b>c){
        console.log("B +",b,"is greatest")
    }
    else{
        console.log("C +",c,"is greatest")
    }
}


largestOfThree(a,b,c);
