import { requestFailure, requestSuccess, actions, changeJoke } from './actions';
import { takeLatest, call, put } from 'redux-saga/effects'
import api from '../services/api'

export const fetchData = async () => {
  const res = await api.get()
  return res
}

export function* getData() {
  const response = yield call(fetchData)

  const { data } = response;

  if (!data?.joke) {
    return yield put(requestFailure())
  }
  
  yield put(requestSuccess())
  return yield put(changeJoke(data.joke))
}

export default function* mysaga(){ 
  yield (takeLatest(actions.REQUEST_DATA, getData))
};
