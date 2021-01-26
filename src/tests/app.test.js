import { call, put } from 'redux-saga/effects';
import { getData, fetchData } from '../modules/sagas'
import { requestFailure, requestSuccess, changeImgSource } from '../modules/actions';

const mockedTruthyResponse = {
  ok: true,
  status: 200,
  url: "https://i.picsum.photos/id/191/800/800.jpg?hmac=CwFgI0Xl060qvKgKrMxLSLgDQBdKqT-W5yiTPpbwjco"
}

const mockedFalsyResponse = {
  ok: false,
  status: 500,
  url: ''
}

const mockedFetch = jest.fn()
  .mockResolvedValueOnce(mockedFalsyResponse)
  .mockResolvedValueOnce(mockedTruthyResponse);
  

describe('testing our sagas', () => {
  const generator = getData();
  it('getData calls api', () => {
    expect(generator.next().value).toEqual(call(fetchData))
  })

  it('testing request failure', () => {
    expect(generator.next().value).toEqual(put(requestFailure()))
  })

  it('testing request success', () => {
    expect(generator.next().value).toEqual(put(requestSuccess()))
  })

  it('dispatchs action to change image source', () => {
    expect(generator.next().value).toEqual(put(changeImgSource()))
  })

  it('should be done on next iteration', () => {
    expect(generator.next().done).toBeTruthy()
  });
})