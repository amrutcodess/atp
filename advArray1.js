const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];


let isInStock=cart.filter(items=> items.inStock)
console.log(isInStock)


let newObj=cart.map((items) =>{
    return {name: items.name, price: items.price}
})
console.log(newObj)


let TotCart=cart.reduce((acc,item)=> acc+item.price,0)
console.log(TotCart)


let findMouse=cart.find(item => item.name==="Mouse")
console.log(findMouse)

//   
let findKeyboard=cart.findIndex(item=>item.name==="Keyboard")

console.log(findKeyboard)
