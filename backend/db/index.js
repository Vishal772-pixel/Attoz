import mongoose from "mongoose";
import express from "express"
import dotenv from "dotenv";

const connectDB = mongoose.connect(process.env.MONGO_URI)
{
    try {
        
    } catch (error) {
        console.log("Error connecting Database",error)
        
    }
}










export default connectDB

