const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Teacher extends Model {
    checkPassword(loginAttempt) {
        return bcrypt.compareSync(loginAttempt, this.password);
    }
}

Teacher.init(
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [8],
            },
        },
        // student_id: {
        //     //Foreign Key
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'student',
        //         key: 'id',
        //     },
        // },
    },
    {
        hooks: {
            beforeCreate: async (newTeacherData) => {
                newTeacherData.password = await bcrypt.hash(newTeacherData.password, 10);
                return newTeacherData;
            },
            beforeUpdate: async (updatedTeacherData) => {
                updatedTeacherData.password = await bcrypt.hash(updatedTeacherData.password, 10);
                return updatedTeacherData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'teacher',
      }
);

module.exports = Teacher;