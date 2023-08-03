const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    isAdmin:{
        type:Boolean,
        required:true
    }
},
{ collection: "employees" });


module.exports = mongoose.model("Employee",EmployeeSchema)