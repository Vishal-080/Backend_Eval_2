const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require ("../models/user.models");
const newToken = (user) => {
    return jwt.sign({user},process.env.JWT_SECRET_KEY);
}

const register = async (req, res) => {
    let user ;
    try{
        user = await User.findOne({name: req.body.name});
        //console.log({user});
        user = await User.findOne({email: req.body.email});
        if (user) return res.status(400).send({message:"Enter Correct email and password"});
        user = await User.create(req.body);
        const token = newToken(user);
        return res.status(200).send({user,token});
    }catch(err) {
        return res.status(500).send({message:"Error creating user"});
    }
}

const login = async (req, res) => {
   // let user ;
    try{
        let user = await User.findOne({email: req.body.email});
        console.log("user at 27",user)
        if (!user) return res.status(400).send({message:"Enter Correct email and password"});
        let match = User.checkPassword(req.body.password);
        if (!match) return res.status(400).send({message:"Invalid password"});
        const token = newToken(user);
        return res.status(200).send({user,token});
    }catch(err) {
        return res.status(500).send({message:"Error while login"})
    }
}


module.exports = {register,login};