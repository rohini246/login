import { check } from "express-validator";

export const userValidator=[
    check("email","Format of mail should be like that(xyz@gmail.com)")
    .isEmail(),
    
    check("password","Please enter a password at least 8 character and contain At least one uppercase.At least one lower case.At least one special character. ",)
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/),

    check("confirmPassword").custom((value,{req}) =>{
        if(value !== req.body.password){
            throw new Error("Password confirmation does not match password");
        }
        return true;
    }),
]