import classes from "./Card.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { dataActions } from "../store";

const Card = (props) => {
  const dispatch = useDispatch();
  const favoriteData = useSelector((state) => state.favoriteData);

  const pmStatus = () => {
    if (props.pm25Value < 30) {
      return { status: "좋음", color: "#33ccff" };
    } else if (props.pm25Value < 80) {
      return { status: "보통", color: "#00ff99" };
    } else if (props.pm25Value === "-") {
      return { status: "알수없음", color: "#b3b3b3" };
    } else {
      return { status: "나쁨", color: "#ff471a" };
    }
  };

  const updateFavoriteData = () => {
    dispatch(
      dataActions.updateFavoriteData({
        pm25Value: props.pm25Value,
        sidoName: props.sidoName,
        stationName: props.stationName,
        dataTime: props.dataTime,
      })
    );
  };

  const deleteFavoriteData = () => {
    dispatch(dataActions.deleteFavoriteData(props.stationName));
  };

  return (
    <li className={classes.item}>
      <div
        className={classes.card}
        style={{ backgroundColor: pmStatus().color }}
      >
        <span>{props.stationName}</span> <span>{props.sidoName}</span>
        <span>
          {favoriteData.some(
            (value) => value.stationName === props.stationName
          ) ? (
            <AiFillStar size={20} onClick={deleteFavoriteData} />
          ) : (
            <AiOutlineStar size={20} onClick={updateFavoriteData} />
          )}
        </span>
        <div>{pmStatus().status}</div>
        <div>{props.pm25Value}</div>
        <div>{props.dataTime} 기준</div>
      </div>
    </li>
  );
};

export default Card;
