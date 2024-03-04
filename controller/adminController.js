const admins = require("../models/adminSchema");
const jwt = require('jsonwebtoken');
const emails = require("../models/emailSchema");


exports.loginControl=async(req,res)=>{
    // res.status(200).json(`inside admin login`);
    const {email,password} = req.body
    try{
        const existingAdmin = await admins.findOne({email,password})
        if(existingAdmin){
            const token=jwt.sign({adminId: existingAdmin._id},"inciem123")
            res.status(200).json({existingAdmin, token})
        }
        else{
            res.status(404).json('Invalid email id or password')
        }
        

    }catch(err){
        res.status(401).json('Login request failed due to ' + err)
    }
}

exports.getUserData=async(req,res)=>{
    // console.log('inside get user details');
    // res.status(200).json('user details received')
    try{
        const userData=await emails.find()
        res.status(200).json(userData)
    }catch(err){
        res.status(401).json(`${err}`)
    }
}