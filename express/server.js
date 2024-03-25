const express = require('express')

const app = express();

app.listen(3000);

app.get('/',(req,res)=>{
    //res.send('<P> HI home page </p>');
    res.sendFile('./asserts/index.html',{root:__dirname});
    console.log(__dirname);
});