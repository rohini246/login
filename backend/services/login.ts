import { NextFunction, Request,Response } from "express";
import user from "../models/user";
import bcrypt from 'bcryptjs';
export const loginService = async(req:Request,res:Response,next:NextFunction)=>{
 
        const {email,password} = req.body;
        const existingUser = await user.findOne({email:email})
        if(!existingUser){
            return next("user not found");
        }else{
            const isMatch = await bcrypt.compare(password,existingUser.password)
        
            if(!isMatch){
                res.json("password didn't match")
                
            }else{
                    
                    res.json("Login Successfully.")
                }

        }
        
        
            
        
            
}