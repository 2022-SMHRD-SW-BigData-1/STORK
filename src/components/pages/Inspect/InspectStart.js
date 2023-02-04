import "../../styles/Inspect/InspectStart.css"
import InspectLeft from "./Inspect_left";
import InspectRight from "./Inspect_right";
import Data from "../Data/Inspect_Data"

import Header from "../Bar/Header";
import SideBar from "../Bar/SideBar";
import Footer from "../Bar/Footer";

const InspectStart = () => {

  function che(){
    console.log(Data[0][0])  
  }

  return (
    <>
      <Header/>
      <div className="empty_box" />
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
      <Footer/>
    </>
  );
};

export default InspectStart;
