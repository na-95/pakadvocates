// const { Sequelize, DataTypes } = require('sequelize');
// const db = require('../config/db-config');  // importing the db


module.exports = (sequelize, DataTypes) => {
    const Court_Category = sequelize.define("Court_Category", {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        court_category: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        freezeTableName: true
    })

    return Court_Category;
}

// module.exports = Court_Category;