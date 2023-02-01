const express = require("express");
const router = express.Router();
const mysql = require("mysql2"); //설치한 mysql기능
const path = require("path");
const { json } = require("body-parser");
// const { appendFile } = require("fs");

let conn = mysql.createConnection({
  // 나의 DB 정보
  host: "project-db-stu.ddns.net",
  user: "baebae",
  password: "baebae",
  port: "3307",
  database: "baebae",
});

// 산부인과
router.get("/MaternityMap", function (req, res) {
  let hos_name = [];
  let hos_addr = [];
  let hos_time = [];
  let hos_tel = [];
  let sql = "select * from hospital where hos_kind='산부인과'";
  conn.query(sql, function (err, rows) {
    if (rows.length > 0) {
      for (let i = 0; i < rows.length; i++) {
        hos_name.push(rows[i].hos_name);
        hos_addr.push(rows[i].hos_address);
        hos_time.push(rows[i].hos_time);
        hos_tel.push(rows[i].hos_phone);
      }
      res.json({
        result: "success",
        name: hos_name,
        addr: hos_addr,
        tel: hos_tel,
        time: hos_time,
      });
    } else {
      console.log("데이터 오류");
      res.json({ result: "false" });
    }
  });
});

// 정신병원
router.get("/PsychiatryMap", function (req, res) {
  let hos_name = [];
  let hos_addr = [];
  let hos_time = [];
  let hos_tel = [];
  let sql = "select * from hospital where hos_kind='정신병원'";
  conn.query(sql, function (err, rows) {
    if (rows.length > 0) {
      for (let i = 0; i < rows.length; i++) {
        hos_name.push(rows[i].hos_name);
        hos_addr.push(rows[i].hos_address);
        hos_time.push(rows[i].hos_time);
        hos_tel.push(rows[i].hos_phone);
      }
      res.json({
        result: "success",
        name: hos_name,
        addr: hos_addr,
        tel: hos_tel,
        time: hos_time,
      });
    } else {
      console.log("데이터 오류");
      res.json({ result: "false" });
    }
  });
});

router.post("/login", function (request, response) {
  console.log("check");
  let id = request.body.id;
  let pw = request.body.pw;
  console.log(id);
  console.log(pw);
  let sql = `insert into test(id,pw) values(?,?)`;
  conn.query(sql, [id, pw], function (err, rows) {
    console.log(rows);
    if (!err) {
      console.log("로그인성공");
      response.json({
        result: "success",
      });
    } else {
      console.log("로그인실패");
    }
  });
});

//   let id = request.body.id;
//   let pw = request.body.pw;
//   let sql = `insert into test(id,pw) values(?,?)`;
//   conn.query(sql,[id,pw],
//   function (err, rows) {
//       console.log(rows)
//     if (!err) {
//       console.log("문제없음");
//       res.json({
//         test : rows,
//         // email: email,
//       });
//     } else {
//       console.log("문제존나많아 앙기철ㄸㄸㄸㄸ", err);
//       // throw err;
//     }
//   }
// );

router.get("*", function (request, response) {
  console.log("Happy Hacking!");
  response.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

module.exports = router;
