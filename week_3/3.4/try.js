// why we need try-catch block
// function getLength(name){
//     return name.length;     this will throw an error as name is not defined,
// }

// const ans  = getLength();
// console.log(ans);

// console.log("Hi there");     we want this to print, but will not be printed cuz of error above

//to solve this we use try catch block--

function getLength(name){
    return name.getLength;
}

try{
    const ans = getLength();
    console.log(ans);
}catch(e){
    console.log("Aaa vedya");
}
console.log("Hi there");

