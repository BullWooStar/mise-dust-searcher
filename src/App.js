import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import axios from "axios";

import Footer from "./components/Footer";
import AllArea from "./pages/AllArea";
import CurrentArea from "./pages/CurrentArea";
import Favorites from "./pages/Favorites";
import { dataActions } from "./store/index";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const getDustInfo = async (location) => {
    const response = await axios.get(
      `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=${location}&pageNo=1&numOfRows=100&returnType=json&serviceKey=vJ%2FeRqmOG0A9W9bzmEZF%2BCm%2FppcEZruvENMoz%2FMrI5IbXSi1FW6%2B%2F1iKlFM0P9oTOL22z3Ygm%2B4EzwuM24BZ6Q%3D%3D&ver=1.0`
    );

    if (!response.ok) {
      throw new Error("Request failed!");
    }

    const resItems = response.data.response.body.items;
    const dustData = resItems.map((element) => {
      return {
        stationName: element.stationName,
        pm25Value: element.pm25Value,
        dataTime: element.dataTime,
        sidoName: element.sidoName,
      };
    });

    dispatch(dataActions.updateDustData(dustData));
  };

  useEffect(() => {
    getDustInfo("서울");
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CurrentArea getDustInfo={getDustInfo} />} />
          <Route path="/allarea" element={<AllArea />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
