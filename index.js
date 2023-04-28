
const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;



//middleware
app.use(express.json());



const todoRoutes = require('./routes/todos');
app.use("/api/v1", todoRoutes)


app.listen(PORT,()=>{
    console.log(`server started successfully at ${PORT}`);
})


// DB connetion

const dbConnect = require('./config/database')
dbConnect();


//default route
app.get('/',(req,res)=>{
    res.send('<h1>Welcome to Backend HOMEPAGE</h1>');
})
