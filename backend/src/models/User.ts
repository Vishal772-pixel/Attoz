import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
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

    },
    avatar:{
        type:String,

    },
    subscribers:{
        type:Number,
        default:0,
    },
    subscribedUsers:[{
        type:mongoose.Schema.Types.ObjectId,ref:"User"
    }]


},
{timestamps:true});

export const User = mongoose.model("User",userSchema);