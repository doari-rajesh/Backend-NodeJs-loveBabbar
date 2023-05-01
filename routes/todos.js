const express = require("express");
const router = express.Router();

// Import Controller for createTodo
const { createTodo } = require("../controllers/createTodo");
const { getTodo } = require("../controllers/getTodo");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");

// Created  createTodo Routes
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;
