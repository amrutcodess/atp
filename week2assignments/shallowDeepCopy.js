const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en",
  },
};

let userCopy = { ...user };
userCopy.name = "pp";
userCopy.preferences.theme = "light";
console.log(user);
console.log(userCopy);

//deepcopy
const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085,
    },
  },
  items: [{ product: "Laptop", price: 70000 }],
};

let orderCopy = structuredClone(order);
orderCopy.customer.address.city = "bhopal";
orderCopy.items[0].price = 20;
console.log(order);
console.log(orderCopy);
