import { Request,Response } from "express";
import user from "../models/user";
import bcrypt from 'bcryptjs';
export const userLogin = async(req:Request,res:Response)=>{
   try{
        const {email,password} = req.body;
        const existingUser = await user.findOne({email:email})
        const isMatch = await bcrypt.compare(password,existingUser.password)
        if(!existingUser){
             res.json("user not found")
        }else{
             if(isMatch){
                  res.json("Login Successfully.")
             }else{
                  res.json("password didn't match")
             }

        }
    }
    catch(err){
         res.send(err);
    }
}