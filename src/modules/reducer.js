import { actions } from './actions'

const initialState = {
  loading: false,
  url: null
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
        url: action.payload.url
      }
    default:
      return state
  }
}

export default reducer;
