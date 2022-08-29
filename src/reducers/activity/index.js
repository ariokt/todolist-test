import { GET_ACT, ADD_ACT } from "../../actions/actAction";

const initialState = {
    getResult:  false,
    getLoading: false,
    getError: false,

    addResult:  false,
    addLoading: false,
    addError: false,
}

const activity = (state = initialState, action) => {
    switch(action.type) {
        case GET_ACT: 
            return {
                ...state,
                getResult: action.payload.data,
                getLoading: action.payload.loading,
                getError: action.payload.errorMsg,
            }

        case ADD_ACT: 
            return {
                ...state,
                addResult: action.payload.data,
                addLoading: action.payload.loading,
                addError: action.payload.errorMsg,
            }

        default:
            return state;
    }
}

export default activity