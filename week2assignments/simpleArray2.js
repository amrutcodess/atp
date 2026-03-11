const courses = ["javascript", "react", "node", "mongodb", "express"];


let filtered = courses.filter((course) => course.length > 5)
console.log(filtered)


let uppercase = courses.map((course) => course.toUpperCase())
console.log(uppercase)


let combined = courses.reduce((acc, course, index) => {
  if (index === 0) {
    return course.toUpperCase();
  }
  return acc + " | " + course.toUpperCase();
}, "")
console.log(combined)


let found = courses.find((course) => course === "react")
console.log(found)


let foundIndex = courses.findIndex((course) => course === "node")
console.log(foundIndex)

