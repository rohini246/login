import { Request,Response} from "express";
import { signService } from "../services/signup";
export const createUser = async(req:Request,res:Response)=>{   
   const createUserData= await signService(req);  
   return res.json(createUserData);            
 }
