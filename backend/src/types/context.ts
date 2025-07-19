import {Request} from "express";

export const buildContext = (req:Request)=>({
    user:(req as any).user
});