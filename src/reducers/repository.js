import {REPOSITORY_FETCH} from "../actions/types";

const reducer = (state = {}, action) => {
  switch(action.type) {
    case REPOSITORY_FETCH: {
      return action.payload
    }
    default: 
    return state
  }
}

export default reducer 