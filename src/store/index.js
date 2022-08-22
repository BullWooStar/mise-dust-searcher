import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { dustData: [], favoriteData: [] };

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateDustData(state, action) {
      state.dustData = action.payload;
    },
    updateFavoriteData(state, action) {
      if (
        !state.favoriteData.some(
          (value) => value.stationName === action.payload.stationName
        )
      ) {
        state.favoriteData.push(action.payload);
      }
    },
    deleteFavoriteData(state, action) {
      state.favoriteData = state.favoriteData.filter(
        (data) => data.stationName !== action.payload
      );
    },
  },
});

const store = configureStore({
  reducer: dataSlice.reducer,
});

export const dataActions = dataSlice.actions;

export default store;

// thunk 쓰려다가 실패
// export const fetchDustData = async () => {
//   return async (dispatch) => {
//     const getDustInfo = async () => {
//       const response = await axios.get(
//         `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=서울&pageNo=1&numOfRows=100&returnType=json&serviceKey=vJ%2FeRqmOG0A9W9bzmEZF%2BCm%2FppcEZruvENMoz%2FMrI5IbXSi1FW6%2B%2F1iKlFM0P9oTOL22z3Ygm%2B4EzwuM24BZ6Q%3D%3D&ver=1.0`
//       );
//       return response.data.response.body.items;
//     };

//     const dustData = await getDustInfo();

//     dispatch(dataActions.updateDustData(dustData));
//   };
// };
