module.exports = (sequelize, DataTypes) => {

    const Client = sequelize.define("Client", {
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
        cnic: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    }, {
        freezeTableName: true
    })

    return Client;
}

// module.exports = Admin;