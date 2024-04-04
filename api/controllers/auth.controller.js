import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

export const signup=async(req,res)=>{
    try{
       const {username,email,password}=req.body;
       const hashedPassword=bcryptjs.hashSync(password,10);
       const newUser=await User.create({username,email,password:hashedPassword});
       newUser.save();
       return res.status(200).json({
            msg:"Successfully added"
        });
    }catch(err){
        console.log(err);
        return res.status(500).json({
            status:"failed",
            msg:"internal server error"
        })
   }
}