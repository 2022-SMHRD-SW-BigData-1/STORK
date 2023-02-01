import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import MainPage from "./components/pages/Main/MainPage";
import PolicyPage from "./components/pages/Policy/PolicyPage";
import PolicyMoneyChoicePage from "./components/pages/Policy/PolicyMoneyChoicePage";
import PolicyMoneyPage from "./components/pages/Policy/PolicyMoneyPage";
import PolicyOneChoicePage from "./components/pages/Policy/PolicyOneChoicePage";
import EmergencyPage from "./components/pages/SideBtn/EmergencyPage";
import MomDiaryPage from "./components/pages/MomDiary/MomDiaryPage";
import MomDiaryWritePage from "./components/pages/MomDiary/MomDiaryWritePage";
import MomDiaryMapPage from "./components/pages/MomDiary/MomDiaryMapPage";
import LaborMain from "./components/pages/Labor/LaborMain";
import TipMain from "./components/pages/Tip/TipMain";
import InspectStart from "./components/pages/Inspect/InspectStart";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Policy" element={<PolicyPage />} />
      <Route path="/PolicyMoneyChoice" element={<PolicyMoneyChoicePage />} />
      <Route path="/PolicyMoney" element={<PolicyMoneyPage />} />
      <Route path="/PolicyOneChoice" element={<PolicyOneChoicePage />} />
      <Route path="/Emergency" element={<EmergencyPage />} />
      <Route path="/MomDiary" element={<MomDiaryPage />} />
      <Route path="/MomDiaryWrite" element={<MomDiaryWritePage />} />
      <Route path="/MomDiaryMap" element={<MomDiaryMapPage />} />
      <Route path="/Labor" element={<LaborMain />} />
      <Route path="/Tip" element={<TipMain />} />
      <Route path="/Inspect" element={<InspectStart />} />
    </Routes>
  );
}
export default App;
