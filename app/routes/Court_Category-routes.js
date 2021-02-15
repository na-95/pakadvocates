const express = require('express');
const router = express.Router();
const db = require("../models");
const Court_Category = db.Court_Category;
const Op = db.Sequelize.Op;

// POST a new court category: 
router.post('/', (req, res) => {
    const courtCategory = {
        court_category: req.body.court_category,
    };

    Court_Category.create(courtCategory)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error: court category could not be created."
            });
        });
})

// GET court categories:
router.get('/', (req, res) => {
    Court_Category.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error getting all court categories."
            });
        });
})

// DELETE lawyer:
router.delete('/:courtCategoryId', (req, res) => {
    const id = req.params.courtCategoryId;

    Court_Category.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "court category was deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete court category with id=${id}. Please check court category Id.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error deleting court category with id=" + id
            });
        });
})

module.exports = router;