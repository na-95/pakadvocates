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

// GET case by id:
router.get('/byCase/:caseId', async (req, res) => {
    const caseId = req.params.caseId;

    Case.findAll({ where: { id: caseId } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error getting case against this case id."
            });
        });
})

// GET cases:
router.get('/byLawyer/:lawyerId', async (req, res) => {
    const lawyerId = req.params.lawyerId;

    Case.findAll({ where: { lawyer_id: lawyerId } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error getting unapproved cases."
            });
        });
})

module.exports = router;