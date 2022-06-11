module.exports = (sequelize, Datatype) =>{
    const Identifier = sequelize.define('Identifier', {
        cardcode: {
            type: Datatype.STRING,
            unique: true,
            allowNull: false
        }
    })

    Identifier.associate = models =>{
        Identifier.hasOne(models.Student, {
            onDelete: "cascade"  
        })
    }
    
    return Identifier
}