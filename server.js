const htmlRoutes = require("./routes/html-routes");
const apiRoutes = require('./routes/api-routes');
const path = require('path');

//this is requiring express we are making an express server
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3005

//middle ware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//this is showing which folded it serve
// app.use(express.static('public'))
// app.get('/', (req,res) =>{
//     res.send('hello')
// })
app.use(express.static(path.join(__dirname, "public")));
app.use("/",htmlRoutes);
app.use("/api",apiRoutes);


app.listen(PORT, ()=>{
    console.log(`app listen on port:${PORT}`)
});