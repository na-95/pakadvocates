const express = require('express');
const router = express.Router();
const db = require("../models");
const Lawyer = db.Lawyer;
const Client_Proposal = db.Client_Proposal;
const Op = db.Sequelize.Op;

// POST a new bid: 
router.post('/', (req, res) => {
    const bid = {
        client_id: req.body.client_id,
        lawyer_id: req.body.lawyer_id,
        client_proposal_status_id: req.body.client_proposal_status_id
    };

    // console.log(bid, typeof bid.client_id)

    Client_Proposal.create(bid)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error: new bid could not be created."
            });
        });
})

// GET bids:
router.get('/:lawyerId', (req, res) => {

    const lawyerId = req.params.lawyerId;

    Client_Proposal.findAll({
            where: { lawyer_id: lawyerId },
            // include: [{
            //     model: Lawyer,
            //     // // as: 'Singer',
            //     // where: { id: lawyerId } 
            // }]
        })
        .then(data => {
            res.send(data);
            
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error getting all court categories."
            });
            console.log(err)
        });
})

// patch client:
router.patch('/:bidId', (req, res) => {
    const id = req.params.bidId;

    Client_Proposal.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                Client_Proposal.findByPk(id)
                    .then(bid => {
                        res.send(bid);
                    })
            } else {
                res.send({
                    message: `Cannot update bid with id=${id}. Please check bid Id.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error approving bid with id=" + id
            });
        });
})

// // DELETE lawyer:
// router.delete('/:courtCategoryId', (req, res) => {
//     const id = req.params.courtCategoryId;

//     Client_Proposal.destroy({
//         where: { id: id }
//     })
//         .then(num => {
//             if (num == 1) {
//                 res.send({
//                     message: "court category was deleted successfully."
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot delete court category with id=${id}. Please check court category Id.`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Error deleting court category with id=" + id
//             });
//         });
// })

module.exports = router;