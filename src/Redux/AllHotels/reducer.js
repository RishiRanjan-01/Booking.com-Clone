import * as types from "./actionTypes";

const initialState = {
  allHotels: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_ALLHOTELS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_ALLHOTELS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allHotels: payload,
        isError: false,
      };
    case types.GET_ALLHOTELS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export { reducer };
