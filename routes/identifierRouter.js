const express = require('express');
const router = express.Router();

const identifierController = require('../controllers/identifierController');

router.post('/', identifierController.addIdentifier);
router.get('/', identifierController.getAllIdentifiers);
router.get('/:id', identifierController.getOneIdentifier);
router.patch('/:id', identifierController.updateIdentifier);
router.delete('/:id', identifierController.deleteIdentifier);

module.exports = router