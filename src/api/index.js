const express = require("express");

const router = express.Router();

const sticker = require("./sticker/sticker.routes");

router.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

router.use("/sticker", sticker);

module.exports = router;
