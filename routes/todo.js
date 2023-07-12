const express = require('express');
const router = express.Router();
const { createToDo } = require('../controller/todoController');

router.get('/hello', (req, res) => {
  res.status(200).json({ message: 'starting' });
});
router.get('/all-todo');
router.post('create-todo', createToDo)

module.exports = router;
