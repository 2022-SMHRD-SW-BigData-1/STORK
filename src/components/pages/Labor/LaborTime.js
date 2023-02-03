import "../../styles/Labor/LaborTime.css"

const LaborTime = (props) => {
  const{
    sec,
    start_month,
    start_day,
    start_hour ,
    start_min,

    term_hour ,
    term_min,
    term_sec,

    cycle_hour,
    cycle_min,
    cycle_sec,
  }=props;
 

  return (
    <div className="labor-time" onClick={()=> console.log(cycle_sec)}>
      <b className="b_labor_time">{start_month}/{start_day}</b>
      <b className="b1_labor_time">기간</b>

      {/* 진통 시작 시간  */}
      <b className="b2_labor_time">{start_hour<10? "0"+start_hour:start_hour}:{start_min<10? "0"+start_min : start_min}</b>
      <b className="b3_labor_time">주기</b>

      {/* 진통동안 시간 */}
      <b className="b4_labor_time">{term_min<10?"0"+term_min:term_min}:{term_sec<10?"0"+term_sec:term_sec}</b>

      {/*  진통 주기  */}
      <b className="b5_labor_time">{cycle_min<10?"0"+cycle_min:cycle_sec}:{cycle_sec<10?"0"+cycle_sec:cycle_sec}</b>
    </div>
  );
};

export default LaborTime;
