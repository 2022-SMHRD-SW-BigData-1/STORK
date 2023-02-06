import "../../styles/Labor/LaborAlert.css";
import medical from "../../../assets/svg/Labor/_icon_medical_cross.svg";

const LaborAlert = () => {
  return (
    <div className="labor-alert">
      <div className="labor-alert-child" />
      <div className="div_alert_labor">
        출산이 다가왔습니다. <br></br>병원에 가시길 권장 드립니다.
      </div>
      <img
        className="icon-medical-cross"
        alt=""
        src={medical}
      />
    </div>
  );
};

export default LaborAlert;
