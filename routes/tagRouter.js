const express = require('express');
const router = express.Router();

const tagController = require('../controllers/tagController');

router.post('/', tagController.addTag);
router.get('/', tagController.getAllTags);
router.get('/:id', tagController.getOneTag);
router.patch('/:id', tagController.updateTag);
router.delete('/:id', tagController.deleteTag);

module.exports = router