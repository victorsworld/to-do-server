const express = require('express');
const router = express.Router();
const { createToDo, getAllToDo } = require('../controller/todoController');

router.get('/hello', (req, res) => {
  res.status(200).json({ message: 'starting' });
});
router.get('/all-todo', getAllToDo);
router.post('/new-todo', createToDo)

module.exports = router;
