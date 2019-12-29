import { SIGNUP, LOGIN, SIGNUP_ERR, LOGIN_ERR, VALIDATE, VALIDATE_ERR, RESET_PASS, RESET_PASS_ERR, SET_RESET_PASS, SET_RESET_PASS_ERR } from './action_types';
import axios from "axios";
import history from "../util/create_history";
// import jwtToken from "jwt-decode";
// import { setTokenToHeader } from "../util/axios_config";
import { Flogin_user, Fset_new_reset_password_user, Fvalidate_user } from '../util/page_urls'
// import { Bget_me_user, Bi_want_to_be_tour_leader, Blogin_user, Breset_password_user, Bset_new_reset_password_user, Bsignup, Bvalidate_user } from '../util/urls';
import { UserInterface, LoginInterface, UserValidateInterface, resetPasswordInterface, setNewResetPasswordInterface } from './action_interfaces';
import { ThunkDispatch } from 'redux-thunk';
import { toast } from "react-toastify";
import { Bsignup, Blogin_user, Bvalidate_user, Breset_password_user, Bset_new_reset_password_user } from '../util/urls';


export const signup = (newUser: UserInterface) => (dispatch: ThunkDispatch<{}, undefined, any>) => {
  axios.post(Bsignup, newUser).then(res => {
    dispatch({
      type: SIGNUP,
      payload: ""
    })
    history.push(Fvalidate_user)
    toast.success(res.data.number, { autoClose: 80000 })
  }).catch(err => {
    console.log(err)
    dispatch({
      type: SIGNUP_ERR,
      payload: "err in sign up"
    })
    toast.error("خطا . این خطا ممکن از تکراری بودن ایمیل شما باشد . شاید هم طول گذرواشه شما کمتر از 8 رقم میباشد", { autoClose: 4000 })

  })
}

export const validate_user = (user: UserValidateInterface) => (dispatch: ThunkDispatch<{}, undefined, any>) => {
  axios.post(Bvalidate_user, user).then(res => {
    dispatch({
      type: VALIDATE,
      payload: ""
    })
    history.push(Flogin_user)
    toast.success("با موفقیت تایید شد.")
  }).catch(err => {
    console.log(err)
    dispatch({
      type: VALIDATE_ERR,
      payload: "err in validate"
    })
    toast.error("کد تایید یا ایمیل شما اشتباه میباشد.", { autoClose: 4000 })

  })
}

export const login = (user: LoginInterface, setCookie: Function) => (dispatch: ThunkDispatch<{}, undefined, any>) => {
  axios.post(Blogin_user, user).then(res => {
    dispatch({
      type: LOGIN,
      payload: ""
    })
    history.push("/")
    setCookie("token", res.data.token, { maxAge: 24 * 60 * 60 * 1000 * 7 })
  }).catch(err => {
    console.log(err)
    dispatch({
      type: LOGIN_ERR,
      payload: "err in login"
    })
    toast.error("گذرواژه یا ایمیل شما اشتباه میباشد.", { autoClose: 4000 })

  })
}

export const resetPassword = (resetEmail: resetPasswordInterface) => (dispatch: ThunkDispatch<{}, undefined, any>) => {
  axios.post(Breset_password_user, resetEmail).then(res => {
    dispatch({
      type: RESET_PASS,
      payload: ""
    })
    history.push(Fset_new_reset_password_user);
    console.log(res.data);
    toast.success(res.data.token)
  }).catch(err => {
    console.log(err)
    dispatch({
      type: RESET_PASS_ERR,
      payload: "err in login"
    })
    toast.error(" ایمیل شما اشتباه میباشد.", { autoClose: 4000 })

  })
}

export const setResetPassword = (newPass: setNewResetPasswordInterface) => (dispatch: ThunkDispatch<{}, undefined, any>) => {
  axios.post(Bset_new_reset_password_user, newPass).then(res => {
    dispatch({
      type: SET_RESET_PASS,
      payload: ""
    })
    history.push(Flogin_user);
    toast.success("گذرواژه با موفقیت تعغیر داده شده")
  }).catch(err => {
    console.log(err)
    dispatch({
      type: SET_RESET_PASS_ERR,
      payload: "err in login"
    })
    toast.error(" اطلاعات وارد شده اشتباه میباشد.", { autoClose: 4000 })
  })
}