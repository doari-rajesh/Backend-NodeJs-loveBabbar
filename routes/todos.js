const express = require("express");
const router = express.Router();

const { createTodo } = require("../controllers/createTodo");

// Defined route
router.post("/createTodo", createTodo);

module.exports = router;
