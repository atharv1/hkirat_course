const express = require('express');
const z = require('zod');

const app = express();
app.use(express.json());

const schema = z.string();

function authMiddleware(req,res,next){
    const username = schema.safeParse(req.body.username);
    console.log(username)
    if(username.sucess || username.data != "atharv"){
        console.log("Chomu")
    }else{
        next();
    }
}

app.post("/",authMiddleware,function(req,res){
    res.json("Username is valid")
})

app.listen(3000,function(){
    console.log("Server started on port 3000")
})
