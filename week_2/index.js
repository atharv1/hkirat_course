require('dotenv').config()
console.log(process.env)

const express = require('express');
const bodyParser = require('body-parser');

const app = express();    //instance of express, app-object
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false })); //OR
app.use(express.json());

app.get("/",function(req,res){
    res.send('<b>Hello World</b>')
})

app.post('/conversation123',function(req,res){
    //console.log(req.headers);           //object that logs all headers
    // const message = req.body.message;  //body content which is the message, but o/p-> undefined
    // console.log(message);
    const m1 = req.query.message;
    console.log(m1)
    res.send({
        msg:"2+2 = 4"
    })
})

app.get("/route-handler",function(req,res){
    res.json({              //send js object back
        name:"Atharv",
        age:21
    })  
})

app.listen(port,function(){
    console.log(`Server started at port ${port}`);
})