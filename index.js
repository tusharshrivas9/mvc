const express = require("express")
const app = express()
const router = require("./src/router/admin")
const mongoose = require("mongoose")
const connect = require("./src/config/mongo")


const port = process.env.PORT || 2000 
 

app.use("/api",router)
app.listen(port,()=>{
    console.log(`listening to port no ${port}`);
})