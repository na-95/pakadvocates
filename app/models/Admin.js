// const { Sequelize, DataTypes } = require('sequelize');
// const db = require('../config/db-config');  // importing the db


module.exports = (sequelize, DataTypes) => {

    const Admin = sequelize.define("Admin", {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
    
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    
    }, {
        freezeTableName: true
    })

    return Admin;
}

// module.exports = Admin;