const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://atharv:atharv123123@cluster0.s3cjoks.mongodb.net/userappnew")

const User = mongoose.model('Users',{name:String, email: String,
password:String});

app.post("/signup",async function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email:username});
    if(existingUser){
        return res.status(400).send("Username already exists");
    }

    // const user = new User({
    //     name:name,
    //     email:username,
    //     password:password
    // })
    // user.save();
    // ------OR------------
    await User.create({name,email:username,password});

    res.json({
        "msg":"User created successfully"
    })
})

app.listen(3000,function(){
    console.log("Server started at port 3000")
})