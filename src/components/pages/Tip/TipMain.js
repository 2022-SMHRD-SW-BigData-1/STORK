import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "../../styles/Tip/TipMain.css";
import baby_img from "../../../assets/images/Tip/baby_img.png";
import mom_img from "../../../assets/images/Tip/mom_img.png";
import Data_mom from "../Data/Tips_mom_data.js"
import Data_baby from "../Data/Tips_baby_data.js"
import { useState, useEffect } from "react";

import Header from "../Bar/Header";
import SideBar from "../Bar/SideBar";
import Footer from "../Bar/Footer";

import mom_img_1 from "../../../assets/images/Tip/mom_img_1.png";
import mom_img_2 from "../../../assets/images/Tip/mom_img_2.png";
import mom_img_3 from "../../../assets/images/Tip/mom_img_3.png";
import mom_img_4 from "../../../assets/images/Tip/mom_img_4.png";
import mom_img_5 from "../../../assets/images/Tip/mom_img_5.png";

import baby_img_1 from "../../../assets/images/Tip/baby_img_1.png";
import baby_img_2 from "../../../assets/images/Tip/baby_img_2.png";
import baby_img_3 from "../../../assets/images/Tip/baby_img_3.png";
import baby_img_4 from "../../../assets/images/Tip/baby_img_4.png";





const TipMain = () => {

  const mom_arr = [mom_img_1,mom_img_2,mom_img_3,mom_img_4,mom_img_5];
  const baby_arr = [baby_img_1,baby_img_2,baby_img_3,baby_img_4];

  const [ch_num,setCh_num] = useState(5);
  const [ch_momImg,setCh_momImg] = useState(0);
  const [ch_babyImg,setCh_babyImg] = useState(0);

  function cc(){
    // console.log(Data_mom[ch_num-1])
    let mom_temp = Math.floor(Math.random()*(5-0));
    let baby_temp = Math.floor(Math.random()*(4-0));
    console.log("mom",mom_temp);
    console.log("baby",baby_temp);
  }
  function change_num(e){
    setCh_num(e.target.outerText);
    let mom_temp = Math.floor(Math.random()*(5-0));
    let baby_temp = Math.floor(Math.random()*(4-0));
    setCh_momImg(mom_temp);
    setCh_babyImg(baby_temp);

  }
  
  
  return (
    <>
    <Header/>
    <div className="empty_box"/>
    {/* <a href = "tel:01056025526">01056025526</a> */}
    <div className="tip-main">
      <div className="parent_tip_main">
        <p className="p_tip_main" onClick={cc}>
        {Data_mom[ch_num-1][1]}
        </p>
        <div className="group-child" />
        <p className="p1_tip_main">{Data_baby[ch_num-1][0]}</p>
        <p className="p2_tip_main">지금 우리 아이는</p>
        <img className="baby-img-icon" alt="" src={baby_arr[ch_babyImg]} />
      </div>
      <div className="mom-tip">
        <p className="kg">
        {Data_mom[ch_num-1][1]}
        </p>
        <div className="mom-tip-child" />
        <p className="p3_tip_main">{Data_mom[ch_num-1][0]}</p>
        <p className="p4_tip_main">지금 우리 엄마는</p>
        <img className="mom-img-icon" alt="" src={mom_arr[ch_momImg]} />
      </div>
      <div className="days-change">
        {/* <img className="day-change-icon" alt="" src="../day-change.svg" /> */}
        <Stack spacing={2} className="day-change-icon" alignItems="center">
         <Pagination count={40} size='small'  defaultPage={8} onClick={change_num}/>
        </Stack>
      </div>
      <div className="tip-title">
        <p className="p5_tip_main">주기별 맞춤 정보</p>
        {/* <FormControl
          className="tipinspect-btn"
          sx={{ width: 69.90532684326172 }}
          variant="outlined"
        >
          <InputLabel color="primary">Page</InputLabel>
          <Select color="primary" size="medium" label="Page">
            <MenuItem value="주기별 팁">주기별 팁</MenuItem>
            <MenuItem value={`검사&증상`}>{`검사&증상`}</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl> */}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default TipMain;
