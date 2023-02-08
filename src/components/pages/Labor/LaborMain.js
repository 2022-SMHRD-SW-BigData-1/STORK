import "../../styles/Labor/LaborMain.css";
import fetal_labor from "../../../assets/images/Labor/fetal_labor.png";
import vector_20_labormain from "../../../assets/svg/Labor/vector_20_labormain.svg";
import LaborTime from "./LaborTime";
import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LaborAlert from "./LaborAlert";

import Header from "../Bar/Header";
import SideBar from "../Bar/SideBar";
import Footer from "../Bar/Footer";

const LaborMain = () => {
  const nav = useNavigate();
  const [sec,setSec] = useState(0)
  const [min,setMin] = useState(0)
  const [hour,setHour] = useState(0)

  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  const [alert, setAlert] = useState("none")

  const [power, setPower] = useState("off")

  let test = []
  const [data, setData] = useState([])
  const [testArray, setTestArray] = useState([]);

  let temp = 0;
  useEffect(() => {
    let interval;
    
    if (power=="on") {

      interval = setInterval(() => {
        setSec((sec) => sec + 1);
       
      }, 1000);
    } else if (power=="off") {
      clearInterval(interval);
      console.log(data[0]);

      // DB 전송
    if(data.length>0){
      axios
      .post("http://127.0.0.1:3001/Labor", {
        start:data[0],
    })
      .then((res) => {
      })
      .catch((err) => {
        console.log("문제발생123", err);
      });
    }


    }
    return () => clearInterval(interval);
  }, [power]);
  

  // 진통 데이터 받아오기
  useEffect(()=>{
    axios.post("http://127.0.0.1:3001/Labor_data",{
    })
    .then((res)=>{
      console.log("데이터 받기 1111",res.data.data.length)
      let labor = res.data.data;
      let labor_arr = []
      for(let i =0; i < labor.length; i++){
        labor_arr.push(
          {
              sec: 0,
              start_month: labor[i].start_month,
              start_day: labor[i].start_day,
              start_hour: labor[i].start_hour,
              start_min: labor[i].start_min,
              term_hour: labor[i].term_hour,
              term_min: labor[i].term_min,
              term_sec: labor[i].term_sec,
              cycle_hour: labor[i].cycle_hour,
              cycle_min: labor[i].cycle_min,
              cycle_sec: labor[i].cycle_sec,
              start_time: labor[i].start_time,
              end_time: labor[i].end_time
          }
        )
      }
      setData(labor_arr);

    })
    .catch((err)=>{
      console.log("데이터 오류")
    })
  },[])




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
      setStart(new Date());
    }
    // 스톱워치 종료
    else if(power=="on"){
      let temp = sec;
      let end_ = new Date()
      setEnd(end_)

      console.log(end_)
      const start_month = start.getMonth()+1;
      const start_day = start.getDay();
      const start_hour = start.getHours();
      const start_min = start.getMinutes();
      const start_sec = start.getSeconds();
      
      // 진통동안 시간
      let term =  (end_.getTime()-start.getTime());
      let term_hour = parseInt(term/(1000*60*60));
      let term_min = parseInt((term%(1000*60*60))/(1000*60));
      let term_sec = parseInt((term%(1000*60))/(1000));

      // 진통 주기 
      let cycle = 0;
      let cycle_hour = 0;
      let cycle_min = 0;
      let cycle_sec = 0;

      if(data.length>0){
        cycle = (start.getTime() - data[0].start_time);
        cycle_hour = parseInt(cycle/(1000*60*60));
        cycle_min = parseInt((cycle%(1000*60*60))/(1000*60));
        cycle_sec = parseInt((cycle%(1000*60))/(1000));
      }
      console.log(data)
      console.log("시",term_hour);
      console.log("분",term_min);
      console.log("초",term_sec);

      test = data.splice(0,0,{
                              sec:temp, 
                              start_month : start_month,
                              start_day : start_day,
                              start_hour : start_hour,
                              start_min : start_min,

                              term_hour : term_hour ,
                              term_min  : term_min,
                              term_sec : term_sec,

                              cycle_hour : cycle_hour,
                              cycle_min : cycle_min,
                              cycle_sec : cycle_sec,

                              start_time : start.getTime(),
                              end_time : end_.getTime(),
                            });

      setData(data.concat(test))
      
      let total_arr = []
      let total_cycle_arr = []
      for(let i = 0; i < 4;i++){
        if(data[i]==undefined){
          break;
        }
        // 진통동안 총 시간(초)
        let total = data[i].term_sec + data[i].term_min*60 + data[i].term_hour*60*60;
        total_arr[i] = total;

        // 진통 주기(초)
        let total_cycle = data[i].cycle_sec + data[i].cycle_min*60 + data[i].cycle_hour*60*60;
        total_cycle_arr[i] = total_cycle;
      }
      console.log("total",total_arr);
      console.log("cycle",total_cycle_arr);

      // count =>  진진통 단계별 판단 
      let count_1 = 0;
      let count_2 = 0;
      let count_3 = 0;
      for(let i = 0; i < 4; i++){
        if(data[i]==undefined){
          break;
        }
        if((15<=total_arr[i]<=50) && (300<=total_cycle_arr<=900)){
          count_1 ++;
        }
        if((30<=total_arr[i]<=60) && (240<=total_cycle_arr<=420)){
          count_2 ++;
        }
        if((50<=total_arr[i]<=90) && (120<=total_cycle_arr<=180)){
          count_3 ++;
        }
      }

      // 진진통 판별 시 
      if(count_2 == 4){
        console("2");
        setAlert("block")
        setTimeout(function(){setAlert("none")},5000)
      }
      if(count_1 == 4){
        console("1");
      }
      if(count_3 == 4){
        console("3");

      }


      setSec(0)
      setMin(0)
      setHour(0)
      setPower("off")
    }
  }

  //const [data, setData] = useState([{day:"08/03",clock:"08:01",hour:"00",min:"05",sec:"30",}])
 
  useEffect(function(){
    setTestArray(data.map((data)=>{
      return(<>
              <LaborTime
                sec={data.sec}
                start_month = {data.start_month}
                start_day = {data.start_day}
                start_hour = {data.start_hour}
                start_min = {data.start_min}

                term_hour = {data.term_hour }
                term_min  = {data.term_min}
                term_sec = {data.term_sec}

                cycle_hour = {data.cycle_hour}
                cycle_min = {data.cycle_min}
                cycle_sec = {data.cycle_sec}
              />
            </>);
    }));
  },[data])

  function ch(){
    let now = new Date();
      console.log(data)
      setAlert("block")
      setTimeout(function(){setAlert("none")},5000)
  }
  

  return (
    <>
    <Header/> 
    <div className="labor-main">
      <img className="labor-main-child" alt="" src={vector_20_labormain} />
      <img className="labor-main-item" alt="" src={fetal_labor} onClick={stop_watch}/>
      <div className="labor-main-inner" onClick={ch}>
        <div className="empty_box_labor"></div>
        {testArray}
      </div>
      <b className="timer_labor_main">{hour>0? hour+" : " : ""}{min<10? "0"+min : min} : {sec<10? "0"+sec : sec}</b>
    </div>
        <div className="labor_help" onClick={()=> nav('/laborbook')}>?</div>
        <div className="alert_labor"  style={{display: alert}}><LaborAlert/></div>
    <Footer />
    </>
  );
};

export default LaborMain;
