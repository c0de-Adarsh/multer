const express = require('express')
const router = express.Router()
const Student = require('../Models/Student')
const multer = require('multer')


//step 1 giving instruction to multer where we store
//set up multer to store files in uploads folder

/*
const storage = multer.diskStorage({
    destination: (req , file , cb) =>{
        cb(null,'uploads')

    },
    filename: (req, file, cb)=>{
        const suffix = Date.now();
        cb(null,suffix+ "-" +file.originalname)
    }
})
*/

//configure multer to store files in memory as buffer 
const storage = multer.memoryStorage()

const upload = multer({storage})
router.post('/',upload.single('photo'),async(req , res)=>{
     
   try {

    const {name,email,phone,address} = req.body; 

   // const photopath = req.file? req.file.path : null; //get the file path if uploaded

   const photoBas64 = req.file ? req.file.buffer.toString('base64'): null;
    
    const newStudent = new Student({
        name,
        email,
        phone,
        address,
         photo: photoBas64
    })

    await newStudent.save()

    res.status(200).json({message:'Student created sucessfully', student:newStudent})

   } catch (error) {
     
    console.log(error)
    res.status(500).json({error:'Internal Server error'})
   }
})

router.get('/',async (req , res) => {
    try {
        const response = await Student.find()
        console.log('data fetched successfully')
        res.status(200).json({
            success:true,
            message:'Student data fetched',
            response
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({error:'Internal server error'})
    }
})

module.exports = router

