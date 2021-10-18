const mongoose = require('mongoose');
const user = require('./user.models');

const LectureSchema = new mongoose.Schema({
    title: { type:String , required: true,minLength:3,maxLength:10},
    instructor: {type:Schema.Types.ObjectId,ref:"user"},
    batch: { type: String, required: true}
})

module.exports = mongoose.model('lecture',LectureSchema);