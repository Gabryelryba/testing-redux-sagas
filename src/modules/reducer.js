import { actions } from './actions'

const initialState = {
  loading: false,
  joke: null
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.REQUEST_DATA:
      return {
      ...state, 
      loading: true
    }
    case actions.REQUEST_FAILURE:
      return {
        ...state, 
        loading: false
      }
    case actions.REQUEST_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case actions.CHANGE_IMAGE_SOURCE:
      return {
        ...state,
        joke: action.payload.joke
      }
    default:
      return state
  }
}

export default reducer;
