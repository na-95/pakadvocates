// const { Sequelize, DataTypes } = require('sequelize');
// const db = require('../config/db-config');  // importing the db


module.exports = (sequelize, DataTypes) => {
    const Court = sequelize.define("Court", {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        // court_category_id: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     references: {
        //         model: 'Court_Category',
        //         key: 'id'
        //     }
        // },
        court_name: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    }, {
        freezeTableName: true
    })
    
    return Court;
}

// module.exports = Court;