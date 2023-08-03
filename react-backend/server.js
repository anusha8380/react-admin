const express = require("express")
const app = express();
const cors = require("cors");


app.use(cors({
    origin:'*'
}));

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/REACT_BACKEND");

const employee_route = require("./routes/employeeRoutes");
app.use("/api",employee_route)

app.listen(8000, ()=>{
    console.log("Server started at 8000..");
})