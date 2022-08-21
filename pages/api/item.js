const mysql = require("mysql");
const conf = require("../../public/config.json");

export default function handler(req, res) {
  const method = req?.method?.toUpperCase();
  const id = req?.query?.id ?? 0;
  let sql = "";

  if (method === "GET") {
    sql = `
      SELECT a.*, b.NAME AS TYPE_NAME
      FROM tn_item a
      LEFT JOIN tn_common b ON b.BASE_CODE = 1 AND a.TYPE = b.CODE
      WHERE PARENT_ID = ${id};
    `;
  } else if (method === "POST") {
    sql = `
      INSERT INTO tn_item (
        PARENT_ID, TYPE, NAME, EXT, SIZE, URL
      ) VALUES (
        
      );
    `;
  } else if (method === "PUT") {
  } else if (method === "DELETE") {
  }

  const db = mysql.createConnection(conf);
  db.connect(() => {
    db.query(sql, (err, result) => {
      if (err) return res.send([]);
      res.send(result);
      db.end();
    });
  });
}
