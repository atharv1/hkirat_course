const express = require('express');

const app = express();
app.use(express.json());

function isOldEnough(age){
    if(age>=14){
        return true;
    }else{
        return false;
    }
}

function isOldMiddleware(req,res,next){
    const age = req.query.age;
    if(age >= 14){
        next();
    }else{
        res.json({
            msg:"Sorry you are not old enough"
        });
    }
}

// we can also app.use(isOldMiddleware)

app.get("/ride",isOldMiddleware, function(req,res){   //Using middleware VS
    res.json({
        msg:"You have successfully riden the ride1"
    })
})

app.get("/ride2",function(req,res){                    //not uding middleware
    if(isOldEnough(req.query.age)){
        res.json({
            msg:"You have successfully riden the ride2"
        })
    }else{
        res.status(411).json({
            msg:"Sorry you are not of age yet"
        })
    }
})

app.listen(3000,function(){
    console.log("Server started at port 3000");
})