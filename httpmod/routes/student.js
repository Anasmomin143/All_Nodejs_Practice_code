const express= require('express')
const app=express();
const Routes=require('./std.js')
const port =5000;
app.use('/user',Routes);
app.listen(port,()=>{
    console.log(`server is On  ${port}`)
});