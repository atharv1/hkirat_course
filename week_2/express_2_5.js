const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());  // instead of body-parser for now

var users = [{
    name:"John",
    kidneys:[{
        healthy:false
    },{
        healthy:true
    }]
}]

//query parameters mostly for get request
app.get("/",function(req,res){
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthKidneys = 0;
    for(let i=0; i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            numberOfHealthKidneys += 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthKidneys;
    res.json({
        johnKidneys,
        numberOfKidneys,
        numberOfHealthKidneys,
        numberOfUnhealthyKidneys
    })
})

//for post req u send data in body
app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;//To read this req.body, we use body-parser OR app.use(express.json)
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/",function(req,res){
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg:"Updated"
    })
})

app.delete("/",function(req,res){               //gotta use filter
    let newKidneys = [];
    for(let i=0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({
        msg:"Unhealthy kidney removed"
    })

})
 
app.listen(3000,function(){
    console.log("Server at port 3000");
})