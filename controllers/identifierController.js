const db = require('../models');


const addIdentifier = async (req, res) => {

    const info = {
        cardcode: req.body.cardcode
    }
    const identifier = await db.Identifier.create(info)
    res.status(201).json({msg: 'Added Successfully', identifier})
}

const getAllIdentifiers = async (req, res) => {
    const identifiers = await db.Identifier.findAll({include: [db.Student]})
    res.status(200).json({count: identifiers.length, identifiers})
}


const getOneIdentifier = async (req, res) => {
    const id = req.params.id
    const identifier = await db.Identifier.findOne({ where: { id: id }, include: [db.Student]})
    res.status(200).json({identifier})
}


const updateIdentifier = async (req, res) => {
    const id = req.params.id
    const identifier = await db.Identifier.update(req.body, { where: { id: id }})
    res.status(200).json({msg: 'Updated Successfully'})
}


const deleteIdentifier = async (req, res) => {
    const id = req.params.id   
    await db.Identifier.destroy({ where: { id: id }} )
    res.status(200).json({msg: 'Deleted Successfully'})
}

module.exports = {
    addIdentifier,
    getAllIdentifiers,
    getOneIdentifier,
    updateIdentifier,
    deleteIdentifier
}