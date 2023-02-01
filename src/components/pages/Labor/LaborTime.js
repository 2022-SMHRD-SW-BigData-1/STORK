import "../../styles/Labor/LaborTime.css"

const LaborTime = (props) => {
  const{
    now_month,
    now_day,
    now_hour,
    now_min,
    hour,
    sec,
  }=props;
  const now = new Date();

  return (
    <div className="labor-time">
      <b className="b_labor_time">{now_month}/{now_day}</b>
      <b className="b1_labor_time">기간</b>
      <b className="b2_labor_time">{now_hour<10? "0"+now_hour:now_hour}:{now_min<10? "0"+now_min : now_min}</b>
      <b className="b3_labor_time">주기</b>
      <b className="b4_labor_time">00:{sec<10? "0"+sec:sec}</b>
      <b className="b5_labor_time">10:02</b>
    </div>
  );
};

export default LaborTime;
