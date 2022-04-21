import express,{Request,Response} from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';


const port: number = 8070;
const url:string = "mongodb://localhost:27017/users";

mongoose.connect(url, (err: any) =>{
    if (err) {
    console.log(err.message);
    } else {
    console.log(`Connecting to MONGO`);
    } 
});
const userRoutes = require('./routes/user')
const app = express();
app.use(express.json());
app.use(session({
    secret : "any long secret key",
    resave : false,
    saveUninitialized : false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));


app.set("views","./views");
app.set("view engine","ejs");


app.get("/signup",(req:Request,res:Response)=>{
    res.render("signup");
});

app.use('/signup',userRoutes);

app.listen(port, () => {console.log(`Listening on port ${port}`);});

