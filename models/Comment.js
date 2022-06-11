module.exports = (sequelize, Datatype) =>{
    const Comment = sequelize.define('Comment', {
        text: {
            type: Datatype.TEXT,
            allowNull: false,
            validate: {
                notNull: {msg: 'Please enter your text'}
            },
        }  
    })
    Comment.associate = models =>{
        Comment.belongsTo(models.Tutorial, {
                onDelete: "cascade"  
        })
    }
    
    return Comment
}