import { requestFailure, requestSuccess, actions, changeJoke } from './actions';
import { takeLatest, call, put } from 'redux-saga/effects'
import fetchData from '../services/fetchData';

export function* getData() {
  const response = yield call(fetchData)
  // console.log('response', response)

  const { data } = response;

  if (!data?.joke) {
    return yield put(requestFailure())
  }
  
  yield put(requestSuccess())
  return yield put(changeJoke(data.joke))
}

export function* mySaga(){ 
  yield (takeLatest(actions.REQUEST_DATA, getData))
};
