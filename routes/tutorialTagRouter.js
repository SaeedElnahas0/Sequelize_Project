const express = require('express');
const router = express.Router();

const tutorial_tagController = require('../controllers/tutorial_tagController');

router.post('/', tutorial_tagController.addTutorial_Tag);
router.get('/', tutorial_tagController.getAllTutorial_Tags);
router.get('/:id', tutorial_tagController.getOneTutorial_Tag);
router.patch('/:id', tutorial_tagController.updateTutorial_Tag);
router.delete('/:id', tutorial_tagController.deleteTutorial_Tag);

module.exports = router