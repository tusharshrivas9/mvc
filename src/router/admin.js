const express = require("express")
const user = require("../models/user")
const router = express.Router()

router.post("/register",(req,res)=>{
    const User = new user(req.body)
    User.save().then(()=>{
        res.status(200).json({
            msg:"ok"
        })
    }).catch((error)=>{
     console.log(error,"error ha bhai");
     res.status(500).json({
        msg:"fail"
    })
    })

})

module.exports = router
