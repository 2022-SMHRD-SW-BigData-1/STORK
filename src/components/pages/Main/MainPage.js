import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import babydiaryname_div from "../../../assets/svg/Main/babydiaryname_div.svg";
import babydiaryname_text from "../../../assets/svg/Main/babydiaryname_text.svg";
import daycnt_text1 from "../../../assets/svg/Main/daycnt_text1.svg";
import daycnt_text2 from "../../../assets/svg/Main/daycnt_text2.svg";
import momdiaryname_text from "../../../assets/svg/Main/momdiaryname_text.svg";
import momdiarytitle_div from "../../../assets/svg/Main/momdiarytitle_div.svg";
import weekcnt_text1 from "../../../assets/svg/Main/weekcnt_text1.svg";
import weekcnt_text2 from "../../../assets/svg/Main/weekcnt_text2.svg";
import baby1week from "../../../assets/images/Main/baby1week.png";

import "../../styles/Main/MainPage.css";

import Header from "../Bar/Header";
import SideBar from "../Bar/SideBar";
import Footer from "../Bar/Footer";

const MainPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onMomDiaryDivClick = useCallback(() => {
    navigate("/MomDiary");
  }, [navigate]);

  const onBabyDiaryDivClick = useCallback(() => {
    navigate("/BabyDiary");
  }, [navigate]);

  return (
    <div className="main-page">
      <Header />
      <SideBar />
      <div className="babyname-div">
        <div className="babyname-div1" />
        <span className="babyname" id="BabyName">
          ??????
        </span>
      </div>
      <img className="weekcnt-text1-icon" alt="" src={weekcnt_text1} />
      <span className="weekcnt" id="WeekCnt">
        40
      </span>
      <img className="weekcnt-text2-icon" alt="" src={weekcnt_text2} />
      <img
        className="babyimg-div-icon"
        alt=""
        src={baby1week}
        data-animate-on-scroll
      />
      <div className="bottom-div" />
      <div className="daycnt-div">
        <div className="daycnt-div1" />
        <img className="daycnt-text2-icon" alt="" src={daycnt_text2} />
        <span className="daycnt" id="DayCnt">
          150
        </span>
        <img className="daycnt-text1-icon" alt="" src={daycnt_text1} />
      </div>
      <button
        className="babydiary-div"
        onClick={onBabyDiaryDivClick}
        data-animate-on-scroll
      >
        <div className="babydiary-div1" />
        <div className="babydiaryname-div" />
        <img
          className="momdiarytitle-div-icon"
          alt=""
          src={babydiaryname_div}
        />
        <span className="momdiaryname" id="BabyName">
          ??????
        </span>
        <img
          className="babydiaryname-text-icon"
          alt=""
          src={babydiaryname_text}
        />
      </button>
      <button
        className="momdiary-div"
        onClick={onMomDiaryDivClick}
        data-animate-on-scroll
      >
        <div className="momdiary-div1" />
        <div className="momdiaryname-div" />
        <span className="momdiaryname" id="BabyName">
          ??????
        </span>
        <img
          className="momdiarytitle-div-icon"
          alt=""
          src={momdiarytitle_div}
        />
        <img
          className="momdiaryname-text-icon"
          alt=""
          src={momdiaryname_text}
        />
      </button>
      <Footer />
    </div>
  );
};

export default MainPage;
