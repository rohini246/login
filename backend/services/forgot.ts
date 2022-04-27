import {Request } from "express";
import user from "../models/user";
export const forgotService = async(req:Request)=>{
        const {email} = req.body;
        const existingUser = await user.findOne({email:email})
        if(!existingUser){
          return  ("Please enter registered email")
        }else{       
           return  ("Reset password");    
        }
}