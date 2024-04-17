const fs = require('fs');

function papatsReadFile(){
    return new Promise(function(resolve,reject){
        console.log("Inside Promise");
        fs.readFile("a.txt","utf-8",function(err,data){
            console.log("Before resolve");
            resolve(data);
        });
    })
}

//callback function to call
async function onDone(data){
    console.log(data);
}

onDone();

var a = papatsReadFile();
console.log(a);
a.then(onDone);
console.log(a);


// same in async await --
//async function onDone(data){
//     const value = await papatsReadFile();

//     console.log(value);
// }