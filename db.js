const mongoose = require('mongoose')
require('dotenv').config()

const MONGODB_URL = process.env.MONGO_URL

 mongoose.connect(MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
 })

 const db = mongoose.connection


 db.on('connected',()=>{
    console.log('Mongodb connected successfully')
 })

 db.on('disconected',()=>{
    console.log('Mongodb disconnected successfully')
 })

 db.on('error',(err)=>{
    console.log('Mongodb connection error',err)
 })

 module.exports = db