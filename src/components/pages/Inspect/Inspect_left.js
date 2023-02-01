import "../../styles/Inspect/Inspect_left.css"
import ellipse13 from "../../../assets/svg/Inspect/ellipse13.svg";
import { Title } from "@mui/icons-material";

const InspectLeft = (props) => {
  const{
  title,
  subtitle,
  sub,
  cmts,
  } = props;


  return (
    <div className="inspect-left">
      <b className="b_left">{title}</b>
      <div className="inspect-left-child" />
      <img className="inspect-left-item" alt="" src={ellipse13} />
    </div>
  );
};

export default InspectLeft;
