const express =require('express')
const app=express();
// app.get("/student/:name/:id/:address",(req,res)=>{
//     let {name,id,address}=req.params
//     res.send(`the id of students is ${id} and name is ${name} the address is ${req.params.address}`)
// });



// req from to to


// app.get("/train/:from-:to",(req,res)=>{
//     let{from,to}=req.params
//     res.send(`the train from ${from} to ${to}`)
// })





app.get("/train/:id([0-9])",(req,res)=>{
res.send(`train ${req.params.id}`)
});

app.listen(5000,()=>{
console.log("started")
});