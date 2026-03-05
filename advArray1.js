const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//     1. Use filter() to get only inStock products
let isInStock=cart.filter(items=> items.inStock)
console.log(isInStock)

//     2. Use map() to create a new array with:  { name, totalPrice }
let newObj=cart.map((items) =>{
    return {name: items.name, price: items.price}
})
console.log(newObj)

//     3. Use reduce() to calculate grand total cart value
let TotCart=cart.reduce((acc,item)=> acc+item.price,0)
console.log(TotCart)

//     4. Use find() to get details of "Mouse"
let findMouse=cart.find(item => item.name==="Mouse")
console.log(findMouse)

//     5. Use findIndex() to find the position of "Keyboard"
let findKeyboard=cart.findIndex(item=>item.name==="Keyboard")
console.log(findKeyboard)