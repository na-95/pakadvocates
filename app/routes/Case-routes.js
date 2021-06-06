const express = require('express');
const router = express.Router();
const db = require("../models");
const Case = db.Case;
const Op = db.Sequelize.Op;

// create case:
router.post('/', (req, res) => {
    const newCase = {
        start_date: req.body.start_date,
        case_status_id: req.body.case_status_id,
        client_id: req.body.client_id,
        lawyer_id: req.body.lawyer_id,
    };

    Case.create(newCase)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error: case could not be created."
            });
        });
})

// // GET unapproved cases:
// router.get('/byApprovalStatus/:approvalStatus', async (req, res) => {
//     const approvalStatus = req.params.approvalStatus;
//     console.log(approvalStatus)
//     case.findAll({ where: { approval_status: approvalStatus } })
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Error getting unapproved cases."
//             });
//         });
// })

module.exports = router;