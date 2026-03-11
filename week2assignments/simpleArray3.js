const marks = [78, 92, 35, 88, 40, 67];


let passed = marks.filter((mark) => mark >= 40)
console.log(passed)


let gracedMarks = marks.map((mark) => mark + 5)
console.log(gracedMarks)

let highest = marks.reduce((acc, mark) => {
  if (mark > acc) {
    return mark;
  }
  return acc;
})
console.log(highest)

let belowPass = marks.find((mark) => mark < 40)
console.log(belowPass)


let foundIndex = marks.findIndex((mark) => mark === 92)
console.log(foundIndex)

