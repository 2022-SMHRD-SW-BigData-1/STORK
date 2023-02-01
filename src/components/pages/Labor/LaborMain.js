import "../../styles/Labor/LaborMain.css";
import fetal_labor from "../../../assets/images/Labor/fetal_labor.png";
import vector_20_labormain from "../../../assets/svg/Labor/vector_20_labormain.svg";
import LaborTime from "./LaborTime";
import React, { useState, useEffect, useRef } from 'react';

import Header from "../Bar/Header";
import SideBar from "../Bar/SideBar";
import Footer from "../Bar/Footer";

const LaborMain = () => {
  
  const [sec,setSec] = useState(0)
  const [min,setMin] = useState(0)
  const [hour,setHour] = useState(0)
  const [power, setPower] = useState("off")
  let temp = 0;
  useEffect(() => {
    let interval;
    
    if (power=="on") {

      interval = setInterval(() => {
        setSec((sec) => sec + 1);
       
      }, 100);
    } else if (power=="off") {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [power]);

  if(sec>=60){
    setSec(0)
    setMin((min)=> min + 1);
  }
  if(min>=60){
    setMin(0);
    setHour((hour)=> hour + 1);
  }
  if(hour>=24){
    setSec(0)
    setMin(0)
    setHour(0)
    setPower("off")
  }


  function stop_watch(){
    // 스톱워치 시작 
    if(power=="off"){
      setPower("on")
    }
    // 스톱워치 종료
    else if(power=="on"){
      let temp = sec;
      let now = new Date();
      let now_current = now.getDay()
      let now_month = now.getMonth()+1;
      let now_day = now.getDate();
      let now_hour = now.getHours()
      let now_min = now.getMinutes(); 
      let now_sec = now.getSeconds();

      test = data.splice(0,0,{sec:temp, 
                              now_month: now_month, 
                              now_day: now_day,
                              now_hour: now_hour,
                              now_min : now_min
                            });
      setData(data.concat(test))
      
      console.log(data)
      setSec(0)
      setMin(0)
      setHour(0)
      setPower("off")
    }
  }

  //const [data, setData] = useState([{day:"08/03",clock:"08:01",hour:"00",min:"05",sec:"30",}])
  let test = []
  const [data, setData] = useState([])
  const [testArray, setTestArray] = useState([]);
  useEffect(function(){
    setTestArray(data.map((data)=>{
      return(<>
              <LaborTime
                now_month = {data.now_month}
                now_day = {data.now_day}
                now_hour = {data.now_hour}
                now_min = {data.now_min}
                now_sec = {data.now_sec}
                sec={data.sec}
              />
            </>);
    }));
  },[data])
  function ch(){
    let now = new Date();
    console.log(now)
    now.setSeconds(now.getSeconds() -30);
    console.log(now.getSeconds(0))
  }
  

  return (
    <>
    {/* <Header/> */}
    <div className="labor-main">
      <img className="labor-main-child" alt="" src={vector_20_labormain} />
      <img className="labor-main-item" alt="" src={fetal_labor} onClick={stop_watch}/>
      <div className="labor-main-inner">
        {testArray}
      </div>
      <b className="timer_labor_main">{hour>0? hour+" : " : ""}{min<10? "0"+min : min} : {sec<10? "0"+sec : sec}</b>
    </div>
    </>
  );
};

export default LaborMain;
