// ASSIGNMENT 2:
// Student Performance Dashboard

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];


let passed = students.filter((student) => {
  return student.marks >= 40
})
console.log("Passed Students:", passed)


let withGrades = students.map((student) => {
  if(student.marks >= 90){
    student.grade = 'A'
  }
  if(student.marks < 90 && student.marks >= 75){
    student.grade = 'B'
  }
  if(student.marks < 75 && student.marks >= 60){
    student.grade = 'C'
  }
  if(student.marks < 60){
    student.grade = 'D'
  }
  return student
})
console.log("With Grades:", withGrades)


let average = students.reduce((sum, student) => {
  return sum + student.marks
}, 0) / students.length
console.log("Average Marks:", average)


let topStudent = students.find((student) => {
  return student.marks === 92
})
console.log("Student with 92 marks:", topStudent)


let kiranIndex = students.findIndex((student) => {
  return student.name === "Kiran"
})

console.log("Kiran's Index:", kiranIndex)
