import {
    GET_LASTEST_TOUR,
    LOADING_GET_LASTEST_TOUR,
    CLEAR_LOADING_GET_LASTEST_TOUR,
    GET_TOUR
} from "../actions/action_types";

const initialState = {
    tours: [],
    tour: {},
    loading: false
};


const tours = (state: any = initialState, action: any) => {
    switch (action.type) {
        case GET_LASTEST_TOUR:

            return {
                ...state,
                tours: action.payload
            };
        case GET_TOUR:
            return {
                ...state,
                tour: action.payload
            }
        case LOADING_GET_LASTEST_TOUR:
            return {
                ...state,
                loading: true
            };
        case CLEAR_LOADING_GET_LASTEST_TOUR:
            return {
                ...state,
                loading: false
            };
        default:
            return state
    }
};

export default tours