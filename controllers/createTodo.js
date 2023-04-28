// import todo model schema
const Todo = require("../models/todo");

// Define route handlers
exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const response = await Todo.create({ title, description });
    res.status(200).json({
      success: true,
      data: response,
      message: "Data Created Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: error.message,
    });
    console.error(error.message);
  }
};
