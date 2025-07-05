const User=require("../models/user");

const userSignUp=async(req,res)=>{
const {email, password}=req.body;
if(!email || !password){
    return res.status(400).json({message:"emmail and password required"});
}
let user = await User.findOne({email});
if(user){
    return res.status(400).json({error:"Email is already exist !"})
}
}

const userLogin=async(req,res)=>{
    
}

const getUser=async(req,res)=>{
    
}

module.exports={userLogin, userSignUp, getUser}