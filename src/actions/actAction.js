import axios from "axios";

export const GET_ACT = "GET_ACT"

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
                    data: response.data,
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