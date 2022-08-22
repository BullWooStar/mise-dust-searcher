import Card from "../components/Card";
import classes from "./AllArea.module.css";
import { useSelector } from "react-redux";

const AllArea = (props) => {
  const dustInfo = useSelector((state) => state.dustData);

  return (
    <div className={classes.mainPage}>
      {dustInfo && (
        <ul className={classes.list}>
          {dustInfo.map((info) => (
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
  );
};

export default AllArea;
