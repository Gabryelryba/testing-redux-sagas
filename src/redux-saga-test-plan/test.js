import { getData, fetchData } from '../modules/sagas'
import mySaga from '../modules/sagas' 
import { requestFailure, requestSuccess, changeJoke, actions } from '../modules/actions';
import { testSaga } from 'redux-saga-test-plan'

const mockedTruthyResponse = {
  ok: true,
  status: 200,
  data: {
    joke: "this is a mocked joke"
  }
}

const mockedFalsyResponse = {
  ok: false,
  status: 500,
  url: ''
} 

describe('testing our sagas with testSaga from redux-saga-test-plan', () => {
  
  it("the main saga calls getData saga when REQUEST_DATA is dispatched", () => {
    testSaga(mySaga)
      .next()
      .takeLatest(actions.REQUEST_DATA, getData)
      .next()
      .isDone();
  });

  it("dispatchs request failure when api returns an error", () => {
    testSaga(getData)
      .next()
      .call(fetchData)
      .next(mockedFalsyResponse)
      .put(requestFailure())
      .next()
      .isDone();
  });

  it("dispatchs request success and changeJoke when api returns ok", () => {
    testSaga(getData)
      .next()
      .call(fetchData)
      .next(mockedTruthyResponse)
      .put(requestSuccess())
      .next()
      .put(changeJoke(mockedTruthyResponse.data.joke))
      .next()
      .isDone();
  });
})