import {
    LOGIN, GET_USER_INFO
} from "../actions/action_types";
import { setTokenToHeader } from "../util/axios_config";

// import createHistory from "../util/create_history";

interface init {
    user: object;
}

const initialState = {
    user: {}
};

interface actionI {
    type: any;
    payload: any;
}

const authState: any = (state: init = initialState as init, action: actionI) => {
    switch (action.type) {
        case LOGIN:
            setTokenToHeader(action.payload);
            return state;
        case GET_USER_INFO:
            return {
                user: action.payload
            }
        // case SET_USER:
        //   return {
        //     isAuth: true,
        //     user: action.payload
        //   };

        // case UPDATE_PROFILE:
        //   return {
        //     isAuth: state.isAuth,
        //     user: {
        //       ...state.user,
        //       ...action.payload
        //     }
        //   };

        default:
            return state;
    }
}

// export const clearerr = () => dispatch => {
//   dispatch({
//     type: CLEAR_ERR,
//     payload: ""
//   });
// };

export default authState
