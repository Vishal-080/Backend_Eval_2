const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true ,minLength:3,maxLength:10},
    email: { type: String, required: true,unique: true},
    password: { type: String, required: true,minLength:8,maxLength:16},
    profile_photo_url: { type:String, required: true},
    roles: [{ type: String, required: true}]
})

module.exports = mongoose.model('user',userSchema);