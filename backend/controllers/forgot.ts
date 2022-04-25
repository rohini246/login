import { Request,Response } from "express";
import user from "../models/user";
export const forgot = async(req:Request,res:Response)=>{
   try{
        const {email} = req.body;
        const existingUser = await user.findOne({email:email})
        if(!existingUser){
             res.send({message:"Please enter registered email"})
        }else{
            res.send({message:"Reset password"})
        }
    }
    catch(err){
         res.send(err);
    }
}