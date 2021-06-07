const express = require('express');
const router = express.Router();
const db = require("../models");
const Lawyer = db.Lawyer;
const Op = db.Sequelize.Op;

// Get lawyer by id
router.get('/:lawyerId', async (req, res) => {
    const lawyerId = req.params.lawyerId;

    Lawyer.findAll({ where: { id: lawyerId } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error getting lawyer."
            });
        });
})

// create lawyer:
router.post('/', (req, res) => {
    const lawyer = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        password: req.body.password,
        approval_status: req.body.approval_status,
        cnic: req.body.cnic
    };

    Lawyer.create(lawyer)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error: Lawyer could not be created."
            });
        });
})

// client login verification: 
router.post('/login', exports.LoginVerify = async (req, res) => {

    const username = req.body.username;
    const userpassword = req.body.password;

    Lawyer.findAll({ where: { email: username, password: userpassword } })
        .then(data => {
            [lawyer] = data;

            if (lawyer.email == username && lawyer.password == userpassword)
                res.send(lawyer)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "request failed."
            });
        });
})

// GET unapproved lawyers:
router.get('/byApprovalStatus/:approvalStatus', async (req, res) => {
    const approvalStatus = req.params.approvalStatus;
    console.log(approvalStatus)
    Lawyer.findAll({ where: { approval_status: approvalStatus } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error getting unapproved lawyers."
            });
        });
})

// DELETE lawyer:
router.delete('/:lawyerId', (req, res) => {
    const id = req.params.lawyerId;

    Lawyer.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Lawyer was deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete Lawyer with id=${id}. Please check Lawyer Id.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error deleting Lawyer with id=" + id
            });
        });
})

// Update lawyer:
router.put('/:lawyerId', (req, res) => {
    const id = req.params.lawyerId;

    Lawyer.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Lawyer was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Lawyer with id=${id}. Please check Lawyer Id.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error approving Lawyer with id=" + id
            });
        });
})

module.exports = router;