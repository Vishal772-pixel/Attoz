import express from "express";
import multer from "multer";
import cloudinary from "../utils/cloudinary";
import fs from "fs";

import {v4 as uuid} from "uuid";


const router = express.Router();

const storage = multer.diskStorage({
    destination:"upload/",
    filename:(_,file,cb)=>(null,`${uuid()}-${file.originalname}`)
});
const upload = multer({storage});

router.post("/video",upload.single("file"),async(req,res)=>{
    const filePath = req.file?.path;
    if(!filePath)return res.status(400).json({errro:"no file uploaded"})
})
 try {
    const result = await cloudinary.uploader.upload(fileURLToPath,{
        resource_type:"video",
        folder:"attoz/videos"

    });
    
    
    // Additional => to delete the file after upload
    fs.unlinkSync(filePath);
    return res.json({
        url:result.secure_url,
    });

 } catch (error){
    return res.status(500).json({error:"Failed to upload video"});
 }

 export default router;