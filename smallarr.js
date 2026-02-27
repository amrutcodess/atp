let marks=[90,70,40,65,90]
let smallest=marks[0]
for(let i=1;i<marks.length;i++)
{
    if(marks[i]<smallest)
        smallest=marks[i]
}
console.log("Smallest =",smallest)
