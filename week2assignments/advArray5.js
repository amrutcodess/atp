// ASSIGNMENT 5:
// Bank Transaction Analyzer

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


let creditTransactions = transactions.filter((transaction) => {
  return transaction.type === "credit"
})
console.log("Credit Transactions:", creditTransactions)


let amounts = transactions.map((transaction) => {
  return transaction.amount
})
console.log("Transaction Amounts:", amounts)


let balance = transactions.reduce((acc, transaction) => {
  if(transaction.type === "credit"){
    return acc + transaction.amount
  }
  else{
    return acc - transaction.amount
  }
}, 0)
console.log("Final Account Balance:", balance)


let firstDebit = transactions.find((transaction) => {
  return transaction.type === "debit"
})
console.log("First Debit Transaction:", firstDebit)


let tenThousandIndex = transactions.findIndex((transaction) => {
  return transaction.amount === 10000
})
console.log("Index of 10000 Amount Transaction:", tenThousandIndex)

