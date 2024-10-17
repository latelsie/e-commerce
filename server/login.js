const express=require("express");
const cors=require("corse");

const app=express()
app.use (express.json())
app.use(cors())

app.get('/adduser',(req,res) => {
    console.log(req.body);

    res.send("Response received:"+req.body)
});
app,listen(4000,()=> console.log("Server on localhost 4000"))