// Creating an instance of express
const express = require("express");
const app = express();

//Import dotenv
require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// server is activated at port no 3000
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

// mounted routes and handlers
const todoRoutes = require("./routes/todos");
app.use("/api/v1", todoRoutes);

// Database Connection
const dbConnect = require("./config/database");
dbConnect();

//Default Routes
app.get("/", (req, res) => {
  console.log("Welcome to Backend Server");
  res.send("<h1>Welcome to Backend Server</h1>");
});
