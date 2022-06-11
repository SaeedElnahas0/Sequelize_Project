module.exports = (sequelize, Datatype) =>{
    const Student = sequelize.define('Student', {
        name: {
            type: Datatype.STRING,
            allowNull: false,
            validate: {
                len: [3,30],
                notNull: {msg: 'Please enter your name'}
            },
        },
        gender: {
            type: Datatype.STRING,
            allowNull: false,
        },
        age: {
            type: Datatype.INTEGER,
            allowNull: false,
        },
        city: {
            type: Datatype.STRING,
            allowNull: false,
        },
        email: {
            type: Datatype.STRING,
            allowNull: false,
            validate: { isEmail: {msg: 'Must be an EMAIL in the form of email'} }
        },  
    })
 
    Student.associate = models =>{
        Student.belongsTo(models.Identifier, {
            onDelete: "cascade"  
        })
    }
    
    return Student
}
