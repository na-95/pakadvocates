"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(module.filename);
// const env = process.env.NODE_ENV || "development";
// const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
// if (config.use_env_variable) {
//     sequelize = new Sequelize(process.env[config.use_env_variable]);
// } else {
//     sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

sequelize = new Sequelize('pakadvocates', 'root', 'pakistan', {
    host: 'localhost',
    dialect: 'mysql'
});


fs
    .readdirSync(__dirname)
    .filter((file) => {
        return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
    })
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
if (db[modelName].associate) {
    db[modelName].associate(db);
}
});

sequelize
        .authenticate()
        .then(() => {
        console.log("Connection has been established succesfully---------------------------------------------------------------");
        })
        .catch((err) => {
        console.log("Unable to connect to the database---------------------------------------------------------------:", err);
        })

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Admin = require('./Admin')(sequelize, Sequelize);
db.Lawyer = require('./Lawyer')(sequelize, Sequelize);
db.Court_Category = require('./Court_Category')(sequelize, Sequelize);
db.Court = require('./Court')(sequelize, Sequelize);

// example associations:
// db.users.belongsTo(db.shops, { onDelete: "CASCADE", foreignKey: "shopId" } );
// db.shops.hasMany(db.users, { foreignKey: "shopId", onDelete: 'cascade', hooks: true  });
// db.user_invites.belongsTo(db.shops, { foreignKey: "shopId", as: "userInvites" });
// db.shops.hasMany(db.user_invites, { foreignKey: "shopId", onDelete: 'cascade', hooks: true  });


db.Court_Category.hasMany(db.Court, { foreignKey: "court_category_id", onDelete: 'cascade', hooks: true  });
db.Admin.hasMany(db.Lawyer, { foreignKey: "approved_by_admin", onDelete: 'cascade', hooks: true  });






module.exports = db;