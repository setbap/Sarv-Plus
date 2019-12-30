import { GET_LASTEST_TOUR, LOADING_GET_LASTEST_TOUR, CLEAR_LOADING_GET_LASTEST_TOUR } from "../actions/action_types";

const initialState = {
  toues: [],
  tour: {},
  loading: false
}



const tours = (state: any = initialState, action: any) => {
  switch (action.type) {
    case GET_LASTEST_TOUR:

      return {
        ...state,
        tours: action.payload
      }
    case LOADING_GET_LASTEST_TOUR:
      return {
        ...state,
        loading: true
      }
    case CLEAR_LOADING_GET_LASTEST_TOUR:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default tours