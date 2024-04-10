const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    email:String,
    password:String
})

module.exports = mongoose.model('login',ProductSchema);