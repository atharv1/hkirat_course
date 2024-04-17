const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://atharv:atharv123123@cluster0.s3cjoks.mongodb.net/prac_user_app")

const User = mongoose.model('Users',{name:String, email:String, password: String});

app.post("/signup",async function(req,res){
    const mail = req.body.username;
    const password = req.body.password;
    const name = req.body.email;

    const existingUser = await User.findOne({email:mail});
    if(existingUser){
        return res.status(400).send("Username already exists");
    }

    const user = new User({
        name:name,
        email:mail,
        password: password
    });

    user.save();
    console.log("saved data")
})


app.get("/signup",async function(req,res){
    const users = await User.find({});
    console.log(users);
    res.json(users);
})

app.listen(3000)