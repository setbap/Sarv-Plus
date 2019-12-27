import {
  LOGIN
} from "../actions/action_types";
import { setTokenToHeader } from "../util/axios_config";
// import createHistory from "../util/create_history";

interface init {
  isAuth: boolean;
  user: object;
}

const initialState = {
  isAuth: false,
  user: {}
};
interface actionI {
  type: any;
  payload: any;
}

const authState: any = (state: init = initialState as init, action: actionI) => {
  switch (action.type) {
    case LOGIN:
      localStorage.removeItem("jwtToken");
      setTokenToHeader("");
      console.log('suc');

      return {
        isAuth: false,
        user: {}
      };
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
