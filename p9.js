const http = require("http");
const fs = require('fs');

const server = http.createServer((req,res) => {
    console.log(req);

//routing

let path = './asserts/';
switch(req.url){
    case '/':
        path+='index.html';
        break;
    case '/about':
        path+='about.html';
        break;

    case '/aboutus':
        res.statusCode = 301;
        res.setHeader('location','/about');
        res.end();
        break;
    default:
        path+='404.html';
}

fs.readFile(path,(err,data)=>{
    if(err){
        console.log(err);
        res.end();
    }
    else{
        res.write(data);
        res.end();

    }
   
});
});

server.listen(3000,'localhost',() => {
    console.log("listening on port 3000");
});