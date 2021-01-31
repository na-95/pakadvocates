// const { Sequelize, DataTypes } = require('sequelize');
// const db = require('../config/db-config');  // importing the db


module.exports = (sequelize, DataTypes) => {
    const Lawyer = sequelize.define("Lawyer", {
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
        approval_status: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        freezeTableName: true
    })

    return Lawyer;
}

// module.exports = Lawyer;