module.exports = (sequelize, DataTypes) => {

    const Client_Request_Status = sequelize.define("Client_Request_Status", {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        client_request_status: {
            type: DataTypes.STRING,
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

    return Client_Request_Status;
}