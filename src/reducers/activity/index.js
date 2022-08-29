import { GET_ACT } from "../../actions/actAction";

const initialState = {
    getResult:  false,
    getLoading: false,
    getError: false,
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
        
        default:
            return state;
    }
}

export default activity