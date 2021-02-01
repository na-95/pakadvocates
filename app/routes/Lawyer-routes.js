const express = require('express');
const router = express.Router();
const db = require("../models");
const Lawyer = db.Lawyer;
const Op = db.Sequelize.Op;

// create lawyer
router.post('/', (req, res) => {
    const lawyer = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        password: req.body.password,
        approval_status: req.body.approval_status
    };

    Lawyer.create(lawyer)
        .then(data =>{
            res.send(data)
        })
        .catch(err=> {
            res.status(500).send({
                message:
                    err.message || "Error: Lawyer could not be created."
            });
        });
})

module.exports = router;