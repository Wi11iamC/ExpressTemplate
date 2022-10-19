const express = require("express");

const router = express.Router();

const sticker = require("./sticker/sticker.routes");

router.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

router.post("/", (req, res) => {

  res.json({message: "Success!"})

})

router.use("/sticker", sticker);

module.exports = router;
