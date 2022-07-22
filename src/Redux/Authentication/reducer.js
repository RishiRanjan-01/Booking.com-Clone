import * as types from "./actionTypes";

const initialState = {
  loginEmail:"",
  email: "",
  inAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {

  const { type, payload } = action;

  switch (type) {
    case types.REGISTER_REQUEST:
      return { ...state, 
        isLoading: true 
    };
    case types.REGISTER_SUCCESS:
      return { ...state, 
        isLoading: false 
    };
    case types.REGISTER_FAILURE:
      return { ...state, 
        isLoading: false, 
        isError: true 
    };

    case types.LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case types.LOGIN_SUCCESS:
      return { ...state, isLoading: false, isAuth: true, token: payload.token };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        token: "",
      };
    case types.SET_EMAIL_DATA:{
        return {
            ...state,
            email:payload
        }
    }
    case types.LOGIN_EMAIL_DATA:{
        return {
            ...state,
            loginEmail:payload
        }
    }
    default:
      return state;
  }
};

export { reducer };
