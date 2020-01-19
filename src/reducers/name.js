import {SEARCHED_NAME} from "../actions/types";

const reducer = (state = "", action) => {
  switch(action.type) {
    case SEARCHED_NAME: {
      return action.payload
    }
    default: 
    return state
  }
}

export default reducer 