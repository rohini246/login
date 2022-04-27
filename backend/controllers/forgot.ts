import { Request,Response } from "express";
import { forgotService } from "../services/forgot";
export const forgot = async(req:Request,res:Response)=>{
  const forgotData =  await forgotService(req); 
  res.json(forgotData);   
               
 }