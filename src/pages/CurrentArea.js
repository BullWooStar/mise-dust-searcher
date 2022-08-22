import CurrentAreaDropDown from "./CurrentAreaDropDown";
import Card from "../components/Card";
import { useState } from "react";
import { useSelector } from "react-redux";

const CurrentArea = (props) => {
  const dustInfo = useSelector((state) => state.dustData);

  const cityNameChangeHandler = (e) => {
    props.getDustInfo(e.target.value);
  };

  const [stationName, setStationName] = useState(
    sessionStorage.getItem("stationName")
  );

  const stationNameChangeHandler = (e) => {
    setStationName(e.target.value);
    sessionStorage.setItem("stationName", e.target.value);
  };

  return (
    <div>
      <CurrentAreaDropDown
        dustInfo={dustInfo}
        cityNameChangeHandler={cityNameChangeHandler}
        stationNameChangeHandler={stationNameChangeHandler}
      />
      <div>
        {dustInfo && (
          <ul>
            {dustInfo
              .filter((info) => info.stationName === stationName)
              .map((info) => (
                <Card
                  key={info.stationName}
                  stationName={info.stationName}
                  sidoName={info.sidoName}
                  dataTime={info.dataTime}
                  pm25Value={info.pm25Value}
                />
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CurrentArea;
