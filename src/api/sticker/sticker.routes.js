const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    res.json({
        message: "Hello, welcome to the sticker route 👋"
      });
});

module.exports = router;