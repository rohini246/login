import { Request} from "express";
import user from "../models/user";
import bcrypt from 'bcryptjs';
export const loginService = async(req:Request)=>{
        const {email,password} = req.body;
        const existingUser = await user.findOne({email:email})
        if(!existingUser){
            return ("user not found");
        }else{
            const isMatch = await bcrypt.compare(password,existingUser.password)
        
            if(!isMatch){
                return ("password didn't match");
                
            }else{
                    
                    return ("Login Successfully.");
                }

        }
        
        
            
        
            
}