const express = require('express')
const Model = require('../model/model')
const cors = require('cors')

const router = express.Router()

//Post Method
router.post('/post', async (req, res) =>{
    const data = new Model({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email : req.body.email,
        phone: req.body.phone,
        password: req.body.password
    })

    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
    
})

//Get all Method
router.get('/getAll', async (req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
   try{
       const data = await Model.find();
       
       res.json(data) 
   }catch(error){
       res.status(500).json({message: error.message})
   }
})

//Get by id Method
router.get('/getAll/:id',(req, res) =>{
    res.send("Get only one data")
})

//Update by Id Method
router.put('/update/:id', (req,res) =>{
    res.send("Update by id")
})

//Delete by id Method
router.delete("/delete/:id", (req,res) =>{
    res.send("Delete by id")
})

module.exports = router;