const User = require ("./models/user.models");

const register = async (req, res) => {
    let user ;

    user = await User.findOne({name: req.body.name});
}

const login = async (req, res) => {

}