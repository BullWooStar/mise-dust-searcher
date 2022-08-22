const CurrentAreaDropDown = (props) => {
  const cityList = [
    "서울",
    "부산",
    "대구",
    "인천",
    "광주",
    "대전",
    "울산",
    "경기",
    "강원",
    "충북",
    "충남",
    "전북",
    "전남",
    "경북",
    "경남",
    "제주",
    "세종",
  ];

  return (
    <form>
      <span>
        <label htmlFor="city">도시이름</label>
        <select
          id="city"
          value={props.dustInfo[0] && props.dustInfo[0].sidoName}
          onChange={props.cityNameChangeHandler}
        >
          {cityList.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </span>

      <span>
        <label htmlFor="station">지역이름</label>
        {props.dustInfo && (
          <select
            id="station"
            value={sessionStorage.getItem("stationName")}
            onChange={props.stationNameChangeHandler}
          >
            <option>지역을 선택해주세요</option>
            {props.dustInfo.map((info) => (
              <option key={info.stationName} value={info.stationName}>
                {info.stationName}
              </option>
            ))}
          </select>
        )}
      </span>
    </form>
  );
};

export default CurrentAreaDropDown;
