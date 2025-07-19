import jwt from "jsonwebtoken";

import {Request,Response,NextFunction}from "express";


export const authMiddleware = (req:Request,res:Response,next:NextFunction)=>{
    const authHeader = req.headers.authorization;
    if(authHeader?.startsWith("Bearer")){
        const token= authHeader.split("")[1];
        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            (req as any).user = decoded;
        }
        catch(err){
            console.log("Invalid Token",err);
        }
        }next();
    };
