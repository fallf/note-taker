//this is requiring express we are making an express server
const express = require('express')
const app = express()

const port = process.env.port || 3001

//middle ware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//this is showing which folded it serve
app.use(express.static('public'))
app.get('/', (req,res) =>{
    res.send('hello')
})










app.listen(port, ()=>{
    console.log(`app listen on port:${port}`)
})