const express = require("express")
const app = express()
app.get("/ping",(req,res)=>{
    return res.send("connected")
})
app.listen(5000,()=>{
    console.log("This is Express.js file.")
})


