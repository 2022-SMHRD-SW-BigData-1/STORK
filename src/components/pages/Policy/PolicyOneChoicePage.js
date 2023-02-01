import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import choice_menu from "../../../assets/svg/Policy/PolicyOneChoice/choice_menu.svg";
import menu1_div from "../../../assets/svg/Policy/PolicyOneChoice/menu1_div.svg";
import menu2_div from "../../../assets/svg/Policy/PolicyOneChoice/menu2_div.svg";
import menu3_div from "../../../assets/svg/Policy/PolicyOneChoice/menu3_div.svg";
import menu4_div from "../../../assets/svg/Policy/PolicyOneChoice/menu4_div.svg";
import menu5_div from "../../../assets/svg/Policy/PolicyOneChoice/menu5_div.svg";
import menu1_text from "../../../assets/svg/Policy/PolicyOneChoice/menu1_text.svg";
import menu2_text from "../../../assets/svg/Policy/PolicyOneChoice/menu2_text.svg";
import menu3_text from "../../../assets/svg/Policy/PolicyOneChoice/menu3_text.svg";
import menu4_text from "../../../assets/svg/Policy/PolicyOneChoice/menu4_text.svg";
import menu5_text from "../../../assets/svg/Policy/PolicyOneChoice/menu5_text.svg";

import "../../styles/Policy/PolicyOneChoicePage.css";

import Header from "../Bar/Header";
import Footer from "../Bar/Footer";

const PolicyOneChoicePage = () => {
  const navigate = useNavigate();

  const onMenu1Click = useCallback(() => {
    navigate("/PolicyOne1");
  }, [navigate]);

  const onMenu2Click = useCallback(() => {
    navigate("/PolicyOne2");
  }, [navigate]);

  const onMenu3Click = useCallback(() => {
    navigate("/PolicyOne3");
  }, [navigate]);

  const onMenu4Click = useCallback(() => {
    navigate("/PolicyOne4");
  }, [navigate]);

  const onMenu5Click = useCallback(() => {
    navigate("/PolicyOne5");
  }, [navigate]);

  return (
    <div className="policyonechoice-page">
      <Header />
      <img className="choice-menu-icon" alt="" src={choice_menu} />
      <button className="menu1" onClick={onMenu1Click}>
        <img className="menu5-div-icon" alt="" src={menu1_div} />
        <img className="menu1-text-icon" alt="" src={menu1_text} />
      </button>
      <button className="menu2" onClick={onMenu2Click}>
        <img className="menu5-div-icon" alt="" src={menu2_div} />
        <img className="menu2-text-icon" alt="" src={menu2_text} />
      </button>
      <button className="menu3" onClick={onMenu3Click}>
        <img className="menu5-div-icon" alt="" src={menu3_div} />
        <img className="menu3-text-icon" alt="" src={menu3_text} />
      </button>
      <button className="menu4" onClick={onMenu4Click}>
        <img className="menu5-div-icon" alt="" src={menu4_div} />
        <img className="menu4-text-icon" alt="" src={menu4_text} />
      </button>
      <button className="menu5" onClick={onMenu5Click}>
        <img className="menu5-div-icon" alt="" src={menu5_div} />
        <img className="menu5-text-icon" alt="" src={menu5_text} />
      </button>
      <Footer />
    </div>
  );
};

export default PolicyOneChoicePage;
