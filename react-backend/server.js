const express = require("express")
const app = express();
const cors = require("cors");


app.use(cors({
    origin:'*'
}));

app.get('/', function(req, res) {
    res.send('hello api works fine..');
});

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/REACT_BACKEND");


const employee_route = require("./routes/employeeRoutes");
app.use("/",employee_route)

app.listen(8000, ()=>{
    console.log("Server started at 8000..");
})