const User=require("../models/user");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const userSignUp=async(req,res)=>{
const {email, password}=req.body;
if(!email || !password){
    return res.status(400).json({message:"emmail and password required"});
}
let user = await User.findOne({email});
if(user){
    return res.status(400).json({error:"Email is already exist !"})
}
const hashpass=await bcrypt.hash(password, 10);

const userobj=new User({email, password:hashpass});
 await userobj.save();
 let token= jwt.sign({email, id:userobj._id}, process.env.SECRET_KEY);
 return res.status(201).json({token,user});

}

const userLogin=async(req,res)=>{
    
}

const getUser=async(req,res)=>{
    
}

module.exports={userLogin, userSignUp, getUser}