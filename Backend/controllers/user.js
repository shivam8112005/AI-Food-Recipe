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
 return res.status(201).json({token,userobj});

}

const userLogin=async(req,res)=>{
    const {email, password}=req.body;
    if(!email || !password){
    return res.status(400).json({message:"emmail and password required"});
}
let user = await  User.findOne({email});
if(user && await bcrypt.compare(password, user.password)){
    let token= jwt.sign({email, id:user._id}, process.env.SECRET_KEY);
 return res.status(200).json({token,user});
}else{
    return res.status(400).json({error:"Invalid Credentials!"});
}
}

const getUser=async(req,res)=>{

    const user=await User.findById(req.params.id);
    if(user){
        return res.status(200).json({email:user.email});
    }else{
        return res.status(400).json({error:"user not found!"})
    }

}

module.exports={userLogin, userSignUp, getUser}