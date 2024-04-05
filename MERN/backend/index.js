let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
const bodyParser = require("body-parser");   
const employeeRoute = require("./routes/employee.routes");
mongoose
.connect("mongodb://localhost:27017/iscocrates1")
.then((x)=>{
    console.log(`connection established"${x.connections[0].name}"`,);
})
.catch((err)=>{
    console.log(err);
    console.error("Error connecting to DB", err.reason);

});
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}),
);
app.use(cors());
app.use("/employee",employeeRoute)
const port=4000;
const server = app.listen(port,()=>{
    console.log("connected to port"+port);
});