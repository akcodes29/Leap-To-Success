const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Student extends Model {
    checkPassword(loginAttempt) {
        return (loginAttempt, this.password);
    }
}

Student.init(
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
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [8],
            },
        },
        dailyGoal: {
            type: DataTypes.INTEGER,
            allowNull: false,
            
        },
        teacher_id: {
            //Foreign Key
            type: DataTypes.INTEGER,
            references: {
                model: 'teacher',
                key: 'id',
            },
        },
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'student',
      }
);

module.exports = Student;