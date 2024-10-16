import jwt from 'jsonwebtoken'
import User from '../models/User.js';

const verifyUser = async(req,res,next)=>{
    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log(token);
        if(!token){
            console.log("Token not Provided");
            return res.status(404).json({success:false,error:"Token Not Provided"})
        }
        const decoded = jwt.verify(token,process.env.JWT_KEY);
        if(!decoded){
            console.log("Token not Valid");
            return res.status(404).json({success:false,error:"Token Not Valid"})
        }
        const user = await User.findById({_id:decoded._id}).select('-password')

        if(!user){
            console.log("User Not Found");
            return res.status(404).json({success:false,error:"User Not Found"})
        }
        req.user = user
        next()
    } catch (error) {
        console.log("Server Error");
        //return res.status(500).json({success:false,error:"Server Error"})
    }
}

export default verifyUser

