import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "../../styles/MomDiary/MomDiaryMap.css";

const MomDiaryMap = () => {
  const [map, setMap] = useState("");
  // const [infowindow, setInfowindow] = useState()
  const [name, setName] = useState([]);
  const [addr, setAddr] = useState([]);
  const [time, setTime] = useState([]);
  const [tel, setTel] = useState([]);
  let content = [];
  let markers = [];
  let infowindows = [];
  const mapContainer = useRef(null);
  const { kakao } = window;
  let mapOption = {
    center: new kakao.maps.LatLng(35.14962266596815, 126.92057654445857), //지도의 중심좌표.
    level: 5, //지도의 레벨(확대, 축소 정도)
  };
  useEffect(() => {
    axios
      .get("http://127.0.0.1:3001/PsychiatryMap", {})
      .then((res) => {
        if (res.data.result == "success") {
          setName(res.data.name);
          setAddr(res.data.addr);
          setTime(res.data.time);
          setTel(res.data.tel);
        } else {
          console.log("데이터베이스 오류");
        }
      })
      .catch(() => {
        console.log("데이터 보내기 실패");
      });
    setMap(new kakao.maps.Map(mapContainer.current, mapOption));
  }, []);
  let geocoder = new kakao.maps.services.Geocoder();
  const geo = (i) => {
    geocoder.addressSearch(`${addr[i]}`, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        // 결과값으로 받은 위치를 마커로 표시합니다
        let marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });
        markers.push(marker);
        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
          // position:coords,
          content: content[i],
          removable: true,
          // disableAutoPan: true
        });
        infowindows.push(infowindow);
        // makeOutListener(infowindow)
        kakao.maps.event.addListener(marker, "click", function () {
          closeInfoWindow();
          infowindow.open(map, marker);
        });
        // function setCenter() {
        //   map.setCenter(coords);
        // }
      }
    });
  };
  for (let i = 0; i < name.length; i++) {
    content.push(
      `<div style="height:150px; overflow:auto">
      <div class="title" style='font-family: dotum, arial, sans-serif;'>${name[i]}</div>
      <table class="tablestyle" style='border-spacing:2px;border:0px;'>
        <tbody>
          <tr>
            <td class="content_title">주소</td>
            <td class="content">${addr[i]}</td>
          </tr>
          <tr>
            <td class="content_title">전화번호</td>
            <td class="content">${tel[i]}</td>
          </tr>
          <tr>
            <td class="content_title">진료시간</td>
            <td class="content" id="ddd" style='white-space:pre-line;'>${time[i]}</td>
          </tr>
        </tbody>
      </table>
      </div>`
    );
    geo(i);
  }
  const removeMarker = () => {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  };
  function closeInfoWindow() {
    for (var i = 0; i < infowindows.length; i++) {
      infowindows[i].close();
    }
  }
  // const makeOverListener = (map, marker, infowindow) => {
  //   return function () {
  //     // makeOutListener(infowindow);
  //     infowindow.open(map, marker);
  //   };
  // };
  // 인포윈도우를 닫는 클로저를 만드는 함수입니다
  // const makeOutListener = (infowindow) => {
  //   return function () {
  //     infowindow.close();
  //   };
  // };
  const sear = () => {
    removeMarker();
    let se = document.getElementById("search");
    for (let i = 0; i < name.length; i++) {
      if (se.value == name[i]) {
        geo(i);
      } else {
        geo(i);
      }
    }
    se.value = "";
  };
  return <div id="map" ref={mapContainer}></div>;
};
export default MomDiaryMap;
