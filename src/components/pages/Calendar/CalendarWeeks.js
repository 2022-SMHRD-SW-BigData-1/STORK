import { display } from "@mui/system";
import { useEffect, useState } from "react";
import "../../styles/Calendar/CalendarWeeks.css"
import axios from "axios";


const CalendarWeeks = (props) => {
  const{
    Click_date,
    date,
    year,
    month,
    data
  } = props;


   

  
 
  
  // 날짜 계산
  let dis = []
  for(let i =0; i<= 6 ; i ++){
    if(date[i]==0){
      dis[i] = {display :"none"};
    }else{
    }
  }
  // 일정 여부 
  let memo = [];
  if(data!=undefined){
  for(let i =0;i < date.length;i++){
    for(let e =0; e < data.length;e ++){
      let memo_year = data[e].cal_date.split('-')[0];
      let memo_month = data[e].cal_date.split('-')[1];
      let memo_date = data[e].cal_date.split('-')[2];

      if(memo_year == year && memo_month == month && date[i] == memo_date){
        memo[i] = {display : "block"};
      }
    }
    for(let i = 0 ; i < 7;i++){
      if(memo[i] == undefined){
        memo[i] = {display : "none"};
      }
    }
  }
  } 
   // 가임기  표시 아이콘 스타일
   let dis_child = []


  // 일정 표시 아이콘 스타일 
  let dis_item = []


  function dd(){
    // console.log(data)
      console.log(memo);
      
  }
  return (
    <div className="calendar-weeks">
      <div className="day-group6" onClick={Click_date} style = {dis[6]}>
        <div className="div2" onClick={dd}>{date[6]}</div>
        <div className="day-group6-child" />
        <div className="day-group6-item" style = {memo[6]} />
      </div>
      <div className="day-group5" onClick={Click_date} style = {dis[5]}>
        <div className="div2">{date[5]}</div>
        <div className="day-group6-child" style = {{display : "none"}} />
        <div className="day-group6-item" style = {memo[5]} />
      </div>
      <div className="day-group4" onClick={Click_date} style = {dis[4]}>
        <div className="div2">{date[4]}</div>
        <div className="day-group6-child" style = {{display : "none"}}/>
        <div className="day-group6-item" style = {memo[4]}/>
      </div>
      <div className="day-group3" onClick={Click_date} style = {dis[3]}>
        <div className="div2">{date[3]}</div>
        <div className="day-group6-child"style = {{display : "none"}} />
        <div className="day-group6-item" style = {memo[3]}/>
      </div>
      <div className="day-group2" onClick={Click_date} style = {dis[2]}>
        <div className="div2">{date[2]}</div>
        <div className="day-group6-child" style = {{display : "none"}}/>
        <div className="day-group6-item" style = {memo[2]}/>
      </div>
      <div className="day-group1" onClick={Click_date} style = {dis[1]}>
        <div className="div2">{date[1]}</div>
        <div className="day-group6-child" style = {{display : "none"}}/>
        <div className="day-group6-item"style = {memo[1]} />
      </div>
      <div className="day-group0" onClick={Click_date} style = {dis[0]}>
        <div className="div2">{date[0]}</div>
        <div className="day-group6-child" style = {{display : "none"}}/>
        <div className="day-group6-item" style = {memo[0]}/>
      </div>
    </div>
  );
};

export default CalendarWeeks;
