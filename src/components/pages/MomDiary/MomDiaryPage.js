import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import check_text from "../../../assets/svg/MomDiary/MomDiary/check_text.svg";
import date from "../../../assets/svg/MomDiary/MomDiary/date.svg";
import go_text from "../../../assets/svg/MomDiary/MomDiary/go_text.svg";
import title from "../../../assets/svg/MomDiary/MomDiary/title.svg";
import weight from "../../../assets/svg/MomDiary/MomDiary/weight.svg";
import write_btn_div from "../../../assets/svg/MomDiary/MomDiary/write_btn_div.svg";
import selectdate_text from "../../../assets/svg/MomDiary/MomDiary/selectdate_text.svg";

import arrowleft from "../../../assets/images/Diary/arrowleft.png";
import arrowright from "../../../assets/images/Diary/arrowright.png";
import pen from "../../../assets/images/Diary/pen.png";

import "../../styles/MomDiary/MomDiaryPage.css";

import Header from "../Bar/Header";
import Footer from "../Bar/Footer";

const MomDiaryPage = () => {
  const navigate = useNavigate();

  const onWriteBtnClick = useCallback(() => {
    navigate("/MomDiaryWrite");
  }, [navigate]);

  const onDepressedGoBtnClick = useCallback(() => {
    navigate("/MomDiaryFunction");
  }, [navigate]);

  return (
    <div className="momdiary-page">
      <Header />
      <img className="selectdate-text-icon" alt="" src={selectdate_text} />
      <div className="inputdate-div">
        <input className="DateSelect" type="date" />
      </div>
      <button className="date-check-btn">
        <div className="date-check-btn-div" />
        <img className="check-text-icon" alt="" src={check_text} />
      </button>
      <button className="back-arrow">
        <div className="next-arrow-div" />
        <img className="arrowright-icon" alt="" src={arrowleft} />
      </button>
      <button className="next-arrow">
        <div className="next-arrow-div" />
        <img className="arrowright-icon" alt="" src={arrowright} />
      </button>
      <div className="momdiarytextarea">
        <div className="momdiarytextarea-div" />
        <div className="diary-title-div">
          <div className="diary-weight-div1" />
          <img className="title-icon" alt="" src={title} />
        </div>
        <div className="title-text-div">
          <div className="title-text-div1" />
          <span className="title-text">안녕하세요</span>
        </div>
        <div className="diary-date-div">
          <div className="diary-date-div1" />
          <img className="date-icon" alt="" src={date} />
        </div>
        <div className="date-text-div">
          <div className="date-text-div1" />
          <span className="date-text">2022/01/01</span>
        </div>
        <div className="diary-weight-div">
          <div className="diary-weight-div1" />
          <img className="weight-icon" alt="" src={weight} />
        </div>
        <div className="weight-text-div">
          <div className="weight-text-div1" />
          <span className="weight-text">70.2</span>
        </div>
        <div className="diary-text-div">
          <div className="diary-text-div1" />
          <span className="diary-text">
            안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안
          </span>
        </div>
      </div>
      <button className="depressed-go-btn" onClick={onDepressedGoBtnClick}>
        <div className="depressed-go-btn-div" />
        <img className="go-text-icon" alt="" src={go_text} />
      </button>
      <button className="write-btn" onClick={onWriteBtnClick}>
        <img className="write-btn-div-icon" alt="" src={write_btn_div} />
        <img className="pen-icon" alt="" src={pen} />
      </button>
      <Footer />
    </div>
  );
};

export default MomDiaryPage;
