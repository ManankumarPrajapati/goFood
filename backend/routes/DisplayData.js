const express = require("express");
const router = express.Router();

router.post("/foodData", (req, res) => {
  try {
    res.send([global.food_items, global.food_categories]);
  } catch (error) {
    console.error(error.message);
    console.log("Server Error");
  }
});

module.exports = router;
