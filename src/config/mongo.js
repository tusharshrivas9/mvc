const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const connect = mongoose.connect(process.env.DB).then(()=>{
    console.log("connected to mongo");
}).catch((error)=>{
console.log(error,"fail");
})

module.exports = connect