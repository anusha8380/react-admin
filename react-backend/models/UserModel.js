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
    },
    poolJoinedData:{
        type:Date
    },
    poolEndData:{
        type:Date
    },
    primarySkills:{
        type:String
    },
    isActive:{
        type:Boolean,
        default:true
    }
},
{ collection: "employees" });


module.exports = mongoose.model("Employee",EmployeeSchema)