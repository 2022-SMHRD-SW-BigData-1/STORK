import "../../styles/Calendar/CalendarMain.css"
import arrow_forward from "../../../assets/svg/Calendar/icon_arrow_ios_forward.svg";
import arrow_ios_back from "../../../assets/svg/Calendar/icon_arrow_ios_back.svg";
import arrow_ios_downward from "../../../assets/svg/Calendar/icon_arrow_ios_downward.svg";
import ellipse_35 from "../../../assets/svg/Calendar/ellipse_35.svg";
import ellipse_36 from "../../../assets/svg/Calendar/ellipse_36.svg";

import Header from "../Bar/Header";
import Footer from "../Bar/Footer";

import CalendarMemos from "./CalendarMemos";
import CalendarWeeks from "./CalendarWeeks";

import { useState, useEffect } from "react";

import axios from "axios";
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

const CalendarMain = () => {
  

  // 버튼 그림자 스타일 
  const [btnStyle, setBtnStyle] = useState({})

  let now = new Date();
  const month_arr = ["January","February","March",
                    "April","May","June",
                    "July","August","September",
                    "October", "November", "December"]
  
  // db에서 받아온 일정
  const [data,setData] = useState();

  const [year,setYear] = useState(now.getFullYear());
  const [month,setMonth] = useState();
  const [date,setDate] = useState(1);

  const [weeks, setWeeks] = useState();
  const [memoArr,setMemoArr] = useState();
  const [memoStyle, setMemoStyle] = useState(70)
  
  function check(){
    // day 요일
    let now = new Date(year,5,20);
    let total_days = now.getDay();
    let next = "2023-10-20";
    let pre = "20230820";
    console.log(pre.split(":"));
  }

  //  달을 넘길 때 동작
  useEffect(()=>{
    let temp = new Date(year,month, 0);
    let total = temp.getDate();

    let current;
    let current_date;
    let current_day;
    
    // 주차별 날짜 
    let weeks_date = [[],[],[],[],[],[]];

    // num_st 주차 
    let num_st = 0;
    for(let i = 1; i <= total ; i++){
      current = new Date(year+"-"+month+"-"+ i);
      current_date = current.getDate();  // 날짜
      current_day = current.getDay();    // 요일

      weeks_date[num_st][current_day] = current_date;

      if(current_day == 6){
        num_st++;
      }
    }

    for(let e = 0; e <6; e++){
      for(let i = 0; i< 7 ;i++){
        if(weeks_date[e][i] == undefined){
          weeks_date[e][i] = 0;
        }
      }
    }

    let weeks_memo = [[],[],[],[],[],[]]

    setWeeks(weeks_date.map((week)=>{
      let dis;
      if(week[0]==0 && week[6]==0){
        setMemoStyle(0)
        dis = {display:"none"}
      }else{
        setMemoStyle(70)
        dis = {display : "block"}
      }
      return(<div style= {dis}>
              <CalendarWeeks Click_date = {Click_date} date = {week} year = {year} month = {month} data = {data}/>
             </div>
            );
    }))
  },[month])

  useEffect(()=>{

    let temp = new Date(year,month, 0);
    let total = temp.getDate();

    let current;
    let current_date;
    let current_day;
    
    // 주차별 날짜 
    let weeks_date = [[],[],[],[],[],[]];

    // num_st 주차 
    let num_st = 0;
    for(let i = 1; i <= total ; i++){
      current = new Date(year+"-"+month+"-"+ i);
      current_date = current.getDate();  // 날짜
      current_day = current.getDay();    // 요일

      weeks_date[num_st][current_day] = current_date;

      if(current_day == 6){
        num_st++;
      }
    }

    for(let e = 0; e <6; e++){
      for(let i = 0; i< 7 ;i++){
        if(weeks_date[e][i] == undefined){
          weeks_date[e][i] = 0;
        }
      }
    }


    // 주차별 정보
    setWeeks(weeks_date.map((week)=>{
      let dis;
      if(week[0]==0 && week[6]==0){
        setMemoStyle(0)
        dis = {display:"none"}
      }else{
        setMemoStyle(70)
        dis = {display : "block"}
      }
      return(<div style= {dis}>
              <CalendarWeeks Click_date = {Click_date} date = {week} year = {year} month = {month} data = {data}/>
             </div>
            );
    }))

    // 일자별 일정들
    if(data != undefined){
    setMemoArr(data.map((data)=>{
      let currnet_year = data.cal_date.split('-')[0];
      let currnet_month = data.cal_date.split('-')[1];
      let currnet_date = data.cal_date.split('-')[2];
      let current_memo = data.cal_content;
      let current_time = data.cal_time;
      if(year == currnet_year && month == currnet_month && date == current_date){
        return(<>
                 <CalendarMemos memo = {current_memo} time = {current_time}/>
              </>);
      }
    }))
   }

  },[data])

  useEffect(()=>{
     // 일자별 일정들
     if(data != undefined){
      setMemoArr(data.map((data)=>{
        let current_year = data.cal_date.split('-')[0];
        let current_month = data.cal_date.split('-')[1];
        let current_date = data.cal_date.split('-')[2];
        let current_memo = data.cal_content;
        
        let current_time = data.cal_time;

         if(current_time != undefined ){
          current_time = current_time.split(':');
          current_time = current_time[0] +":"+ current_time[1];
        }
        else{
          current_time = "시간 미정";
        }
        if(year == current_year && month == current_month && date == current_date){
          return(<>
                   <CalendarMemos memo = {current_memo} time = {current_time}/>
                </>);
        }
      }))
     }
  },[date])

  function next_month(){
    if(month<12){
      setMonth(month+1);
      setDate(1);
    }
    else if(month>=12){
      setYear(year+1);
      setMonth(1);
      setDate(1);

    }

  }

  function pre_month(){
    if(month<2){
      setYear(year-1);
      setMonth(12);
      setDate(1);
    }
    else if(month>=2){
      setMonth(month-1);
      setDate(1);
    }

  }

  function Click_date(e){
    setDate(e.target.outerText);
  }


  // 버튼 클릭 시 그림자 효과 
  function ch_style(){
    setBtnStyle({boxShadow : "none"});

    // 값 전달 
    if(memo !=undefined){
      axios
      .post("http://127.0.0.1:3001/Calendar", {
        memo : memo,
        year : year,
        month : month,
        date : date,
        calen_time : calen_time,
      })
      .then((res) => {
      })
      .catch((err) => {
        console.log("문제발생123", err);
      });

      let cal_date = year+"-"+month+"-"+date;
      setData(data.concat({cal_date : cal_date,
                           cal_time : calen_time,
                           cal_content : memo}));

    }
    myTimer();
  }
  var myTimer = setTimeout(function() {
    setBtnStyle({});

    }, 1000);
  
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (e) => {
      setOpen(false);
      setCalen_time(e.target.outerText);
    };
    
    let data_test;

    //최초 요청
    useEffect(()=>{

      // db에서 일정 정보 받아오기
      axios
      .post("http://127.0.0.1:3001/Calendar_data", {
      })
      .then((res) => {
        let now = new Date();
        setMonth(now.getMonth()+1)
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("문제발생123", err);
      });

      // 시간 select 창
      let times = [];
      let temp;
      for(let i = 0; i <=24 ;i++){
        if(i<10){ temp = "0"+i}
        else{
          temp = i;
        }
        times.push(<Button className="cale_time_btn" onClick={handleClose}>{temp}:00</Button>);
      }
      setTime_div(times.map((num) => {
        return(
          <div>
            {num}
          </div>
        );
      }))
    },[])

    



    // 시간 select 창
    const [time_div,setTime_div] = useState();
    const [calen_time,setCalen_time] = useState();

    const [memo,setMemo] = useState();
    
  return (
    <>
    
    <Header />
    <div className="calendar-main">
      <div className="parent">
        <div className="div9" onClick={check}  >{month}</div>
        <div className="february">{month_arr[month-1]}</div>
        <img
          className="icon-arrow-ios-back"
          alt=""
          src={arrow_ios_back}
          onClick= {pre_month}
        />
        <img
          className="icon-arrow-ios-forward"
          alt=""
          src={arrow_forward}
          onClick= {next_month}
        />
        <div className="empty_box" />

        {/* 날짜들  */}
        {weeks}
        <div className="empty_box2" ></div>

        {/* 요일  */}
        <div className="sat">SAT</div>
        <div className="fri">FRI</div>
        <div className="thu">THU</div>
        <div className="wed">WED</div>
        <div className="tue">TUE</div>
        <div className="mon">MON</div>
        <div className="sun">SUN</div>

        {/* 년도  */}
        <div className="div45">{year}</div>

        {/* memos */}
        <div className="frame-child" style={{marginTop:memoStyle}}/>
        <div className="div46" style={{marginTop:memoStyle}} >{month}월 {date}일</div>


        {/* 일정 리스트  */}
        {memoArr}


      {/* 모달 시간 선택 창  */}
      
        <div >
          <Dialog open={open} onClose={handleClose} className="time_modal_box">
            <div className="time_modal">
              {time_div}
            </div>
          </Dialog>
       </div>




        {/* 일정 입력 창 */}
        <div className="memo_box">
          <input className="calendar_memo" placeholder="    2월 3일에 일정추가" onChange={(e)=>{setMemo(e.target.value)}}></input>
          <div className="calendar_time" onClick={handleClickOpen} >{calen_time}</div>
          <div className="calendar_sub" style= {btnStyle}  onClick={ch_style}>+</div>
        </div>

        <img
          className="icon-arrow-ios-downward"
          alt=""
          src={arrow_ios_downward}
          style={{marginTop:memoStyle}}
        />
        
        <img className="frame-child10" alt="" src={ellipse_35} style={{marginTop:memoStyle}} />
        <div className="div49" style={{marginTop: memoStyle}} >가임기</div>
        <img className="frame-child11" alt="" src={ellipse_36}  style={{marginTop: memoStyle}} />
        <div className="div50" style={{marginTop: memoStyle}} >일정</div>


      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CalendarMain;
