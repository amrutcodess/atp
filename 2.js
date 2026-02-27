//simulataneous execution of function by passing functin as an argument

let makepayment=function(amount,paymentType){
    console.log(`Payment of ${amount}started`)
    paymentType()
}

let UPIpayment=function(){
    console.log("UPI payment made")
}

let cardpayment=function(){
    console.log("Card payment made")

}

makepayment(2000,UPIpayment)

//closure example
/*let sum=function(x){
    return function(y){
        return x+y
    }
}

let result=sum(10)
console.log(result(20))  //recieved output=30

//since there is a refernce of x in internal anonymous function, after execution of main function,x is stored in heap temporarily
*/
 //object
 let student={//student is the reference of the object ,not the name of the object
    age:19 ,//key - value pair 
    course:"Csenginerring",
    name:"kanth"
 }
 for(let v in )
 console.log(`${v} in ${student[x]}`)


 //array of objects
 let emp=[{emp:1,name:"raj"},
{emp:2,name:"taj"}];

for(let x in emp)
    console.log(x)