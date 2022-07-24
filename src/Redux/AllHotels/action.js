import axios from "axios";
import * as types from "./actionTypes";

const getALLHOTELS = (params) => (dispatch) => {
  dispatch({ type: types.GET_ALLHOTELS_REQUEST });
  axios
    .get("https://bookingcoclone.herokuapp.com/allHotels", params)
    .then((res) =>
      dispatch({
        type: types.GET_ALLHOTELS_SUCCESS,
        payload: res.data,
      })
    )
    .catch((e) => dispatch({ type: types.GET_ALLHOTELS_FAILURE }));
};

export { getALLHOTELS };