const express = require('express');
const router = express.Router();
const db = require("../models");
const Admin = db.Admin;
const Op = db.Sequelize.Op;

// admin login verification: 
router.post('/login', exports.LoginVerify = async (req, res) => {

    const username = req.body.username;
    const userpassword = req.body.password;

    Admin.findAll({ where : {email : username, password: userpassword } })
        .then(data =>{
            [admin] = data;

            if(admin.email == username && admin.password == userpassword)
                res.send(admin)
        })
        .catch(err=> {
            res.status(500).send({
                message:
                    err.message || "request failed."
            });
        });
})

module.exports = router;