import { requestFailure, requestSuccess, actions, changeImgSource } from './actions';
import { takeLatest, call, put } from 'redux-saga/effects'
import api from '../services/api'

export const fetchData = async () => {
  const data = await api.get('800')
  return data
}

export function* getData() {
  const response = yield call(fetchData)

  // console.log(response)

  if (!response?.ok) {
    return yield put(requestFailure())
  }
  
  yield put(requestSuccess())
  return yield put(changeImgSource(response))
}

export default function* mysaga(){ 
  yield (takeLatest(actions.REQUEST_DATA, getData))
};
