const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name : String,
    last_name : String,
    email : String,
    phone_no : String,
    password : String,
    user_id : String
})

const userModel = mongoose.model('users_collection', userSchema);

module.exports = userModel;