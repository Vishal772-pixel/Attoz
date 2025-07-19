import mongoose from "mongoose";


export const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDb connected successfully");
    }
    catch(err){
        console.log("Mongodb connection error:",err);
        process.exit(1);
        
        
        )
    }
}