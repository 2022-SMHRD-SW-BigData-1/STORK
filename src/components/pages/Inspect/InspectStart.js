import "../../styles/Inspect/InspectStart.css"
import arrow from "../../../assets/svg/Inspect/arrow1.svg";
import vector_10 from "../../../assets/svg/Inspect/vector10.svg";
import epclips from "../../../assets/svg/Inspect/ellipse14.svg"
import InspectLeft from "./Inspect_left";
import InspectRight from "./Inspect_right";
import Data from "../Data/Inspect_Data"


const InspectStart = () => {

  function che(){
    console.log(Data[0][0])  
  }

  return (
    <>
      {Data.map((data)=>{
        return(
        <>
        {/* ex) 6주 이전 */}
          <div className="inspect-start">
            <b className="b_start" onClick={che}>{data[0]}</b>
            <div className="inspect-start-child" />
            <div className="inspect-start-item" />
          </div>
          {Data[1][1].map((data)=>{
            if(data.div=="검사"){
              return(
                <InspectLeft
                  title={data.title}
                  subtitle={data.subtitle}
                  sub={data.sub}
                  cmts={data.cmts}
                />
              );
            }
            else if(data.div=="증상"){
              return(
                <InspectRight
                  title={data.title}
                  subtitle={data.subtitle}
                  sub={data.sub}
                  cmts={data.cmts}
                  />
              );
            }
          })}
        </>
        );
      })}
    
    </>
  );
};

export default InspectStart;
