import mongoose from 'mongoose';
import {Schema} from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
export const user = new Schema({
    id: { type: mongoose.Schema.Types.ObjectId, required: false },
    email: {
        type:String, 
        required:[true , "email is required."],
        index:{unique:true},
        minlength:[6,"Email can't be shorter than 6 characters."],
        maxlength:[64,"Email can't be longer than 64 characters."]
    },
    password:{
        type:String,
        trim:true,
        required:[true,"password is required."]
    },
    confirmPassword:{
        type:String,
        trim:true,
        required:[true,"confirmation is required."]
    }
});
//user.plugin(passportLocalMongoose);
const users = mongoose.model("users", user);

export default users;