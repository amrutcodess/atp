//find an element


let array=[10,30,20,60,50]

function searchTarget(array,t){
    for(let i=0;i<array.length;i++){
        if(array[i]==t){
            return i
        }
    }
    return "not found";
    


}
console.log(searchTarget(array,100));

