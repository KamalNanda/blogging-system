const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const cors = require("cors");

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use((req,res,next)=>{
    res.setHeader('Acces-Control-Allow-Origin','*');
    res.setHeader('Acces-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Acces-Contorl-Allow-Methods','Content-Type','Authorization');
    next(); 
})
let port = process.env.PORT || 2000
app.use('/' ,routes)
mongoose.connect('mongodb+srv://kamal:kamal@cluster0.uftn9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' , {useNewUrlParser : true , useUnifiedTopology: true })
.then(()=> {
app.listen(port, ()=>{console.log(`A Node.Js API is linstening on port 2000`)})   
})
.catch(err => console.log(err))