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

module.exports = {
  getAllToDo,
  createToDo,
};
