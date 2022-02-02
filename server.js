const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extended:true}));

app.listen(3000 , ()=> console.log("Server started on port: 3000"));

app.get("/" , (req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.post("/" , (req,res)=>{
    var result = Number(req.body.n1)+ Number(req.body.n2);
    res.send("Result : "+ result);
});