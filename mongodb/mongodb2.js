const mongoose = require('mongoose')  //import mongoose from mongoose
// let host='localhost';
// let port=27017;
mongoose.connect(`mongodb://localhost:27017/studinfo`).then((succ)=>{
    console.log("connect to DB");
}).catch((error)=>{
    console.log("error")
});

const {Schema}=mongoose;
studdataSchema = new Schema({
    stdname:String,
    age:Number,
    class:String
});

studdata=mongoose.model('studdata1',studdataSchema)
stud1=new studdata({stdname:'Anas',age:22,class:'TYBCA'});
stud1.save();