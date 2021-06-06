const express = require('express');
const router = express.Router();
const db = require("../models");
const Client = db.Client;
const Op = db.Sequelize.Op;

// create client:
router.post('/', (req, res) => {
    const client = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        password: req.body.password,
        approval_status: req.body.approval_status,
        cnic: req.body.cnic
    };

    Client.create(client)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error: client could not be created."
            });
        });
})

// Get Client
router.get('/:clientId', async (req, res) => {
    const clientId = req.params.clientId;

    Client.findAll({ where: { id: clientId } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error getting client."
            });
        });
})

// client login verification: 
router.post('/login', exports.LoginVerify = async (req, res) => {

    const username = req.body.username;
    const userpassword = req.body.password;

    Client.findAll({ where: { email: username, password: userpassword } })
        .then(data => {
            [client] = data;

            if (client.email == username && client.password == userpassword)
                res.send(client)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "request failed."
            });
        });
})

// patch client:
router.patch('/:clientId', (req, res) => {
    const id = req.params.clientId;

    Client.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                Client.findByPk(id)
                    .then(client => {
                        res.send(client);
                    })
            } else {
                res.send({
                    message: `Cannot update client with id=${id}. Please check client Id.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error approving client with id=" + id
            });
        });
})

// // GET unapproved lawyers:
// router.get('/byApprovalStatus/:approvalStatus', async (req, res) => {
//     const approvalStatus = req.params.approvalStatus;

//     Lawyer.findAll({ where: { approval_status: approvalStatus } })
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Error getting unapproved lawyers."
//             });
//         });
// })

// // DELETE lawyer:
// router.delete('/:lawyerId', (req, res) => {
//     const id = req.params.lawyerId;

//     Lawyer.destroy({
//         where: { id: id }
//     })
//         .then(num => {
//             if (num == 1) {
//                 res.send({
//                     message: "Lawyer was deleted successfully."
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot delete Lawyer with id=${id}. Please check Lawyer Id.`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Error deleting Lawyer with id=" + id
//             });
//         });
// })


module.exports = router;