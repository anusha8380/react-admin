const Employee = require("../models/UserModel");

const createUser = async(req,res)=>{
  const oldUser =await Employee.find(req.body.email);
  if(oldUser){
  return  res.send({success:false,message:"Email already exists.."})
  }
    try {
      const employee= Employee.create({
          name:req.body.name,
          email:req.body.email,
          isAdmin:req.body.isAdmin
      })
      // const empData = await employee.save();
  
     return res.json({ status: "ok", data:employee });
  
    } catch (error) {
     return res.status(400).send({success:true,message:error.message});
    }
  }
  


const getUsers= async(req,res)=>{
    const employee = await Employee.find();
   return res.send({status:'ok', employees:employee})
}

module.exports={
    createUser,
    getUsers
}