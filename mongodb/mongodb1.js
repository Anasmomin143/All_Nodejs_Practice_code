const express=require('express');
const app=express();
const MongoClient=require('mongodb').MongoClient;
const url='mongodb://localhost:27017'
const mongoose=require('mongoose');
const host='localhost';
const port=27017;
const portex=3000
//connecting mongodb
// mongoose.connect(`mongodb://${host}:${port}/testdatabase`).then((succ)=>{
//     console.log('connected!');
// }).catch((err)=>{
//     console.log('Error!');
// });
//aquiring schema
// const {Schema}= mongoose;
//creating schema or structure
// userinfoSchema= new Schema({
//     name:String,
//     age:Number,
//     email:String
// });
//creating collection

// userinfo=mongoose.model('newuserinfo',userinfoSchema);
// //inserting values in collection
// info1=new userinfo({name:'Anas',age:22,email:'anasmomin064@gmail.com'});
// info2=new userinfo({name:'Mustafa',age:22,email:'mustafa@gmail.com'});
// info3=[info1,info2];
// userinfo.insertMany(info3);



//connecting mongodb

MongoClient.connect(url,(err,db)=>{
    if(err) throw err
    let mydb=db.db('testdatabase');
    mydb.collection('newuserinfos').find({}).toArray((err,result)=>{
        if(err) throw err;
        app.get('/',(req,res)=>{
         res.send(result[0].name)
        })
    });
});