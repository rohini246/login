import {  Request } from "express";
import user from "../models/user";
import bcrypt from 'bcryptjs';
export const signService = async(req:Request)=>{
    const userExist = await user.findOne({email:req.body.email})
    if(userExist){
        return ("User already registered.");
        }else{
            bcrypt.hash(req.body.password,10,(error:Error,hash:string)=>{
                if(error){
                    return error;
                }else{
                    const newUser=new user({
                        name:req.body.name,
                        email:req.body.email,
                        address:req.body.address,
                        password:hash
                    });
                    const newUserData =  newUser.save();
                    if(!newUserData){
                   return ("Internal server error");
                   }else{
                    return ("Successfully Registered.");
                   }  
                }
            })    
        }            
}