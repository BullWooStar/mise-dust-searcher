import Card from "../components/Card";
import { useSelector } from "react-redux";
import classes from "./Favorites.module.css";

const Favorites = () => {
  const favoriteData = useSelector((state) => state.favoriteData);
  return (
    <div className={classes.mainPage}>
      {favoriteData && (
        <ul className={classes.list}>
          {favoriteData.map((info) => (
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

export default Favorites;
