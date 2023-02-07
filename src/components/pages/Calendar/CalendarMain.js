import "../../styles/Calendar/CalendarMain.css"
import arrow_forward from "../../../assets/svg/Calendar/icon_arrow_ios_forward.svg";
import arrow_ios_back from "../../../assets/svg/Calendar/icon_arrow_ios_back.svg";
import arrow_ios_downward from "../../../assets/svg/Calendar/icon_arrow_ios_downward.svg";
import ellipse_37 from "../../../assets/svg/Calendar/ellipse_37.svg";
import ellipse_35 from "../../../assets/svg/Calendar/ellipse_35.svg";
import ellipse_36 from "../../../assets/svg/Calendar/ellipse_36.svg";

import Header from "../Bar/Header";
import Footer from "../Bar/Footer";

import CalendarMemos from "./CalendarMemos";
import CalendarWeeks from "./CalendarWeeks";

import { useState, useEffect } from "react";
import { shadows } from "@mui/system";


const CalendarMain = () => { 
  
  const [btnStyle, setBtnStyle] = useState({})

  let now = new Date();
  const month_arr = ["January","February","March",
                    "April","May","June",
                    "July","August","September",
                    "October", "November", "December"]
  
  const [year,setYear] = useState(now.getFullYear());
  const [month,setMonth] = useState(now.getMonth()+1);
  const [date,setDate] = useState({display : "none"});

  const [weeks, setWeeks] = useState();
  const [memoStyle, setMemoStyle] = useState(70)
  
  function check(){
    // day 요일
    let now = new Date(year,5,20);
    let total_days = now.getDay();

    let test = [[],[],[],[],[]];
    test[2][1] = 1;
    console.log(test);
  }

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
    let dis;
    if(weeks_date[5][0]==0){
      setMemoStyle(0)
      dis = {display:"none"}
    }else{
      setMemoStyle(70)
      dis = {display : "block"}
    }
    
    console.log(weeks_date);
    setWeeks(
      <>
      <CalendarWeeks Click_date = {Click_date} date = {weeks_date[0]}/>
      <CalendarWeeks Click_date = {Click_date} date = {weeks_date[1]}/>
      <CalendarWeeks Click_date = {Click_date} date = {weeks_date[2]}/>
      <CalendarWeeks Click_date = {Click_date} date = {weeks_date[3]}/>
      <CalendarWeeks Click_date = {Click_date} date = {weeks_date[4]}/>

      <div style= {dis}>
        <CalendarWeeks Click_date = {Click_date} date = {weeks_date[5]}/>
      </div>
      </>
    );

  },[month])




  function next_month(){
    if(month<12){
      setMonth(month+1);
    }
    else if(month>=12){
      setYear(year+1);
      setMonth(1);
    }
  }

  function pre_month(){
    if(month<2){
      setYear(year-1);
      setMonth(12);
    }
    else if(month>=2){
      setMonth(month-1);
    }
  }

  function Click_date(e){
    setDate(e.target.outerText);
  }

  function ch_style(){
    setBtnStyle({boxShadow : "none"});
    // setTimeout(function(){}, 10000);
    // setBtnStyle({})
  }



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
        {/* <div className="frame-child" style={{marginTop:memoStyle}}/>
        <div className="div46" style={{marginTop:memoStyle}} >2월 3일</div> */}

        {/* <img className="ellipse-icon" alt="" src={ellipse_37} style={{marginTop:memoStyle}} /> */}
        {/* <div className="div47" style={{marginTop:memoStyle}} >계림동 산부인과 정기 검사</div> */}
        {/* <div className="div48" style={{marginTop:memoStyle}} >08:00</div> */}



        {/* 일정 입력 창 */}
        <div className="memo_box">
          <input className="calendar_memo" placeholder="    2월 3일에 일정추가"></input>
          <input className="calendar_time" type={"number"} ></input>
          <div className="calendar_sub" style= {btnStyle}  onClick={ch_style}>+</div>
        </div>

        {/* <img
          className="icon-arrow-ios-downward"
          alt=""
          src={arrow_ios_downward}
          style={{marginTop:memoStyle}}
        />
        
        <img className="frame-child10" alt="" src={ellipse_35} style={{marginTop:memoStyle}} />
        <div className="div49" style={{marginTop: memoStyle}} >가임기</div>
        <img className="frame-child11" alt="" src={ellipse_36}  style={{marginTop: memoStyle}} />
        <div className="div50" style={{marginTop: memoStyle}} >일정</div> */}


      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CalendarMain;
