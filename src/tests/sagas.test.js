import { getData, mySaga } from '../modules/sagas'
import fetchData from '../services/fetchData';
import { requestFailure, requestSuccess, changeJoke, actions } from '../modules/actions';
import { takeLatest, call, put } from 'redux-saga/effects'

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

describe('Testing mySaga flow', () => {
  const generator = mySaga()
  it('mySaga should call getData when REQUEST_DATA is dispatched', () => {
    expect(generator.next().value).toEqual(takeLatest(actions.REQUEST_DATA, getData));
  });
  it('should be done', () => {
    expect(generator.next().done).toBeTruthy();
  })
});

describe('Testing getData when api returns an error flow', () => {
  const generator = getData()
  it('Should call fetch', () => {
    expect(generator.next().value).toEqual(call(fetchData));
  });

  it('getData dispatches failure action when api returns with an error', () => {
    expect(generator.next(mockedFalsyResponse).value).toEqual(put(requestFailure()));
  });

  it('should be done', () => {
    expect(generator.next().done).toBeTruthy();
  });
});

describe('Testing getData when api returns success flow', () => {
  const generator = getData()
  it('Should call fetch', () => {
    expect(generator.next().value).toEqual(call(fetchData));
  });

  it('getData dispatches success action when api returns without errors', () => {
    expect(generator.next(mockedTruthyResponse).value).toEqual(put(requestSuccess()));
  })

  it('should dispatches change Joke action when api returns success results', () => {
    expect(generator.next().value).toEqual(put(changeJoke(mockedTruthyResponse.data.joke)))

  })
  it('should be done', () => {
    expect(generator.next().done).toBeTruthy();
  })
});
