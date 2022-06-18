const express = require("express");

const router = express.Router();
const { getBukus,getBuku, addBuku, updateBuku, deleteBuku } = require("../controllers/buku.js");

router.get("/bukus", getBukus);
router.get("/bukus/:id", getBuku);
router.post("/buku", addBuku);
router.put("/bukus/:id",updateBuku)
router.delete("/bukus/:id", deleteBuku)
module.exports = router;
