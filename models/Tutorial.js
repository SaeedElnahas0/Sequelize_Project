module.exports = (sequelize, Datatype) =>{
    const Tutorial = sequelize.define('Tutorial', {
        title: {
            type: Datatype.STRING,
            allowNull: false,
            validate: {
                notNull: {msg: 'Please enter your title'}
            },
        },
        author: {
            type: Datatype.STRING,
            allowNull: false,
            validate: {
                notNull: {msg: 'Please enter your author'}
            },
        } 
    })
 
    Tutorial.associate = models =>{
        Tutorial.hasMany(models.Comment, {
            onDelete: "cascade"  
        })
        Tutorial.belongsToMany(models.Tag, {
            through: "Tutorial_Tag",
            onDelete: "cascade"  
        })
    }
    
    return Tutorial
}