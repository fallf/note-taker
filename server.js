const htmlRoutes = require('./routes/html-routes');
const apiRoutes = require('./routes/api-routes');
const path = require('path');

//this is requiring express we are making an express server
const express = require('express')
const app = express()

const port = process.env.port || 3005

//middle ware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//this is showing which folded it serve
// app.use(express.static('public'))
// app.get('/', (req,res) =>{
//     res.send('hello')
// })
app.use(express.static(path.join(__dirname, "public")));
app.use('/',html-routes);
app.use('/api',api-routes);








app.listen(port, ()=>{
    console.log(`app listen on port:${port}`)
});