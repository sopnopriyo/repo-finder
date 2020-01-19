import {REPOSITORIES_FETCH, REPOSITORIES_NEXT_FETCH} from "../actions/types";

const reducer = (state = [], action) => {
  switch(action.type) {
    case REPOSITORIES_FETCH: {
      return action.payload
    }
    case REPOSITORIES_NEXT_FETCH: {
      return action.payload
    }
    default: 
    return state
  }
}

export default reducer 