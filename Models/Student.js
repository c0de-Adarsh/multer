const mongoose = require('mongoose')

const studentsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        
    }
    
})

const User  = mongoose.model('studentsSchema')

module.exports = User