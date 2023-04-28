// import todo model
const { request, response } = require("express");
const Todo = require("../models/todo");

// define route handler
exports.createTodo = async (req, res) => {
  try {
    // extract title and description from request body
    const { title, description } = req.body;
    const response = await Todo.create({ title, description });
    res.status(200).json({
      success: true,
      data: response,
      message: "Enter created successfully",
    });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({
      success: false,
      data: "Internal Sever Error",
      message: error.message,
    });
  }
};
