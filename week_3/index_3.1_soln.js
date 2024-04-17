const express = require('express');

const app = express();
app.use(express.json());

function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;

    if(username !="atharv" || password != "pass"){
        res.status(403).json({
            "msg":"Wrong user Input"
        });
    }else{
        console.log("part 1 is done")
        next();
    }
}

function kidneyMiddleware(req,res,next){
    const kidneyId = req.query.kidneyId;

    if(kidneyId != 1 && kidneyId != 2){
        res.status(403).json({
            "msg":"Wrong kidneyID"
        });
    }else{
        console.log("part 2 is done");
        next();
    }
}

app.get("/health-checkup",userMiddleware,kidneyMiddleware,function(req,res){
    res.json({
        "msg":"Your heart is healthy"
    })
})

app.get("/kidney-checkup",userMiddleware,kidneyMiddleware,function(req,res){
    res.json({
        "msg":"Your kidney is healthy"
    })
})

app.listen(3000,function(){
    console.log("Server started at port 3000");
})