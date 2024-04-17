const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json())

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  let userExists = false;
  for(let i=0; i<ALL_USERS.length; i++){
    if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
        userExists = true;
        console.log("huh")
    }
  }
  return userExists;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);    //username:username is key:value pair
  return res.json({
    token,              //we post this generated token, which has username and iat
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;      //the token generated at post req is taken and given in
  try {                                         //get /users request for authorization here
    const decoded = jwt.verify(token, jwtPassword); //if token/jwtPassword is not right, it will throw an error
    const username = decoded.username;      //if we get decoded it means user is valid
    // return a list of users other than this username
    res.json({
        users:ALL_USERS.filter(function(value){
            if(value.username == username){        //all other users are shown
                console.log(value.name)
                return false
            }else{
                return true;
            }
        })
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000,function(){
    console.log("Server started")
})