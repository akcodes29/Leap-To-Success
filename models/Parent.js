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

        },
        lastName: {

        },
        child_id: {
            //Foreign Key
        }
    }
)
