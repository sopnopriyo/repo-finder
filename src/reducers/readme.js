import {README_FETCH} from "../actions/types";

const reducer = (state = {}, action) => {
  switch(action.type) {
    case README_FETCH: {
      return action.payload
    }
    default: 
    return state
  }
}

export default reducer 