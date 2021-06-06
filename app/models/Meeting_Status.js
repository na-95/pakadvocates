module.exports = (sequelize, DataTypes) => {

    const Meeting_Status = sequelize.define("Meeting_Status", {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        meeting_status: {
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

    return Meeting_Status;
}