import "../../styles/Inspect/Inspect_right.css"
import ellipse14 from "../../../assets/svg/Inspect/ellipse14.svg";
const InspectRight = (props) => {
  const{
    title,
    subtitle,
    sub,
    cmts,
    } = props;

  return (
    <div className="inspect-right">
      <b className="b_right">{title}</b>
      <div className="inspect-right-child" />
      <img className="inspect-right-item" alt="" src={ellipse14} />
    </div>
  );
};

export default InspectRight;
