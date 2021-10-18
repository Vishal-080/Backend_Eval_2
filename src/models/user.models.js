const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true ,minLength:3,maxLength:10},
    email: { type: String, required: true,unique: true},
    password: { type: String, required: true,minLength:8,maxLength:16},
    profile_photo_url: { type:String, required: true},
    roles: { type: String, required: true}
})

userSchema.pre("save", function(next){
    if (!this.isModified("password")) return next();
    const hash = bcryptjs.hashSync(this.password,8);
    this.password = hash;
    return next();
})

userSchema.methods.checkPassword = function(password) {
    const match = bcryptjs.compareSync(password, this.password);
    return match;
}


module.exports = mongoose.model('user',userSchema);