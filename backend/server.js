const express = require('express')
const notes = require('./data/notes')
const dotenv = require('dotenv')

const app = express();
dotenv.config()

const PORT = process.env.HTTP_PORT || 5000

app.listen(PORT,console.log(`server started at port: ${PORT}`))

app.get("/", (req,res)=>{
    res.send("Hi from API")
})

app.get('/api/notes',(req,res)=>{
    res.send(notes)
})

app.get('/api/users/:id', (req,res)=>{
    const id  = req.params.id

    const note = notes.find(note => note._id === id)

    if(note){
        res.send(note)
    }else{
        res.send("no note found")
    }
})