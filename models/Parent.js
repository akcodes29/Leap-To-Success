const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Parent extends Model {}

Parent.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        student_id: {
            //Foreign Key
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
        modelName: 'parent',
      }
);

module.exports = Parent;