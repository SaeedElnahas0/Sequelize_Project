const express = require('express');
const router = express.Router();

const tutorialController = require('../controllers/tutorialController');

router.post('/', tutorialController.addTutorial);
router.get('/', tutorialController.getAllTutorials);
router.get('/:id', tutorialController.getOneTutorial);
router.patch('/:id', tutorialController.updateTutorial);
router.delete('/:id', tutorialController.deleteTutorial);

module.exports = router