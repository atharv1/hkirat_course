const express = require('express');
const zod = require('zod');

const app = express();
app.use(express.json());

const schema = zod.array(zod.number()); //input should be array of numbers

// {                question--
//     email: string => email
//     password: atleast 8 letters
//     country: "IN", "US"
// }                 answer --
const schema1 = zod.object({
    email:zod.string().email(),
    password: zod.string().min(8).max(25),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: z.array(z.number())
})

app.post("/health-checkup",function(req,res){
    //kidneys = [1,2]
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success){ //response from zod has sucess true or false as o/p
        res.status(411).json({
            msg:"invalid input brother"
        })
    }else{
        res.send({
            response
        }) 
    }
});

app.listen(3000,function(){
    console.log("Server started at port 3000 zod")
});