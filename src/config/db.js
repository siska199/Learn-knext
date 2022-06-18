const knex = require("knex");

const db = knex({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "toko",
  },
  debug: true,
});

db.raw("SELECT VERSION()").then(() => console.log("connect db success"));

module.exports = db;
