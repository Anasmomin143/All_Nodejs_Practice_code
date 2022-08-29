const express = require('express')
const { join } = require('path')
const app = express();
app.use(express.static(join(__dirname, '../../public')));

//program code view or render to the ejs file
app.set('views',"../../views");
app.set('view engine','ejs');


app.get("/profile/",(req,res)=>{
    res.render("index",{name:'Anas'});
});


// app.get("/profile", (req, res) => {
//     res.sendFile(join(__dirname, '../../public/html/profile.html'))
// });


app.listen(5000, () => {                 //express connection     
    console.log('started');
})