// import todo model schema
const Todo = require("../models/todo");

// Define route handlers
exports.getTodo = async (req, res) => {
  try {
    const todo = await Todo.find({})
    res.status(200).json({
        success: true,
        data: todo,
        message: "Entire todo is fetched",
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
