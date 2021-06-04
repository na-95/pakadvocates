module.exports = (sequelize, DataTypes) => {

    const Meeting = sequelize.define("Meeting", {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        start_time: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        end_time: {
            type: DataTypes.STRING,
            allowNull: false,
        }
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

    return Meeting;
}