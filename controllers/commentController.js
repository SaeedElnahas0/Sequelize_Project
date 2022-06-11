const db = require('../models');


const addComment = async (req, res) => {

    const info = {
        text: req.body.text,
        TutorialId: req.body.TutorialId,
    }
    const comment = await db.Comment.create(info)
    res.status(201).json({msg: 'Added Successfully', comment})
}

const getAllComments = async (req, res) => {
    const comments = await db.Comment.findAll({include: [db.Tutorial]})
    res.status(200).json({count: comments.length, comments})
}


const getOneComment = async (req, res) => {
    const id = req.params.id
    const comment = await db.Comment.findOne({ where: { id: id }, include: [db.Tutorial]})
    res.status(200).json({comment})
}


const updateComment = async (req, res) => {
    const id = req.params.id
    const comment = await db.Comment.update(req.body, { where: { id: id }})
    res.status(200).json({msg: 'Updated Successfully'})
}


const deleteComment = async (req, res) => {
    const id = req.params.id   
    await db.Comment.destroy({ where: { id: id }} )
    res.status(200).json({msg: 'Deleted Successfully'})
}

module.exports = {
    addComment,
    getAllComments,
    getOneComment,
    updateComment,
    deleteComment
}