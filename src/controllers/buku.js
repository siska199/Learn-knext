const db = require("../config/db");

exports.getBukus = async (req, res) => {
  try {
    let buku = await db("buku");
    res.status(200).json(buku);
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send(`${error}`);
  }
};

exports.addBuku = async(req,res)=>{
  try {
    const {body} = req
    let addData = await db('buku').insert(body)
    res.status(200).send(`success add data with id ${addData[0]}`)
  } catch (error) {
    res.status(500).send(`${error}`)
  }
}