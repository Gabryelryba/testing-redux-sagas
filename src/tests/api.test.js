import fetchData from '../services/fetchData';
import api from '../services/api'
import { mockedTruthyResponse, mockedFalsyResponse } from './sagas.test';

jest.mock('../services/api')

describe('testing api', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  });
  
  it('Api should returns results without errors', async () => {
    api.get
    .mockReturnValueOnce(mockedTruthyResponse)
    const truthyResponse = await fetchData()
    expect(api.get).toHaveBeenCalledTimes(1)
    expect(truthyResponse).toBe(mockedTruthyResponse)

  });

  it('Api should returns results with errors', async () => {
    api.get
    .mockReturnValueOnce(mockedFalsyResponse)
    const falsyResponse = await fetchData()
    expect(api.get).toHaveBeenCalledTimes(1)
    expect(falsyResponse).toBe(mockedFalsyResponse)
  });
})