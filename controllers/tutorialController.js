const db = require('../models');


const addTutorial = async (req, res) => {

    const info = {
        title: req.body.title,
        author: req.body.author
    }
    const tutorial = await db.Tutorial.create(info)
    res.status(201).json({msg: 'Added Successfully', tutorial})
}

const getAllTutorials = async (req, res) => {
    const tutorials = await db.Tutorial.findAll({include: [db.Comment]})
    res.status(200).json({count: tutorials.length, tutorials})
}


const getOneTutorial = async (req, res) => {
    const id = req.params.id
    const tutorial = await db.Tutorial.findOne({ where: { id: id }, include: [db.Comment]})
    res.status(200).json({tutorial})
}


const updateTutorial = async (req, res) => {
    const id = req.params.id
    const tutorial = await db.Tutorial.update(req.body, { where: { id: id }})
    res.status(200).json({msg: 'Updated Successfully'})
}


const deleteTutorial = async (req, res) => {
    const id = req.params.id   
    await db.Tutorial.destroy({ where: { id: id }} )
    res.status(200).json({msg: 'Deleted Successfully'})
}

module.exports = {
    addTutorial,
    getAllTutorials,
    getOneTutorial,
    updateTutorial,
    deleteTutorial
}