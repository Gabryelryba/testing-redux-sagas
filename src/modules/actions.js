export const actions = {
  REQUEST_DATA: 'REQUEST_DATA',
  REQUEST_FAILURE: 'REQUEST_FAILURE',
  REQUEST_SUCCESS: 'REQUEST_SUCCESS',
  CHANGE_JOKE: 'CHANGE_JOKE'
}

export function requestData() {
  return {
    type: actions.REQUEST_DATA,
  }
}

export function requestFailure() {
  return {
    type: actions.REQUEST_FAILURE,
  }
}

export function requestSuccess() {
  return {
    type: actions.REQUEST_SUCCESS,
  }
}

export function changeJoke(joke) {
  return {
    type: actions.CHANGE_JOKE,
    payload: {
      joke,
    }
  }
}