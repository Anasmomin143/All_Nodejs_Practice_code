// const { Router } = require('express')
const express= require('express')
const Router =express.Router()
Router.get("/all",(req,res)=>{
    res.send("from all data")
});
Router.get("/update",(req,res)=>{
    res.send("inside from update")
});

module.exports=Router