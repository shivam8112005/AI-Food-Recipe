const jwt=require('jsonwebtoken');

const verifyToken=async(req, res, next)=>{
    let token = req.headers["authorization"];
    // console.log(token);
    
    if(token){
        token=token.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=>{
            if(err){
                // console.log("neiwnhf");
                return res.status(400).json({message:"Invalid Token!"})
                
            }else{
                console.log(decoded);
                req.user=decoded;
                
            }
        });
        next();
    }else{
        // console.log("sgrh erh trh  yessssssssssssssss");
        
        return res.status(400).json({message:"Invalid Token!"})
    }
}
module.exports=verifyToken;