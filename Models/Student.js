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
    address:{
        type:String,
        
    },
    phone:{
        type:String
    },
    photo:{
        type:String
    }//store  based 64 encoded data 
    
})

const Student  = mongoose.model('Student',studentsSchema)

module.exports = Student