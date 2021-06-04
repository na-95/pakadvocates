module.exports = (sequelize, DataTypes) => {

    const Document = sequelize.define("Document", {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        document_title: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        document_url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // phone_number: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // password: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // email: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },

    }, {
        freezeTableName: true
    })

    return Document;
}