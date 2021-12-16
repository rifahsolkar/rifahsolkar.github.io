const express = require('express');
const mongoose = require('mongoose')
const port = 9000;

const url = ("mongodb://localhost/CRUDdb")

const app = express()


mongoose.connect(url)

const con = mongoose.connection

con.on('open',()=>{
    console.log('Connected. . . ')
})

app.use(express.json())

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})

const rifRouter = require('./routers/route')
app.use('/rif',rifRouter)