const express = require("express");

const router = express.Router();
const { getBukus, addBuku } = require("../controllers/buku.js");

router.get("/bukus", getBukus);
router.post("/buku", addBuku);
router.put
module.exports = router;
