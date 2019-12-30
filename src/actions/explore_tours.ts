import { ThunkDispatch } from "redux-thunk"
import axios from 'axios'
import { GET_LASTEST_TOUR, LOADING_GET_LASTEST_TOUR, CLEAR_LOADING_GET_LASTEST_TOUR } from "./action_types"
import { Blastest_tours } from "../util/urls"




export const get_lastest_tours = () => (dispatch: ThunkDispatch<{}, undefined, any>) => {
  dispatch({
    type: LOADING_GET_LASTEST_TOUR
  })
  axios.post(Blastest_tours).then(res => {
    dispatch({
      type: CLEAR_LOADING_GET_LASTEST_TOUR,
    })
    dispatch({
      type: GET_LASTEST_TOUR,
      payload: res.data
    })
  }).catch(err => {
    console.log(err)
    dispatch({
      type: CLEAR_LOADING_GET_LASTEST_TOUR,
    })

  })
}