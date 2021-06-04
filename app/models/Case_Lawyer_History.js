module.exports = (sequelize, DataTypes) => {

    const Client_Lawyer_History = sequelize.define("Client_Lawyer_History", {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        end_date: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        // last_name: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
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

    return Client_Lawyer_History;
}