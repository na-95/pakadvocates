module.exports = (sequelize, DataTypes) => {

    const Invoice = sequelize.define("Invoice", {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        invoice_amount: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        invoice_date: {
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

    return Invoice;
}