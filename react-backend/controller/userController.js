const Employee = require("../models/UserModel");

const registerUser = async(req,res)=>{
  const oldUser =await Employee.findOne({email:req.body.email});
  if(oldUser){
  return  res.status(400).send({
    message: 'Email already exists!'
 });
  }
    try {
      const employee=await Employee.create({
          name:req.body.name,
          email:req.body.email,
          isAdmin:req.body.isAdmin,
      })
  
     return res.json({message:"User registered successfully. Please login!!", status:200, data:employee });
  
    } catch (error) {
     return res.status(400).send({
      message: 'Email already exists!'
   });
    }
    
  }
  


const getUsers= async(req,res)=>{
    const employeeList = await Employee.find();
   return res.send({status:'ok', employees:employeeList})
}

const loginUser = async(req,res)=>{
  const validUser =await Employee.findOne({email:req.body.email});
  
  if(validUser){
  return  res.json({
    res:validUser, status:200
  })
  }
  res.status(400).send({
    msg:"user not found.."
  })
}

const createUser = async(req,res)=>{
  const oldUser =await Employee.findOne({email:req.body.email});
  if(oldUser){
  return  res.status(400).send({
    message: 'Email already exists!'
 });
  }
    try {
      const employee=await Employee.create({
          name:req.body.name,
          email:req.body.email,
          isAdmin:req.body.isAdmin,
          poolJoinedDate:req.body.poolJoinedDate,
          poolEndDate:req.body.poolEndDate,
          primarySkills:req.body.primarySkills,
          isActive:req.body.isActive
      })
  
     return res.json({message:"User created successfully", status:200, data:employee });
  
    } catch (error) {
     return res.status(400).send({
      message: 'Email already exists!'
   });
    }
    
  }

  const updateUser= async(req,res)=>{
    let userId = req.params.user_id;
    const data = req.body;
    const updatedUserList = await Employee.findByIdAndUpdate(userId,data)
    res.status(200).send({
     status:"Success",
     data:updatedUserList
   })
}
module.exports={
    createUser,
    getUsers,
    loginUser,
    registerUser,
    updateUser
}