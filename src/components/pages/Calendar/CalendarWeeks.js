import { display } from "@mui/system";
import { useEffect } from "react";
import "../../styles/Calendar/CalendarWeeks.css"


const CalendarWeeks = (props) => {
  const{
    Click_date,
    date,
  } = props;


  
  // 일정 표시 아이콘 스타일
  let dis_child = []
  
  // 가임기 표시 아이콘 스타일 
  let dis_item = []
  let dis = []
  for(let i =0; i<= 6 ; i ++){
    if(date[i]==0){
      dis[i] = {display :"none"};
    }else{

    }

  }

  


  return (
    <div className="calendar-weeks" >
      <div className="day-group6" onClick={Click_date} style = {dis[6]}>
        <div className="div2">{date[6]}</div>
        <div className="day-group6-child" />
        <div className="day-group6-item" />
      </div>
      <div className="day-group5" onClick={Click_date} style = {dis[5]}>
        <div className="div2">{date[5]}</div>
        <div className="day-group6-child" />
        <div className="day-group6-item" />
      </div>
      <div className="day-group4" onClick={Click_date} style = {dis[4]}>
        <div className="div2">{date[4]}</div>
        <div className="day-group6-child" />
        <div className="day-group6-item" />
      </div>
      <div className="day-group3" onClick={Click_date} style = {dis[3]}>
        <div className="div2">{date[3]}</div>
        <div className="day-group6-child" />
        <div className="day-group6-item" />
      </div>
      <div className="day-group2" onClick={Click_date} style = {dis[2]}>
        <div className="div2">{date[2]}</div>
        <div className="day-group6-child" />
        <div className="day-group6-item" />
      </div>
      <div className="day-group1" onClick={Click_date} style = {dis[1]}>
        <div className="div2">{date[1]}</div>
        <div className="day-group6-child" />
        <div className="day-group6-item" />
      </div>
      <div className="day-group0" onClick={Click_date} style = {dis[0]}>
        <div className="div2">{date[0]}</div>
        <div className="day-group6-child" />
        <div className="day-group6-item" />
      </div>
    </div>
  );
};

export default CalendarWeeks;
