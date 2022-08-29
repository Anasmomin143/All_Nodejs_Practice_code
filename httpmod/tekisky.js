const http = require("http");
const fs = require("fs");
http.createServer((req,res)=>{
let url=req.url
    // let home = fs.readFileSync("./main.html").toString()
    // let aboutus = fs.readFileSync("./aboutus.html").toString()
    // let fees = fs.readFileSync("./fees.html").toString()
    // let employee = fs.readFileSync("./employee.html").toString()
    // let batches = fs.readFileSync("./batches.html").toString()

    // if(req.url=="/"){
    //     res.write("Welcome to tekisky");
    // }
    //  else if(req.url=="/home"){
    //     res.write(home);
    //     // res.write("hello")

    // }
    // else if(req.url=="/aboutus"){
    //     res.write(aboutus);
    // }
    // else if(req.url=="/employee"){
    //     res.write(employee);
    // }
    // else if(req.url=="/fees"){
    //     res.write(fees);
    // }
    // else if(req.url=="/batches"){
    //     res.write(batches);
    // // }else{
    // //     res.write("Invalid Request")
    // // }
    //     fs.readFile('./main.html',(error,data)=>{
    //         if(error){
    //             throw error;
    //         }
    //         else{
    //             if(url=='/home'){
    //             res.write(data);
    //              }
    //             res.end();
    //         }
    //       });
    // //     fs.readFile('./fees.html',(error,data)=>{
    //     if(error){
    //         throw error;
    //     }
    //     else{
    //         res.write(data);
    //         res.end();
    //     }
    // });

    //      fs.readFile('./aboutus.html',(error,data)=>{
    //     if(error){
    //         throw error;
    //     }
    //     else{
    //         res.write(data);
    //         res.end();
    //     }
        
    // });
     
    
    // fs.readFile('./batches.html',(error,data)=>{
    //     if(error){
    //         throw error;
    //     }
    //     else{
    //         res.write(data);
    //         res.end();
    //     }
        
    // });

    
    // fs.readFile('./employee.html',(error,data)=>{
    //     if(error){
    //         throw error;
    //     }
    //     else{
    //         res.write(data);
    //         res.end();
    //     }
        
    // });
if(url=='/fees'){
    fs.writeFile('./fees.html',(error,data)=>{
        res.write(data);

        res.end();
    });
}else
{
    res.write("Invalid Request")
}
// }else if(url=="/batches"){
//     fs.readFile('./batches.html',(error,data)=>{
//         res.write(data);
//         res.end();
//     });
// }

}).listen(4000)