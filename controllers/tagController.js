const db = require('../models');


const addTag= async (req, res) => {

    const info = {
        name: req.body.name,
        slug: req.body.slug
    }
    const tag = await db.Tag.create(info)
    res.status(201).json({msg: 'Added Successfully', tag})
}

const getAllTags = async (req, res) => {
    const tags = await db.Tag.findAll({include: [db.Tutorial]})
    res.status(200).json({count: tags.length, tags})
}


const getOneTag = async (req, res) => {
    const id = req.params.id
    const tag = await db.Tag.findOne({ where: { id: id }, include: [db.Tutorial]})
    res.status(200).json({tag})
}


const updateTag = async (req, res) => {
    const id = req.params.id
    const tag = await db.Tag.update(req.body, { where: { id: id }})
    res.status(200).json({msg: 'Updated Successfully'})
}


const deleteTag = async (req, res) => {
    const id = req.params.id   
    await db.Tag.destroy({ where: { id: id }} )
    res.status(200).json({msg: 'Deleted Successfully'})
}

module.exports = {
    addTag,
    getAllTags,
    getOneTag,
    updateTag,
    deleteTag
}