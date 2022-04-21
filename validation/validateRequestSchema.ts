import { NextFunction,Request,Response } from "express";
import { validationResult } from "express-validator";

export const validateRequestSchema = (req:Request,res:Response,next:NextFunction)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({errors:error});
    }
    next();
}