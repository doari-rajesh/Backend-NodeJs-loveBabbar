const Todo = require("../models/todo");

exports.updateTodo = async (req, res) => {
  try {
    const {id} = req.paramsy;
    const { title, description } = req.body;
    const response = await Todo.findByIdAndUpdate(
      { _id:id },
      { title, description,updatedAt:Date.now()}
    );
    res.status(200).json({
      success: true,
      data: response,
      message: "Data updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: "Internal sever error",
      message: "Data not updated Successfully",
    });
  }
};
