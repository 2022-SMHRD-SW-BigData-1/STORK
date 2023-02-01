import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import momdiarywrite_date from "../../../assets/svg/MomDiary/MomDiaryWrite/momdiarywrite_date.svg";
import momdiarywrite_title from "../../../assets/svg/MomDiary/MomDiaryWrite/momdiarywrite_title.svg";
import momdiarywrite_weight from "../../../assets/svg/MomDiary/MomDiaryWrite/momdiarywrite_weight.svg";
import writecancle_text from "../../../assets/svg/MomDiary/MomDiaryWrite/writecancle_text.svg";
import writecomplete_text from "../../../assets/svg/MomDiary/MomDiaryWrite/writecomplete_text.svg";
import writediary_title from "../../../assets/svg/MomDiary/MomDiaryWrite/writediary_title.svg";

import "../../styles/MomDiary/MomDiaryWritePage.css";

import Header from "../Bar/Header";
import Footer from "../Bar/Footer";

const MomDiaryWritePage = () => {
  const navigate = useNavigate();

  const onWritecompleteDivClick = useCallback(() => {
    navigate("/momdiary-page");
  }, [navigate]);

  const onWriteCancleDivClick = useCallback(() => {
    navigate("/momdiary-page");
  }, [navigate]);

  return (
    <div className="momdiarywrite-page">
      <Header />
      <img className="writediary-title-icon" alt="" src={writediary_title} />
      <div className="momdiarywrite-div">
        <div className="momdiarywrite-div1" />
        <div className="momdiarywrite-title-div">
          <div className="momdiarywrite-weight-div1" />
          <img
            className="momdiarywrite-title-icon"
            alt=""
            src={momdiarywrite_title}
          />
        </div>
        <div className="momdiarywrite-title-text-div">
          <div className="momdiarywrite-title-text-div1">
            <textarea
              className="title_textarea"
              placeholder="제목을 입력해주세요"
            />
          </div>
        </div>
        <div className="momdiarywrite-date-div">
          <div className="momdiarywrite-date-div1" />
          <img
            className="momdiarywrite-date-icon"
            alt=""
            src={momdiarywrite_date}
          />
        </div>
        <div className="momdiarywrite-date-text-div">
          <div className="momdiarywrite-date-text-div1" />
          <div className="momdiarywrite-date-text">2023/02/01</div>
        </div>
        <div className="momdiarywrite-weight-div">
          <div className="momdiarywrite-weight-div1" />
          <img
            className="momdiarywrite-weight-icon"
            alt=""
            src={momdiarywrite_weight}
          />
        </div>
        <div className="momdiarywrite-weight-text-div">
          <div className="momdiarywrite-weight-text-div1">
            <textarea className="weight_textarea" placeholder="현재 체중" />
          </div>
        </div>
        <div className="momdiarywrite-text-div">
          <div className="momdiarywrite-text-div1">
            <textarea
              className="text_textarea"
              placeholder="일기 내용을 입력해주세요"
            />
          </div>
        </div>
      </div>
      <button className="writecancle-div" onClick={onWriteCancleDivClick}>
        <div className="writecancle-div1" />
        <img className="writecancle-text-icon" alt="" src={writecancle_text} />
      </button>
      <button className="writecomplete-div" onClick={onWritecompleteDivClick}>
        <div className="writecomplete-div1" />
        <img
          className="writecomplete-text-icon"
          alt=""
          src={writecomplete_text}
        />
      </button>
      <Footer />
    </div>
  );
};

export default MomDiaryWritePage;
