// ASSIGNMENT 3:
// Employee Payroll Processor

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];


let itEmployees = employees.filter((employee) => {
  return employee.department === "IT"
})
console.log("IT Department Employees:", itEmployees)


let withBonus = employees.map((employee) => {
  employee.netSalary = employee.salary + (employee.salary * 0.10)
  return employee
})
console.log("Employees with Bonus:", withBonus)


let totalPayout = employees.reduce((sum, employee) => {
  return sum + employee.salary
}, 0)
console.log("Total Salary Payout:", totalPayout)


let lowSalaryEmployee = employees.find((employee) => {
  return employee.salary === 30000
})
console.log("Employee with 30000 salary:", lowSalaryEmployee)


let nehaIndex = employees.findIndex((employee) => {
  return employee.name === "Neha"
})
console.log("Neha's Index:", nehaIndex)

