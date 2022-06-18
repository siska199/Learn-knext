require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const router = require("./src/routers");

const app = express();
const port = process.env.PORT;



app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api/v1", router);

app.listen(port, () => console.log(`Listen to port ${port}`));
