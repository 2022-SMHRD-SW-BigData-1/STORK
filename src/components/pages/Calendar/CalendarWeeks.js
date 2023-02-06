import { display } from "@mui/system";
import "../../styles/Calendar/CalendarWeeks.css"

const CalendarWeeks = (props) => {
  const{
    Click_date,
    data,
  }=props;


  return (
    <div className="calendar-weeks" >
      <div className="day-group6" onClick={Click_date}>
        <div className="div2">6{data}</div>
        <div className="day-group6-child" />
        <div className="day-group6-item" />
      </div>
      <div className="day-group5" onClick={Click_date}>
        <div className="div2">5</div>
        <div className="day-group6-child" />
        <div className="day-group6-item" />
      </div>
      <div className="day-group4" onClick={Click_date}>
        <div className="div2">4</div>
        <div className="day-group6-child" />
        <div className="day-group6-item" />
      </div>
      <div className="day-group3" onClick={Click_date}>
        <div className="div2">3</div>
        <div className="day-group6-child" />
        <div className="day-group6-item" />
      </div>
      <div className="day-group2" onClick={Click_date}>
        <div className="div2">2</div>
        <div className="day-group6-child" />
        <div className="day-group6-item" />
      </div>
      <div className="day-group1" onClick={Click_date}>
        <div className="div2">1</div>
        <div className="day-group6-child" />
        <div className="day-group6-item" />
      </div>
      <div className="day-group0" onClick={Click_date}>
        <div className="div2">0</div>
        <div className="day-group6-child" />
        <div className="day-group6-item" />
      </div>
    </div>
  );
};

export default CalendarWeeks;
