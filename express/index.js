let express = require('express');
let mongoose = require('mongoose');

mongoose
.connect('mongodb+srv://preranams:OQSAw2VjB1zFpEBd@cluster0.ryn0kse.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then((x)=>{
    console.log('connected to db');
})
.catch((err)=>{
    console.log('error connecting to db');

});

const app = express();

const server = app.listen(4000,()=>{
    console.log('connected to port 4000');
})
