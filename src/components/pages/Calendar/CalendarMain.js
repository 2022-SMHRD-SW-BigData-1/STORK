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


const CalendarMain = () => { 
  
  let now = new Date();
  const month_arr = ["January","February","March",
                    "April","May","June",
                    "July","August","September",
                    "October", "November", "December"]
  
  const [year,setYear] = useState(now.getFullYear());
  const [month,setMonth] = useState(now.getMonth()+1);
  const [date,setDate] = useState();
  
  function check(){

    // day 요일
    let now = new Date(year,month,0);
    let total_days = now.getDate();
    console.log(total_days);
    
    let num = 1;
    let date_arr = []
    while(true){
      let now_for = new Date(year, month, num);
      let day = now_for.getDay();
      num++;
    }

  }

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



  return (
    <>
    <Header />
    <div className="calendar-main">
      <div className="parent">
        <div className="div9" onClick={check}>{month}</div>
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

        {/* 1주,2주 .. 5주 날짜  */}
        <CalendarWeeks Click_date = {Click_date} data = "1"/>
        <CalendarWeeks Click_date = {Click_date} data = "1"/>
        <CalendarWeeks Click_date = {Click_date} data = "1"/>
        <CalendarWeeks Click_date = {Click_date} data = "1"/>
        <CalendarWeeks Click_date = {Click_date} data = "1"/>
        
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
        <div className="frame-child" />
        <div className="div46">2월 3일</div>
        <img className="ellipse-icon" alt="" src={ellipse_37} />
        <div className="div47">계림동 산부인과 정기 검사</div>
        <div className="div48">08:00</div>
        <div className="frame-child7" />
        <div className="frame-child8" />
        <div className="frame-child9" />
        <img
          className="icon-arrow-ios-downward"
          alt=""
          src={arrow_ios_downward}
        />
        <img className="frame-child10" alt="" src={ellipse_35} />
        <div className="div49">가임기</div>
        <img className="frame-child11" alt="" src={ellipse_36} />
        <div className="div50">일정</div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CalendarMain;
