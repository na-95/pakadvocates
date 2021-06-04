module.exports = (sequelize, DataTypes) => {

    const Client_Proposal_Status = sequelize.define("Client_Proposal_Status", {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        client_proposal_status: {
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

    return Client_Proposal_Status;
}