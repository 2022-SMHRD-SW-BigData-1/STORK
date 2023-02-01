import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import choice_text1 from "../../../assets/svg/Policy/Policy/choice_text1.svg";
import choice_text2 from "../../../assets/svg/Policy/Policy/choice_text2.svg";
import choice_text3 from "../../../assets/svg/Policy/Policy/choice_text3.svg";
import choice1_btn_div from "../../../assets/svg/Policy/Policy/choice1_btn_div.svg";
import choice2_btn_div from "../../../assets/svg/Policy/Policy/choice2_btn_div.svg";
import choice3_btn_div from "../../../assets/svg/Policy/Policy/choice3_btn_div.svg";
import policy_title from "../../../assets/svg/Policy/Policy/policy_title.svg";

import mother from "../../../assets/images/Policy/mother.png";

import "../../styles/Policy/PolicyPage.css";

import Header from "../Bar/Header";
import Footer from "../Bar/Footer";

const PolicyPage = () => {
  const navigate = useNavigate();

  const onChoice3BtnClick = useCallback(() => {
    navigate("/PolicyOneChoice");
  }, [navigate]);

  const onChoice2BtnClick = useCallback(() => {
    navigate("/PolicyPregnant");
  }, [navigate]);

  const onChoice1BtnClick = useCallback(() => {
    navigate("/PolicyMoneyChoice");
  }, [navigate]);

  return (
    <div className="policypage">
      <Header />
      <img className="mother-icon" alt="" src={mother} />
      <button className="choice3-btn" onClick={onChoice3BtnClick}>
        <img className="choice3-btn-div-icon" alt="" src={choice3_btn_div} />
        <img className="choice-text3-icon" alt="" src={choice_text3} />
      </button>
      <button className="choice2-btn" onClick={onChoice2BtnClick}>
        <img className="choice3-btn-div-icon" alt="" src={choice2_btn_div} />
        <img className="choice-text2-icon" alt="" src={choice_text2} />
      </button>
      <button className="choice1-btn" onClick={onChoice1BtnClick}>
        <img className="choice3-btn-div-icon" alt="" src={choice1_btn_div} />
        <img className="choice-text1-icon" alt="" src={choice_text1} />
      </button>
      <img className="policy-title-icon" alt="" src={policy_title} />
      <Footer />
    </div>
  );
};

export default PolicyPage;
