const jwt = require("jsonwebtoken");

// decode, verify, generate

const value = {
    name:"atharv",
    accountNumber: 123123123
}

//jwt
const token = jwt.sign(value,"secret")
//this toke has been generated using this secret, and hence this token can only be verified using
//this secret
console.log(token);


//only the server which generated token can verify it
const verifiedValue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYXRoYXJ2IiwiYWNjb3VudE51bWJlciI6MTIzMTIzMTIzLCJpYXQiOjE3MDkzNTk0NTB9.UJj5_YWZ1skTNvxsDgVg7TX5HbJ1mWkZCn6IW04qhFE","secret");
console.log(verifiedValue);



//-----------------------------Try Catch---------------------------------
try{
    let a;
    console.log(a.length);
}catch(e){
    console.log("Error ala re baba");
}
console.log("tari sudha code chaltoey")

