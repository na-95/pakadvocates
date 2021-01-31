const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('HI BITCH')
})


module.exports = router;