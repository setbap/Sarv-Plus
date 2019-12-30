import { ThunkDispatch } from "redux-thunk"
import axios from 'axios'
import { LOADING_GET_LASTEST_ORGS, CLEAR_LOADING_GET_LASTEST_ORGS, GET_LASTEST_ORGS } from "./action_types"
import { Bbest_orgs } from "../util/urls"


export const get_lastest_orgs = () => (dispatch: ThunkDispatch<{}, undefined, any>) => {
  dispatch({
    type: LOADING_GET_LASTEST_ORGS
  })
  axios.post(Bbest_orgs).then(res => {
    dispatch({
      type: CLEAR_LOADING_GET_LASTEST_ORGS,
    })
    dispatch({
      type: GET_LASTEST_ORGS,
      payload: res.data
    })
  }).catch(err => {
    console.log(err)
    dispatch({
      type: CLEAR_LOADING_GET_LASTEST_ORGS,
    })

  })
}