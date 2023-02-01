import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import check from "../../../assets/svg/Bar/Footer/check.svg";
import community from "../../../assets/svg/Bar/Footer/community.svg";
import home from "../../../assets/svg/Bar/Footer/home.svg";
import policy from "../../../assets/svg/Bar/Footer/policy.svg";
import tip from "../../../assets/svg/Bar/Footer/tip.svg";

import calendar_icon from "../../../assets/images/Bar/calendar_icon.png";
import "../../styles/Bar/Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const onPolicyBtnClick = useCallback(() => {
    navigate("/Policy");
  }, [navigate]);

  const onComBtnClick = useCallback(() => {
    navigate("/Com");
  }, [navigate]);

  const onHomeBtnClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTipBtnClick = useCallback(() => {
    navigate("/Tip");
  }, [navigate]);

  const onCheckBtnClick = useCallback(() => {
    navigate("/Check");
  }, [navigate]);

  return (
    <div className="footer">
      <div className="footer-div" />
      <button className="policy-btn" onClick={onPolicyBtnClick}>
        <div className="policy-btn-div" />
        <img className="policy-icon" alt="" src={policy} />
        <img className="com-icon" alt="" src={calendar_icon} />
      </button>
      <button className="com-btn" onClick={onComBtnClick}>
        <div className="policy-btn-div" />
        <img className="community-icon" alt="" src={community} />
        <img className="com-icon" alt="" src={calendar_icon} />
      </button>
      <button className="home-btn" onClick={onHomeBtnClick}>
        <div className="policy-btn-div" />
        <img className="home-icon" alt="" src={home} />
        <img className="com-icon" alt="" src={calendar_icon} />
      </button>
      <button className="tip-btn" onClick={onTipBtnClick}>
        <div className="policy-btn-div" />
        <img className="tip-icon" alt="" src={tip} />
        <img className="com-icon" alt="" src={calendar_icon} />
      </button>
      <button className="check-btn" onClick={onCheckBtnClick}>
        <div className="policy-btn-div" />
        <img className="check-icon" alt="" src={check} />
        <img className="com-icon" alt="" src={calendar_icon} />
      </button>
    </div>
  );
};

export default Footer;
