import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";

export const signup=async(req,res,next)=>{
    try{
       const {username,email,password}=req.body;
       const hashedPassword=bcryptjs.hashSync(password,10);
       const newUser=await User.create({username,email,password:hashedPassword});
       newUser.save();
       return res.status(200).json({
            msg:"Successfully added"
        });
    }catch(err){
        //  next(errorHandler(300,"something went wrong"));
        next(err);
   }
}