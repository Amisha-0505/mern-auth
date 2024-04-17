import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
import bcryptjs from 'bcryptjs';

export const test=(req,res)=>{
    res.json({
        msg:'API is working',
    });
}

export const updateUser=async(req,res,next)=>{
    if (req.user.id !== req.params.id) {
        return next(errorHandler(401, 'You can update only your account!'));
    }
      try {
        let {userPassword,email,username,profilePicture}=req.body.formData;
        if (userPassword) {
          userPassword = bcryptjs.hashSync(userPassword, 10);
        }
    
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: {
              username: username,
              email: email,
              password: userPassword,
              profilePicture: profilePicture,
            },
          },
          { new: true }
        );
        const { password, ...rest } = updatedUser._doc;
        res.status(200).json(rest);
      } catch (error) {
        next(error);
      }
}