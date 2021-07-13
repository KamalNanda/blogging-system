const User = require('../models/user') 
 
const signUp = async (req , res , next) => {
    console.log(req.body)
    const {firstname, lastname, email, password} = req.body
    let existingUser
    try{
        existingUser = await User.findOne({email})
    }  catch(err){
        console.log(err)
        return next(err)
    }
    if (existingUser){    
        return res.status(400).json({message : 'User already exist with entered Email'})
    }
    const newUser = new User({
        firstname, lastname, email, password
    })
    try {
        await newUser.save()
    } catch(err){
        console.log(err)
        return next(err)
    }
    res.status(201).json({user: newUser, message:'User Created'})
}
  
const login = async (req, res, next) => {
    const {email , password} = req.body
    let existingUser
    try{
        existingUser = await User.findOne({email})
    }  catch(err){
        console.log(err)
        return next(err)
    } 
    if(!existingUser || existingUser.password !== password){   
        return res.status(404).json({message: "User not found with the given credentials"})
    }
    res.status(200).json({message: "Logged In" , user : existingUser})
}
 
const getUserById = async (req, res, next) => {
    let {userId} = req.params
    let user
    try{
        user = await User.findById(userId)
    } catch (error){ 
        next (error)
        return res.status(500).createRoomjson({message: "Fetching Users List Failed! Try Later "})
    }
    res.status(200).json({user})
}

exports.login = login
exports.signUp = signUp 
exports.getUserById = getUserById