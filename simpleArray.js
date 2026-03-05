const temperatures = [32, 35, 28, 40, 38, 30, 42];

// 1. filter() temperatures above 35
let r=temperatures.filter((element) => element>35)
console.log(r)

//     2. map() to convert all temperatures from Celsius → Fahrenheit
let fah=temperatures.map(element => (element*(9/5)+32))
console.log((fah))

//     3. reduce() to calculate average temperature
let sum=temperatures.reduce((acc,element)=>(acc+element))
avg=sum/temperatures.length
console.log(avg)

//     4. find() first temperature above 40
let find=temperatures.find(element=>element>40)
console.log(find)

//     5. findIndex() of temperature 28
let findIn=temperatures.findIndex(element=>element===28)
console.log(findIn)