import express from "express"
let app = express()
app.get("/get",(req, res)=>{
    res.send("this is get")
})
app.listen(8000,()=>{
    console.log("You're Listening on port 8000")
})