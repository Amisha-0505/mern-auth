import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    usernams:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
})

const User=mongoose.Model('User',UserSchema);

export default User;