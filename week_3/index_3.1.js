const express = require('express');

const app = express();

app.get("/health-checkup",function(req,res){
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "atharv" || password != "pass"){
        res.status(400).json({"msg":"Something up with your inputs 1"})
        return;
    }
    
    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({"msg":"Something up with your inputs"})
        return;
    }

    res.json({
        msg:"Your kidney is fine!"
    })
});

app.listen(3000,function(){
    console.log("server started at port 3000");
})
// Solution for DRY in index_3.1_soln.js