const express = require("express");
const router = express.Router();

// Import Controller for createTodo
const { createTodo } = require("../controllers/createTodo");

// Created  createTodo Routes
router.post("/createTodo", createTodo);

module.exports = router;
