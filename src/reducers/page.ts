import { SET_HEADER } from "../actions/action_types";

const initialState = {
  header: "جیجو"
}

const orgs = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SET_HEADER:
      return {
        ...state,
        header: action.payload
      }

    default:
      return state
  }
}

export default orgs