const db = require('../models');


const addStudent = async (req, res) => {

    const info = {
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age,
        city: req.body.city,
        email: req.body.email,
        IdentifierId: req.body.IdentifierId
    }
    const student = await db.Student.create(info)
    res.status(201).json({msg: 'Added Successfully', student})
}

const getAllStudents = async (req, res) => {
    const students = await db.Student.findAll({include: [db.Identifier]})
    res.status(200).json({count: students.length, students})
}


const getOneStudent = async (req, res) => {
    const id = req.params.id
    const student = await db.Student.findOne({ where: { id: id }, include: [db.Identifier]})
    res.status(200).json({student})
}


const updateStudent = async (req, res) => {
    const id = req.params.id
    const student = await db.Student.update(req.body, { where: { id: id }})
    res.status(200).json({msg: 'Updated Successfully'})
}


const deleteStudent = async (req, res) => {
    const id = req.params.id   
    await db.Student.destroy({ where: { id: id }} )
    res.status(200).json({msg: 'Deleted Successfully'})
}

module.exports = {
    addStudent,
    getAllStudents,
    getOneStudent,
    updateStudent,
    deleteStudent
}