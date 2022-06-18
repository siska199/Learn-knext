const { default: knex } = require("knex");
const db = require("../config/db");

exports.getBukus = async (req, res) => {
  try {
    const bukus = await db("buku");
    res.status(200).json(bukus);
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send(`${error}`);
  }
};

exports.getBuku = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id: ", id);
    const buku = await db("buku").where({ id }).select();
    res.status(200).json(buku);
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send(`${error}`);
  }
};

exports.addBuku = async (req, res) => {
  try {
    const { body } = req;
    let addData = await db("buku").insert(body);
    res.status(201).send(`success add data with id ${addData[0]}`);
  } catch (error) {
    res.status(500).send(`${error}`);
  }
};

exports.updateBuku = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const updateData = await db("buku").where({ id }).update(body);
    res.status(201).json(`update data with id ${updateData[0]} success`);
  } catch (error) {
    res.status(500).send(`${error}`);
  }
};

exports.deleteBuku = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteData = await db("buku").where({ id }).del();
    res.status(200).json(`delete data with id ${deleteData} success`);
  } catch (error) {
    res.status(500).send(`${error}`);
  }
};
