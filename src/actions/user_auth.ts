import { SIGNUP, LOGIN } from './action_types';

import axios from "axios";
import history from "../util/create_history";
import jwtToken from "jwt-decode";
import { setTokenToHeader } from "../util/axios_config";
import { Fsignup, Flogin_user, Freset_password_user, Fset_new_reset_password_user, Fvalidate_user } from '../util/page_urls'
// import { Bget_me_user, Bi_want_to_be_tour_leader, Blogin_user, Breset_password_user, Bset_new_reset_password_user, Bsignup, Bvalidate_user } from '../util/urls';
import { UserInterface } from './action_interfaces';
import { ThunkDispatch } from 'redux-thunk';


export const signup = (newUser: UserInterface) => (dispatch: ThunkDispatch<{}, undefined, any>) => {
  axios.post(Fsignup, newUser).then(res => {
    dispatch({
      type: LOGIN
    })
    console.log(res)
  }).catch(err => {
    console.log(err)
    dispatch({
      type: LOGIN,
      payload: "no"
    })
  })
}

