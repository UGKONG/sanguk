const mysql = require("mysql");
const conf = require("../../public/config.json");
const db = mysql.createConnection(conf);
db.connect();

export default function handler(req, res) {
  const id = req?.query?.id ?? 0;
  const sql = `
    SELECT * FROM tn_item WHERE PARENT_ID = ${id};
  `;

  db.query(sql, (err, result) => {
    if (err) return res.send([]);
    res.send(result);
  });
}
