module.exports = (sequelize, Datatype) =>{
    const Tutorial_Tag = sequelize.define('Tutorial_Tag', {
        TutorialId: {
            type: Datatype.INTEGER,
            allowNull: false
        },
        TagId: {
            type: Datatype.INTEGER,
            allowNull: false
        }
    })
    return Tutorial_Tag
}