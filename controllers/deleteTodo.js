const Todo = require("../models/todo");

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Todo.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      data: response,
      message: "Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: "Internal sever error",
      message: "Data not deleted Successfully",
    });
  }
};
