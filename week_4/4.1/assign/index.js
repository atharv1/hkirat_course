const express = require("express");
const cors = require("cors");
//Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page 
//to be accessed from another domain outside the domain from which the first resource was served. 

const app = express();
app.use(express.json());
app.use(cors());

app.get("/interest",function(req,res){
    const principal = req.query.principal;
    const rate = req.query.rate;
    const time = req.query.time;

    let calculate = (parseInt(principal) * parseInt(rate))/100 * parseInt(time);
    let total = calculate+parseInt(principal);

    res.send("total: "+ total + " & interest: " + calculate.toString());
})

app.listen(3000,function(){
    console.log("Server started at port 3000");
})