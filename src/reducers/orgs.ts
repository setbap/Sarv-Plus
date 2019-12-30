import { GET_LASTEST_ORGS, LOADING_GET_LASTEST_ORGS, CLEAR_LOADING_GET_LASTEST_ORGS } from "../actions/action_types";

const initialState = {
  orgs: [],
  org: {},
  loading: false
}



const orgs = (state: any = initialState, action: any) => {
  switch (action.type) {
    case GET_LASTEST_ORGS:
      return {
        ...state,
        orgs: action.payload
      }
    case LOADING_GET_LASTEST_ORGS:
      return {
        ...state,
        loading: true
      }
    case CLEAR_LOADING_GET_LASTEST_ORGS:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default orgs