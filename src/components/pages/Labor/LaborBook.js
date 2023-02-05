import "../../styles/Labor/LaborBook.css";
import ellips_31 from "../../../assets/svg/Labor/ellipse_31_laborbook.svg";
import ellips_32 from "../../../assets/svg/Labor/ellipse_32_laborbook.svg";
import labor_arrow from "../../../assets/svg/Labor/icon_arrow_ios_downward.svg";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

import Header from "../Bar/Header";
import SideBar from "../Bar/SideBar";
import Footer from "../Bar/Footer";

const LaborBook = () => {
  return (
    <>
    <Header/>
    <div className="labor-book">
      <div className="parent">
        <b className="b">{`분만의 두 번째 & 세 번째 단계`}</b>
        <b className="b1">
          분만의 첫 번째 단계가 끝나면, 두 번째 단계(출산)가 시작 됩니다. 이
          단계는 자궁 경부의 확대로 시작하여 아기의 탄생과 함께 끝납니다. 분만의
          세 번째 단계(후산)에서, 태반이 나옵니다. 마침내, 새로운 가족 구성원을
          만나고 휴식을 취할 시간입니다.
        </b>
        <b className="b2">
          출산 후 2시간가량은 산후 출혈이 발생할 확률이 높기 때문에 금식을
          유지하며 혈압과 맥박 등 활력징후를 확인합니다. 출혈량이 많지 않으면
          출산 2시간 후부터 식이를 진행하고 출산 4시간 이후에는 소변을 보도록
          합니다. 보통 산모들은 자연분만 이틀 뒤 퇴원하게 되지만 출산 후 6주
          동안의 산욕기 기간에는 합병증이 언제든 일어날 수 있는 시기이기 때문에
          몸 상태를 잘 관찰하고 이상한 점이 발견되면 즉시 병원에 내원하여 진찰을
          받아야 합니다.
        </b>
        <div className="frame-child" />
        <img className="frame-item" alt="" src={ellips_32} />
        <b className="b3">
          <span>{`초기 단계  -  활성 단계  -  `}</span>
          <span className="span">전환 단계(감속)</span>
        </b>
        <b className="b4">
          <span>{`몇 시간이 지났습니다.  심한 진통이 길고 빈번하며 끝나지 않을것처럼 느껴지고, 육체적으로나 정서적으로나 지쳤을 것입니다. 이는 `}</span>
          <span className="span1">
            30분에서 1시간 이내에 분만의 두 번째 단계가 시작될 것이라는
            신호입니다.
          </span>
        </b>
        <b className="cm">
          <p className="p">
            {" "}
            진통이 매우 강하고 길어집니다. 너무 자주 와서 휴식을 취할 수 없는
            것처럼 느껴질 수 있습니다. 이 단계는 자궁 경부가 완전히 확장되고
            아기의 머리가 골반 안으로 내려가야 끝납니다. 이제 힘을 줄 준비가
            됐습니다.
          </p>
          <p className="p">&nbsp;</p>
          <ul className="cm1">
            <li className="li">단계 기간 : 0.5~1.5시간</li>
            <li className="li">진통 기간 : 최대 1.5분</li>
            <li className="li">진통 주기 : 2~3분</li>
            <li className="li">자궁 경부 확장 : 8~10cm</li>
          </ul>
          <p className="blank-line1">&nbsp;</p>
        </b>
        <img className="frame-inner" alt="" src={ellips_31} />
        <b className="b5">
          <span>{`초기 단계  -  `}</span>
          <span className="span">활성 단계</span>
          <span> - 전환 단계(감속)</span>
        </b>
        <b className="cm3">
          <p className="p">
            <span>{`진통이 올 때마다 자궁 경부는 더 넓어지고 아기는 더 낮게 내려옵니다. 활성 단계에서, 진통은 더 길고 가까워집니다. 약 `}</span>
            <span className="span1">5분마다 진통</span>
            <span className="span4">이 오고</span>
            <span className="span5">{` `}</span>
            <span className="span1">1분 동안 지속</span>
            <span className="span4">{` 되며 이것이 최소 1시간 동안 계속 되면 `}</span>
            <span className="span1">병원에 갈 때입니다.</span>
          </p>
          <p className="p">
            <span>
              그러나, 귀하가 따라야 할 안내 사항에 대해 의사와 상담하는 것이
              가장 좋습니다.
            </span>
          </p>
          <p className="p">
            <span>&nbsp;</span>
          </p>
          <ul className="cm1">
            <li className="li">
              <span>단계 기간 : 최대 3~5시간</span>
            </li>
            <li className="li">
              <span>진통 기간 : 30~60초</span>
            </li>
            <li className="li">
              <span>진통 주기 : 4-7분</span>
            </li>
            <li className="li">
              <span>자궁 경부 확장 : 4~8cm</span>
            </li>
          </ul>
        </b>
        <img className="ellipse-icon" alt="" src={ellips_31} />
        <div className="rectangle-div" />
        <b className="b6">
          <p className="p">{`분만이 가까워지면서,  허리 또는 복부에 규칙적인 통증이 시작됩니다. 자궁이 조여지고 무거운 느낌이 듭니다. `}</p>
        </b>
        <b className="b7">분만의 첫 번째 단계</b>
        <b className="cm-container">
          <p className="p">
            진통이 규칙적이며 점차 강해지거나 좁혀진다면 분만 중인 것입니다.
            축하합니다! 보통 첫 출산의 경우, 진통이 시작되면서부터 자궁 경부가
            10cm로 완전히 확장될 때까지의 분만의 첫 번째 단계가 약 13시간 동안
            지속됩니다.
          </p>
          <p className="p">
            첫출산이 아닌경우, 보통 약 7~8시간동안 지속 됩니다.
          </p>
          <p className="p">분만의 첫 번째 단계는 세 단계로 나뉩니다.</p>
        </b>
        <div className="div">
          <p className="p">
            <b>
              <span>{`이 단계는 쉽게 간과할 수 있는 단계입니다. 진통으 가볍고 짧으며 진통 간격이 비교적 길기 때문에 아직 병원에 가기에는 너무 이르므로, `}</span>
              <span className="span1">{`편안한 집에서 쉬는 것이 좋습니다. `}</span>
            </b>
          </p>
          <p className="blank-line1">
            <span>&nbsp;</span>
          </p>
        </div>
        <b className="b8">주의</b>
        <b className="b9">{`양수가 터졌거나 출혈이 심한 경우, 진통 주기에 상관 없이 즉시 병원에 가세요 `}</b>
        <b className="cm7">
          <p className="p">
            규칙적으로 진통 주기와 기간을 측정하는 것을 잊지마세요. 이제 자궁의
            긴장감이 느껴질 것입니다. 초기 단계에서는, 진한 피가 쏟아지는 것을
            볼 수 있는데, 이는 임신 중에 자궁 경부를 막고 있던 점액질 액체로
            안심해도 괜찮습니다.
          </p>
          <p className="p">&nbsp;</p>
          <ul className="cm1">
            <li className="li">단계 기간 : 최대 8~9시간</li>
            <li className="li">진통 기간 : 15~50초</li>
            <li className="li">진통 주기 : 5~15분</li>
            <li>{`자궁 경부 확장 : 0~3cm `}</li>
          </ul>
        </b>
        <b className="b10">
          <span>초기 단계</span>
          <span className="span10"> - 활성 단계 - 전환 단계(감속)</span>
        </b>
        <div className="frame-child1" />
        <img
          className="icon-arrow-ios-downward"
          alt=""
          src={labor_arrow}
        />
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default LaborBook;
