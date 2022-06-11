module.exports = (sequelize, Datatype) =>{
    const Tag = sequelize.define('Tag', {
        name: {
            type: Datatype.STRING,
            allowNull: false,
            validate: {
                notNull: {msg: 'Please enter name'}
            },
        },
        slug: {
            type: Datatype.STRING,
            allowNull: false,
            validate: {
                notNull: {msg: 'Please enter slug'}
            },
        } 
    })
 
    Tag.associate = models =>{
        Tag.belongsToMany(models.Tutorial, {
            through: "Tutorial_Tag",
            onDelete: "cascade"  
        })
    }
    
    return Tag
}