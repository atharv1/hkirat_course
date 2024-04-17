const fs = require("fs");  // filesystem- nodejs library, allows us to read and write in file

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})

console.log("Hi there");