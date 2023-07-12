const ToDo = require('../model/ToDo');

const createToDo = async (req, res) => {
  try {
    const newToDo = await new Blog(req.body);
    const saveToDo = await newToDo.save();
    res.status(200).json({ success: true, data: saveToDo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
    createToDo
}