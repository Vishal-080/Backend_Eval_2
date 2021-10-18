const User = require ("./models/user.models");
const jwt = require("jsonwebtoken");
const newToken = (user) => {
    return jwt.sign((user),process.env.JWT_SECRET_KEY);
}

const register = async (req, res) => {
    let user ;

    user = await User.findOne({name: req.body.name});
    user = await User.findOne({email: req.body.email});
    if (user) return res.status(400).send({message:"Enter Correct email and password"});
    user = await User.create(req.body);
    const token = newToken(user);
    return res.status(200).send({token: token});

}

const login = async (req, res) => {
    let user ;

    user = await User.findOne({name: req.body.name});
    user = await User.findOne({email: req.body.email});
    if ( ! user) return res.status(400).send({message:"Enter Correct email and password"});
    let match = User.checkPassword(req.body.password);
    if (!match) return res.status(400).send({message:"Invalid password"});
    const token = newToken(user);
    return res.status(200).send({token: token});

}


module.exports = {register,login};