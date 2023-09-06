const express= require('express');
const {check,validationResult}=require('express-validator');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User = require('../models/User');
const generateToken = require('../middlewares/generateToken');
const sendgrid = require ('@sendgrid/mail');
const dotenv= require("dotenv");
dotenv.config()
const sendEmail = require ('../config/sendEmail');

sendgrid.setApiKey(process.env.CHURCH_MANAGEMENT_KEY);
/**
 * * @method - POST
 * @param- /signup
 *@description- User Signup
 */

 const Register=async(req,res)=>{
 

   
   
        
     
      
        const user=new  User({
           
            name:req.body.name,
            
           
            email:req.body.email,
           
          
          
              password:bcrypt.hashSync(req.body.password,8),
              
            },
             
     
    
    )
    const createdUser=  user.save();



    res.send({
        _id:user._id,
        name:user.name,
       
        email:user.email,
    
        token:generateToken(createdUser)
    })
   
           
     

  
   



}
/**
 * * @method - POST
 * @param- /signin
 *@description- User Signin
 */


const Login=async(req,res)=>{
    
    const user= await User.findOne({email:req.body.email});
  

    if (user) {
        if (bcrypt.compareSync(req.body.password,user.password)) {
            res.send({
                _id:user._id,
                name:user.name,
                storeName:user.storeName,
                phoneNumber:user.phoneNumber,
                email:user.email,
                isAdmin:user.isAdmin,
               
             
               
             
              
                
                token:generateToken(user)
            })
            return 
        }
    }
    res.status(401).send({message:"invalid email or password"})
    }

  
     /**
      * * @method - POST
      * @param- /signin
      *@description- User Signin
      */
     
     

   
       
    









 
 module.exports={Login,Register}