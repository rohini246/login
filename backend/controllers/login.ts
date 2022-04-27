import { Request,Response} from "express";
import { loginService } from "../services/login";
export const userLogin = async(req:Request,res:Response)=>{
  const userLoginData = await  loginService(req);
  return res.json(userLoginData);
}