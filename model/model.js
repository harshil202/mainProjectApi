const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    firstName:{
        required: true,
        type: String
    },
    lastName:{
        required: true,
        type: String
    },
    email:{
        required: true,
        type: String
    },
    phone:{
        required: true,
        type: Number
    },
    password:{
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)



