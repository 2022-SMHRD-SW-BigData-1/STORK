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
  dateStrings: 'date',
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

// 진통 데이터 insert
router.post("/Labor", function (request, response) {

  let labor =request.body.start;
  let start_month = labor.start_month;
  let start_day = labor.start_day;
  let start_hour = labor.start_hour;
  let start_min = labor.start_min;
  
  let term_hour = labor.term_hour;
  let term_min = labor.term_min;
  let term_sec = labor.term_sec;

  let cycle_hour = labor.cycle_hour;
  let cycle_min= labor.cycle_min;
  let cycle_sec = labor.cycle_sec;

  let start_time = labor.start_time;
  let end_time = labor.end_time;

  let sql = `insert into laborpain (kid_seq, start_month,
                                    start_day,start_hour,start_min,
                                    term_hour,term_min,term_sec,
                                    cycle_hour,cycle_min,cycle_sec,
                                    start_time,end_time) values(3,?,?,?,?,?,?,?,?,?,?,?,?)`;
  conn.query(sql, [start_month,start_day,
                  start_hour,start_min,
                  term_hour,term_min,term_sec,
                  cycle_hour,cycle_min,cycle_sec,
                  start_time,end_time], function (err, rows) {
    if (!err) {
      response.json({
        result: "success",
      });
    } else {
      console.log("진통실패");
    }
  });
});


// 진통 데이터 보내기
router.post("/Labor_data", function (request, response) {
  let id = 3;
  let sql = `select * from laborpain where(kid_seq = (?)) order by 1 DESC`;
  conn.query(sql, [id], function (err, rows) {
    if (!err) {
      response.json({
        data: rows,
      });
    } else {
      console.log("ss ")
    }
  });
});



router.get("*", function (request, response) {
  console.log("Happy Hacking!");
  response.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

module.exports = router;
