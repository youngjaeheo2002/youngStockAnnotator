const express = require('express');
const userRouter = express.Router();
const User = require('../Models/user');
const mongoose = require('mongoose')
const validator = require('validator');

function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

    if (password.length < minLength) {
        return "Password must be at least 8 characters long.";
    }
    if (!hasUpperCase) {
        return "Password must contain at least one uppercase letter.";
    }
    if (!hasLowerCase) {
        return "Password must contain at least one lowercase letter.";
    }
    if (!hasNumbers) {
        return "Password must contain at least one number.";
    }
    if (!hasSpecialChar) {
        return "Password must contain at least one special character.";
    }
    return "Valid";
}

function isValidEmail(email) {
    return validator.isEmail(email);
}
//define userRouter
userRouter.post('/signup', async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const email = req.body.email

    //check if email is valid
    if (!isValidEmail(email)){
        res.status(400).json({
            message:"Not a valid email"
        })
    }
    //check for user that already exists with this username
    const user_With_Username  = await User.findOne({
        username:username
    });

    if (user_With_Username){
        res.status(409).json({
            message:"User with username already exists"
        })
        return
    }

    //check for user that already exists with this email
    const user_With_Email = await User.findOne({
        email:email
    })

    if(user_With_Email){
        res.status(409).json({
            message:"User with email already exists"
        })
        return
    }
    try{
        const user = await User.create({
            username:username,
            password:password,
            firstName:firstName,
            email: email,
        })

        res.json(user)
    }
    catch(err){
        console.log("Error creating user: ",err);
        res.json(err)
    }
    return

});

userRouter.post('/signin',async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    try{

    }
    catch(err){
        res.json(err)
    }
})

module.exports = userRouter;