import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import back_text from "../../../assets/svg/Policy/PolicyMoney/back_text.svg";
import choice1_title from "../../../assets/svg/Policy/PolicyMoney/choice1_title.svg";
import first_meet from "../../../assets/svg/Policy/PolicyMoney/first_meet.svg";
import num1_text from "../../../assets/svg/Policy/PolicyMoney/num1_text.svg";
import num2_1 from "../../../assets/svg/Policy/PolicyMoney/num2_1.svg";
import num2_2 from "../../../assets/svg/Policy/PolicyMoney/num2_2.svg";
import num2_3 from "../../../assets/svg/Policy/PolicyMoney/num2_3.svg";
import num2_4 from "../../../assets/svg/Policy/PolicyMoney/num2_4.svg";
import num2_5 from "../../../assets/svg/Policy/PolicyMoney/num2_5.svg";
import num2_text from "../../../assets/svg/Policy/PolicyMoney/num2_text.svg";
import num3_text from "../../../assets/svg/Policy/PolicyMoney/num3_text.svg";
import num4_text from "../../../assets/svg/Policy/PolicyMoney/num4_text.svg";
import num5_text from "../../../assets/svg/Policy/PolicyMoney/num5_text.svg";
import won from "../../../assets/svg/Policy/PolicyMoney/won.svg";
import won4 from "../../../assets/svg/Policy/PolicyMoney/won4.svg";

import arrow from "../../../assets/images/Policy/arrow.png";

import Header from "../Bar/Header";
import Footer from "../Bar/Footer";

import "../../styles/Policy/PolicyMoneyPage.css";

const PolicyMoneyPage = () => {
  const navigate = useNavigate();

  const onGoBtnClick = useCallback(() => {
    navigate("/PolicyMoneyChoice");
  }, [navigate]);

  return (
    <div className="policymoney-page">
      <Header />
      <img className="choice1-title-icon" alt="" src={choice1_title} />
      <div className="num1">
        <div className="num5-div" />
        <img className="num1-text-icon" alt="" src={num1_text} />
      </div>
      <div className="num1-write">
        <div className="num1-write-div" />
        <span className="num1-write-text">광주 광역시 광산구</span>
      </div>
      <div className="num2">
        <div className="num5-div" />
        <img className="num2-text-icon" alt="" src={num2_text} />
      </div>
      <div className="num2-write">
        <div className="num2-write-div" />
        <img className="won-icon" alt="" src={won} />
        <span className="num2-5-text">150</span>
        <img className="num2-5-icon" alt="" src={num2_5} />
        <img className="won-icon1" alt="" src={won} />
        <span className="num2-4-text">140</span>
        <img className="num2-4-icon" alt="" src={num2_4} />
        <img className="won-icon2" alt="" src={won} />
        <span className="num2-3-text">130</span>
        <img className="num2-3-icon" alt="" src={num2_3} />
        <img className="won-icon3" alt="" src={won} />
        <span className="num2-2-text">120</span>
        <img className="num2-2-icon" alt="" src={num2_2} />
        <img className="won-icon4" alt="" src={won4} />
        <span className="num2-1-text">110</span>
        <img className="num2-1-icon" alt="" src={num2_1} />
      </div>
      <div className="num3">
        <div className="num5-div" />
        <img className="num3-text-icon" alt="" src={num3_text} />
      </div>
      <div className="num3-write">
        <div className="num3-write-div" />
        <span className="num4-write-text">
          광산구에 주민등록을 두고 출생신고한 모든 가정
        </span>
      </div>
      <div className="num4">
        <div className="num5-div" />
        <img className="num4-text-icon" alt="" src={num4_text} />
      </div>
      <div className="num4-write">
        <div className="num4-write-div" />
        <span className="num4-write-text">
          관할 동 행정복지센터
          <br></br>
          신청일로부터 익월 10일이내 신청계좌로 입금
        </span>
      </div>
      <div className="num5">
        <div className="num5-div" />
        <img className="num5-text-icon" alt="" src={num5_text} />
      </div>
      <div className="num5-write">
        <div className="num5-write-div" />
        <span className="num5-write-text">
          쌍둥이 50만원 추가 지급
          <br></br>
          세쌍둥이 이상 100만원
          <br></br>
          남성장애인(심한장애) 100만원
        </span>
      </div>
      <img className="first-meet-icon" alt="" src={first_meet} />
      <button className="go-btn" onClick={onGoBtnClick}>
        <div className="go-btn1" />
        <img className="arrow-icon" alt="" src={arrow} />
        <img className="back-text-icon" alt="" src={back_text} />
      </button>
      <Footer />
    </div>
  );
};

export default PolicyMoneyPage;
