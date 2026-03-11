const temperatures = [32, 35, 28, 40, 38, 30, 42];



let r=temperatures.filter((element) => element>35)
console.log(r)


let fah=temperatures.map(element => (element*(9/5)+32))
console.log((fah))


let sum=temperatures.reduce((acc,element)=>(acc+element))
avg=sum/temperatures.length
console.log(avg)


let find=temperatures.find(element=>element>40)
console.log(find)


let findIn=temperatures.findIndex(element=>element===28)

console.log(findIn)
