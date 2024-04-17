const express = require('express');

const app = express();
app.use(express.json());

app.post("/health-checkup",function(req,res){
    // kidneys = [1,2] ....array of numbers
    const kidneys = req.body.kidneys;
    if(!kidneys){
        res.json({
            msg: "Wrong inputs"
        })
    }else{
        const kidneyLength = kidneys.length;
        res.send("you have " + kidneyLength + " kidneys");
    }
    
});

//if an error will occur, server will crash and user might see logic data
//to avoid this we use
//Global catches --
app.use(function(err,req,res,next){
    errorCount++; //we can count no. of errors here
    
    res.json({
        msg:"Something went wrong with our server"
    })
})

app.listen(3000,function(){
    console.log("Server started at port 3000")
});