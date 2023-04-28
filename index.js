
const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;



// Middlewares 
app.use(express.json());


// Mounted Routes and Controllers/Handler/Business Logic 
const todoRoutes = require('./routes/todos');
app.use("/api/v1", todoRoutes)


app.listen(PORT,()=>{
    console.log(`server started successfully at ${PORT}`);
})


// Database Connection
const dbConnect = require('./config/database')
dbConnect();


//Default route
app.get('/',(req,res)=>{
    res.send('<h1>Welcome to Backend HOMEPAGE</h1>');
})
