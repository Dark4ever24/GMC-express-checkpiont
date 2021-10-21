const express = require("express");
const { appendFile } = require("fs");
const {dirname} = require("path");
const path = require("path");
const middle = require("./public/middleware/middle");
//const corn = require("node-cron");


//prints the current working dir to the console

console.log(__dirname)

//declere express 

const app = express();

//call middleware

 app.use(middle);

//declere port

const PORT = 5000;

// requests

app.use(express.static(path.join( __dirname , 'public')));

  app.get("/" ,(req,res) => { 
    //sending a respond for the requested path
    res.sendFile(  path.join(  __dirname ,  "./public/Homepage.html" ));

});

app.get( "/contactus" ,  (req , res) => {
    //sending a respond for the requested path
    res.sendFile(path.join(  __dirname , "./public/Contactus.html" ));
    
});


app.get("/ourservices"   , (req , res )  => {
    //sending a respond for the requested path
    res.sendFile( path.join( __dirname  ,"./public/ourservices.html"));

});

//call back function 
app.listen(PORT , ((err) =>  err ? console.error(ERROR) :  
console.log(`app is up and running on  port ${PORT} happy coding !`)));

 //i get it my gode quality are shity xd so here is a clean code   