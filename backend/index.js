import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome to the backend server");
})

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("Connected to MongoDB")).catch((err)=>{
    console.log("Error connecting to MongoDB", err);
});
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
        password:{
            type:String,
            required:true
        }
    
})

const User = mongoose.model("user", userSchema )

app.post("/signup",async (req,res)=>{
    const {name, email, password} = req.body;
    const existUser = await User.findOne({email});
    if(existUser){
        return res.status(400).json({message:"User already exists"});
    }
    try {
        const user = new User({name, email, password});
        await user.save();
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(201).json({message:"User created successfully", token});
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({message:"Error creating user"});
    }
})

app.post("/login",async (req,res)=>{
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"User not found"});
        }
        if(user.password !== password){
            return res.status(400).json({message:"Invalid password"});
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(200).json({message:"Login successful", user});
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({message:"Error logging in"});
    }
})

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})