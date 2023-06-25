// import express from "express";
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// import cors from "cors";
// import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


mongoose.connect("mongodb://127.0.0.1:27017/auth",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log('connected'))
.catch(()=>console.log('not connected'))

//user schema 
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

//routes routes
app.post("/Login",async (req,res)=>{
    try{
        const {email,password} =req.body;
        console.log('user password',password);
       const userDetail=await User.findOne({email:email})
       console.log(userDetail);
       console.log('userDeatil',userDetail.password);
            // if(userDetail){
            //    if(password === userDetail.password){
            //        res.send({message:"login sucess",userDetail:userDetail})
            //    }else{
            //        res.send({message:"wrong credentials"})
            //    }
            // }else{
            //     res.send("not register")
            // }

            if(password == userDetail.password){
                res.send({message:"login sucess",userDetail:userDetail})
            }else{
                res.send({message:"wrong credentials"})
            }
    }
   catch(e){
    console.log('error');
   }
    })

app.post("/Register",async (req,res)=>{
    // console.log(req.body) 
    // const {name,email,password} =req.body;
    // const userData=User.findOne({email:email})
    //     if(userData){
    //         res.send({message:"user already exist"})
    //     }else {
    //         const user = new User({name,email,password})
    //         user.save(err=>{
    //             if(err){
    //                 res.send(err)
    //             }else{
    //                 res.send({message:"sucessfull"})
    //             }
    //         })
    //     }
try{
    const userData= new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password

    })
    const result=await userData.save();
    console.log(result);
}
catch(e){
    console.log('error saving data');
}
    
    }
    
    )


app.listen(6969,()=>{
    console.log("started")
})