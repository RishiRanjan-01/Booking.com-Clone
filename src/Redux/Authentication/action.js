import axios from "axios";
import * as types from "./actionTypes";

const register=(payload)=>(dispatch)=>{
    console.log(payload)
    dispatch({type:types.REGISTER_REQUEST});
    // console.log(payload)
    return axios
    .post("https://masai-api-mocker.herokuapp.com/auth/register",payload)
    .then((r) => {
        dispatch({type:types.REGISTER_REQUEST, payload:r.data})
        return types.REGISTER_SUCCESS
    })

    .catch((e)=>{dispatch({type:types.REGISTER_FAILURE,payload:e})
return types.REGISTER_FAILURE});

};

const loginApi=(creds)=>(dispatch)=>{
    dispatch({ type: types.LOGIN_REQUEST });

	let data = {
		username: creds.username,
		password: creds.password,
	};

	data = JSON.stringify(data);

	const headers = {
		"Content-Type": "application/json",
	};

	return axios
		.post("https://masai-api-mocker.herokuapp.com/auth/login", data, {
			headers: headers,
		})
		.then((r) => {
            dispatch({ type: types.LOGIN_SUCCESS, payload: r.data })
            return types.LOGIN_SUCCESS
        })
		.catch(() => {
            dispatch({ type: types.LOGIN_FAILURE })
            return types.LOGIN_FAILURE
        });
};



const setEmailData = (email) => (dispatch) => {
    dispatch({type:types.SET_EMAIL_DATA, payload:email})
} 

const setloginEmailData = (email) => (dispatch) => {
    dispatch({type:types.LOGIN_EMAIL_DATA, payload:email})
} 


export{register,setEmailData,setloginEmailData,loginApi};