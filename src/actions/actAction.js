import axios from "axios";

export const GET_ACT = "GET_ACT"
export const ADD_ACT = "ADD_ACT"

export const getAct = () => {
    return (dispatch) => {
        dispatch({
            type: GET_ACT,
            payload: {
                data: false,
                loading: true,
                errorMsg: false,
            }
        })

        axios({
            method: "GET",
            url: "https://floating-mountain-35184.herokuapp.com/activity-groups",
            timeout: 12000,
        })
        .then((response) => {
            dispatch({
                type: GET_ACT,
                payload: {
                    data: response.data.data,
                    loading: false,
                    errorMsg: false,
                }
            })
        })
        .catch((error) => {
            dispatch({
                type: GET_ACT,
                payload: {
                    data: false,
                    loading: false,
                    errorMsg: true,
                }
            })
        })
    }
}

export const addAct = (data) => {
    return (dispatch) => {
        dispatch({
            type: ADD_ACT,
            payload: {
                data: false,
                loading: true,
                errorMsg: false,
            }
        })

        axios({
            method: "POST",
            url: "https://floating-mountain-35184.herokuapp.com/activity-groups",
            data: data,
            timeout: 12000,
        })
        .then((response) => {
            dispatch({
                type: ADD_ACT,
                payload: {
                    data: response.data.data,
                    loading: false,
                    errorMsg: false,
                }
            })
        })
        .catch((error) => {
            dispatch({
                type: ADD_ACT,
                payload: {
                    data: false,
                    loading: false,
                    errorMsg: true,
                }
            })
        })
    }
}