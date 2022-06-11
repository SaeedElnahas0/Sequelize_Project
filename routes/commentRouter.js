const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentController');

router.post('/', commentController.addComment);
router.get('/', commentController.getAllComments);
router.get('/:id', commentController.getOneComment);
router.patch('/:id', commentController.updateComment);
router.delete('/:id', commentController.deleteComment);

module.exports = router