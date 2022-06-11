const db = require('../models');


const addTutorial_Tag= async (req, res) => {

    const info = {
        TutorialId: req.body.TutorialId,
        TagId: req.body.TagId
    }
    const tutorialTag = await db.Tutorial_Tag.create(info)
    res.status(201).json({msg: 'Added Successfully', tutorialTag})
}

const getAllTutorial_Tags = async (req, res) => {
    const tutorialTags = await db.Tutorial_Tag.findAll({})
    res.status(200).json({count: tutorialTags.length, tutorialTags})
}


const getOneTutorial_Tag = async (req, res) => {
    const id = req.params.id
    const tutorialTag = await db.Tutorial_Tag.findOne({ where: { id: id }})
    res.status(200).json({tutorialTag})
}


const updateTutorial_Tag = async (req, res) => {
    const id = req.params.id
    const tutorialTag = await db.Tutorial_Tag.update(req.body, { where: { id: id }})
    res.status(200).json({msg: 'Updated Successfully'})
}


const deleteTutorial_Tag= async (req, res) => {
    const id = req.params.id   
    await db.Tutorial_Tag.destroy({ where: { id: id }} )
    res.status(200).json({msg: 'Deleted Successfully'})
}

module.exports = {
    addTutorial_Tag,
    getAllTutorial_Tags,
    getOneTutorial_Tag,
    updateTutorial_Tag,
    deleteTutorial_Tag
}