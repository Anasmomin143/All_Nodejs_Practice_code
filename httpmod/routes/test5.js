const express =require('express')
const app=express();

// app.get('/login',(req,res,next)=>{
//     console.log("first next funtion")
//     next();
// },(req,res,next)=>{
//     console.log("second next funtion")
//     next();
// },
// (req,res,next)=>{
// console.log("third next funtion")
// res.send("get last funtion")
// }
// );
// app.all('*',(req,res)=>{
// res.send("wrong in all funtion")
// });



// cb1=(rq,res,next)=>{

//     console.log("first cb fuction")
//     next();
// }
// cb2=(rq,res,next)=>{
//     console.log("second cb fuction")
//     next();

// }
// cb3=(rq,res,next)=>{
//     console.log("third cb fuction")
//     next();
//     res.send("final funtion")
// }
// app.get('/login',[cb1,cb2,cb3])

// app.listen(5000,()=>{
// console.log("started")
// });


