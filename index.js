const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const cors = require('cors')

//For env variable
require('dotenv').config();

//Get uri string from .env file
const mongoString = process.env.DATABASE_URL;


//Connect mongoose using mongoString
mongoose.connect(mongoString);
const database = mongoose.connection

//It will give error if any error occured
database.on('error', (error) =>{
    console.log(error)
})

//It will give success msg only once
database.once("connected", () =>{
    console.log("Database Connected")
})

const app = express()
app.use(express.json());
//One is base end point and other is contents of routes
app.use('/api', routes)
app.use(cors())


app.listen(5000, () =>{
    console.log(`Server listend to port ${5000}`)
})