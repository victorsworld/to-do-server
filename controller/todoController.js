const ToDo = require('../model/ToDo');

const getAllToDo = async (req, res) => {
  try {
    const allToDos = await ToDo.find({});
    res.status(200).json({ success: true, data: allToDos });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const createToDo = async (req, res) => {
  try {
    const newToDo = await new ToDo(req.body);
    const saveToDo = await newToDo.save();
    res.status(200).json({ success: true, data: saveToDo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const editTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const updatedData = req.body;

    const updatedToDo = await ToDo.findByIdAndUpdate(todoId, updatedData);

    if (!updatedToDo) {
      return res
        .status(404)
        .json({ success: false, message: 'ToDo not found' });
    }

    res.status(200).json({ success: true, data: updatedToDo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await ToDo.findOneAndDelete({ _id: id });
    res.status(200).json({ success: true, data: deletedTodo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllToDo,
  createToDo,
  editTodo,
  deleteTodo,
};
