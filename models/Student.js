const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Student extends Model {
    checkPassword(loginAttempt) {
        return bcrypt.compareSync(loginAttempt, this.password);
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
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [8],
            },
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
        hooks: {
            beforeCreate: async (newStudentData) => {
                newStudentData.password = await bcrypt.hash(newStudentData.password, 10);
              return newStudentData;
            },
            beforeUpdate: async (updatedStudentData) => {
                updatedStudentData.password = await bcrypt.hash(updatedStudentData.password, 10);
              return updatedStudentData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'student',
      }
);

module.exports = Student;