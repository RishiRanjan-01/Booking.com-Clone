import { GET_FLIGHT_OPTION_FAILURE, GET_FLIGHT_OPTION_REQUEST, GET_FLIGHT_OPTION_SUCCESS } from "./actionTypes"
import axios from 'axios'

export const getFlight_OptionRequest = () => {
    return {
        type: GET_FLIGHT_OPTION_REQUEST
    }

}
export const getFlight_OptionSuccess = (payload) => {
    return {
        type: GET_FLIGHT_OPTION_SUCCESS,
        payload,
    }
}
export const getFlight_OptionFailure = () => {
    return {
        type: GET_FLIGHT_OPTION_FAILURE
    }

}

export const getFligths = () => async (dispatch) => {
    dispatch(getFlight_OptionRequest());

    try {
        let res = await axios.get(" http://localhost:8080/flight");
        let data = await res.data;
        //console.log(data)
        dispatch(getFlight_OptionSuccess(data));
    }
    catch (e) {
        dispatch(getFlight_OptionFailure());
    }
}