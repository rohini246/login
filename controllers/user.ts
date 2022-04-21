import { Request,Response } from "express";
import users from "../models/user";
export const createUser = async(req:Request,res:Response)=>{
   try{
        let newUser = new users(req.body);
        const newUserData = await newUser.save();
        res.status(201).send(newUserData)
        console.log(newUser);
    }
    catch(err){
         res.send(err);
    }
}