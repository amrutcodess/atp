// ASSIGNMENT 3:
// Employee Payroll Processor

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// 1. filter() employees from IT department
let itEmployees = employees.filter((employee) => {
  return employee.department === "IT"
})
console.log("IT Department Employees:", itEmployees)

// 2. map() to add netSalary = salary + 10% bonus
let withBonus = employees.map((employee) => {
  employee.netSalary = employee.salary + (employee.salary * 0.10)
  return employee
})
console.log("Employees with Bonus:", withBonus)

// 3. reduce() to calculate total salary payout
let totalPayout = employees.reduce((sum, employee) => {
  return sum + employee.salary
}, 0)
console.log("Total Salary Payout:", totalPayout)

// 4. find() employee with salary 30000
let lowSalaryEmployee = employees.find((employee) => {
  return employee.salary === 30000
})
console.log("Employee with 30000 salary:", lowSalaryEmployee)

// 5. findIndex() of employee "Neha"
let nehaIndex = employees.findIndex((employee) => {
  return employee.name === "Neha"
})
console.log("Neha's Index:", nehaIndex)
