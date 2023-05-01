const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
   }, 
   { 
    timestamps: false 
   });
};