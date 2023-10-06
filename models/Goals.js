const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Goals extends Model {}

Goals.init(
{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    teacher_id:{
        type: DataTypes.INTEGER,
        references: {
            model: 'teacher',
            key: 'id',
        },
    },
    student_id:{
        type: DataTypes.INTEGER,
        references: {
            model: 'student',
            key: 'id',
        },
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'goal', 
}
)

module.exports = Goals;