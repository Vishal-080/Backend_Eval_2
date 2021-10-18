const mongoose = require('mongoose');
const user = require('./user.models');

const studentSchema = new mongoose.Schema({
    roll_number: { type: Number, required: true ,minLength:3,maxLength:10},
    user: {type:Schema.Types.ObjectId,ref:"user"},
    batch: { type: String, required: true}
})

module.exports = mongoose.model('student',studentSchema);